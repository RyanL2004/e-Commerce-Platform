import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productListReducer, productReducer } from './Reducers/Product';
import { thunk } from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './Reducers/User';

const persistConfig = {
    key: 'root',
    storage,
    version: '1',
}

const rootReducer = combineReducers({
    // add reducers here
    productListReducer,
    productReducer,
    userRegisterReducer,
    userLoginReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);

export let persistor = persistStore(store);