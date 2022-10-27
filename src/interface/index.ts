export interface menuListInterface {
  menuList: {
    key: String;
    value: String;
    lat: number;
    long: number;
  }[];
  currentPage: number;
  onClick: any;
}

export interface detailDataInterface {
  details: any;
}

export interface forcastingDataInterface {
  details: any;
}

export interface cardInterface {
  day: string;
  weather_code: number;
  temperature: number;
  label: boolean;
}
