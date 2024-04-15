
import styles from './TodoListBasic.module.css'

document.querySelector('#todo-list-basic').innerHTML = `
  <section class='${styles.tlb}'>
    <header class='${styles.tlb__header}'>
      <h2>Todo List Basic</h2>
    </header>
    
    <form class='${styles.tlb__form}'>
      <input class='${styles.tlb__form_input}' id='input_task' type='text' placeholder='Enter a task'>
      <button class='${styles.tlb__form_button}' id='button_task' type='button'>Add Task</button>
    </form>

    <div class='${styles.tlb__task}'>
      <h3 class='${styles.tlb__task_subtitle}'>Tasks Added</h3>

      <div id='task'></div>
    </div>
  </section>
`
var newTask
var arraytask = []

const inputTask = document.querySelector('#input_task')
inputTask.addEventListener('change', (e) => {
  e.preventDefault()
  newTask = e.target.value
})

// Add Task
const buttonTask = document.querySelector('#button_task')
buttonTask.addEventListener('click', (e) => {
  e.preventDefault()
  arraytask.push(newTask)
  console.log(arraytask)

  document.querySelector('#task').innerHTML =
    arraytask.map(x => 
      `<p>${x}</p>`
    ).join('')

  inputTask.value = ''
})