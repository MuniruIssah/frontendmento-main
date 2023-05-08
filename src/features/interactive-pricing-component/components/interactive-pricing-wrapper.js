import React from 'react';
import InteractivePricingCard from "./interactive-pricing-card";
import circles from '../images/pattern-circles.svg'
const InteractivePricingWrapper = () => {
    return (
        <div className={'w-full max-w-xl flex flex-col items-center gap-10 text-center'}>
            <div className={'h-[18vh] flex flex-col justify-center gap-3 bg-no-repeat bg-center bg-contain'} style={{backgroundImage:`url(${circles})`}}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#293356]">Simple, traffic-based pricing</h2>
                <span className="text-[#858FAD] font-light text-[15px]">
                    Sign-up for our 30-day trial.
                    <span className={"md:hidden"}><br/></span>
                    No credit card required.
                </span>
            </div>
            <InteractivePricingCard/>
        </div>
    );
};

export default InteractivePricingWrapper;