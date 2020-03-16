import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class GroupedChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Carbohydrate(g)",
            data: [300, 350, 190, 210, 200, 230, 330, 0],
            backgroundColor: "#1FC5AE"
          },
          {
            label: "Protein(g)",
            data: [90, 80, 100, 135, 190, 100, 130, 0],
            backgroundColor: "#E92B80"
          },
          {
            label: "Fat(g)",
            data: [60, 86, 65, 40, 76, 35, 0, 0],
            backgroundColor: "#FFD770"
          }
        ]
      },

      options: {
        responsive: true,
        title: {
          display: true,
          text: "Nutrient Intake",
          fontSize: 25
        },
        legend: {
          position: "right",
          display: false
        },
        barValueSpacing: 20,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar data={this.state.chartData} options={this.state.options} />
      </div>
    );
  }
}

export default GroupedChart;
