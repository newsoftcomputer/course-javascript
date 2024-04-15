
// JS

// Styles
import styles from './TodoListBasic.module.css'

document.querySelector('#todo-list-basic').innerHTML = `

    <section class='tlb'>
        
        <header class='tlb__header'>
            <h2 class='${styles.tlb__header_title}'>TODO LIST BASIC</h2>
        </header>
        
        <form class='tlb__form'>
            <input id='input_task' class='${styles.tlb__form_input}' type='text' placeholder='Write the task'>
            <button id='button_task' class='${styles.tlb__form_button}'>Add Task</button>
        </form>

        <div class='tlb__tasks'>
            <h3 class='${styles.tlb__tasks_subtitle}'>Tasks added</h3>

            <div id='tasks'></div>
        </div>

    </section>

`

var texto
var arrayTasks = []

let inputTask = document.querySelector('#input_task')
inputTask.addEventListener('change', (e) => {
    e.preventDefault()
    // console.log('Change Text input')
    texto = e.target.value
})

let buttonTask = document.querySelector('#button_task')
buttonTask.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked button')
    arrayTasks.push(texto)
    console.log(arrayTasks)

    document.querySelector('#tasks').innerHTML = 
        arrayTasks.map(x =>
            `<p>${x}</p>`
        ).join('')

    let inputText = document.querySelector('#input_task')
    inputText.value = ''
    
})