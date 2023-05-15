import React from 'react';
import InsureButton from "./insure-button";
import '../index.css'
const InsureMobileMenu = () => {
    return (
        <div className={'insureMobileMenu fixed z-20 w-full h-[100vh] bg-[#2B272F] pt-32 px-6 flex flex-col items-stretch text-center gap-6 text-white'}>
            <span>HOW WE WORK</span>
            <span>BLOG</span>
            <span>ACCOUNT</span>
            <InsureButton>view plans</InsureButton>
        </div>
    );
};

export default InsureMobileMenu;
