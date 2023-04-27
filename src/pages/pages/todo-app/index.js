import React from 'react';
import TodoWrapper from "../../../features/todo-app/components/todo-wrapper";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {darkMode} from "../../../features/todo-app/atoms";
import {useAtom} from "jotai";

const Index = () => {
    const [darkMode_]=useAtom(darkMode)
    return (
        <div className={`${darkMode_&&'dark'}`}>
            <div className={'todo-app'}>
                <TodoWrapper/>
            </div>
            <ToastContainer/>
        </div>

    );
};

export default Index;