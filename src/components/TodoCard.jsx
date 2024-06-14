import React from 'react'

const TodoCard = (props) => {

  const {children, handleDeleteTodo, index, handleEditTodo} = props //destructures all the children of the props
  return ( 
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
          handleDeleteTodo(index) //you forget to put the arrow function in onClick
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>

      </div>
    </li>
   
  )
}

export default TodoCard