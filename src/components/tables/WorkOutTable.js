import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function createData(activity, duration, caloriesBurnt, edit, del) {
  return { activity, duration, caloriesBurnt, edit, del };
}

const rows = [
  createData("Jogging", 30, 234),
  createData("Squat", 35, 221),
  createData("Bicycle Ride", 62, 190)
];

const WorkOutTable = function() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Activity</TableCell>
              <TableCell align="center">Duration&nbsp;(mins)</TableCell>
              <TableCell align="center">CalroriesBurnt&nbsp;(Kcal)</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Del</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.activity}
                </TableCell>
                <TableCell align="center">{row.duration}</TableCell>
                <TableCell align="center">{row.caloriesBurnt}</TableCell>
                <TableCell align="center">
                  {(row.edit, (<EditIcon />))}
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

export default WorkOutTable;
