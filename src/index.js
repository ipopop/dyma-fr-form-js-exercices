import './style.css'

const ul = document.querySelector('ul')

const todos = [
  { text: "je suis une todo", done: false },
  { text: "faire du javascript", done: true }
]

function createTodoElement(todo) {
  // create : <span class="todo done?"></span> <p>todo txt</p>
  const li = document.createElement('li')
  li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p>${todo.text}</p>
  `
  return li
}

function displayTodo() {
  // create HTML element with createTodoElement() & insert in DOM with ul.append()
  const todosInsert = todos.map((todo, i) => {
    return createTodoElement(todo, i)
  })
  ul.innerHTML = ''
  ul.append(...todosInsert)
}

displayTodo()
