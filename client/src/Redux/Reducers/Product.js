import {
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_REQ_SUCCESS,
    PRODUCT_LIST_REQ_FAIL,


    PRODUCT_DETAIL_REQ,
    PRODUCT_DETAIL_REQ_SUCCESS,
    PRODUCT_DETAIL_REQ_FAIL,
}
from '../Constants/Products'

export const productListReducer = (state = { products:[], action}) => {
    switch (action.type) {
        case PRODUCT_LIST_REQ:
            return {loading : true, products:[]

            };
        case PRODUCT_LIST_REQ_SUCCESS:
            return {loading : false,
                 products: action.payload.products,
                 totalPage:action.payload.totalPage
            };
    }
}
