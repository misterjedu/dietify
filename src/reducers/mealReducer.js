import uuid from "uuid/v1";

function createData(name, calories, fat, carbs, protein, id, edit, del) {
  return { name, calories, fat, carbs, protein, id, edit, del };
}

const initState = {
  breakFast: [
    createData("Bread", 159, 6.0, 24, 4.0, uuid()),
    createData("Egg", 159, 6.0, 24, 4.0, uuid()),
    createData("Rice", 159, 6.0, 24, 4.0, uuid())
  ],
  launch: [
    createData("Bread", 159, 6.0, 24, 4.0, uuid()),
    createData("Pap", 159, 6.0, 24, 4.0, uuid()),
    createData("Milk", 159, 6.0, 24, 4.0, uuid()),
    createData("Sugar", 159, 6.0, 24, 4.0, uuid())
  ],
  dinner: [createData("Yam", 159, 6.0, 24, 4.0, uuid())],
  snack: [createData("Chin Chin", 159, 6.0, 24, 4.0, uuid())]
};

const mealReducer = (state = initState, action) => {
  if (action.type === "DELETE_MEAL" && action.mealType === "Break Fast") {
    let newBreakFast = state.breakFast.filter(meal => {
      return action.id !== meal.id;
    });
    return {
      ...state,
      breakFast: newBreakFast
    };
  }
  if (action.type === "DELETE_MEAL" && action.mealType === "Launch") {
    let newLaunch = state.launch.filter(meal => {
      return action.id !== meal.id;
    });
    return {
      ...state,
      launch: newLaunch
    };
  }
  if (action.type === "DELETE_MEAL" && action.mealType === "Dinner") {
    let newDinner = state.dinner.filter(meal => {
      return action.id !== meal.id;
    });
    return {
      ...state,
      dinner: newDinner
    };
  }
  if (action.type === "DELETE_MEAL" && action.mealType === "Snack") {
    let newSnack = state.snack.filter(meal => {
      return action.id !== meal.id;
    });
    return {
      ...state,
      snack: newSnack
    };
  }
  return state;
};

export default mealReducer;
