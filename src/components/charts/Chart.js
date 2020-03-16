import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: this.props.label,
            data: this.props.data,
            backgroundColor: "#1FC5AE"
          }
        ]
      },

      options: {
        responsive: true,
        title: {
          display: true,
          text: this.props.title,
          fontSize: 25
        },
        legend: {
          position: "right",
          display: false
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

export default Chart;
