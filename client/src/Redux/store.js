import { combineReducers } from 'redux';
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import version from 'mongoose';

const persistConfig = {
    key: 'root',
    storage,
    version: '1',
}

const rootReducer = combineReducers({
    
    // add reducers here
});