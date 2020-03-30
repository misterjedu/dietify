import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Pug from "../../img/pug.png";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {},
  input: {
    marginRight: "20px",
    borderColor: "black",
    padding: "2px 4px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px 0",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between"
  },
  flexDisplay: {
    margin: "20px 0",
    display: "flex",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  button: {
    margin: "20px 0",
    padding: "20px 30px",
    fontWeight: "bold",
    fontSize: "1.5rem",
    backgroundColor: "#e92b80",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    width: "100%",
    boxShadow: "3px 3px 5px -2px rgba(66,66,66,1)"
  }
}));

function AddMeal(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Rice"
            height="140"
            image={Pug}
            title="Rice"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rice
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rice is a staple food, eating across the world, which is rich in
              carbohydate.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={classes.flexDisplay}>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          type="number"
        />
        <Typography variant="body2" display="inline">
          Grams
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography> Energy </Typography>
            <Typography> 300Kcal </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography> Carbs </Typography> <Typography> 10g </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography> Protein </Typography> <Typography> 10g </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography> Fat </Typography> <Typography> 10g </Typography>
          </Paper>
        </Grid>
      </Grid>

      {props.children}
    </div>
  );
}

export default AddMeal;
