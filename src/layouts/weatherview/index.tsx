import React from "react";

import { DetailView, ForecastingView, HrMenu } from "../../components";

import { CountryList } from "../../constants/countryList";
import "./index.css";

class WeatherView extends React.Component<
  {},
  {
    page: number;
    lat: number;
    long: number;
    startDate: String;
    endDate: String;
    forcastingData: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 0,
      lat: CountryList[0].lat,
      long: CountryList[0].long,
      startDate: "",
      endDate: "",
      forcastingData: {},
    };
  }

  componentDidMount() {
    this.getDates();
  }
  handelOnClick = (key: number) => {
    this.setState(
      { page: key, lat: CountryList[key].lat, long: CountryList[key].long },
      () => {
        this.getWeather();
      }
    );
  };

  getWeather = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}latitude=${this.state.lat}&longitude=${this.state.long}&daily=weathercode,temperature_2m_max,rain_sum,showers_sum,snowfall_sum&timezone=America%2FNew_York&start_date=${this.state.startDate}&end_date=${this.state.endDate}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        this.setState({ forcastingData: result });
      });
  };
  getDates = () => {
    let current_date: Date = new Date();
    let year_c: number = current_date.getFullYear();
    let month_c: number = Number(
      String(current_date.getMonth() + 1).padStart(2, "0")
    );
    let date_c: number = Number(
      String(current_date.getDate()).padStart(2, "0")
    );
    current_date.setDate(date_c + 4);
    let year_l: number = current_date.getFullYear();
    let month_l: number = Number(
      String(current_date.getMonth() + 1).padStart(2, "0")
    );
    let date_l: number = Number(
      String(current_date.getDate()).padStart(2, "0")
    );
    this.setState(
      {
        startDate: `${year_c}-${month_c}-${date_c}`,
        endDate: `${year_l}-${month_l}-${date_l}`,
      },
      () => {
        this.getWeather();
      }
    );
  };
  render() {
    return (
      <div className="weatherview">
        <HrMenu
          menuList={CountryList}
          currentPage={this.state.page}
          onClick={this.handelOnClick}
        />
        <div className="main-content">
          <DetailView details={this.state.forcastingData} />
          <ForecastingView details={this.state.forcastingData} />
        </div>
      </div>
    );
  }
}

export default WeatherView;
