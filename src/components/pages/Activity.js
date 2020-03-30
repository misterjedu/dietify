import React from "react";
import BreadCrumb from "../layout/BreadCrumb";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import MealTable from "../tables/MealTable";
import WorkOutTable from "../tables/WorkOutTable";
import PopModal from "../Utils/Modal";
import DatePick from "../Utils/DatePick";

const styles = {
  navArrow: {
    backgroundColor: "#e92b80;",
    padding: "40",
    borderRadius: "50%",
    fontSize: "40px",
    cursor: "pointer",
    fill: "#ffffff"
  }
};

const Activity = ({ classes }) => {
  return (
    <div>
      <BreadCrumb value="Activity" />
      <div className="activity-section-one">
        <div className="container">
          <div id="activity-date">
            <DatePick />
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="activity-section-two">
        <div className="container">
          {/* Calories Consumed */}
          <div id="activity-calories-consumed">
            <h3>KCal Consumed</h3>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={80}
            />
            <div className="activity-calories-consumed-items">
              <p id="activity-calories-recommended">500 Kcal</p>
              <p id="activity-calories-left">100 Kcal</p>
            </div>
            <button className="activity-calories-consumed-items">
              1500cal Recommended
            </button>
          </div>
          {/* Diet */}
          <div id="activity-diet">
            <h3>Diet</h3>
            <div id="activity-diet-carbs">
              <p>Carbs</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={80}
                />
              </div>
              <p>150g Left</p>
            </div>
            <div id="activity-diet-protein">
              <p>Protein</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={80}
                />
              </div>

              <p>150g Left</p>
            </div>
            <div id="activity-diet-fat">
              <p>Fat</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={80}
                />
              </div>
              <p>150g Left</p>
            </div>
          </div>
          {/* Calories Burnt */}
          <div id="activity-calories-burnt">
            <h3>Kcal Burnt</h3>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={50}
            />
            <div id="activity-calorie-container">
              <p id="activity-calories-recommended">100 Kcal</p>
              <p id="activity-calories-left">600 Kcal</p>
            </div>
            <button>700Kcal Recommended</button>
          </div>
        </div>
      </div>

      {/* Section Three */}

      <div className="activity-section-three">
        {/* Breakfast */}
        <div className="container">
          <p id="meal-type">BreakFast</p>
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <div id="recommended-consumed-container">
            <p>Recommended (600Kcal)</p>
            <p>Consumed (500Kcal)</p>
          </div>
          <PopModal />
          <MealTable meal="Break Fast" />
        </div>
        {/* Launch */}
        <div className="container">
          <p id="meal-type">Launch</p>
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <div id="recommended-consumed-container">
            <p>Recommended (600Kcal)</p>
            <p>Consumed (500Kcal)</p>
          </div>
          <PopModal />
          <MealTable meal="Launch" />
        </div>

        {/* Dinnner */}
        <div className="container">
          <p id="meal-type">Dinner</p>
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <div id="recommended-consumed-container">
            <p>Recommended (600Kcal)</p>
            <p>Consumed (500Kcal)</p>
          </div>
          <PopModal />
          <MealTable meal="Dinner" />
        </div>

        {/* Snack */}
        <div className="container">
          <p id="meal-type">Snacks</p>
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <div id="recommended-consumed-container">
            <p>Recommended (600Kcal)</p>
            <p>Consumed (500Kcal)</p>
          </div>
          <PopModal />
          <MealTable meal="Snack" />
        </div>

        {/* WorkOut*/}
        <div className="container">
          <p id="meal-type">Workout</p>
          <PopModal />
          <WorkOutTable />
        </div>

        {/* End of Section three */}
      </div>

      {/* Closing Render Div.. Don't go beyond */}
    </div>
  );
};

export default withStyles(styles)(Activity);
