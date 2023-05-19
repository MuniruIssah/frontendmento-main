import React from 'react';
import FourCardFeatureCard from "./four-card-feature-card";
import {fourCardData} from "../data/fourCard";

const FourCardFeatureMain = () => {
    return (
        <main className={'max-w-screen-xl mx-auto flex flex-col text-[#4C4E61]'}>
            <div className={'flex flex-col gap-16'}>

                <div className={'flex flex-col gap-3 md:gap-7'}>
                    <div className={'flex flex-col gap-1 md:gap-3'}>
                        <h2 className={'font-light text-2xl md:text-4xl'}>Reliable, efficient delivery</h2>
                        <h1 className={'font-semibold text-2xl md:text-4xl'}>Powered by Technology</h1>
                    </div>

                    <p className="max-w-lg mx-auto text-[14px] md:text-sm text-[#A3A5AE]">
                        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
                    </p>
                </div>

                <div className={'flex justify-center items-center gap-7 flex-wrap'}>
                    <FourCardFeatureCard {...fourCardData[0]} />
                    <div className={'contents xl:flex xl:flex-col xl:gap-7'}>
                        <FourCardFeatureCard {...fourCardData[1]} />
                        <FourCardFeatureCard {...fourCardData[2]} />
                    </div>
                    <FourCardFeatureCard {...fourCardData[3]} />
                </div>
            </div>

        </main>
    );
};

export default FourCardFeatureMain;