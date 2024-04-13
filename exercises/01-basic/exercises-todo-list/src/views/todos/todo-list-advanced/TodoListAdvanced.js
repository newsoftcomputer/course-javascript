
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

var newTask = ''
var arrayTasks = [id = 0, task, estado = false]

let inputTask = document.querySelector('#input_task_adv')
inputTask.addEventListener('change', (e) => {
    e.preventDefault()
    let task = e.target.value
    task = newTask
    console.log(newTask)
})

let buttonTask =  document.querySelector('#button_task_adv')
buttonTask.addEventListener('click', (e) => {
    e.preventDefault()
    arrayTasks.push([
        id = 1,
        task = newTask,
        estado = false
    ])
    console.log(arrayTasks)

    document.querySelector('#id_tasks_adv').innerHTML = 
    arrayTasks.map( x => 
        `
        <div class='${styles.tla__tasks_adv_cont}'>
            <div>
                <p key='${x}'>${x}</p>
            </div>
            
            <a id='id_delete' click='${deleteTask}' key='${x}' class='${styles.tla__tasks_adv_delete}' type='button' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" fill='#D50000'> <title>Delete Task</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            </a>

            <a id='id_edit' class='${styles.tla__tasks_adv_edit}'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" fill='#76FF03'> <title>Edit Task</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
            </a>
            
        </div>
        
        `
    ).join('')

    // Clear
    let inputTask = document.querySelector('#input_task_adv')
    inputTask.value = ''

    // Delete
    let buttonDelete = document.querySelector('#id_delete').
        buttonDelete.addEventListener('click', () => {

        console.log('Deleted')
    })


})





