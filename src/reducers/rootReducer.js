import mealReducer from "./mealReducer";
import mealDbReducer from "./mealDataBaseReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  meal: mealReducer,
  mealDataBase: mealDbReducer
});

export default rootReducer;
