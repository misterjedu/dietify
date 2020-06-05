import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MealDbTable from "../tables/MealDbTable";
import ModalSearchForm from "../Forms/ModalSearchForm";
import AddMeal from "../miniComponents/AddMeal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

// let typeOfMeal;

function ModalTabs(props) {
  // Match Props to Global Variables
  const typeOfMeal = props.typeOfMeal;
  const closeModal = props.close;

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [step, setStep] = useState({
    history: 1,
    search: 1,
  });

  const nextHistoryStep = () => {
    setStep({ ...step, history: step.history + 1 });
  };

  const prevHistoryStep = () => {
    setStep({ ...step, history: step.history - 1 });
  };

  const nextSearchStep = () => {
    setStep({ ...step, search: step.search + 1 });
  };

  const prevSearchStep = () => {
    setStep({ ...step, search: step.search - 1 });
  };

  const [mealId, setMealId] = useState("");

  const history = (props) => {
    if (step.history === 1) {
      return (
        <MealDbTable
          mealType="Meal"
          nextStep={nextHistoryStep}
          getMealId={getMealId}
        />
      );
    } else if (step.history === 2) {
      return (
        <AddMeal
          mealId={mealId}
          typeOfMeal={typeOfMeal}
          close={closeModal}
          addButton={true}
        >
          <ArrowBackIcon onClick={prevHistoryStep} />
        </AddMeal>
      );
    }
  };

  const search = () => {
    if (step.search === 1) {
      return <ModalSearchForm nextStep={nextSearchStep} />;
    } else if (step.search === 2) {
      return (
        <AddMeal>
          <ArrowBackIcon onClick={prevSearchStep} />
        </AddMeal>
      );
    }
  };

  const getMealId = (id) => {
    setMealId(id);
    nextHistoryStep();
  };

  return (
    <div className={classes.flipContainer}>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="History" {...a11yProps(0)} />
            <Tab label="Search" {...a11yProps(1)} />
            <Tab label="Add Custom" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {history}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {search}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddMeal close={props.close} />
        </TabPanel>
      </div>
    </div>
  );
}

export default ModalTabs;
