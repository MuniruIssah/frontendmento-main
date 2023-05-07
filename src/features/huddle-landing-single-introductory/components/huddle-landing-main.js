import React from 'react';
import illustration from '../images/illustration-mockups.svg';
import '../index.css'
const HuddleLandingMain = () => {
    return (
        <div className={'grid  lg:grid-cols-5 min-h-[60vh] gap-8 xl:gap-0'}>
            {/*<div className={''}/>*/}
            <div className={'flex items-center lg:col-span-3'}>
                <img src={illustration} className={"object-contain"}  />
            </div>
            <div  className={'lg:col-span-2 flex flex-col items-center text-center lg:text-left lg:items-start 2xl:justify-center gap-8 pt-9'}>
                <h1 className={'popee text-white font-bold text-[25px] md:text-[40px] flex flex-col'}>
                    <span>Build The Community</span>
                    <span>Your Fans Will Love</span></h1>
                <p className={'text-white/80 font-light text-lg'}>
                    Huddle re-imagines the way we build communities.
                    You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </p>
                <button className={'bg-white shadow-md rounded-full py-4 w-52 text-[#674BAF] hover:text-white hover:bg-[#E882E8] transition-all ease-in-out'}>Register</button>
            </div>
        </div>
    );
};

export default HuddleLandingMain;