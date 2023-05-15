import React from 'react';
import InsureButton from "./insure-button";
import '../index.css'
const InsureFindMore = () => {
    return (
        <div className={'w-full px-6 md:px-0'}>
        <div className={'insureFindMore w-full max-w-screen-lg mx-auto bg-[#2D2640] text-white text-center md:text-left flex flex-col gap-5 md:flex-row items-center justify-between py-16 px-5 md:px-16'}>
            <h1 className={'insureLandingHeader text-4xl md:text-5xl'}>Find out more<br/> about how we work</h1>
            <InsureButton>How we work</InsureButton>
        </div>
        </div>
    );
};

export default InsureFindMore;