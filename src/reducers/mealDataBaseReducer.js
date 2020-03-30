import uuid from "uuid/v1";

function createData(name, calories, fat, carbs, protein, id, edit, del) {
  return { name, calories, fat, carbs, protein, id, edit, del };
}

const initState = {
  meal: [
    createData("Bread", 159, 6.0, 24, 4.0, uuid()),
    createData("Egg", 159, 6.0, 24, 4.0, uuid()),
    createData("Rice", 159, 6.0, 24, 4.0, uuid()),
    createData("Bread", 159, 6.0, 24, 4.0, uuid()),
    createData("Pap", 159, 6.0, 24, 4.0, uuid()),
    createData("Milk", 159, 6.0, 24, 4.0, uuid()),
    createData("Sugar", 159, 6.0, 24, 4.0, uuid()),
    createData("Yam", 159, 6.0, 24, 4.0, uuid()),
    createData("Chin Chin", 159, 6.0, 24, 4.0, uuid()),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Sand Wich", 159, 6.0, 24, 4.0),
    createData("Yam", 237, 9.0, 37, 4.3),
    createData("Rice", 262, 16.0, 24, 6.0),
    createData("Beans", 159, 6.0, 24, 4.0),
    createData("Egg", 237, 9.0, 37, 4.3),
    createData("Corn", 262, 16.0, 24, 6.0)
  ]
};

const mealDbReducer = (state = initState, action) => {
  return state;
};

export default mealDbReducer;
