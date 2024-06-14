import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

  const {todos} = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          //actually we can send all the props in using spread operator
          //this forwards on the props to the next component
          <TodoCard {...props} key={todoIndex} index={todoIndex}> 
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList