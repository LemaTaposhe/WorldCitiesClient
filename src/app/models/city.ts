import { Country } from "./country";

export class City {
  constructor(
    public id: number,
    public name: string,
    public lat: number,
    public lon: number,
    public countryId: number,
    public country: Country,
    public cities?: City[] // Optional property for nested cities
  ) { }
}
