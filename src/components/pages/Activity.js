import React, { useState, useEffect } from "react";
import BreadCrumb from "../layout/BreadCrumb";
import LinearProgress from "@material-ui/core/LinearProgress";
import MealTable from "../tables/MealTable";
import WorkOutTable from "../tables/WorkOutTable";
import PopModal from "../Utils/PopModal";
import DatePick from "../Utils/DatePick";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

const styles = {
  navArrow: {
    backgroundColor: "#e92b80;",
    padding: "40",
    borderRadius: "50%",
    fontSize: "40px",
    cursor: "pointer",
    fill: "#ffffff",
  },
  progBar: {
    height: 15,
  },
};

const Meal = (props) => {
  return (
    <div className="container">
      <p id="meal-type">{props.meal}</p>
      <LinearProgress
        style={styles.progBar}
        variant="determinate"
        color="secondary"
        value={props.value}
      />
      <div id="recommended-consumed-container">
        <p>{props.consumed}</p>
        <p>{props.recommended + "(Recommended) "}</p>
      </div>
      <PopModal typeOfMeal={props.meal} />
      <MealTable typeOfMeal={props.meal} />
    </div>
  );
};

const Activity = (props) => {
  // console.log(props.wholeMeal);
  // Progress Bar for Each meal type
  const progressBreakFast = props.wholeMeal
    .filter((meal) => meal.mealType === "Break Fast")
    .map((entry) => entry.calories)
    .reduce((a, b) => a + b, 0);

  const progressLaunch = props.wholeMeal
    .filter((meal) => meal.mealType === "Launch")
    .map((entry) => entry.calories)
    .reduce((a, b) => a + b, 0);

  const progressDinner = props.wholeMeal
    .filter((meal) => meal.mealType === "Dinner")
    .map((entry) => entry.calories)
    .reduce((a, b) => a + b, 0);

  const progressSnack = props.wholeMeal
    .filter((meal) => meal.mealType === "Snack")
    .map((entry) => entry.calories)
    .reduce((a, b) => a + b, 0);

  let totalDailyProtein = props.wholeMeal
    .map((entry) => entry.protein)
    .reduce((a, b) => a + b, 0);

  let totalDailyCarbs = props.wholeMeal
    .map((entry) => entry.carbs)
    .reduce((a, b) => a + b, 0);
  let totalDailyFat = props.wholeMeal
    .map((entry) => entry.fat)
    .reduce((a, b) => a + b, 0);

  // Recommeded nutrients
  let dailyRecommededProtein = 60;
  let dailyRecommededCarbs = 100;
  let dailyRecommededFat = 20;
  const recommendedCal = 2000;

  const calConsumed =
    progressSnack + progressDinner + progressLaunch + progressBreakFast;
  const calConsumedPercent = Math.floor((calConsumed / recommendedCal) * 100);
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
              value={calConsumedPercent}
            />
            <div className="activity-calories-consumed-items">
              <p id="activity-calories-recommended">{calConsumed}Kcal</p>
              <p id="activity-calories-left"> {recommendedCal}Kcal</p>
            </div>
            <button className="activity-calories-consumed-items">
              {recommendedCal}Kcal recommended
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
                  value={Math.round(
                    (totalDailyCarbs / dailyRecommededCarbs) * 100
                  )}
                />
              </div>
              <p>
                {totalDailyCarbs}g of {dailyRecommededCarbs}g
              </p>
            </div>
            <div id="activity-diet-protein">
              <p>Protein</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={Math.round(
                    (totalDailyProtein / dailyRecommededProtein) * 100
                  )}
                />
              </div>

              <p>
                {totalDailyProtein}g of {dailyRecommededProtein}g
              </p>
            </div>
            <div id="activity-diet-fat">
              <p>Fat</p>
              <div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={Math.round((totalDailyFat / dailyRecommededFat) * 100)}
                />
              </div>
              <p>
                {totalDailyFat}g of {dailyRecommededFat}g
              </p>
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
        <Meal
          meal="Break Fast"
          recommended={600 + "Kcal"}
          consumed={progressBreakFast + "Kcal"}
          value={Math.round((progressBreakFast / 600) * 100)}
        />
        <Meal
          meal="Launch"
          recommended={600 + "Kcal"}
          consumed={progressLaunch + "Kcal"}
          value={Math.round((progressLaunch / 600) * 100)}
        />
        <Meal
          meal="Dinner"
          recommended={600 + "Kcal"}
          consumed={progressDinner + "Kcal"}
          value={Math.round((progressDinner / 600) * 100)}
        />
        <Meal
          meal="Snack"
          recommended={600 + "Kcal"}
          consumed={progressSnack + "Kcal"}
          value={Math.round((progressSnack / 600) * 100)}
        />

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

const mapStateToProps = (state) => {
  return {
    wholeMeal: state.meal.meal,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "Meals",
    },
  ])
)(Activity);
