import React from "react";
import BreadCrumb from "../layout/BreadCrumb";
import Chart from "../charts/Chart";
import GroupedChart from "../charts/GroupedChart";

const DashBoard = function() {
  // const [selectedDate, handleDateChange] = useState({
  //   dailyCalorie: {},
  //   dailyFoodIntake: {},
  //   weeklyCalorie: {},
  //   weeklyFoodIntake: {}
  // });

  return (
    <div>
      <BreadCrumb value="DashBoard" />

      <div className="DashboardSectionOne">
        <div className="container">
          <div className="DashboardStatusContainer">
            <div className="statusNumber">
              <p>BMI</p>
              <button>27%</button>
            </div>
            <p>
              Status: <span>Over-Weight</span>
            </p>
          </div>

          <div className="DashboardStatusContainer">
            <div className="statusNumber">
              <p>ADFI</p>
              <button>900g</button>
            </div>
            <p>
              Status: <span>Too Much </span>
            </p>
          </div>

          <div className="DashboardStatusContainer">
            <div className="statusNumber">
              <p>ADCI</p>
              <button>1500 Kcal</button>
            </div>
            <p>
              Status: <span>Moderate </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Charts  */}

      <div className="dailyReport">
        <div className="container">
          <button>Daily Report</button>
          <div className="dailyReportHeading">
            <p>10th April to 17th April</p>
            <button>Change</button>
          </div>

          <div className="dailyReportCharts">
            <div className="dailyChart dailyCaloreChart">
              <Chart
                data={[2100, 1600, 1800, 2400, 1200, 2000, 600, 0]}
                label="Daily Calorie Intake"
                title="Daily Calorie Intake (Kcal)"
              />
            </div>

            <div className="dailyChart dailyFoodIntakeChart">
              <Chart
                data={[2000, 1000, 2800, 1200, 2800, 1500, 1600, 0]}
                label="Daily Food Intake"
                title="Daily Food Intake(g)"
              />
            </div>
            <div className="dailyChart dailyNutrientIntakeChart">
              <GroupedChart />
            </div>
          </div>
        </div>
      </div>

      {/* Weeekly Report */}
      <div className="weeklyReport">
        <div className="container">
          <button>Weekly Report</button>
          <div className="weeklyReportHeading">
            <p>1st March to 29th March</p>
            <button>Change</button>
          </div>

          <div className="weeklyReportCharts">
            <div className="weeklyChart weeklyCaloreChart">
              <Chart
                data={[2000, 1000, 2800, 1200, 2800, 1500, 1600, 0]}
                label="Weekly Calorie Intake"
                title="Weekly Calorie Intake(Kcal)"
              />
            </div>

            <div className="weeklyChart weeklyFoodIntakeChart">
              <Chart
                data={[2100, 1600, 1800, 2400, 1200, 2000, 600, 0]}
                label="Weekly Food Intake"
                title="Weekly Food Intake(g)"
              />
            </div>
            <div className="weeklyChart weeklyFoodIntakeChart">
              <GroupedChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
