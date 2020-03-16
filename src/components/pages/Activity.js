import React, { Component } from "react";
import BreadCrumb from "../layout/BreadCrumb";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  navArrow: {
    backgroundColor: "#cccccc",
    padding: "40",
    borderRadius: "50%",
    fontSize: "30px"
  }
};

class Activity extends Component {
  render() {
    // Destructure the props
    const { classes } = this.props;
    return (
      <div>
        <BreadCrumb value="Activity" />
        <div className="activity-section-one">
          <div className="container">
            <div id="activity-date">
              <div className="activity-date-arrow">
                <NavigateBeforeRoundedIcon className={classes.navArrow} />
              </div>
              <div className="activity-date-picker">
                <h2>15th February</h2>
                <button>Change Date</button>
              </div>
              <div className="activity-date-arrow">
                <NavigateNextRoundedIcon className={classes.navArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="activity-section-two">
          <div className="container">
            {/* Calories Consumed */}
            <div id="activity-calories-consumed">
              <p>Calories Consumed</p>
              <div>
                <p id="activity-calories-recommended">100 Kcal</p>
                <p id="activity-calories-left">100 Kcal</p>
              </div>
              <button>1500cal Recommended</button>
            </div>
            {/* Diet */}
            <div id="activity-diet">
              <div id="activity-diet-carbs">
                <span>Carbs</span>
                <span>150g Left</span>
              </div>
              <div id="activity-diet-protein">
                <span>Protein</span>
                <span>150g Left</span>
              </div>
              <div id="activity-diet-fat">
                <span>Fat</span>
                <span>150g Left</span>
              </div>
            </div>
            {/* Calories Burnt */}
            <div id="activity-calories-burnt">
              <p>Calories Burnt</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={80}
                />
                <p id="activity-calories-recommended">100 Kcal</p>
                <p id="activity-calories-left">600 Kcal</p>
              </div>
              <button>700cal Recommended</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Activity);
