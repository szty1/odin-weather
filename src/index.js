import Display from './modules/display';
import API from './modules/api';

async function getWeather(location = 'Budapest', metric = true) {
  const forecast = await API.getForecast(location);
  console.log(forecast);
  console.log(processData(forecast, metric));
}

function processData(data, metric) {
  const processedData = {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    temp: Math.round(metric ? data.current.temp_c : data.current.temp_f),
    feelsLike: Math.round(metric ? data.current.feelslike_c : data.current.feelslike_f),
    icon: data.current.condition.icon,
    text: data.current.condition.text,
    humidity: data.current.humidity,
    windDirection: data.current.wind_dir,
    windSpeed: Math.round(metric ? data.current.wind_kph : data.current.wind_mph),
    forecast: [],
  };
  data.forecast.forecastday.forEach(forecastday => {
    processedData.forecast.push({
      date: forecastday.date,
      min: Math.round(metric ? forecastday.day.mintemp_c : forecastday.day.mintemp_f),
      max: Math.round(metric ? forecastday.day.maxtemp_c : forecastday.day.maxtemp_f),
      icon: forecastday.day.condition.icon,
      text: forecastday.day.condition.text,
      
    });
  })
  return processedData;
}


getWeather();