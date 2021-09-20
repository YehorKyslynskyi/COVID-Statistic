import axios from "axios";

export default class CountriesRequest {
  static async getCountries() {
    const response = await axios.get("https://api.covid19api.com/summary");
    return response.data.Countries;
  }
}
