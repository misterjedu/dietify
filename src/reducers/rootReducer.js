import mealReducer from "./mealReducer";
import mealDbReducer from "./mealDataBaseReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  meal: mealReducer,
  mealDataBase: mealDbReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
