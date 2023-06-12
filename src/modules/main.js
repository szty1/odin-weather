import Display from './display';
import API from './api';

export default class Main {

  currentdata = {};

  static init() {
    Display.loadPage();
    Main.getWeather('Budapest');
  }

  static async getWeather(location) {
    console.log(location);
    const forecast = await API.getForecast(location);
    if ('error' in forecast) {
      Display.loadError(forecast.error);
    } else {
      this.currentdata = Main.processData(forecast);
      Display.loadWeather(this.currentdata);
    }
  }
  
  static processData(data) {
    const processedData = {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temp_c: Math.round(data.current.temp_c),
      temp_f: Math.round(data.current.temp_f),
      feelsLike_c: Math.round(data.current.feelslike_c),
      feelsLike_f: Math.round(data.current.feelslike_f),
      icon: data.current.condition.icon,
      code: data.current.condition.code,
      text: data.current.condition.text,
      humidity: data.current.humidity,
      windDirection: data.current.wind_dir,
      windSpeed_kph: Math.round(data.current.wind_kph),
      windSpeed_mph: Math.round(data.current.wind_mph),
      forecast: [],
    };
    data.forecast.forecastday.forEach(forecastday => {
      processedData.forecast.push({
        date: forecastday.date,
        min_c: Math.round(forecastday.day.mintemp_c),
        min_f: Math.round(forecastday.day.mintemp_f),
        max_c: Math.round(forecastday.day.maxtemp_c),
        max_f: Math.round(forecastday.day.maxtemp_f),
        icon: forecastday.day.condition.icon,
      });
    })
    return processedData;
  }

}