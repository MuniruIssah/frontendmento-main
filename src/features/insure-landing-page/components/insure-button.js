import React from 'react';

const InsureButton = ({primary,children}) => {

    return (
        <button className={`text-[14px] py-2 px-6 border uppercase ${primary?'border-[#2B272F] text-[#2B272F] hover:bg-[#2B272F] hover:text-white':'border-white text-white hover:bg-white hover:text-[#2B272F]'}`}>
            {children}
        </button>
    );
};

export default InsureButton;