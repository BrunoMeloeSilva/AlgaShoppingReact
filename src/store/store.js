import { createStore, combineReducers } from "redux";
import ProductsReducer from "./Products/Products.reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    products: ProductsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)