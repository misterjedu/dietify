import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";

const useStyles = makeStyles(theme => ({
  root: {
    textAllign: "center"
    // fontSize: "2rem"
  },
  button: {
    margin: "5px",
    padding: "15px 30px",
    fontWeight: "bold",
    backgroundColor: "#1fc5ae",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    boxShadow: "3px 3px 5px -2px rgba(66,66,66,1)"
  }
}));

function DatePick() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        className={classes.root}
        inputVariant="outlined"
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button onClick={() => setIsOpen(true)}>Change Date</button>
    </MuiPickersUtilsProvider>
  );
}

export default DatePick;
