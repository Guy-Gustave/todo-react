import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setinput] = useState("")

  const handleSubmit= (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random()*100),
      text: input
    });
    setinput('')
  }

  const handleChange= e => { 
    setinput(e.target.value);

  }


  return (
    <form className="todos" onSubmit={handleSubmit}>
      <input type="text" placeholder= "Add a todo" onChange={handleChange} value={input} name='text' className='todo_list' />
      <button className='todo-button'>Add Todo</button>
    </form>
  )
}

export default TodoForm
