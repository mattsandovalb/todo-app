import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";

const TodoList = ({todos, handleSetCompleted}) => {
    return(
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo =>{
                return(
                    <Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} />
                )   
            })}
            <TodoFilters />
        </div>
    )
}
export default TodoList;