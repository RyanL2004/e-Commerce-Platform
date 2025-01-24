import {
    ORDER_REQ,
    ORDER_RESET,
    ORDER_SUCCESS,
    ORDER_FAIL,

    ORDER_PAYMENT_REQ,
    ORDER_PAYMENT_REQ_SUCCESS,
    ORDER_PAYMENT_REQ_FAIL,

    ORDER_DETAIL_REQ,
    ORDER_DETAIL_REQ_SUCCESS,
    ORDER_DETAIL_REQ_FAIL,

    ORDER_LIST_REQ,
    ORDER_LIST_REQ_SUCCESS,
    ORDER_LIST_REQ_FAIL,
} from '../Constants/Order';
import { BASE_URL } from '../Constants/BASE_URL';

export const orderAction = (order) => async (dispatchEvent, getState) => {
    try{
        dispatch({ type: ORDER_REQ})
        const userInfo = getState().userLoginReducer.userInfo;
        
    } catch (error) {
        console.log(error);
    }
}
