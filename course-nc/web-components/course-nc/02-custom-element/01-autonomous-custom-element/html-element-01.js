
class AppElement extends HTMLElement {
    constructor() {
      super();
      console.log("Inicializado...");
    }
  }
  
  customElements.define("app-element", AppElement);