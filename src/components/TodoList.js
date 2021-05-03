import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

  const [Todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...Todos]
    setTodos(newTodos);
    // console.log(...Todos)
  };

  const removeTodo = id => {
    const rem = [...Todos].filter(todo =>todo.id !==id);
    setTodos(rem);
  }

  const completeTodo = id => {
    let updatedTodo = Todos.map((todo) => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodo)
  }

  return (
    <div>
      <h1>Today's plan</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo Todos={Todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  )
}

export default TodoList
