import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import UserDetails from "./UserDetails";
import TargetDetail from "./TargetDetail";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function getSteps() {
  return ["Sign Up details", "Personal details", "Your Target"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Set your email, User name and Password";
    case 1:
      return "Give us more details about yourself";
    case 2:
      return "What's your target goal?";
    default:
      return "";
  }
}

const onSignUp = () => {
  return null;
};

function SignUp() {
  const classes = useStyles();
  useEffect(() => {
    console.log("Rendering");
  });

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "Muyiwa",
    email: "Muyiwa@gmail.com",
    password: 12234,
    retypePassword: 12234,
    age: 23,
    height: 168,
    weight: 90,
    waistLine: 89,
    targetWeight: 70,
    targetWaistLine: 76,
  });

  const handleInputChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };

  const {
    firstName,
    lastName,
    email,
    password,
    retypePassword,
    age,
    height,
    weight,
    waistLine,
    targetWeight,
    targetWaistLine,
  } = formDetails;

  const values = {
    firstName,
    lastName,
    email,
    password,
    retypePassword,
    age,
    height,
    weight,
    waistLine,
    targetWeight,
    targetWaistLine,
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const SignupForm = () => {
    if (activeStep === 0) {
      return (
        <SignUpForm
          signUpDetails={values}
          handleInputChange={handleInputChange}
        />
      );
    } else if (activeStep === 1) {
      return (
        <UserDetails
          signUpDetails={values}
          handleInputChange={handleInputChange}
        />
      );
    } else if (activeStep === 2) {
      return (
        <TargetDetail
          signUpDetails={values}
          handleInputChange={handleInputChange}
        />
      );
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* Stepper  */}
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed. You may now sign up.
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
              </div>
            )}
          </div>
        </div>

        <SignupForm />
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>

          {activeStep <= 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={onSignUp}>
              Sign Up
            </Button>
          )}
        </div>
        <Grid container>
          <Grid item>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}

export default SignUp;
