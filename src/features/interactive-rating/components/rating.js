import React from 'react';

const Rating = ({children,active,handleChange}) => {
    console.log(active)
    const isActive=active===children;
    return (
        <button
            type={'button'}
            onClick={()=>handleChange(children)}
            className={`${isActive?'text-white bg-[#7C8798]':'bg-[#7C8798]/10 text-[#959EAC] hover:text-white hover:bg-[#FB7413]'} 
                        h-[45px] w-[45px] text-sm sm:h-12 sm:w-12 rounded-full  cursor-pointer transition-all ease-in-out
                        w-auto flex justify-center items-center`}>
            {children}
        </button>
    );
};

export default Rating;