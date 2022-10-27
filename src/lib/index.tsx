import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faSnowplow,
  faCloudRain,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";

export const getStatus = (weather: number) => {
  if (50 <= weather && weather <= 69) {
    return {
      element: <FontAwesomeIcon icon={faCloudSunRain} size="3x" />,
      data: "Raining",
    };
  }
  if (70 <= weather && weather <= 79) {
    return {
      element: <FontAwesomeIcon icon={faSnowplow} size="3x" />,
      data: "Snowing",
    };
  }
  if (80 <= weather && weather <= 99) {
    return {
      element: <FontAwesomeIcon icon={faCloudRain} size="3x" />,
      data: "Raining",
    };
  }
  return {
    element: <FontAwesomeIcon icon={faCloudSun} size="3x" />,
    data: "Clouds",
  };
};

export const getDays = (day: string) => {
  let current_date: Date = new Date();
  let getting_date: Date = new Date(day);

  if (
    current_date.getUTCFullYear() === getting_date.getUTCFullYear() &&
    current_date.getUTCMonth() === getting_date.getUTCMonth() &&
    current_date.getUTCDate() === getting_date.getUTCDate()
  ) {
    return "Today";
  } else {
    return DayList[getting_date.getDay()];
  }
};

export const DayList = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
