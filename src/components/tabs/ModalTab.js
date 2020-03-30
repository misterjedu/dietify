import React from "react";
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
import Button from "@material-ui/core/Button";

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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0 !important",
    transform: "rotateX(180deg)"
  },
  flipContainer: {
    overflow: "auto",
    transform: "rotateX(180deg)"
  }
}));

function ModalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <MealDbTable mealType="Meal" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ModalSearchForm />
          <MealDbTable mealType="Meal" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddMeal>
            <Button> Add Meal </Button>
          </AddMeal>
        </TabPanel>
      </div>
    </div>
  );
}

export default ModalTabs;
