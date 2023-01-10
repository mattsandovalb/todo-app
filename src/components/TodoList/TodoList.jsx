import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";

const TodoList = ({
  todos,
  handleSetCompleted,
  handleDelete,
  activeFilter,
  showAllTodo,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleSetCompleted={handleSetCompleted}
            handleDelete={handleDelete}
          />
        );
      })}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.lenght}
        showAllTodo={showAllTodo}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};
export default TodoList;
