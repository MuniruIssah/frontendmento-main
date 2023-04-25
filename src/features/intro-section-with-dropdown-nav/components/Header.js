import React, {useState} from 'react';
import logo from '../images/logo.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import menu from '../images/icon-menu.svg'

import Dropdown from "./Dropdown";
import Drawer from "./Drawer";
const Header = () => {
    const [showModal,setShowModal]=useState(false)
    const handleModalToggle=()=>setShowModal(prevState=>!prevState)
    return (
        <div className={'flex items-center justify-between h-[10vh] py-5  px-5 md:px-10'}>
            <div className="flex items-center space-x-16">
                <img src={logo} alt="logo" className={'object-fit'}/>
                <div className="hidden md:flex items-center space-x-7">
                    <Dropdown title={'Features'} content={features} />
                    <Dropdown title={'Company'} content={company} />
                    <button className="btn ternary">Careers</button>
                    <button className="btn ternary">About</button>

                </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <button className="btn ternary">Login</button>
                <button className="btn secondary">Register</button>
            </div>
            <button className={'md:hidden'}  onClick={handleModalToggle}>
                <img src={menu} alt={'menu'} className={' object-contain cursor-pointer'} />
            </button>
            <Drawer show={showModal} close={handleModalToggle} />
        </div>
    );
};

export default Header;

export const features=[
    {
        icon:todo,
        title:'Todo List'
    },
    {
        icon:calendar,
        title:'Calendar'
    },
    {
        icon:reminders,
        title:'Reminders'
    },
    {
        icon:planning,
        title:'Planning'
    }
]
export const company=[
    {title:'History'},
    {title:'Our Team'},
    {title:'Blog'},
]