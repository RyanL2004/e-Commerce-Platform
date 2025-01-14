import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CLEAR_CART,
    
    CART_SAVE_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD,
}
from '../Constants/Cart';

export const cartReducer = (state = {cartItems:[], shippingAddress:{}}, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                   ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === item.product? {...x, quantity: x.quantity + item.quantity} : x
                    )
                };
            } else {
                return {
                   ...state,
                    cartItems: [...state.cartItems, {...item, quantity: 1}]
                };
            }

        case REMOVE_ITEM_FROM_CART:
            return {
               ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            };
        case CLEAR_CART:
            return {
                cartItems: [],
                shippingAddress: {}
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload

            }
        case SAVE_PAYMENT_METHOD: 
        return {
            ...state,
            paymentMethod: action.payload 
            }
    
        case CART_ITEM_CLEAR:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;

    }
}

