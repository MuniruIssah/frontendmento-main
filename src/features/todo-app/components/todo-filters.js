import React from 'react';

const TodoFilters=({current,filters,filterTodos})=>{

    return(
        <div className={'flex gap-4'}>
            {filters.map((item,index)=><TodoFilter filter={()=>filterTodos(item.title)} current={current} key={index} {...item} />)}
        </div>
    );
}



export default TodoFilters;


const TodoFilter=({current,title,filter})=>{
    const isActive=current===title
    return(
        <button onClick={filter} className={`font-bold ${isActive?'text-[#3A7BFD]':'text-[#9394A5] hover:text-[#484B6A]/80  dark:text-[#484B6A]'}`}>{title}</button>
    );
}