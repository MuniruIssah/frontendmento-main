import React, {useState} from 'react';
import {toast} from "react-toastify";
import uniqid from 'uniqid';
import {useAtom} from "jotai";
import {todosAtom} from "../atoms";

const TodoForm = () => {
    const [todo,setTodo]=useState('')
    const [todos,setTodos]=useAtom(todosAtom)

    const handleSubmit=(e)=>{

        if(e.key==="Enter") {
            e.preventDefault()
            e.stopPropagation();
            if(todo.length===0){
                toast.info("Please type a todo")
                return
            }
            const todoPayload={
                id:uniqid('todo-'),
                todo,
                completed:false
            }

            setTodos([...todos,todoPayload])
            setTodo('')
            toast.success("Todo added successfully")
        }


    }
    return (
        <div className={'flex items-center space-x-3 px-4 py-3 shadow bg-white dark:bg-[#25273C] w-full rounded'}>
            <div className={'h-5 w-5 rounded-full border border-gray-300 dark:border-gray-500'}/>
            <input value={todo} onChange={({target:{value}})=>setTodo(value)} placeholder={'Create a new todo...'} onKeyDown={handleSubmit} className={'flex-1 h-10 outline-0 text-lg caret-[#3A7BFD] dark:text-[#484B6A] dark:placeholder:text-[#484B6A] bg-transparent'}/>
        </div>
    );
};

export default TodoForm;