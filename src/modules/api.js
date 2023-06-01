export default class API {

  static API_KEY = 'd45e4a2f87524e6eacd194351232905';

  static async getCurrent(location) {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API.API_KEY}&q=${location}`);
      const responseData = await response.json();
      return responseData;
    } catch (e) {
      return { code: error.name, message: error.message };
    }
  }
  
}