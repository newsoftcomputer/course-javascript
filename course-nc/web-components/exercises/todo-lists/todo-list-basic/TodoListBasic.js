
class TodoListBasic extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.render()
  }

  changeInput() {
    console.log('Hola')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>Todo List Basic</h2>
      <input type="text" placeholder='Add to list'/>
      <button type="button" onclick=${this.changeInput}>+</button>

      <div>
        <h4>Task List</h4>
      </div>
    `
  }

  static get styles() {
    return `
      :host {
        display: block;
        justify-content: center;
      }
    `
  }
}

customElements.define('todo-list-basic', TodoListBasic);