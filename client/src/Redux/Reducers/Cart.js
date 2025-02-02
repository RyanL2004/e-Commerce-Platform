// Cart.js (Reducer)
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CART_SAVE_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD,
    TOGGLE_CART_VISIBILITY,
    UPDATE_CART_ITEM_QTY,
    CLEAR_CART,
} from '../Constants/Cart';

const initialState = {
    cartItems: [],
    shippingAddress: {},
    isCartOpen: false
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_VISIBILITY: {
            return {
                ...state,
                isCartOpen: action.payload
            };
        }
        case UPDATE_CART_ITEM_QTY: {
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.product === action.payload.id
                    ? { ...item, qty: action.payload.qty}
                    : item
                )
            }

        }
        case ADD_ITEM_TO_CART: {
            // Early return if payload is invalid
            if (!action.payload || !action.payload.product) {
                console.error('Invalid payload in ADD_ITEM_TO_CART:', action.payload);
                return state;
            }

            const newItem = action.payload;
            const cartItems = state.cartItems || [];  // Ensure cartItems exists

            // Find existing item safely
            const existingItemIndex = cartItems.findIndex(
                (item) => item && item.product === newItem.product
            );

            if (existingItemIndex >= 0) {
                // Update existing item
                const updatedCartItems = cartItems.map((item, index) => 
                    index === existingItemIndex
                        ? { ...item, qty: (parseInt(item.qty) || 0) + (parseInt(newItem.qty) || 1) }
                        : item
                );
                
                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            }

            // Add new item
            return {
                ...state,
                cartItems: [...cartItems, { ...newItem, qty: parseInt(newItem.qty) || 1 }]
            };
        }

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item && item.product !== action.payload)
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload || {}
            };

        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            };

        default:
            return state;
    }
};