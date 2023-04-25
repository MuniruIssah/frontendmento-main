import React from 'react';
import up from '../images/icon-arrow-up.svg'
import down from '../images/icon-arrow-down.svg'

const Dropdown = ({title,content}) => {
    return (
        <div className={'relative group'}>
            <button className={'btn ternary flex items-center space-x-2 '}>
                <span>{title}</span>
                <img src={down} alt="down" className="inline-block group-hover:hidden "/>
                <img src={up} alt="up" className="hidden group-hover:inline-block"/>
            </button>
            <div className={'bg-white hidden group-hover:block w-52 absolute top-6 right-0 shadow-lg shadow-gray-400/20 rounded-xl px-6 py-4 flex flex-col text-left space-y-2'}>
                {content.map((item,index)=><DropdownItem key={index} {...item} />)}
            </div>
        </div>
    );
};

export default Dropdown;

const DropdownItem=({icon,title})=>{
    return(
        <div className={'text-[#696969] flex items-center space-x-4 w-auto hover:bg-gray-100 p-2 rounded'}>
            {icon&&<img src={icon} alt="title" className=""/>}
            <span>{title}</span>
        </div>
    );
}


export const DropdownLow=({title,content})=>{
    return(
        <div className={'relative group text-xl font-medium'}>
            <button className={'btn ternary flex items-center space-x-2 '}>
                <span>{title}</span>
                <img src={down} alt="down" className="inline-block group-hover:hidden "/>
                <img src={up} alt="up" className="hidden group-hover:inline-block"/>
            </button>
            <div className={'hidden group-hover:block w-52 px-6 py-4 flex flex-col text-left space-y-2'}>
                {content.map((item,index)=><DropdownItem key={index} {...item} />)}
            </div>
        </div>
    );
}