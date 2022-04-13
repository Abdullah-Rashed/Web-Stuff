//Model 
let todos;
let savedTodos = JSON.parse(localStorage.getItem('todos'))
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    todos = [{
        title: 'get groceries',
        dueDate: '2021-10-04',
        id: 'id1'
    }, {
        title: 'Wash Car',
        dueDate: '2021-02-03',
        id: 'id2'
    }, {
        title: 'Make Dinner',
        dueDate: '2021-03-04',
        id: 'id3'
    }]
}
render()

function createTodo(title, dueDate) {
    const id = ' ' + new Date().getTime()
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    })
    saveTodos()
}

function removeTodo(idToDelete) {
    todos = todos.filter(function(todo) {
        if (todo.id === idToDelete)
            return false
        else return true
    })
    saveTodos()
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}
//Model


//View
function render() {
    let todoList = document.getElementById('todo-list')
    todoList.innerText = ""
    todos.forEach(function(todo) {
        let element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;
        const deleteButton = document.createElement('button');
        deleteButton.id = todo.id
        deleteButton.style =
            'margin-left: 16px; color:white; background-color: rebeccapurple; border: none; cursor:pointer; font-size:10px; padding: 4px 8px; border-radius: 4px; font-weight: bold; box-shadow: 1px 1px 10px gray;'

        deleteButton.onclick = deleteTodoButton;
        deleteButton.innerText = 'Delete';
        todoList.appendChild(element);
        element.appendChild(deleteButton);
    })

    /*color: white;
    background-color: rebeccapurple;
    border: none;
    padding: 14px 30px;
    border-radius: 24px;
    font-weight: bold;
    box-shadow: 1px 1px 10px gray; */
}
//View


//Controller
function addTodoButton(newTodo) {
    const textBox = document.getElementById('todo-name')
    const title = textBox.value
    const trimmed = title.trim()
    const datePicer = document.getElementById('date-picker')
    let dueDate = datePicer.value
    createTodo(title, dueDate)
    render()
    textBox.value = ""
    datePicker.value = ""
}


function deleteTodoButton(event) {
    const deleteButton = event.target
    const idToDelete = deleteButton.id
    removeTodo(idToDelete)
    render()
}
//Controller