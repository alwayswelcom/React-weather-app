import React from "react";

import { detailDataInterface } from "../../interface";
import Card from "../card";
import "./index.css"
export default class DetailView extends React.Component<
  detailDataInterface,
  {}
> {
  render() {
    return (
      <div className="detailview">        
        {this.props.details.daily && (
          <Card
            day={this.props.details.daily.time[0]}
            weather_code={this.props.details.daily.weathercode[0]}
            temperature={this.props.details.daily.temperature_2m_max[0]}
            label={true}
          />
        )}
      </div>
    );
  }
}
