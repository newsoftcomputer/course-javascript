
class TodoListBasicWC extends HTMLElement {
  
  constructor() {
    super()
    let shadowRoot = this.attachShadow({mode: 'open'})
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
      <section class='tlbwc'>
        <div class='tlbwc__header'>
          <h2>TODO LIST BASIC - WEB COMPONENTS</h2>
        </div>
        
        <form class='tlbwc__form'>
          <input onchange=${this.handleChange} class='tlbwc__form_input' type="text" placeholder='Add to list'/>
          <button type="button" onclick=${this.handleClick}>Add task</button>
        </form>
        
        <div class='tlbwc__tasks'>
          <h4>Task List</h4>
        </div>

      </section>
      
    `
  }

  static get styles() {
    return `

      :host {
        display: block;
        justify-content: center;
      }

      .tlbwc__form_input {
        padding: .5rem;
      }

    `
  }
}

customElements.define('todo-list-basic-wc', TodoListBasicWC);