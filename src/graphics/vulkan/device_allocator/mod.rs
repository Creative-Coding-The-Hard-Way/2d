//! This module defines traits and implementations for managing device (gpu)
//! memory.
//!
//! Big Idea: Allocators should compose.
//!
//! Allocator Implementations (brainstorm):
//! - passthrough allocator -> directly allocates a new block of device memory
//!   - done!
//! - null allocator -> always returns an error
//! - metric-gathering allocator -> decorates an allocator with metrics
//! - pooling allocator -> something something, gpu memory pools
//! - freelist? does this make sense for device memory?

mod allocation;
mod forced_offset;
mod passthrough;
mod shared_ref;

#[cfg(test)]
mod stub_allocator;

use anyhow::Result;
use ash::vk;

pub use self::{
    forced_offset::ForcedOffsetAllocator, passthrough::PassthroughAllocator,
    shared_ref::SharedRefAllocator,
};

/// A single allocated piece of device memory.
#[derive(Clone)]
pub struct Allocation {
    pub memory: vk::DeviceMemory,
    pub offset: vk::DeviceSize,
    pub byte_size: vk::DeviceSize,
}

pub trait DeviceAllocator {
    /// Allocate a piece of device memory given the requirements and usage.
    ///
    /// # unsafe because
    ///
    /// - it is the responsibility of the caller to free the returned memory
    ///   when it is no longer in use
    unsafe fn allocate(
        &mut self,
        memory_requirements: vk::MemoryRequirements,
        property_flags: vk::MemoryPropertyFlags,
    ) -> Result<Allocation>;

    /// Free an allocated piece of device memory.
    ///
    /// # unsafe because
    ///
    /// - it is the responsibility of the caller to know when the GPU is no
    ///   longer using the allocation
    unsafe fn free(&mut self, allocation: &Allocation) -> Result<()>;

    /// True when this specific allocator implementation knows how to manage
    /// allocation.
    fn managed_by_me(&self, allocation: &Allocation) -> bool;
}

/// Build the standard allocator implementation.
///
/// The return is a boxed impl so that consumers are not dependent on the
/// specific implementation (often the full type is unwieldy because it is a
/// composition of DeviceAllocator implementations).
///
/// The caller is responsible for keeping the ash instance, logical device, and
/// physical device alive for at least as long as the allocator exists.
pub fn build_standard_allocator(
    ash_instance: ash::Instance,
    logical_device: ash::Device,
    physical_device: ash::vk::PhysicalDevice,
) -> Box<impl DeviceAllocator> {
    Box::new(
        // shared ref
        SharedRefAllocator::new(
            // forced offset
            ForcedOffsetAllocator::new(
                //passthrough
                PassthroughAllocator::create(
                    ash_instance,
                    logical_device,
                    physical_device,
                ),
            ),
        )
        .clone(),
    )
}
