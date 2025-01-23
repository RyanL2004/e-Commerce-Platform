import { useSelector} from "react-redux";
import { toggleCart } from "../Redux/Actions/Cart";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import CartItem from "./Auth/CartItems";
import { useDispatch } from "react-redux";


export default function Checkout() {

  const { isCartOpen, cartItems = [] } = useSelector(
    (state) =>
      state.cartReducer || {
        isCartOpen: false,
        cartItems: [],
      }
  );

  if (!isCartOpen) return null;

  // Calculate total only if there are items
  const totalAmount = cartItems?.reduce(
    (total, item) => total + (item?.price || 0) * (item?.qty || 0),
    0
  );
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => dispatch(toggleCart(false))}
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      onClick={() => dispatch(toggleCart(false))}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <CartItem 
                cartItems = {cartItems}>

                </CartItem>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalAmount?.toFixed(2) || "0.00"}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <Link
                    to="/placeorder"
                    onClick = {() => dispatch(toggleCart(false))}
                    disabled={!cartItems?.length}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      onClick={() => dispatch(toggleCart(false))}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
