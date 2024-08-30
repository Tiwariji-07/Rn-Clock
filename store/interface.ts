export interface CityType {
  city: string;
  city_ascii: string;
  lat: number;
  lng: number;
  pop: number;
  country: string;
  iso2: string;
  iso3: string;
  province: string;
  timezone: string;
  state_ansi?: string;
}

export interface CityStoreType {
  name: string;
  zone: string;
}
