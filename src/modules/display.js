import '../styles/style.css';

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
    <input type="text" name="loc">
    <button class="search">Go</button>
    </form>
    `;
  }

  static loadFooter() {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
    
    `;
  }

  static loadWeather(data) {
    const main = document.querySelector('.main');
    main.innerHTML = `
    <span>${data.name}, ${(data.country === 'United States of America') ? data.region : data.country }</span>
    <img src="https:${data.icon}"><span>${Display.metric ? data.temp_c : temp_f} ${Display.metric ? "°C": "°F"}</span>

    `;
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
    
    `;
  }

  // input handlers

  static handleSearch(e) {
    
  }


  // add event listeners

  static addListeners() {
    const searchButton = document.querySelector('.search');

    searchButton.addEventListener('click', Display.handleSearch);
  }
  
}