import { useDispatch } from "react-redux";
export default function CartItem({cartItems}) {

    const dispatch = useDispatch();

  
    const handleQuantityChange = (id, qty) => {
      dispatch(updateCartItemQty(id, qty))
    }
    return (
        <>
            
            <div className="mt-8">
                  <div className="flow-root">
                    {cartItems && cartItems.length > 0 ? (
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map(
                          (item) =>
                            item && (
                              <li key={item.product} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  {item.image && (
                                    <img
                                      src={item.image}
                                      alt={item.name || "Product image"}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  )}
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.name}</h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty
                                      <select
                                        value={item.qty}
                                        onChange = {(e)=>handleQuantityChange(item.product, Number(e.target.value))}
                                        className="rounded border ml-2 appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                                      >
                                        {[
                                          ...Array(item.countInStock).keys(),
                                        ].map((x) => (
                                          <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                          </option>
                                        ))}
                                      </select>
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() =>
                                          dispatch({
                                            type: "REMOVE_ITEM_FROM_CART",
                                            payload: item.product,
                                          })
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                        )}
                      </ul>
                    ) : (
                      <p className="text-center text-gray-500">
                        Your cart is empty
                      </p>
                    )}
                  </div>
                </div>
        
        </>
    )
}