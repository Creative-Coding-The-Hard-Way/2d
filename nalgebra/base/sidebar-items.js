initSidebarItems({"mod":[["allocator","Abstract definition of a matrix data storage allocator."],["constraint","Compatibility constraints between matrix shapes, e.g., for addition or multiplication."],["coordinates","Structures to which matrices and vector can be auto-dereferenced (through `Deref`) to access components using their names. For example, if `v` is a 3D vector, one can write `v.z` instead of `v[2]`."],["default_allocator","The default matrix data storage allocator."],["dimension","Traits and tags for identifying the dimension of all algebraic entities."],["indexing","Indexing"],["iter","Matrix iterators."],["storage","Abstract definition of a matrix data storage."]],"struct":[["ArrayStorage","A array-based statically sized matrix data storage."],["EuclideanNorm","Euclidean norm."],["LpNorm","Lp norm."],["Matrix","The most generic column-major matrix (and vector) type."],["SliceStorage","A matrix data storage for a matrix slice. Only contains an internal reference to another matrix data storage."],["SliceStorageMut","A mutable matrix data storage for mutable matrix slice. Only contains an internal mutable reference to another matrix data storage."],["UniformNorm","L-infinite norm aka. Chebytchev norm aka. uniform norm aka. suppremum norm."],["Unit","A wrapper that ensures the underlying algebraic entity has a unit norm."],["VecStorage","A Vec-based matrix data storage. It may be dynamically-sized."]],"trait":[["Norm","A trait for abstract matrix norms."],["Normed","Trait implemented by entities scan be be normalized and put in an `Unit` struct."],["Scalar","The basic scalar type for all structures of `nalgebra`."],["SliceRange","A range with a size that may be known at compile-time."]],"type":[["DMatrix","A dynamically sized column-major matrix."],["DMatrixSlice","A column-major matrix slice dynamic numbers of rows and columns."],["DMatrixSliceMut","A column-major matrix slice dynamic numbers of rows and columns."],["DVector","A dynamically sized column vector."],["DVectorSlice","A column vector slice dynamic numbers of rows and columns."],["DVectorSliceMut","A column vector slice dynamic numbers of rows and columns."],["Matrix1","A stack-allocated, column-major, 1x1 square matrix."],["Matrix1x2","A stack-allocated, column-major, 1x2 matrix."],["Matrix1x3","A stack-allocated, column-major, 1x3 matrix."],["Matrix1x4","A stack-allocated, column-major, 1x4 matrix."],["Matrix1x5","A stack-allocated, column-major, 1x5 matrix."],["Matrix1x6","A stack-allocated, column-major, 1x6 matrix."],["Matrix1xX","A heap-allocated, row-major, matrix with 1 rows and a dynamic number of columns."],["Matrix2","A stack-allocated, column-major, 2x2 square matrix."],["Matrix2x1","A stack-allocated, column-major, 2x1 matrix."],["Matrix2x3","A stack-allocated, column-major, 2x3 matrix."],["Matrix2x4","A stack-allocated, column-major, 2x4 matrix."],["Matrix2x5","A stack-allocated, column-major, 2x5 matrix."],["Matrix2x6","A stack-allocated, column-major, 2x6 matrix."],["Matrix2xX","A heap-allocated, row-major, matrix with 2 rows and a dynamic number of columns."],["Matrix3","A stack-allocated, column-major, 3x3 square matrix."],["Matrix3x1","A stack-allocated, column-major, 3x1 matrix."],["Matrix3x2","A stack-allocated, column-major, 3x2 matrix."],["Matrix3x4","A stack-allocated, column-major, 3x4 matrix."],["Matrix3x5","A stack-allocated, column-major, 3x5 matrix."],["Matrix3x6","A stack-allocated, column-major, 3x6 matrix."],["Matrix3xX","A heap-allocated, row-major, matrix with 3 rows and a dynamic number of columns."],["Matrix4","A stack-allocated, column-major, 4x4 square matrix."],["Matrix4x1","A stack-allocated, column-major, 4x1 matrix."],["Matrix4x2","A stack-allocated, column-major, 4x2 matrix."],["Matrix4x3","A stack-allocated, column-major, 4x3 matrix."],["Matrix4x5","A stack-allocated, column-major, 4x5 matrix."],["Matrix4x6","A stack-allocated, column-major, 4x6 matrix."],["Matrix4xX","A heap-allocated, row-major, matrix with 4 rows and a dynamic number of columns."],["Matrix5","A stack-allocated, column-major, 5x5 square matrix."],["Matrix5x1","A stack-allocated, column-major, 5x1 matrix."],["Matrix5x2","A stack-allocated, column-major, 5x2 matrix."],["Matrix5x3","A stack-allocated, column-major, 5x3 matrix."],["Matrix5x4","A stack-allocated, column-major, 5x4 matrix."],["Matrix5x6","A stack-allocated, column-major, 5x6 matrix."],["Matrix5xX","A heap-allocated, row-major, matrix with 5 rows and a dynamic number of columns."],["Matrix6","A stack-allocated, column-major, 6x6 square matrix."],["Matrix6x1","A stack-allocated, column-major, 6x1 matrix."],["Matrix6x2","A stack-allocated, column-major, 6x2 matrix."],["Matrix6x3","A stack-allocated, column-major, 6x3 matrix."],["Matrix6x4","A stack-allocated, column-major, 6x4 matrix."],["Matrix6x5","A stack-allocated, column-major, 6x5 matrix."],["Matrix6xX","A heap-allocated, row-major, matrix with 6 rows and a dynamic number of columns."],["MatrixArray","Renamed to [ArrayStorage]."],["MatrixCross","The type of the result of a matrix cross product."],["MatrixMN","A statically sized column-major matrix with `R` rows and `C` columns."],["MatrixN","A statically sized column-major square matrix with `D` rows and columns."],["MatrixNM","A statically sized column-major matrix with `R` rows and `C` columns."],["MatrixSlice","A matrix slice."],["MatrixSlice1","A column-major 1x1 matrix slice."],["MatrixSlice1x2","A column-major 1x2 matrix slice."],["MatrixSlice1x3","A column-major 1x3 matrix slice."],["MatrixSlice1x4","A column-major 1x4 matrix slice."],["MatrixSlice1x5","A column-major 1x5 matrix slice."],["MatrixSlice1x6","A column-major 1x6 matrix slice."],["MatrixSlice1xX","A column-major matrix slice with 1 row and a number of columns chosen at runtime."],["MatrixSlice2","A column-major 2x2 matrix slice."],["MatrixSlice2x1","A column-major 2x1 matrix slice."],["MatrixSlice2x3","A column-major 2x3 matrix slice."],["MatrixSlice2x4","A column-major 2x4 matrix slice."],["MatrixSlice2x5","A column-major 2x5 matrix slice."],["MatrixSlice2x6","A column-major 2x6 matrix slice."],["MatrixSlice2xX","A column-major matrix slice with 2 rows and a number of columns chosen at runtime."],["MatrixSlice3","A column-major 3x3 matrix slice."],["MatrixSlice3x1","A column-major 3x1 matrix slice."],["MatrixSlice3x2","A column-major 3x2 matrix slice."],["MatrixSlice3x4","A column-major 3x4 matrix slice."],["MatrixSlice3x5","A column-major 3x5 matrix slice."],["MatrixSlice3x6","A column-major 3x6 matrix slice."],["MatrixSlice3xX","A column-major matrix slice with 3 rows and a number of columns chosen at runtime."],["MatrixSlice4","A column-major 4x4 matrix slice."],["MatrixSlice4x1","A column-major 4x1 matrix slice."],["MatrixSlice4x2","A column-major 4x2 matrix slice."],["MatrixSlice4x3","A column-major 4x3 matrix slice."],["MatrixSlice4x5","A column-major 4x5 matrix slice."],["MatrixSlice4x6","A column-major 4x6 matrix slice."],["MatrixSlice4xX","A column-major matrix slice with 4 rows and a number of columns chosen at runtime."],["MatrixSlice5","A column-major 5x5 matrix slice."],["MatrixSlice5x1","A column-major 5x1 matrix slice."],["MatrixSlice5x2","A column-major 5x2 matrix slice."],["MatrixSlice5x3","A column-major 5x3 matrix slice."],["MatrixSlice5x4","A column-major 5x4 matrix slice."],["MatrixSlice5x6","A column-major 5x6 matrix slice."],["MatrixSlice5xX","A column-major matrix slice with 5 rows and a number of columns chosen at runtime."],["MatrixSlice6","A column-major 6x6 matrix slice."],["MatrixSlice6x1","A column-major 6x1 matrix slice."],["MatrixSlice6x2","A column-major 6x2 matrix slice."],["MatrixSlice6x3","A column-major 6x3 matrix slice."],["MatrixSlice6x4","A column-major 6x4 matrix slice."],["MatrixSlice6x5","A column-major 6x5 matrix slice."],["MatrixSlice6xX","A column-major matrix slice with 6 rows and a number of columns chosen at runtime."],["MatrixSliceMN","A column-major matrix slice with `R` rows and `C` columns."],["MatrixSliceMut","A mutable matrix slice."],["MatrixSliceMut1","A column-major 1x1 matrix slice."],["MatrixSliceMut1x2","A column-major 1x2 matrix slice."],["MatrixSliceMut1x3","A column-major 1x3 matrix slice."],["MatrixSliceMut1x4","A column-major 1x4 matrix slice."],["MatrixSliceMut1x5","A column-major 1x5 matrix slice."],["MatrixSliceMut1x6","A column-major 1x6 matrix slice."],["MatrixSliceMut1xX","A column-major matrix slice with 1 row and a number of columns chosen at runtime."],["MatrixSliceMut2","A column-major 2x2 matrix slice."],["MatrixSliceMut2x1","A column-major 2x1 matrix slice."],["MatrixSliceMut2x3","A column-major 2x3 matrix slice."],["MatrixSliceMut2x4","A column-major 2x4 matrix slice."],["MatrixSliceMut2x5","A column-major 2x5 matrix slice."],["MatrixSliceMut2x6","A column-major 2x6 matrix slice."],["MatrixSliceMut2xX","A column-major matrix slice with 2 rows and a number of columns chosen at runtime."],["MatrixSliceMut3","A column-major 3x3 matrix slice."],["MatrixSliceMut3x1","A column-major 3x1 matrix slice."],["MatrixSliceMut3x2","A column-major 3x2 matrix slice."],["MatrixSliceMut3x4","A column-major 3x4 matrix slice."],["MatrixSliceMut3x5","A column-major 3x5 matrix slice."],["MatrixSliceMut3x6","A column-major 3x6 matrix slice."],["MatrixSliceMut3xX","A column-major matrix slice with 3 rows and a number of columns chosen at runtime."],["MatrixSliceMut4","A column-major 4x4 matrix slice."],["MatrixSliceMut4x1","A column-major 4x1 matrix slice."],["MatrixSliceMut4x2","A column-major 4x2 matrix slice."],["MatrixSliceMut4x3","A column-major 4x3 matrix slice."],["MatrixSliceMut4x5","A column-major 4x5 matrix slice."],["MatrixSliceMut4x6","A column-major 4x6 matrix slice."],["MatrixSliceMut4xX","A column-major matrix slice with 4 rows and a number of columns chosen at runtime."],["MatrixSliceMut5","A column-major 5x5 matrix slice."],["MatrixSliceMut5x1","A column-major 5x1 matrix slice."],["MatrixSliceMut5x2","A column-major 5x2 matrix slice."],["MatrixSliceMut5x3","A column-major 5x3 matrix slice."],["MatrixSliceMut5x4","A column-major 5x4 matrix slice."],["MatrixSliceMut5x6","A column-major 5x6 matrix slice."],["MatrixSliceMut5xX","A column-major matrix slice with 5 rows and a number of columns chosen at runtime."],["MatrixSliceMut6","A column-major 6x6 matrix slice."],["MatrixSliceMut6x1","A column-major 6x1 matrix slice."],["MatrixSliceMut6x2","A column-major 6x2 matrix slice."],["MatrixSliceMut6x3","A column-major 6x3 matrix slice."],["MatrixSliceMut6x4","A column-major 6x4 matrix slice."],["MatrixSliceMut6x5","A column-major 6x5 matrix slice."],["MatrixSliceMut6xX","A column-major matrix slice with 6 rows and a number of columns chosen at runtime."],["MatrixSliceMutMN","A column-major matrix slice with `R` rows and `C` columns."],["MatrixSliceMutN","A column-major matrix slice with `D` rows and columns."],["MatrixSliceMutXx1","A column-major matrix slice with a number of rows chosen at runtime and 1 column."],["MatrixSliceMutXx2","A column-major matrix slice with a number of rows chosen at runtime and 2 columns."],["MatrixSliceMutXx3","A column-major matrix slice with a number of rows chosen at runtime and 3 columns."],["MatrixSliceMutXx4","A column-major matrix slice with a number of rows chosen at runtime and 4 columns."],["MatrixSliceMutXx5","A column-major matrix slice with a number of rows chosen at runtime and 5 columns."],["MatrixSliceMutXx6","A column-major matrix slice with a number of rows chosen at runtime and 6 columns."],["MatrixSliceN","A column-major matrix slice with `D` rows and columns."],["MatrixSliceXx1","A column-major matrix slice with a number of rows chosen at runtime and 1 column."],["MatrixSliceXx2","A column-major matrix slice with a number of rows chosen at runtime and 2 columns."],["MatrixSliceXx3","A column-major matrix slice with a number of rows chosen at runtime and 3 columns."],["MatrixSliceXx4","A column-major matrix slice with a number of rows chosen at runtime and 4 columns."],["MatrixSliceXx5","A column-major matrix slice with a number of rows chosen at runtime and 5 columns."],["MatrixSliceXx6","A column-major matrix slice with a number of rows chosen at runtime and 6 columns."],["MatrixSum","The type of the result of a matrix sum."],["MatrixVec","Renamed to [VecStorage]."],["MatrixXx1","A heap-allocated, column-major, matrix with a dynamic number of rows and 1 columns."],["MatrixXx2","A heap-allocated, column-major, matrix with a dynamic number of rows and 2 columns."],["MatrixXx3","A heap-allocated, column-major, matrix with a dynamic number of rows and 3 columns."],["MatrixXx4","A heap-allocated, column-major, matrix with a dynamic number of rows and 4 columns."],["MatrixXx5","A heap-allocated, column-major, matrix with a dynamic number of rows and 5 columns."],["MatrixXx6","A heap-allocated, column-major, matrix with a dynamic number of rows and 6 columns."],["RowDVector","A dynamically sized row vector."],["RowVector","A matrix with one row and `D` columns ."],["RowVector1","A stack-allocated, 1-dimensional row vector."],["RowVector2","A stack-allocated, 2-dimensional row vector."],["RowVector3","A stack-allocated, 3-dimensional row vector."],["RowVector4","A stack-allocated, 4-dimensional row vector."],["RowVector5","A stack-allocated, 5-dimensional row vector."],["RowVector6","A stack-allocated, 6-dimensional row vector."],["RowVectorN","A statically sized D-dimensional row vector."],["SquareMatrix","A square matrix."],["UnitVector1","A stack-allocated, 1-dimensional unit vector."],["UnitVector2","A stack-allocated, 2-dimensional unit vector."],["UnitVector3","A stack-allocated, 3-dimensional unit vector."],["UnitVector4","A stack-allocated, 4-dimensional unit vector."],["UnitVector5","A stack-allocated, 5-dimensional unit vector."],["UnitVector6","A stack-allocated, 6-dimensional unit vector."],["Vector","A matrix with one column and `D` rows."],["Vector1","A stack-allocated, 1-dimensional column vector."],["Vector2","A stack-allocated, 2-dimensional column vector."],["Vector3","A stack-allocated, 3-dimensional column vector."],["Vector4","A stack-allocated, 4-dimensional column vector."],["Vector5","A stack-allocated, 5-dimensional column vector."],["Vector6","A stack-allocated, 6-dimensional column vector."],["VectorN","A statically sized D-dimensional column vector."],["VectorSlice1","A 1D column vector slice."],["VectorSlice2","A 2D column vector slice."],["VectorSlice3","A 3D column vector slice."],["VectorSlice4","A 4D column vector slice."],["VectorSlice5","A 5D column vector slice."],["VectorSlice6","A 6D column vector slice."],["VectorSliceMut1","A 1D column vector slice."],["VectorSliceMut2","A 2D column vector slice."],["VectorSliceMut3","A 3D column vector slice."],["VectorSliceMut4","A 4D column vector slice."],["VectorSliceMut5","A 5D column vector slice."],["VectorSliceMut6","A 6D column vector slice."],["VectorSliceMutN","A column vector slice with `D` rows."],["VectorSliceN","A column vector slice with `D` rows."],["VectorSum","The type of the result of a matrix sum."]]});