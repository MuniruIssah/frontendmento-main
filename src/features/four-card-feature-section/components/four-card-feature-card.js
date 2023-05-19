import React from 'react';

const FourCardFeatureCard = ({title,description,icon,extraClasses}) => {
    return (
        <div className={`w-full sm:w-[350px] flex flex-col justify-between p-7 border-t-4 ${extraClasses} bg-white shadow-xl shadow-[#549EF2]/10 h-[230px] rounded-sm text-left  `}>
            <div className={'flex flex-col gap-3'}>
                <h3 className={'font-semibold text-lg'}>{title}</h3>
                <span className="text-[13px] text-[#A3A5AE]">{description}</span>
            </div>

            <div className={'self-end'}>
                <img src={icon} alt="" className="self-end"/>
            </div>
        </div>
    );
};

export default FourCardFeatureCard;