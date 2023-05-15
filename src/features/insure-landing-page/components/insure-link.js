import React from 'react';

const InsureLink = ({children,primary,extraClasses}) => {
    return (
        <a className={`text-[14px] ${primary?'text-black hover:underline':'text-[#837D87] hover:text-[#2B272F]'}  uppercase cursor-pointer ${extraClasses}`}>
            {children}
        </a>
    );
};

export default InsureLink;