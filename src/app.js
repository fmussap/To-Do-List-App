'use strict'

import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleItem } from 'reducers/all//action-creators'

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo' />
      <button type='submit'>Add</button>
    </form>
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            fontStyle: todo.completed ? 'italic' : 'normal'
          }}
          onClick={handleToggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
    <div>
      <h3>Show</h3>
      <span>All</span> | <a href=''>Done</a> | <a href=''>To do</a>
    </div>
  </div>
)

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleItem(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
