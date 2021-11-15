'use strict'

import './style.css'

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = document.querySelector('form > input')

form.addEventListener('submit', e => {
  e.preventDefault()
  const data = input.value
  const titleCase = data.charAt(0).toUpperCase() + data.slice(1)
  input.value = ''
  addTodo(titleCase)
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && todos.find(t => t.editMode)) {
    todos.find(t => t.editMode).editMode = false
    displayTodo()
  }
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
  btnDel.classList.add('danger')
  const btnEdit = document.createElement('button')
  btnEdit.innerHTML = 'Edition'
  btnEdit.classList.add('success')
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
  let timer
  li.addEventListener('click', e => {
    e.stopPropagation()
    if (e.detail === 1) {
      timer = setTimeout(() => {
        toggleTodo(index)
      }, 200)
    }else if (e.detail > 1) {
      clearTimeout(timer)
      toggleEditMode(index)
    }
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
  btnSave.classList.add('danger')
  const btnCancel = document.createElement('button')
  btnCancel.innerHTML = 'Annuler'
  btnCancel.classList.add('success')
  btnCancel.addEventListener('click', e => {
    e.stopPropagation()
    toggleEditMode(index)
  })
  btnSave.addEventListener('click', e => {
    e.stopPropagation()
    editTodo(index, input)
  })
  document.addEventListener("keypress", e => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      btnSave.click()
    }
  })
  li.append(input, btnCancel, btnSave)
  setTimeout(() => input.focus(), 0)
  return li
}

function addTodo(text) {
  (!text) ?
    alert('todo is empty!') :
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
  if (!data) {
    alert('todo is empty!')
    return ''
  }
  todos[index].text = data
  todos[index].editMode = false
  displayTodo()
}

displayTodo()
