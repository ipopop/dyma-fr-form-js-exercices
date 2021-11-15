'use strict'

import './style.css'

const ul = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('form > input')

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
  const btnDel = document.createElement('button')
  btnDel.innerHTML = 'Supprimer'
  btnDel.addEventListener('click', e => {
    e.stopPropagation()
    deleteTodo(index)
  })
  li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p>${todo.text}</p>
  `
  li.append(btnDel)
  return li
}

function addTodo(text) {
  todos.push({ text, done: false })
  displayTodo()
}

function deleteTodo(index) {
  todos.splice(index, 1)
  displayTodo()
}

displayTodo()
