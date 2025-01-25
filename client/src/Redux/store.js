import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./Reducers/User";
import { cartReducer } from "./Reducers/Cart";
import {
  orderCreateReducer,
  orderDetailReducer,
  orderPaymentReducer,
  orderListReducer,
} from "./Reducers/Order";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  version: "1",
  whitelist: ["cartReducer", "userLoginReducer"], // Only persist cart and user login state
};

// Initial state for the entire store
const initialState = {
  cartReducer: {
    cartItems: [],
    shippingAddress: {},
  },
  userLoginReducer: {
    userInfo: null,
  },
  productListReducer: {
    products: [],
  },
  productReducer: {
    product: { reviews: [] },
  },
  userRegisterReducer: {},
  
};

// Combine reducers
const rootReducer = combineReducers({
  productListReducer,
  productReducer,
  userRegisterReducer,
  userLoginReducer,
  cartReducer,
  orderCreateReducer,
  orderDetailReducer,
  orderPaymentReducer,
  orderListReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with initial state
export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

// Create persistor
export let persistor = persistStore(store);
