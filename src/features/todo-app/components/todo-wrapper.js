import React from 'react';
import light from '../images/icon-sun.svg'
import dark from '../images/icon-moon.svg'
import TodoForm from "./todo-form";
import Todos from "./todos";
import {useAtom} from "jotai";
import {darkMode} from "../atoms";
import TodoFilters from "./todo-filters";

const TodoWrapper = () => {
    const [,setDarkMode]=useAtom(darkMode)
    const handleDarkModeToggle=()=>setDarkMode(prevState=>!prevState)


    return (
        <div className={'w-full max-w-screen-sm mx-auto h-full flex flex-col space-y-5 sm:space-y-10 items-start justify-start py-8 sm:py-12 px-5'}>
            <div className={'w-full flex items-center justify-between'}>
                <h1 className={'text-3xl sm:text-4xl tracking-[16px] text-white font-bold'}>TODO</h1>
                <button onClick={handleDarkModeToggle}><img src={light} alt="light" className={'hidden dark:flex'}/>
                <img src={dark} alt="dark" className={'dark:hidden flex'}/></button>
            </div>
            <TodoForm/>
            <Todos/>
            <p className={'w-full text-center text-[#9394A5] dark:text-[#777A92]/70 pt-10 sm:pt-0'}>Drag and drop to reorder list</p>
        </div>
    );
};

export default TodoWrapper;