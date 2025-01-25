import Layout from "../../Layouts/Layouts";
import { useSelector } from "react-redux";
import CartItem from "../Auth/CartItems";
import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { BASE_URL } from "../../Redux/Constants/BASE_URL";
import { useDispatch } from "react-redux";
import { orderAction } from "../../Redux/Actions/Order";
import axios from "axios";
import { saveShippingAddressAction } from "../../Redux/Actions/Cart";


export default function PlaceOrder() {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems, shippingAddress } = cart;

  //subtotal without tax + shipping fee
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  //subtotal price
  const subtotal = addDecimal(
    cartItems.reduce((total, item) => total + item.qty * item.price, 0)
  );
  const taxPrice = addDecimal(Number(0.1 * subtotal).toFixed(2));
  const shippingPrice = addDecimal(subtotal > 100 ? 0 : 9.99);

  // total
  const total = (
    Number(subtotal) +
    Number(taxPrice) +
    Number(shippingPrice)
  ).toFixed(2);

  //Shipping adress form
  const [country, setCountry] = useState(shippingAddress.country);
  const [city, setCity] = useState(shippingAddress.city);
  const [address, setAddress] = useState(shippingAddress.address);
  const [postCode, setPostCode] = useState(shippingAddress.postCode);

  const [clientId, setClientId] = useState(null);
  const [paymentResult, setPaymentResult] = useState({});

  const getPaypalClientId = async () => {
    const res = await axios.get(`${BASE_URL}/api/config/paypal`);
    const fetchedClientId = res.data;
    setClientId(fetchedClientId);
  };

  useEffect(() => {
    getPaypalClientId();
  });

  const dispatch = useDispatch();

  const successPaymentHandler = async (paymentResult) => {
    try {
      setPaymentResult(paymentResult);
      dispatch(
        orderAction({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          totalPrice: total,
          paymentMethod: "paypal",
          price: subtotal,
          taxPrice: taxPrice,
          shippingPrice: shippingPrice,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const saveShippingAddress = () => {
    dispatch(
      saveShippingAddressAction({
        address,
        city,
        postCode,
        country,
      })
    );
  };
  

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Order Summary
                </h2>

                <div className="leading-relaxed mb-4">
                  <CartItem cartItems={cartItems}> </CartItem>
                </div>

                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="ml-auto text-gray-900">${subtotal}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Tax</span>
                  <span className="ml-auto text-gray-900">${taxPrice}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Shipping Price</span>
                  <span className="ml-auto text-gray-900">
                    ${shippingPrice}
                  </span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${total}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 g p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Shipping Address
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="text"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="test"
                    className="leading-7 text-sm text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="text"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Post Code
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>

                <button 
                onClick={saveShippingAddress}
                className=" mb-10 bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-600 transition duration-200"
                >
                  Save Address
                </button>
                
                {clientId && (
                  <PayPalScriptProvider options={{ clientId: clientId }}>
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                currency_code: "USD",
                                value: total,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {    
                        return actions.order.capture().then(function (details) {
                          successPaymentHandler(details);
                        })
                      }}
                    />
                  </PayPalScriptProvider>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
