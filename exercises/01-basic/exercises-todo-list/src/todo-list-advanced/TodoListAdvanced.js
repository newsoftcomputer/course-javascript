
// Styles
import styles from './TodoListAdvanced.module.css'

document.querySelector('#todo-list-advanced').innerHTML = `
    
    <section class='${styles.tla}'>
        <div class='${styles.tla__header}'>
            <h2 class='${styles.tla__header_title}'>TODO LIST ADVANCED</h2>
        </div>

        
        <form class='${styles.tla__form}'>
            <input id='input_task_adv' class='${styles.tla__form_input}' type='text' placeholder='Writer the task'/>
            <button id='button_task_adv' class='${styles.tla__form_button}' >Add to task</button>   
        </form>

        <div class='${styles.tla__tasks}'>
            <h3 class='${styles.tla__tasks_title}'>Tasks added</h3>
            <div id='id_tasks_adv' class='${styles.tla__tasks_tasks}'></div>
        </div>
    </section>

`

var task = ''
var arrayTasks = []

let inputTask = document.querySelector('#input_task_adv')
inputTask.addEventListener('change', (e) => {
    e.preventDefault()
    let newTask = e.target.value
    task = newTask
    console.log(task)
})

let buttonTask =  document.querySelector('#button_task_adv')
buttonTask.addEventListener('click', (e) => {
    e.preventDefault()
    arrayTasks.push(task)
    console.log(arrayTasks)

    document.querySelector('#id_tasks_adv').innerHTML = 
    arrayTasks.map( x => {
        `<div>
            <p>${x}</p>
        </div>
        `
    }).join()
})