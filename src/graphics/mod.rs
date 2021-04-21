pub mod vulkan;

mod draw2d;
mod frame;
mod frame_context;

pub use self::{
    draw2d::{Draw2d, Vertex},
    frame::Frame,
    frame_context::{FrameContext, SwapchainState},
};

use self::vulkan::{Device, Swapchain, WindowSurface};

use std::sync::Arc;

use anyhow::Result;

/// The application's graphics subsystem.
pub struct Graphics {
    /// This object manages resources and logic for rendering 2d graphics.
    pub draw2d: Draw2d,

    /// This object owns the swapchain and all per-frame resources.
    frame_context: FrameContext,
}

impl Graphics {
    /// Instantiate the graphics subsystem.
    pub fn new(window_surface: Arc<dyn WindowSurface>) -> Result<Self> {
        let device = Device::new(window_surface.clone())?;
        let swapchain =
            Swapchain::new(device.clone(), window_surface.clone(), None)?;

        let frame_context =
            FrameContext::new(device.clone(), swapchain.clone())?;
        let draw2d = Draw2d::new(device.clone(), swapchain.clone())?;

        Ok(Self {
            draw2d,
            frame_context,
        })
    }

    /// Render a single frame to the screen.
    pub fn render(&mut self) -> Result<()> {
        let swapchain_state = self.frame_context.draw_frame(&self.draw2d)?;
        if swapchain_state == SwapchainState::NeedsRebuild {
            self.rebuild_swapchain()?;
        }
        Ok(())
    }

    /// Replace the swapchain and all dependent resources in the Triangle
    /// subsystem.
    pub fn rebuild_swapchain(&mut self) -> Result<()> {
        let swapchain = self.frame_context.rebuild_swapchain()?;
        self.draw2d.replace_swapchain(swapchain)?;
        Ok(())
    }
}
