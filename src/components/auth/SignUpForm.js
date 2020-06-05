import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function SignUpForm(props) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={props.signUpDetails.firstName || ""}
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              defaultValue={props.signUpDetails.lastName || ""}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              defaultValue={props.signUpDetails.email || ""}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              defaultValue={props.signUpDetails.password || ""}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              defaultValue={props.signUpDetails.retypePassword || ""}
              variant="outlined"
              required
              fullWidth
              name="retypePassword"
              label="Retype Password"
              type="password"
              id="retypePassword"
              onChange={props.handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignUpForm;
