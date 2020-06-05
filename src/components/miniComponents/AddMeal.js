import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Pug from "../../img/pug.png";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import uuid from "uuid/v1";
import PopUpMessage from "../dialogs/PopUpMessage";
import { addMealAction } from "../../actions/mealActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    marginRight: "20px",
    borderColor: "black",
    padding: "2px 4px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px 0",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
  },
  flexDisplay: {
    margin: "20px 0",
    display: "flex",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: "20px 0",
    padding: "20px 30px",
    fontWeight: "bold",
    fontSize: "1.5rem",
    backgroundColor: "#e92b80",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    width: "100%",
    boxShadow: "3px 3px 5px -2px rgba(66,66,66,1)",
  },
}));

function AddMeal(props) {
  // console.log(props.meals);
  const classes = useStyles();
  let newMeal = props.mealDb.filter((meal) => {
    return meal.id === props.mealId;
  });

  // let currentMealQty;
  // if (props.meals.meal.length === 0) {
  //   currentMealQty = 100;
  // } else {
  //   currentMealQty = props.meals.meal.filter(
  //     (meal) => meal.key === props.keyid
  //   )[0].qty;
  // }
  console.log(props.meals.meal.filter((meal) => meal.key === props.keyid));
  // console.log(currentMealQty);
  // console.log(newMeal);

  // Meal Algorithm
  const { calories, carbs, protein, fat } = newMeal[0];
  const [algMeal, setAlgMeal] = useState({
    calories,
    carbs,
    protein,
    fat,
  });

  const [mealQty, setMealQty] = useState(100);

  const handleChange = (e) => {
    setMealQty(e.target.value);

    setAlgMeal({
      calories: Math.round((e.target.value / 100) * calories),
      carbs: Math.round((e.target.value / 100) * carbs),
      protein: Math.round((e.target.value / 100) * protein),
      fat: Math.round((e.target.value / 100) * fat),
    });
  };

  const handleAddMeal = (
    MealType,
    id,
    name,
    carbs,
    protein,
    fat,
    calories,
    qty,
    key
  ) => {
    props.addMeal(MealType, id, name, carbs, protein, fat, calories, qty, key);
    props.close();
    doesMealExist(props.meals.doesMealExist);
  };

  const handleUpdateMeal = (
    MealType,
    id,
    name,
    carbs,
    protein,
    fat,
    calories,
    qty,
    key
  ) => {
    props.updateMeal(
      MealType,
      id,
      name,
      carbs,
      protein,
      fat,
      calories,
      qty,
      key
    );
    props.close();
  };

  function doesMealExist(val) {
    return val;
  }

  return (
    <div>
      {newMeal.map((meal) => (
        <>
          {props.children}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="meaname"
                height="200"
                image={Pug}
                title="meal.name"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {meal.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {meal.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div className={classes.flexDisplay}>
            <TextField
              className={classes.input}
              id="meal-qty"
              label="Quantity"
              variant="outlined"
              type="number"
              defaultValue={mealQty}
              onChange={(e) => handleChange(e)}
            />
            <Typography variant="body2" display="inline">
              Grams
            </Typography>
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography> Calories </Typography>
                <Typography> {algMeal.calories}kcal </Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography> Carbs </Typography>{" "}
                <Typography> {algMeal.carbs}g </Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography> Protein </Typography>{" "}
                <Typography> {algMeal.protein}g </Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography> Fat </Typography>{" "}
                <Typography> {algMeal.fat}g</Typography>
              </Paper>
            </Grid>
          </Grid>

          {props.addButton ? (
            <Button
              variant="contained"
              color="primary"
              fullWidth="true"
              size="large"
              onClick={() => {
                handleAddMeal(
                  props.typeOfMeal,
                  meal.id,
                  meal.name,
                  algMeal.carbs,
                  algMeal.protein,
                  algMeal.fat,
                  algMeal.calories,
                  mealQty,
                  uuid()
                );
              }}
            >
              Add
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              fullWidth="true"
              size="large"
              onClick={() => {
                handleUpdateMeal(
                  props.typeOfMeal,
                  meal.id,
                  meal.name,
                  algMeal.carbs,
                  algMeal.protein,
                  algMeal.fat,
                  algMeal.calories,
                  mealQty,
                  props.keyid
                );
              }}
            >
              Update
            </Button>
          )}

          <PopUpMessage
            meal="Hello"
            doesMealExist={() => doesMealExist(props.meals.doesMealExist)}
          />
        </>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mealDb: state.mealDataBase.meal,
    meals: state.meal,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    addMeal: (mealType, id, name, carbs, protein, fat, calories, qty, key) => {
      dispatch(
        addMealAction(
          mealType,
          id,
          name,
          carbs,
          protein,
          fat,
          calories,
          qty,
          key
        )
      );
    },
    updateMeal: (
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
      dispatch({
        type: "UPDATE_MEAL",
        id,
        mealType,
        name,
        carbs,
        protein,
        fat,
        calories,
        qty,
        key,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(AddMeal);
