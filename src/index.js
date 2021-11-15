'use strict'

import './style.css'

const ul = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('form > input')

/* Create an event listener on the form for the "submit" event */
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = input.value
  input.value = ''
  addTodo(data)
})

const todos = [
  { text: "je suis une todo", done: false, },
  { text: "faire du javascript", done: true, },
]

function displayTodo() {
  const todosInsert = todos.map((todo, index) => {
    return createTodoElement(todo, index)
  })
  ul.innerHTML = ''
  ul.append(...todosInsert)
}

function createTodoElement(todo, index) {
  const li = document.createElement('li')
  li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p>${todo.text}</p>
  `
  return li
}

function addTodo(text) {
  /* add a new task to the table todos 
  with the text entered in the field
  and the property done to false */
  todos.push({ text, done: false })
  displayTodo()
}

displayTodo()
