
import styles from './TodoListAdvanced.module.css'

document.querySelector('#todo-list-advanced').innerHTML = `
  <section class='${styles.tlb}'>
    <header class='${styles.tlb__header}'>
      <h2>Todo List Advanced</h2>
    </header>
    
    <form class='${styles.tlb__form}'>
      <input class='${styles.tlb__form_input}' id='input_task' type='text' placeholder='Enter a task'>
      <button class='${styles.tlb__form_button_add}' id='button_add_task' type='button'>Add Task</button>
      <!-- <button class='${styles.tlb__form_button_delete}' id='button_delete_task' type='button'>Delete Task</button> -->
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
const buttonTask = document.querySelector('#button_add_task')
buttonTask.addEventListener('click', (e) => {
  e.preventDefault()
  arraytask.push({
    id: Math.floor(Math.random() * 1000),
    task: newTask,
    status: false
  })
  console.log(arraytask)

  document.querySelector('#task').innerHTML =
    arraytask.map(x => 
      `<div class='${styles.tlb__task_actions}'>
        <div>
          <p>${x.id} - ${x.task} - ${x.status}</p>
        </div>

        <div>
          <a id='delete_task'>
            <svg class='${styles.svg_delete}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>delete</title>
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
          </a>

          <a id='check_task'>
            <svg class='${styles.svg_check}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check-decagram</title
              ><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
            </svg>
          </a>
        </div>

      </div>`
    ).join('')

  // Clear Form
  inputTask.value = ''

  // Delete Task
  const deleteTask = document.querySelector('#delete_task')
    deleteTask.addEventListener('click', () => {
      console.log('dele')
    })

  // Check
  const checkTask = document.querySelector('#check_task')
  checkTask.addEventListener('click', () => {
    console.log('check')
  })
})


