import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/Product";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, products = [], error } = productListReducer;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      {loading ? (
        <h1 className="text-center text-blue-500 text-xl font-semibold">
          Loading...
        </h1>
      ) : error ? (
        <h1 className="text-center text-red-500 text-xl font-semibold">
          {error}
        </h1>
      ) : (
        <section className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-t-lg"
                />

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Reviews: {product.numReview}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-blue-500 hover:underline text-sm font-medium">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;
