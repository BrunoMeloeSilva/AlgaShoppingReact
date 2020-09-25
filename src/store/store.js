import { createStore, combineReducers } from "redux";
import CalculatorReducer from "./Calculator/Calculator.reducer";

const store = createStore(combineReducers({
    calculator: CalculatorReducer
}))

export default store