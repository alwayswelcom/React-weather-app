import React from "react";

import { cardInterface } from "../../interface";
import { getStatus, getDays } from "../../lib";
import "./index.css";
export default class Card extends React.Component<cardInterface, {}> {
  render() {
    let status = getStatus(this.props.weather_code);
    return (
      <div className="card">
        <p className="title">{getDays(this.props.day)}</p>
        <div className="content">
          <div className="status-svg">{status.element}</div>
          <div className="status">
            <div className="temperature">{this.props.temperature}</div>
            {this.props.label && status.data}
          </div>
        </div>
      </div>
    );
  }
}
