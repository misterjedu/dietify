export const addMealAction = (
  mealType,
  id,
  name,
  carbs,
  protein,
  fat,
  calories,
  qty,
  key
) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: "ADD_MEAL",
      mealType,
      id,
      name,
      carbs,
      protein,
      fat,
      calories,
      qty,
      key,
    });
    // const firestore = getFirestore();
    // firestore
    //   .collection("Meals")
    //   .add({
    //     mealType,
    //     id,
    //     name,
    //     carbs,
    //     protein,
    //     fat,
    //     calories,
    //     qty,
    //     key,
    //     createdAt: new Date(),
    //   })
    //   .then(() => {
    //     dispatch({
    //       type: "ADD_MEAL",
    //       mealType,
    //       id,
    //       name,
    //       carbs,
    //       protein,
    //       fat,
    //       calories,
    //       qty,
    //       key,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: "ERROR_ADD_MEAL", err });
    //   });
  };
};
