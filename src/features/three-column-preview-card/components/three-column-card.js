import React from 'react';
import '../index.css'

const ThreeColumnCard = ({title,description,icon,theme,textTheme}) => {
    return (
        <div className={`p-10 flex flex-col items-start min-h-[50vh]  sm:min-h-[60vh] justify-between ${theme}`}>
            <div className={'flex flex-col items-start space-y-6 '}>
                    <img src={icon} alt={""} className="h-10 object-contain"/>
                <h1 className="headding text-[#F2F2F2]">{title}</h1>
                <p className="text-white/75 text-[15px]">{description}</p>

            </div>
            <button className={`py-3 w-2/3 text-sm bg-white border border-white hover:bg-transparent hover:text-white rounded-3xl ${textTheme}`}>Learn More</button>
        </div>
    );
};

export default ThreeColumnCard;