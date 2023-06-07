import '../styles/style.css';

export default class Display {

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
    <div class="weather"></div>
    <div class="footer"></div>
    `;
  }

  static loadHeader() {

  }

  static loadFooter() {

  }

  static loadWeather(data, metric = true) {

  }
  
}