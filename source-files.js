var N = null;var sourcesIndex = {};
sourcesIndex["adler"] = {"name":"","files":["algo.rs","lib.rs"]};
sourcesIndex["adler32"] = {"name":"","files":["lib.rs"]};
sourcesIndex["anyhow"] = {"name":"","files":["backtrace.rs","chain.rs","context.rs","error.rs","fmt.rs","kind.rs","lib.rs","macros.rs","ptr.rs","wrapper.rs"]};
sourcesIndex["approx"] = {"name":"","files":["abs_diff_eq.rs","lib.rs","macros.rs","relative_eq.rs","ulps_eq.rs"]};
sourcesIndex["aquamarine"] = {"name":"","files":["attrs.rs","lib.rs","parse.rs"]};
sourcesIndex["ash"] = {"name":"","dirs":[{"name":"extensions","dirs":[{"name":"experimental","files":["amd.rs","mod.rs"]},{"name":"ext","files":["debug_marker.rs","debug_report.rs","debug_utils.rs","metal_surface.rs","mod.rs"]},{"name":"khr","files":["android_surface.rs","display.rs","display_swapchain.rs","draw_indirect_count.rs","external_memory_fd.rs","mod.rs","push_descriptor.rs","ray_tracing.rs","surface.rs","swapchain.rs","timeline_semaphore.rs","wayland_surface.rs","win32_surface.rs","xcb_surface.rs","xlib_surface.rs"]},{"name":"mvk","files":["ios_surface.rs","macos_surface.rs","mod.rs"]},{"name":"nv","files":["mesh_shader.rs","mod.rs","ray_tracing.rs"]}],"files":["mod.rs"]},{"name":"vk","files":["aliases.rs","bitflags.rs","const_debugs.rs","constants.rs","definitions.rs","enums.rs","extensions.rs","feature_extensions.rs","features.rs","macros.rs","platform_types.rs"]}],"files":["device.rs","entry.rs","entry_libloading.rs","instance.rs","lib.rs","prelude.rs","util.rs","version.rs","vk.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bytemuck"] = {"name":"","files":["contiguous.rs","lib.rs","offset_of.rs","pod.rs","transparent.rs","zeroable.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["color_quant"] = {"name":"","files":["lib.rs","math.rs"]};
sourcesIndex["crc32fast"] = {"name":"","dirs":[{"name":"specialized","files":["mod.rs","pclmulqdq.rs"]}],"files":["baseline.rs","combine.rs","lib.rs","table.rs"]};
sourcesIndex["crossbeam_channel"] = {"name":"","dirs":[{"name":"flavors","files":["array.rs","at.rs","list.rs","mod.rs","never.rs","tick.rs","zero.rs"]}],"files":["channel.rs","context.rs","counter.rs","err.rs","lib.rs","select.rs","select_macro.rs","utils.rs","waker.rs"]};
sourcesIndex["crossbeam_deque"] = {"name":"","files":["deque.rs","lib.rs"]};
sourcesIndex["crossbeam_epoch"] = {"name":"","dirs":[{"name":"sync","files":["list.rs","mod.rs","queue.rs"]}],"files":["atomic.rs","collector.rs","default.rs","deferred.rs","epoch.rs","guard.rs","internal.rs","lib.rs"]};
sourcesIndex["crossbeam_utils"] = {"name":"","dirs":[{"name":"atomic","files":["atomic_cell.rs","consume.rs","mod.rs","seq_lock.rs"]},{"name":"sync","files":["mod.rs","parker.rs","sharded_lock.rs","wait_group.rs"]}],"files":["backoff.rs","cache_padded.rs","lib.rs","thread.rs"]};
sourcesIndex["deflate"] = {"name":"","files":["bit_reverse.rs","bitstream.rs","chained_hash_table.rs","checksum.rs","compress.rs","compression_options.rs","deflate_state.rs","encoder_state.rs","huffman_lengths.rs","huffman_table.rs","input_buffer.rs","length_encode.rs","lib.rs","lz77.rs","lzvalue.rs","matching.rs","output_writer.rs","rle.rs","stored_block.rs","writer.rs","zlib.rs"]};
sourcesIndex["draw2d"] = {"name":"","dirs":[{"name":"camera","files":["mod.rs","ortho_camera.rs"]},{"name":"geometry","files":["mod.rs","rect.rs"]},{"name":"glfw_window","files":["mod.rs","window_surface.rs"]},{"name":"graphics","dirs":[{"name":"draw2d","files":["commands.rs","descriptor_sets.rs","graphics_pipeline.rs","layer.rs","mod.rs","texture_atlas.rs","vertex.rs"]},{"name":"frame","files":["descriptor.rs","mod.rs","sync.rs"]},{"name":"vulkan","dirs":[{"name":"buffer","files":["cpu_buffer.rs","mod.rs","static_buffer.rs","transfer.rs"]},{"name":"device","files":["mod.rs","physical_device.rs","queue.rs","queue_family_indices.rs"]},{"name":"instance","files":["extensions.rs","layers.rs","mod.rs"]},{"name":"swapchain","files":["images.rs","mod.rs","render_pass.rs","selection.rs"]},{"name":"texture","files":["mipmap_extent.rs","mod.rs","texture_image.rs"]}],"files":["command_pool.rs","ffi.rs","mod.rs","shader_module.rs","window_surface.rs"]}],"files":["frame_context.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["generic_array"] = {"name":"","files":["arr.rs","functional.rs","hex.rs","impls.rs","iter.rs","lib.rs","sequence.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","error_impls.rs","lib.rs","linux_android.rs","use_file.rs","util.rs","util_libc.rs"]};
sourcesIndex["gif"] = {"name":"","dirs":[{"name":"reader","files":["decoder.rs","mod.rs"]}],"files":["common.rs","encoder.rs","lib.rs","traits.rs"]};
sourcesIndex["glfw"] = {"name":"","dirs":[{"name":"ffi","files":["link.rs","mod.rs"]}],"files":["callbacks.rs","lib.rs"]};
sourcesIndex["glfw_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["image"] = {"name":"","dirs":[{"name":"codecs","dirs":[{"name":"bmp","files":["decoder.rs","encoder.rs","mod.rs"]},{"name":"hdr","files":["decoder.rs","encoder.rs","mod.rs"]},{"name":"ico","files":["decoder.rs","encoder.rs","mod.rs"]},{"name":"jpeg","files":["decoder.rs","encoder.rs","entropy.rs","mod.rs","transform.rs"]},{"name":"pnm","files":["autobreak.rs","decoder.rs","encoder.rs","header.rs","mod.rs"]},{"name":"tga","files":["decoder.rs","encoder.rs","header.rs","mod.rs"]},{"name":"webp","files":["decoder.rs","mod.rs","transform.rs","vp8.rs"]}],"files":["dds.rs","dxt.rs","farbfeld.rs","gif.rs","png.rs","tiff.rs"]},{"name":"imageops","files":["affine.rs","colorops.rs","mod.rs","sample.rs"]},{"name":"io","files":["free_functions.rs","mod.rs","reader.rs"]},{"name":"math","files":["mod.rs","nq.rs","rect.rs","utils.rs"]},{"name":"utils","files":["mod.rs"]}],"files":["animation.rs","buffer.rs","color.rs","dynimage.rs","error.rs","flat.rs","image.rs","lib.rs","traits.rs"]};
sourcesIndex["itertools"] = {"name":"","dirs":[{"name":"adaptors","files":["mod.rs","multi_product.rs"]}],"files":["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","either_or_both.rs","exactly_one_err.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","impl_macros.rs","intersperse.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peeking_take_while.rs","permutations.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]};
sourcesIndex["jpeg_decoder"] = {"name":"","dirs":[{"name":"worker","files":["immediate.rs","mod.rs","multithreaded.rs"]}],"files":["decoder.rs","error.rs","huffman.rs","idct.rs","lib.rs","marker.rs","parser.rs","upsampler.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libloading"] = {"name":"","dirs":[{"name":"os","dirs":[{"name":"unix","files":["consts.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["changelog.rs","error.rs","lib.rs","util.rs"]};
sourcesIndex["libm"] = {"name":"","dirs":[{"name":"math","files":["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]}],"files":["lib.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["matrixmultiply"] = {"name":"","dirs":[{"name":"x86","files":["macros.rs","mod.rs"]}],"files":["aligned_alloc.rs","archparam.rs","debugmacros.rs","dgemm_kernel.rs","gemm.rs","kernel.rs","lib.rs","loopmacros.rs","sgemm_kernel.rs","util.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","raw_field.rs","span_of.rs"]};
sourcesIndex["miniz_oxide"] = {"name":"","dirs":[{"name":"deflate","files":["buffer.rs","core.rs","mod.rs","stream.rs"]},{"name":"inflate","files":["core.rs","mod.rs","output_buffer.rs","stream.rs"]}],"files":["lib.rs","shared.rs"]};
sourcesIndex["nalgebra"] = {"name":"","dirs":[{"name":"base","files":["alias.rs","alias_slice.rs","allocator.rs","array_storage.rs","blas.rs","cg.rs","componentwise.rs","constraint.rs","construction.rs","construction_slice.rs","conversion.rs","coordinates.rs","default_allocator.rs","dimension.rs","edition.rs","helper.rs","indexing.rs","interpolation.rs","iter.rs","matrix.rs","matrix_simba.rs","matrix_slice.rs","min_max.rs","mod.rs","norm.rs","ops.rs","properties.rs","scalar.rs","statistics.rs","storage.rs","swizzle.rs","unit.rs","vec_storage.rs"]},{"name":"geometry","files":["abstract_rotation.rs","dual_quaternion.rs","dual_quaternion_construction.rs","dual_quaternion_ops.rs","isometry.rs","isometry_alias.rs","isometry_construction.rs","isometry_conversion.rs","isometry_interpolation.rs","isometry_ops.rs","isometry_simba.rs","mod.rs","op_macros.rs","orthographic.rs","perspective.rs","point.rs","point_alias.rs","point_construction.rs","point_conversion.rs","point_coordinates.rs","point_ops.rs","point_simba.rs","quaternion.rs","quaternion_construction.rs","quaternion_conversion.rs","quaternion_coordinates.rs","quaternion_ops.rs","quaternion_simba.rs","reflection.rs","rotation.rs","rotation_alias.rs","rotation_construction.rs","rotation_conversion.rs","rotation_interpolation.rs","rotation_ops.rs","rotation_simba.rs","rotation_specialization.rs","similarity.rs","similarity_alias.rs","similarity_construction.rs","similarity_conversion.rs","similarity_ops.rs","similarity_simba.rs","swizzle.rs","transform.rs","transform_alias.rs","transform_construction.rs","transform_conversion.rs","transform_ops.rs","transform_simba.rs","translation.rs","translation_alias.rs","translation_construction.rs","translation_conversion.rs","translation_coordinates.rs","translation_ops.rs","translation_simba.rs","unit_complex.rs","unit_complex_construction.rs","unit_complex_conversion.rs","unit_complex_ops.rs","unit_complex_simba.rs"]},{"name":"linalg","files":["balancing.rs","bidiagonal.rs","cholesky.rs","convolution.rs","decomposition.rs","determinant.rs","exp.rs","full_piv_lu.rs","givens.rs","hessenberg.rs","householder.rs","inverse.rs","lu.rs","mod.rs","permutation_sequence.rs","qr.rs","schur.rs","solve.rs","svd.rs","symmetric_eigen.rs","symmetric_tridiagonal.rs"]}],"files":["lib.rs"]};
sourcesIndex["num_complex"] = {"name":"","files":["cast.rs","lib.rs","pow.rs"]};
sourcesIndex["num_cpus"] = {"name":"","files":["lib.rs","linux.rs"]};
sourcesIndex["num_integer"] = {"name":"","files":["average.rs","lib.rs","roots.rs"]};
sourcesIndex["num_iter"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_rational"] = {"name":"","files":["lib.rs","pow.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["paste"] = {"name":"","files":["attr.rs","error.rs","lib.rs","segment.rs"]};
sourcesIndex["png"] = {"name":"","dirs":[{"name":"decoder","files":["mod.rs","stream.rs","zlib.rs"]}],"files":["chunk.rs","common.rs","encoder.rs","filter.rs","lib.rs","traits.rs","utils.rs"]};
sourcesIndex["ppv_lite86"] = {"name":"","dirs":[{"name":"x86_64","files":["mod.rs","sse2.rs"]}],"files":["lib.rs","soft.rs","types.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["proc_macro_error"] = {"name":"","dirs":[{"name":"imp","files":["fallback.rs"]}],"files":["diagnostic.rs","dummy.rs","lib.rs","macros.rs","sealed.rs"]};
sourcesIndex["proc_macro_error_attr"] = {"name":"","files":["lib.rs","parse.rs","settings.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["rand"] = {"name":"","dirs":[{"name":"distributions","dirs":[{"name":"weighted","files":["alias_method.rs","mod.rs"]}],"files":["bernoulli.rs","binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","float.rs","gamma.rs","integer.rs","mod.rs","normal.rs","other.rs","pareto.rs","poisson.rs","triangular.rs","uniform.rs","unit_circle.rs","unit_sphere.rs","utils.rs","weibull.rs","ziggurat_tables.rs"]},{"name":"rngs","dirs":[{"name":"adapter","files":["mod.rs","read.rs","reseeding.rs"]}],"files":["entropy.rs","mock.rs","mod.rs","std.rs","thread.rs"]},{"name":"seq","files":["index.rs","mod.rs"]}],"files":["lib.rs","prelude.rs"]};
sourcesIndex["rand_chacha"] = {"name":"","files":["chacha.rs","guts.rs","lib.rs"]};
sourcesIndex["rand_core"] = {"name":"","files":["block.rs","error.rs","impls.rs","le.rs","lib.rs","os.rs"]};
sourcesIndex["rand_distr"] = {"name":"","files":["binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","gamma.rs","inverse_gaussian.rs","lib.rs","normal.rs","normal_inverse_gaussian.rs","pareto.rs","pert.rs","poisson.rs","triangular.rs","unit_ball.rs","unit_circle.rs","unit_disc.rs","unit_sphere.rs","utils.rs","weibull.rs","weighted_alias.rs","ziggurat_tables.rs"]};
sourcesIndex["raw_window_handle"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["rawpointer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rayon"] = {"name":"","dirs":[{"name":"collections","files":["binary_heap.rs","btree_map.rs","btree_set.rs","hash_map.rs","hash_set.rs","linked_list.rs","mod.rs","vec_deque.rs"]},{"name":"compile_fail","files":["cannot_collect_filtermap_data.rs","cannot_zip_filtered_data.rs","cell_par_iter.rs","mod.rs","must_use.rs","no_send_par_iter.rs","rc_par_iter.rs"]},{"name":"iter","dirs":[{"name":"collect","files":["consumer.rs","mod.rs"]},{"name":"find_first_last","files":["mod.rs"]},{"name":"plumbing","files":["mod.rs"]}],"files":["chain.rs","chunks.rs","cloned.rs","copied.rs","empty.rs","enumerate.rs","extend.rs","filter.rs","filter_map.rs","find.rs","flat_map.rs","flat_map_iter.rs","flatten.rs","flatten_iter.rs","fold.rs","for_each.rs","from_par_iter.rs","inspect.rs","interleave.rs","interleave_shortest.rs","intersperse.rs","len.rs","map.rs","map_with.rs","mod.rs","multizip.rs","noop.rs","once.rs","panic_fuse.rs","par_bridge.rs","positions.rs","product.rs","reduce.rs","repeat.rs","rev.rs","skip.rs","splitter.rs","step_by.rs","sum.rs","take.rs","try_fold.rs","try_reduce.rs","try_reduce_with.rs","unzip.rs","update.rs","while_some.rs","zip.rs","zip_eq.rs"]},{"name":"slice","files":["mergesort.rs","mod.rs","quicksort.rs"]}],"files":["delegate.rs","lib.rs","math.rs","option.rs","par_either.rs","prelude.rs","private.rs","range.rs","range_inclusive.rs","result.rs","split_producer.rs","str.rs","string.rs","vec.rs"]};
sourcesIndex["rayon_core"] = {"name":"","dirs":[{"name":"compile_fail","files":["mod.rs","quicksort_race1.rs","quicksort_race2.rs","quicksort_race3.rs","rc_return.rs","rc_upvar.rs","scope_join_bad.rs"]},{"name":"join","files":["mod.rs"]},{"name":"scope","files":["mod.rs"]},{"name":"sleep","files":["counters.rs","mod.rs"]},{"name":"spawn","files":["mod.rs"]},{"name":"thread_pool","files":["mod.rs"]}],"files":["job.rs","latch.rs","lib.rs","log.rs","private.rs","registry.rs","unwind.rs","util.rs"]};
sourcesIndex["scoped_threadpool"] = {"name":"","files":["lib.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["semver"] = {"name":"","files":["lib.rs","version.rs","version_req.rs"]};
sourcesIndex["semver_parser"] = {"name":"","files":["common.rs","lib.rs","range.rs","recognize.rs","version.rs"]};
sourcesIndex["simba"] = {"name":"","dirs":[{"name":"scalar","files":["complex.rs","field.rs","mod.rs","real.rs","subset.rs"]},{"name":"simd","files":["auto_simd_impl.rs","mod.rs","simd_bool.rs","simd_complex.rs","simd_option.rs","simd_partial_ord.rs","simd_real.rs","simd_signed.rs","simd_value.rs"]}],"files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","gen_helper.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","generics.rs","group.rs","ident.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","path.rs","print.rs","punctuated.rs","sealed.rs","span.rs","spanned.rs","thread.rs","token.rs","ty.rs","verbatim.rs"]};
sourcesIndex["tiff"] = {"name":"","dirs":[{"name":"decoder","files":["ifd.rs","mod.rs","stream.rs"]},{"name":"encoder","files":["colortype.rs","mod.rs","writer.rs"]}],"files":["bytecast.rs","error.rs","lib.rs","tags.rs"]};
sourcesIndex["typenum"] = {"name":"","files":["array.rs","bit.rs","int.rs","lib.rs","marker_traits.rs","operator_aliases.rs","private.rs","type_operators.rs","uint.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["vk_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["weezl"] = {"name":"","files":["decode.rs","encode.rs","error.rs","lib.rs"]};
createSourceSidebar();
