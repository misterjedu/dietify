import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "black",
    // height: "100%",
  },
  addBtn: {
    backgroundColor: "#e92b80",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    padding: "5px 10px"
  }
}));

const MealDbTable = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Meal</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
              <TableCell align="center">Add</TableCell>
              <TableCell align="center">Del</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.meal.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">
                  <button className={classes.addBtn}>Add</button>
                </TableCell>
                <TableCell align="center">
                  {(row.del, (<HighlightOffIcon />))}
                </TableCell>
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
    meal: state.mealDataBase.meal
  };
};

export default connect(mapStateToProps)(MealDbTable);
