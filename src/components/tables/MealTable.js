import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ConfirmDelete from "../dialogs/ConfirmDelete";
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
    cursor: "pointer"
  }
};

let mealIndex;
let mealType;
let mealVar;

const MealTable = function(props) {
  const [open, setOpen] = useState(false);

  if (props.meal === "Break Fast") {
    mealType = props.breakFast;
  } else if (props.meal === "Launch") {
    mealType = props.launch;
  } else if (props.meal === "Dinner") {
    mealType = props.dinner;
  } else if (props.meal === "Snack") {
    mealType = props.snack;
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setOpen(false);
    props.deleteMeal(mealIndex, mealVar);
  };

  const handleDelete = (id, meal) => {
    mealIndex = id;
    mealVar = meal;

    setOpen(true);
  };

  const handleEdit = e => {
    // confirm("You sure");
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {props.meal} ({mealType.length})
              </TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Del</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mealType.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{<EditMeal></EditMeal>}</TableCell>
                <TableCell align="center">
                  <HighlightOffIcon
                    id={row.id}
                    style={styles.editDel}
                    onClick={() => {
                      handleDelete(row.id, props.meal);
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
                      Are you sure you want to delete {row.name} This cannot be
                      undone. Click Continue to delete
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
                      Continue
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

const mapStateToProps = state => {
  return {
    breakFast: state.meal.breakFast,
    launch: state.meal.launch,
    dinner: state.meal.dinner,
    snack: state.meal.snack
  };
};

const mapDispacthToProps = dispatch => {
  return {
    deleteMeal: (id, mealType) => {
      dispatch({ type: "DELETE_MEAL", id: id, mealType: mealType });
    }
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(MealTable);
