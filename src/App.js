import Title from "./components/Title/Title";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo/Todo";

function App() {

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex-col max-w-xl">
          <Title />
          <TodoInput />
          <TodoList>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          </TodoList>
          
          
      </div>
      
    </div>
  );
}

export default App;
