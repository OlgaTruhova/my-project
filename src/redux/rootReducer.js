import { combineReducers } from "redux";
import listOfMastersReducer from "./listOfMastersReducer";

export default combineReducers({
   masters: listOfMastersReducer
});