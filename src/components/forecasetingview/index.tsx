import React from "react";

import Card from "../card";
import { detailDataInterface } from "../../interface";
import './index.css';

export default class ForecastingView extends React.Component<
  detailDataInterface,
  { newArr: number[] }
> {
  constructor(props: detailDataInterface) {
    super(props);
    this.state = {
      newArr: Array.from(Array(4).keys()),
    };
  }
  render() {
    return (
      <div className="forecasting-view">
        {this.props.details.daily &&
          this.state.newArr.map((item, index) => (
            <Card
              key={index}
              day={this.props.details.daily.time[item + 1]}
              weather_code={this.props.details.daily.weathercode[item + 1]}
              temperature={
                this.props.details.daily.temperature_2m_max[item + 1]
              }
              label={false}
            />
          ))}
      </div>
    );
  }
}
