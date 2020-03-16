import React, { Component } from "react";
import Icon3 from "../../img/icon-3.svg";

class BreadCrumb extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props
  //   };
  // }

  render() {
    return (
      <div className="bread-crumb">
        <div className="container">
          <p>{this.props.value}</p>
          <img src={Icon3} alt="" />
        </div>
      </div>
    );
  }
}

export default BreadCrumb;
