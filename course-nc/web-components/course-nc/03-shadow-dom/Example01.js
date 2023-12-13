
class AppElement extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <div>
          <p>¡Vuelve a la sombra, <span>CSS</span>! ¡NO... PUEDES... PASAR!</p>
        </div>

        <style>
          span {
            background: steelblue;
            padding: 5px;
            color: white;
          }
        </style>
      `;
    }
};
  
customElements.define("app-element", AppElement);