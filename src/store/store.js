import { createStore, combineReducers } from "redux";
import ProductsReducer from "./Products/Products.reducer";

const store = createStore(combineReducers({
    products: ProductsReducer
}))

export default store