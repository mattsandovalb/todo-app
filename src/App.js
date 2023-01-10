import { useState } from "react";
import Title from "./components/Title/Title";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo/Todo";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1, 
      title: 'Programe a React app',
      completed: false
    },
    {
      id: 2, 
      title: 'Record the next Video',
      completed: false
    },
    {
      id: 3, 
      title: 'Read a Book',
      completed: false
    },
    {
      id: 4, 
      title: 'Netflix',
      completed: false
    },
  ])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id:lastId + 1, 
      title, 
      completed : false
    }

  const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetCompleted = (id) => {
    const updateList = todos.map(todo =>{
      if(todo.id === id){
        return {...todo, completed :!todo.completed};
      }
      return todo;
    })
    setTodos(updateList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex-col max-w-xl">
          <Title />
          <TodoInput addTodo={addTodo}/>
          <TodoList 
          todos={todos}
            handleSetCompleted={handleSetCompleted}
          />
      </div>
      
    </div>
  );
}

export default App;
