import React from 'react'

const TodoInput = (props) => {

  const {handleAddTodos, todoValue, setTodoValue} = props

  

  return (
    <header>
      {/* bind the value */}
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter todo...' />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput