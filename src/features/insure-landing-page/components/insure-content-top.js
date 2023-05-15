import React from 'react';
import InsureButton from "./insure-button";
import '../index.css'
import introRight from '../images/bg-pattern-intro-right-desktop.svg'
import introLeftMobile from '../images/bg-pattern-intro-left-mobile.svg'
import introImage from '../images/image-intro-desktop.jpg'
import introImageMobile from '../images/image-intro-mobile.jpg'
const InsureContentTop = () => {
    return (
        <div className={'w-full bg-[#2D2640] text-white md:py-32 relative'}>
                <div className={'w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-10 py-20 md:py-0 px-6 md:px-0'}>
                    <div className={'w-full flex flex-col gap-10 items-center text-center md:text-left md:items-start justify-center'}>
                        <div className={'hidden md:block w-32 border-b border-white'}/>
                        <h1 className={'text-5xl md:text-6xl insureLandingHeader z-10'}>Humanizing <br/> your insurance.</h1>
                        <p className="">
                            Get vour life insurance coverage easier and taster. We blend our expertise
                            and technology to help you find the plan that's right for you. Ensure you and vour loved ones are protected
                        </p>
                        <InsureButton>view plans</InsureButton>
                    </div>
                    <div className={'hidden md:block relative'}>
                        <img src={introImage} className="absolute"/>
                    </div>
                </div>

                <img src={introRight} className="hidden md:block absolute z-5 -top-20 right-0"/>
                <img src={introLeftMobile} className="md:hidden absolute z-5 top-0"/>
        </div>
    );
};

export default InsureContentTop;