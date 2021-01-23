import React from 'react';
import TodoList from './todo/TodoList'
import Context from './todo/context'
import AddTodo from './todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: false, title: 'Buy oil'},
    {id: 3, completed: false, title: 'Buy milk'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
     if (todo.id ===id) {
       todo.completed = !todo.completed
     }
     return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed:false
    }]))
  }
  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/>  : <p>No Todos</p>}
        
      </div>
    </Context.Provider>
  )
}

export default App;
