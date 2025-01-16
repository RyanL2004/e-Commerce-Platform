import axios from 'axios';

import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    TOGGLE_CART_VISIBILITY,
    CART_SAVE_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD,
} from '../Constants/Cart';

import { BASE_URL } from '../Constants/BASE_URL';

export const addToCartAction = (id, qty = 1) => async (dispatch, getState) => {
    try {
        if (!id) {
            throw new Error('Product ID is required');
        }

        // Fetch product data
        const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
        
        if (!data || !data._id) {
            throw new Error('Invalid product data received');
        }

        // Prepare cart item with explicit property checks
        const cartItem = {
            product: data._id || id,
            name: data.name || 'Unknown Product',
            image: data.image || '',
            price: parseFloat(data.price) || 0,
            countInStock: parseInt(data.countInStock) || 0,
            qty: parseInt(qty) || 1
        };

        // Log the cart item for debugging
        console.log('Adding to cart:', cartItem);

        // Dispatch the action
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: cartItem
        });

        // Update localStorage
        const { cartReducer } = getState();
        if (cartReducer && cartReducer.cartItems) {
            localStorage.setItem('cartItems', JSON.stringify(cartReducer.cartItems));
        }

    } catch (error) {
        console.error('Error adding to cart:', error);
        // You might want to dispatch an error action here
    }
};

export const saveShippingAddressAction = (data) => (dispatch, getState) => {
    dispatch ({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data));

}
export const savePaymentMethod = (data) => (dispatch, getState) => {
    dispatch ({
        type: SAVE_PAYMENT_METHOD,
        payload: data,
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}
export const toggleCart = (isOpen) => (dispatch) => {
    dispatch({
        type: TOGGLE_CART_VISIBILITY,
        payload: isOpen,
    });
};



