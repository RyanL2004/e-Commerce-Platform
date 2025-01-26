import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Layout from "../../Layouts/Layouts";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLoginReducer = useSelector((state) => state.userLoginReducer);

  const { loading, error } = userLoginReducer;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction({ email, password })); // Correctly passing both email and password
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Login to Your Account
            </h2>

            {loading && (
              <p className="text-blue-500 text-center">Loading...</p>
            )}
            {error && (
              <p className="text-red-500 text-center mb-4">
                {error}
              </p>
            )}

            <form onSubmit={submitHandler}>
              {/* Email Input */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-3 text-center transition duration-200 ease-in-out transform hover:scale-105"
              >
                Sign In
              </button>
            </form>

            {/* Registration Link */}
            <p className="text-gray-500 text-center mt-6">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
