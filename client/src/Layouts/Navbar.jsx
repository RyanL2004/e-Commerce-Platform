import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDropDown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import { toggleCart } from "../Redux/Actions/Cart";

const Navbar = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();

  // Safely calculate total quantity with proper checks
  const { cartItems = [] } = useSelector((state) => state.cartReducer || {});
  const totalQty = cartItems.reduce(
    (total, item) => total + (Number(item?.qty) || 0),
    0
  );

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://www.svgrepo.com/show/495702/shop.svg"
              className="h-8"
              alt="IBI Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              IBI
            </span>
          </Link>

          {/* Right Section: User Menu and Cart */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {!userInfo ? (
              <Link
                to="/register"
                className="text-white bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 ease-in-out transform hover:scale-105"
              >
                Get Started
              </Link>
            ) : (
              <>
                <UserDropDown logoutHandler={logoutHandler} />
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(toggleCart(true));
                  }}
                  to="/checkout"
                  className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <img
                    src="https://www.svgrepo.com/show/495707/shopping-cart.svg"
                    className="h-8"
                    alt="Cart"
                  />
                  {totalQty > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {totalQty}
                    </span>
                  )}
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Left Section: Main Menu */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-100 rounded-md md:bg-transparent md:hover:bg-transparent dark:text-gray-300 dark:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-100 rounded-md md:bg-transparent md:hover:bg-transparent dark:text-gray-300 dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="block py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-100 rounded-md md:bg-transparent md:hover:bg-transparent dark:text-gray-300 dark:hover:text-blue-500"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-100 rounded-md md:bg-transparent md:hover:bg-transparent dark:text-gray-300 dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
