import {FilterButtonContaine, FiltersContainer, ItemsLeft, FilterButton} from "./Todofilters.components";

const TodoFilters = () => {
    return(
        <div>
            <FiltersContainer>
                <ItemsLeft />
                <FilterButtonContaine>
                    <FilterButton action={() =>{ }} active="All" filter='All' />
                    <FilterButton action={() =>{ }} active="All" filter='Active' />
                    <FilterButton action={() =>{ }} active="All" filter='Completed' />
                </FilterButtonContaine>

                <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                    Clear Completed
                </button>
            </FiltersContainer>
        </div>
    )
}
export default TodoFilters;