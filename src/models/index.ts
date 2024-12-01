import { LoadingStage } from '@/enum';

export type ThemeType = 'dark' | 'light';

export interface ErrorMessageType {
  status: number | null;
  message: string | string[];
}

export interface ApiStatusState<T> {
  apiData: T | null;
  apiStatus: LoadingStage | null;
  apiError: ErrorMessageType | null;
}

interface LocalNames {
  af?: string;
  ar?: string;
  ascii?: string;
  az?: string;
  bg?: string;
  ca?: string;
  da?: string;
  de?: string;
  el?: string;
  en?: string;
  eu?: string;
  fa?: string;
  feature_name?: string;
  fi?: string;
  fr?: string;
  gl?: string;
  he?: string;
  hi?: string;
  hr?: string;
  hu?: string;
  id?: string;
  it?: string;
  ja?: string;
  la?: string;
  lt?: string;
  mk?: string;
  nl?: string;
  no?: string;
  pl?: string;
  pt?: string;
  ro?: string;
  ru?: string;
  sk?: string;
  sl?: string;
  sr?: string;
  th?: string;
  tr?: string;
  vi?: string;
  zu?: string;
}

export interface IGeocoding {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country?: string;
  state?: string;
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Rain {
  '1h'?: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
