import {
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
  FilterButton,
} from "./Todofilters.components";

const TodoFilters = ({
  total,
  activeFilter,
  showAllTodos,
  showActivetodos,
  showCompletedTodos,
  handlerClearCompleted
}) => {
  return (
      <FiltersContainer>
        <ItemsLeft total={total} />
        <FilterButtonContainer>
          <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All" />
          <FilterButton action={() => showActivetodos()} active={activeFilter} filter="Active" />
          <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="Completed" />
        </FilterButtonContainer>

        <button onClick={() => handlerClearCompleted()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
          Clear Completed
        </button>
      </FiltersContainer>
  );
};
export default TodoFilters;
