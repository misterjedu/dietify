function createData(
  mealType,
  name,
  calories,
  carbs,
  protein,
  fat,
  id,
  qty,
  key,
  edit,
  del
) {
  return {
    mealType,
    name,
    calories,
    carbs,
    protein,
    fat,
    id,
    qty,
    key,
    edit,
    del,
  };
}

const initState = {
  meal: [],
  doesMealExist: "",
};

// Delete Meal

const mealReducer = (state = initState, action) => {
  if (action.type === "DELETE_MEAL") {
    let newMeal = state.meal.filter((meal) => {
      return action.key !== meal.key;
    });
    return {
      ...state,
      meal: newMeal,
    };
  }

  // Add Meal
  if (action.type === "ADD_MEAL") {
    // console.log(action);
    const newMeal = [
      ...state.meal,
      createData(
        action.mealType,
        action.name,
        action.calories,
        action.carbs,
        action.protein,
        action.fat,
        action.id,
        action.qty,
        action.key
      ),
    ];
    return {
      ...state,
      meal: newMeal,
      doesMealExist: false,
    };
  }

  // Update Meal

  if (action.type === "UPDATE_MEAL") {
    console.log(action);
    let upDatedMeal = state.meal.filter((item) => {
      return action.key !== item.key;
    });

    const newMeal = [
      createData(
        action.mealType,
        action.name,
        action.calories,
        action.carbs,
        action.protein,
        action.fat,
        action.id,
        action.qty,
        action.key
      ),
      ...upDatedMeal,
    ];
    return {
      ...state,
      meal: newMeal,
    };
  }

  return state;
};

export default mealReducer;
