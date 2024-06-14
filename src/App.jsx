import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import {useState, useEffect} from 'react'
//useEffect takes a dependency array

function App() {
  //setter function

  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    //when the state changes the DOM is repainted
  }

  //all the function logic seems to be the highest component - App

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      //if the index is not equal to the todoIndex
      //it can stay in the array      
      return todoIndex !== index
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage) {
      return //leave if no localStorage
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    
    setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>

    </>
  )
}

export default App
