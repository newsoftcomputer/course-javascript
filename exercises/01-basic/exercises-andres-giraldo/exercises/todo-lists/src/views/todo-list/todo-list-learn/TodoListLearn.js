

import styles from './TodoListLearn.module.css'


document.querySelector('#todo-list-learn').innerHTML = `

    <section class='${styles.tll}'>
        <header class='${styles.tll__header}'>
            <h2>TODO LIST</h2>
        </header>

        <form class='${styles.tll__form}'>
            <input id='input_task' class='${styles.tll__form_inputask}' type='text' placeholder='Writer the task'>
            <button id='button_task' class='${styles.tll__form_button}'>ADD TASK</button>
        </form>

        <div class='${styles.tll__tasks}'>
            <h4>TASKS</h4>

            <div id='tasks'></div>
        </div>
    </section>

`

var newTask
var arrayTasks = []

// OnChange
const inputTask = document.querySelector('#input_task')
inputTask.addEventListener('change', (e) => {
    e.preventDefault()
    newTask = e.target.value

    console.log(newTask)
})

// AddTask
const buttonTask = document.querySelector('#button_task')
buttonTask.addEventListener('click', (e) => {
    e.preventDefault()

    arrayTasks.push({
        id: Math.floor(Math.random() * 1000),
        task: newTask,
        status: false
    })
    console.log(arrayTasks)

    document.querySelector('#tasks').innerHTML =
        arrayTasks.map(x =>
            `
            <div class='${styles.tll__tasks_actions}'>
                <div><p>${x.id} - ${x.task} - ${x.status}</p></div>
           
                <div>
                    <a id='delete_task'>
                        <svg class='${styles.tll__tasks_svg_delete}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg> 
                    </a>

                    <a id='check_task'>
                        <svg class='${styles.tll__tasks_svg_check}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-decagram</title><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>
                    </a>
                </div>
            </div>
            `
        ).join('')
    

        // Clear
        inputTask.value = ''

        // Delete
        const deleteTask = document.querySelector('#delete_task')
        deleteTask.addEventListener('click', () => {
            console.log('Deleted')
        })

        // Check
        const checkTask = document.querySelector('#check_task')
        checkTask.addEventListener('click', () => {
            console.log('Checked')
        })

})



