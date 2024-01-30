
class TodoListBasicWC extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const props = [...this.attributes].map(props => {})
    console.log(props)
    this.state = {}
  
    this.saludo = 'Saludo NC'
  }

  setState() {
    
  }

  connectedCallback() {
    this.render()
    this.innerHTML = this.handleChange
    this.innerHTML = this.handleClick
  }

  handleChange(e) {
    e.preventDefault()
    let text = e.target.value
    console.log(text)
    
  }

  handleClick() {
    console.log('Cliked')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>TODO LIST BASIC - WEB COMPONENTS</h2>
      <input onchange=${this.handleChange} type="text" placeholder='Add to list'/>
      <button type="button" onclick=${this.handleClick}>Add task</button>

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

customElements.define('todo-list-basic-wc', TodoListBasicWC);