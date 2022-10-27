import React from "react";

import { detailDataInterface } from "../../interface";
import Card from "../card";
export default class DetailView extends React.Component<
  detailDataInterface,
  {}
> {
  render() {
    return (
      <>        
        {this.props.details.daily && (
          <Card
            day={this.props.details.daily.time[0]}
            weather_code={this.props.details.daily.weathercode[0]}
            temperature={this.props.details.daily.temperature_2m_max[0]}
            label={true}
          />
        )}
      </>
    );
  }
}
