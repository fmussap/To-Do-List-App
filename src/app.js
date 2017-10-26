'use strict'

import React from 'react'

import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <Form />
    <TodosList handleToggleTodo={handleToggleTodo} todos={todos} />
    <Filter />
  </div>
)

export default App
