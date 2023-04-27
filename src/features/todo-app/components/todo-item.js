import React from 'react';
import {useAtom} from "jotai";
import {todosAtom} from "../atoms";
import check from "../images/icon-check.svg";
import close from "../images/icon-cross.svg";
import '../index.css'
import {Draggable} from "react-beautiful-dnd";
const TodoItem=({id,todo,completed,index})=>{

    const [todos,setTodos]=useAtom(todosAtom)

    const complete=()=>{
        const allTodos=[...todos].map(item=>item.id===id?({...item,completed:true}):item)
        setTodos(allTodos)
    }
    const clearTodo=()=>{
        const remainingTodos=[...todos].filter(item=>item.id!=id)
        setTodos([...remainingTodos])
    }


    return(
        <Draggable key={id} draggableId={`${id}`} index={index}>
            {(provided)=>(
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={'w-full px-6 py-5 flex rounded items-center gap-4 dark:bg-[#25273C] bg-white'}>


                    <div className={`cursor-pointer h-6 w-6 p-[1.5px] rounded-full 
                                ${completed?'bg-gradient-to-br from-[#57DDFF] to-[#C058F3]':'dark:bg-gray-500 bg-gray-300'} 
                                hover:bg-gradient-to-br hover:from-[#57DDFF] hover:to-[#C058F3]`}
                         onClick={complete}
                    >
                        <div className={`h-full w-full  ${completed?'bg-transparent':'bg-white dark:bg-[#25273C]'} flex items-center justify-center rounded-full`}>
                            {completed&&<img className={''} src={check} alt={'check'}/>}
                        </div>
                    </div>
                    <div className={'w-full flex-1 flex items-center justify-between group'}>
                        <span className={`text-sm sm:text-[18px]  ${completed?'line-through text-[#D2D3DB] dark:text-[#484B6A]':'dark:text-[#E4E5F1] text-[#777a92]'}`}>{todo}</span>
                        <button onClick={clearTodo}>
                            <img className={'hidden group-hover:flex '} src={close} alt={'close'}/>
                        </button>
                    </div>

                </div>
            )}

        </Draggable>
    );
}


export default TodoItem;