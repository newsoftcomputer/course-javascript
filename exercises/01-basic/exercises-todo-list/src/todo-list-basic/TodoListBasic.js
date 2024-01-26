
// JS
// import ''

// Styles
import styles from './TodoListBasic.module.css'

document.querySelector('#todo-list-basic').innerHTML = `

    <section class='tlb'>
        
        <header class='tlb__header'>
            <h2 class='${styles.tlb__header_title}'>TODO LIST BASIC</h2>
        </header>
        
        <form class='tlb__form'>
            <input id='input_task' type='text' placeholder='Write the task'>
            <button id='button_task'>Add Task</button>
        </form>

        <div class='tlb__tasks'>
            <h3 class='${styles.tlb__tasks_subtitle}'>Tasks added</h3>

        </div>

    </section>

`;

let inputTask =  document.querySelector('#input_task')
inputTask.addEventListener('click', () => {
    console.log('Hola')
});

let buttonTask =  document.querySelector('#button_task')
buttonTask.addEventListener('click', () => {
    console.log('Hola')
});


function handleOnChange(e) {
    // e.preventDefault();
    // let inputText = e.target.value
    // console.log(inputText)
    console.log('Hola')    
}
