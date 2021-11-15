'use strict'

import './style.css'

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = document.querySelector('form > input')

form.addEventListener('submit', e => {
  e.preventDefault()
  const data = input.value
  input.value = ''
  addTodo(data)
})

const todos = [
  { text: "je suis une todo", done: false, editMode: false, },
  { text: "faire du javascript", done: true, editMode: false, },
]

function displayTodo() {
  const todosInsert = todos.map((todo, index) => {
    return (todo.editMode) ?
      createTodoEditElement(todo, index) :
      createTodoElement(todo, index)
  })
  ul.innerHTML = ''
  ul.append(...todosInsert)
}

function createTodoElement(todo, index) {
  const li = document.createElement('li')
  const btnDel = document.createElement('button')
  btnDel.innerHTML = 'Supprimer'
  const btnEdit = document.createElement('button')
  btnEdit.innerHTML = 'Edition'
  btnDel.addEventListener('click', e => {
    e.stopPropagation()
    deleteTodo(index)
  })
  btnEdit.addEventListener('click', e => {
    e.stopPropagation()
    toggleEditMode(index)
  })
  li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p>${todo.text}</p>
  `
  li.addEventListener('click', event => {
    toggleTodo(index)
  })
  li.append(btnEdit, btnDel)
  return li
}

function createTodoEditElement(todo, index) {
  const li = document.createElement('li')
  const input = document.createElement('input')
  input.type = 'text'
  input.value = todo.text
  const btnSave = document.createElement('button')
  btnSave.innerHTML = 'Sauvegarder'
  const btnCancel = document.createElement('button')
  btnCancel.innerHTML = 'Annuler'
  btnCancel.addEventListener('click', e => {
    e.stopPropagation()
    toggleEditMode(index)
  })
  btnSave.addEventListener('click', e => {
    editTodo(index, input)
  })
  li.append(input, btnCancel, btnSave)
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

function toggleTodo(index) {
  todos[index].done = !todos[index].done
  displayTodo()
}

function toggleEditMode(index) {
  todos[index].editMode = !todos[index].editMode
  displayTodo()
}

function editTodo(index, input) {
  const data = input.value
  todos[index].text = data
  todos[index].editMode = false
  displayTodo()
}

displayTodo()
