import React, {useEffect, useMemo, useState} from 'react';
import NoTodo from "./no-todo";
import {useAtom} from "jotai";
import {todosAtom} from "../atoms";
import TodoItem from "./todo-item";
import TodoFooter from "./todo-footer";
import TodoFilters from "./todo-filters";
import {filters as filters_} from "../utils";
import {DragDropContext,Droppable} from "react-beautiful-dnd";
import {act} from "react-dom/test-utils";

const Todos = ({}) => {
    const [currentFilter,setCurrentFilter]=useState('All')
    const [todos,setTodos]=useAtom(todosAtom)
    const [filteredTodos,setFilteredTodos]=useState([...todos])

    console.log(filters_)
    const filterTodos=(filter)=>{
        setCurrentFilter(filter)
        switch (filter){
            case 'All':
                setFilteredTodos([...todos]);
                break;
            case 'Active':
                const activeTodos=[...todos].filter(item=>!item.completed)
                setFilteredTodos([...activeTodos])
                break;
            default:
                const completedTodos=[...todos].filter(item=>item.completed)
                setFilteredTodos([...completedTodos])
        }
    }

    useEffect(()=>{
        if(todos){
            console.log("here")
            filterTodos(currentFilter)
        }
    },[todos])

    const onDragEnd=(result)=>{
        const {destination,source,draggableId}=result;
        if(!destination) return
        if(destination.index===source.index) return;

        const allTodos=Array.from(todos)
        const item=allTodos.filter(item=>item.id==draggableId)[0]

        allTodos.splice(source.index,1);
        allTodos.splice(destination.index,0,item)

        setTodos([...allTodos]);

    }

    return (
        <>
                <div className={'w-full bg-white divide-y dark:divide-[#777A92]/50 divide-gray-200 rounded-lg dark:bg-[#25273C] shadow-lg shadow-[#9394A5]/20 dark:shadow-black/30'}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {filteredTodos?.length>0?
                            <Droppable droppableId={'todoDroppable'}>
                                {
                                    (provided)=> (<div className={'divide-y h-[50vh] overflow-auto dark:divide-y-[0.5px] dark:divide-[#777A92]/50 divide-gray-200'} ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                        filteredTodos
                                        .map((item, index) => <TodoItem index={index} key={index} {...item} />)
                                    }
                                        {provided.placeholder}
                                    </div>)
                                }

                            </Droppable>
                            :
                            <NoTodo/>
                        }
                    </DragDropContext>

                    <TodoFooter filterTodos={filterTodos} currentFilter={currentFilter}/>
                </div>
                <div className={'sm:hidden w-full py-6 bg-white  rounded-lg overflow-hidden  dark:bg-[#25273C] shadow-lg shadow-[#9394A5]/20 dark:shadow-black/30 flex justify-center items-center'}>
                    <TodoFilters filterTodos={filterTodos} filters={filters_} current={currentFilter}/>
                </div>
            </>
    );
};

export default Todos;


