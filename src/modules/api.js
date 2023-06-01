export default class API {

  static async getData(location) {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d45e4a2f87524e6eacd194351232905&q=${location}`);
      const responseData = await response.json();
      console.log(responseData);
    } catch (e) {
      console.error(e);
    }
  }
  
}