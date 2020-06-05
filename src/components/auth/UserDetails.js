import React from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function UserDetails(props) {
  // const classes = useStyles();
  return (
    <>
      {/* Select Location */}
      {/* Select Gender */}

      <TextField
        defaultValue={props.signUpDetails.age || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="age"
        label="Age(Years)"
        type="number"
        name="age"
        autoComplete="age"
        onChange={props.handleInputChange}
      />
      <TextField
        defaultValue={props.signUpDetails.height || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="height"
        label="Height(Cm)"
        type="number"
        name="height"
        autoComplete="height"
        onChange={props.handleInputChange}
      />
      <TextField
        defaultValue={props.signUpDetails.weight || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="2eight"
        label="Weight(Kg)"
        type="number"
        name="weight"
        autoComplete="weight"
        onChange={props.handleInputChange}
      />
      <TextField
        defaultValue={props.signUpDetails.waistLine || ""}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="waistLine"
        label="Waist line(Cm)"
        type="number"
        id="waistLine"
        onChange={props.handleInputChange}
      />
    </>
  );
}

export default UserDetails;
