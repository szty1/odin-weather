import Main from './main';
import '../styles/style.css';
import { format, parseISO } from 'date-fns';

export default class Display {

  static metric = true;

  static loadPage() {
    Display.loadPageSkeleton();
    Display.loadHeader();
    Display.loadFooter();
    Display.addListeners();
  }

  // content loaders

  static loadPageSkeleton() {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <div class="header"></div>
    <div class="main"></div>
    <div class="footer"></div>
    `;
  }

  static loadHeader() {
    const header = document.querySelector('.header');

    header.innerHTML = `
    <form id="search" action="#" method="get">
    <input type="text" name="location">
    <button class="search">Go</button>
    </form>
    `;
  }

  static loadFooter() {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
    <span><i class="fa-solid fa-umbrella"></i> WEATHER by szty1 for Odin Project</span>

    `;
  }

  static loadWeather(data) {
    const main = document.querySelector('.main');

    let htmlOutput = `
    <div class="location">
    <span>${data.name}, ${(data.country === 'United States of America') ? data.region : data.country }</span>
    </div>
    <div class="current">
    <div>
    <img class="currenticon" src="https:${data.icon}">
    </div>
    <div>
    <span class="currenttemp">${Display.metric ? data.temp_c : temp_f} ${Display.metric ? "°C": "°F"}</span>
    </div>
    <div>
    <span class="wind"><i class="fa-solid fa-wind"></i> ${data.windDirection} ${Display.metric ? data.windSpeed_kph : windSpeed_mph} ${Display.metric ? "km / h": "mph"}</span>
    <span class="humidity"><i class="fa-solid fa-droplet"></i> ${data.humidity}%</span>
    </div>
    </div>
    <div class="forecast">
    `
    data.forecast.forEach(forecastday => {
      htmlOutput += `
        <div class="forecastday">
        <span class="forecastdate">${format(parseISO(forecastday.date), "EEE")}</span>
        <img class="forecasticon" src="https:${forecastday.icon}">
        <span class="forecatsmin">${Display.metric ? forecastday.min_c: forecastday.min_f} ${Display.metric ? "°C": "°F"}</span>
        <span class="forecatsmax">${Display.metric ? forecastday.max_c: forecastday.max_f} ${Display.metric ? "°C": "°F"}</span>
        </div>
      `
    });

    htmlOutput += `</div>`;

    main.innerHTML = htmlOutput;
  }

  static loadError(error) {
    const main = document.querySelector('.main');
    main.innerHTML = `
    <span>${error.message}</span>
    `;
  }

  static loadLoadingAnim() {
    const main = document.querySelector('.main');
    main.innerHTML = `
    Loading...
    `;
  }

  // input handlers

  static handleSearch(e) {
    e.preventDefault();
    const form = document.getElementById("search");
    if (form.location.value != null) {
      Display.loadLoadingAnim();
      Main.getWeather(form.location.value);
form.prevent
    }
  }

  // add event listeners

  static addListeners() {
    const searchButton = document.querySelector('.search');
    searchButton.addEventListener('click', Display.handleSearch);
  }
  
}