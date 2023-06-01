import Display from './modules/display';
import API from './modules/api';

async function getCurrent(location = 'Budapest') {
  const currentweather = await API.getCurrent(location);
  console.log(currentweather);
}

getCurrent('Portland');