const content = document.getElementById("content");
const addTodoPageBtn = document.getElementById("add-todo-page");
const getTodoListPageBtn = document.getElementById("get-todo-list-page");
let addTodoPageHTML;
let todoList = JSON.parse(localStorage.getItem("todo"));

fetch('pages/addTodoForm.js')
    .then(response => addTodoPageHTML = response.text());


addTodoPageBtn.addEventListener("click", getAddToDoPage.bind());
getTodoListPageBtn.addEventListener("click", getTodoListPage.bind());

class Todo {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isActive = true;
    }
}

async function getAddToDoPage() {
    content.innerHTML = await addTodoPageHTML;
}

function addTodo(event) {
    event.preventDefault();
    const todo = new Todo(event.target.title.value, event.target.desc.value, event.target.date.value);
    todoList.push(todo);
    localStorage.setItem("todo", JSON.stringify(todoList));
}

getTodoListPage();

function getTodoListPage() {
    content.innerHTML = "";
    const todos = JSON.parse(localStorage.getItem("todo"));
    const todoTable = document.createElement("table");
    const tableHead = document.createElement("thead");
    todoTable.className = "todo-table";
    tableHead.innerHTML = `<tr><th>Id</th>
                               <th>Title</th>
                               <th>Description</th>
                               <th>Due Date</th>
                               <th>Active ?</th>
                               <th>Status</th></tr>`;
    todoTable.appendChild(tableHead);
    todos.map((item, index) => {
        const todo = document.createElement("tr");
        todo.innerHTML = `<td>${index+1}</td>
                               <td>${item.title}</td>
                               <td>${item.description}</td>
                               <td>${item.dueDate}</td>
                               <td>${item.isActive}</td>
                               <td><button class="remove-btn" onclick="removeTodo(${index})"><i class="far fa-trash-alt"></i></button>
                               </td>`;
        todoTable.appendChild(todo)
        content.appendChild(todoTable);
    });
}

function removeTodo(index) {
    todoList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    localStorage.setItem("todo", JSON.stringify(todoList));
    getTodoListPage();
}