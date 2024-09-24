const btnAddTarea = document.getElementById('btn-add-tarea');
const btnRemoveTareas = document.getElementById('btn-remove-tareas');
const addTarea = document.getElementById('add-tarea');
const filterAddTarea = document.getElementById('filter-add-tarea');
const btnInsertTarea = document.getElementById('btn-insert-tarea');

const containerTareas = document.getElementById('container-tareas');
let inputText = document.getElementById('input-text');
let resultado = document.getElementById('resultado');

// Array tareas
let arrayTareas = [];

// const inputInsertText = () => {
//     let inputTextValue = document.getElementById('input-text').value;
//     containerTareas.innerText = inputTextValue;
//     document.getElementById('input-text').value = "";
//     insertAndClose();
// }

const inputInsertText = () => {
    const inputTextValue = inputText.value.trim();

    if(inputTextValue) {
        arrayTareas.push(inputTextValue);
        updateTareas();
        document.getElementById('input-text').value = "";

    } else {
        alert('Inserta una tarea');
    }
}

const  updateTareas = () => {
    containerTareas.innerHTML = "";  //

    arrayTareas.forEach(tarea => {
        const divTarea = document.createElement('div');
        divTarea.innerText = tarea;
        containerTareas.appendChild(divTarea);
    })
}

btnAddTarea.addEventListener('click', () => {
addTarea.classList.toggle('display-block');
filterAddTarea.classList.toggle('display-block');
})

filterAddTarea.addEventListener('click', () => {
    filterAddTarea.classList.toggle('display-block');
    addTarea.classList.toggle('display-block');  
})

const insertAndClose = () => {
    filterAddTarea.classList.toggle('display-block');
    addTarea.classList.toggle('display-block');  
}

btnInsertTarea.addEventListener('click', () => {
    filterAddTarea.classList.toggle('display-block');
    addTarea.classList.toggle('display-block');  
    inputInsertText();
})

inputText.addEventListener('keydown', (event) => {
if(event.key === "Enter") {
    inputInsertText();
    insertAndClose();
}
});


// Reset tareas
// btnRemoveTareas.addEventListener('click', () => {
//     arrayTareas = [];
// })