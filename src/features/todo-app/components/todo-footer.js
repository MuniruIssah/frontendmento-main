import React,{useMemo} from 'react';
import {useAtom} from "jotai";
import {todosAtom} from "../atoms";
import TodoFilters from "./todo-filters";
import {filters as filters_} from "../utils";


const TodoFooter=({filterTodos,currentFilter})=>{
    const [todos,setTodos]=useAtom(todosAtom)
    const numberOfActiveTodos=useMemo(()=>todos.filter(item=>!item.completed).length,[todos])

    const clearCompleted=()=>{
        const activeTodos=[...todos].filter(item=>!item.completed)
        setTodos([...activeTodos])
    }

    return(
        <div className={'flex items-center justify-between p-5 text-sm'}>
            <span className={'text-[#9394A5] dark:text-[#484B6A]'}>{numberOfActiveTodos} items left</span>
            <div className={'hidden sm:flex justify-center'}><TodoFilters filterTodos={filterTodos} current={currentFilter} filters={filters_} /></div>
            <button className={'text-[#9394A5] hover:text-[#484B6A]/80 dark:text-[#484B6A]'} onClick={clearCompleted}>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;