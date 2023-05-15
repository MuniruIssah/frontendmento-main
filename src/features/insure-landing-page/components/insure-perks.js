import React from 'react';
import {insurePerks} from "../data";

const InsurePerks = () => {
    return (
        <div className={'w-full px-6 md:px-0'}>
        <section className={'w-full max-w-screen-lg mx-auto flex flex-col items-center text-center md:items-start md:text-left gap-12'}>
            <div className={'w-32 border-b border-gray-400'}/>
            <div className={'flex flex-col items-center text-center md:items-start md:text-left gap-14 relative'}>
                <h1 className={'insureLandingHeader text-5xl md:text-5xl text-[#2B272F]'}>We're different</h1>
                <div className="flex flex-wrap gap-7">
                    {insurePerks.map((item,index)=><InsurePerk {...item} key={index}  />)}
                </div>
            </div>

        </section>
        </div>
    );
};

export default InsurePerks;

const InsurePerk=({icon,title,description})=>{
    return(
        <div className={'flex-1 min-w-[200px] flex flex-col items-center text-center md:items-start md:text-left gap-4 '}>
            <img src={icon} className="object-contain w-14"/>
            <h4 className={'insureLandingHeader text-xl text-[#2B272F]'}>{title}</h4>
            <p className={'text-[14px] text-[#837D87]'}>{description}</p>
        </div>
    );
}