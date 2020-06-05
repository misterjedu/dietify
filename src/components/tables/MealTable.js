import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditMeal from "../Utils/EditMeal";
import { connect } from "react-redux";

const styles = {
  editDel: {
    cursor: "pointer",
  },
};

let mealIndex;
let mealType;
let mealVar;

const MealTable = function (props) {
  const [open, setOpen] = useState(false);

  let breakFastList = (mealType = props.mealFromRed.filter((item) => {
    return item.mealType === "Break Fast";
  }));

  let launchList = props.mealFromRed.filter((item) => {
    return item.mealType === "Launch";
  });

  let dinnerList = props.mealFromRed.filter((item) => {
    return item.mealType === "Dinner";
  });

  let snackList = props.mealFromRed.filter((item) => {
    return item.mealType === "Snack";
  });

  if (props.typeOfMeal === "Break Fast") {
    mealType = breakFastList;
  } else if (props.typeOfMeal === "Launch") {
    mealType = launchList;
  } else if (props.typeOfMeal === "Dinner") {
    mealType = dinnerList;
  } else if (props.typeOfMeal === "Snack") {
    mealType = snackList;
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setOpen(false);
    props.deleteMeal(mealIndex, mealVar);
  };

  const handleDelete = (key, meal) => {
    mealIndex = key;
    mealVar = meal;

    setOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {props.typeOfMeal} ({mealType.length})
              </TableCell>
              <TableCell align="center">Calories &nbsp;(Kcal)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Del</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mealType.map((row) => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.name} ({row.qty}g)
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">
                  <EditMeal
                    styleCss={styles.editDel}
                    mealId={row.id}
                    keyid={row.key}
                    typeOfMeal={props.typeOfMeal}
                  />
                </TableCell>
                <TableCell align="center">
                  <HighlightOffIcon
                    id={row.id}
                    keyId={row.key}
                    style={styles.editDel}
                    onClick={() => {
                      handleDelete(row.key, props.meal);
                    }}
                  />
                </TableCell>

                {/* Dialog */}
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">Delete?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete? This cannot be undone.
                      Click Yes to delete
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleAgree(row.id);
                      }}
                      color="secondary"
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    mealFromRed: state.meal.meal,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    deleteMeal: (key, mealType) => {
      dispatch({ type: "DELETE_MEAL", key: key, mealType: mealType });
    },
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(MealTable);
