'use strict'

import React from 'react'
import { connect } from 'react-redux'

import { toggleItem } from 'reducers/todos/action-creators'

const TodosList = ({ handleToggleTodo, todos }) => (
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
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleItem(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
