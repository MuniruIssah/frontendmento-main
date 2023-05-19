import React from 'react';
import star from '../images/icon-star.svg'
const SocialProofSectionRating = ({children,extraClasses}) => {
    return (
        <div className={`w-full md:w-10/12 bg-[#F7F2F7] py-5 flex flex-col lg:flex-row px-8 gap-4 md:gap-7 items-center rounded ${extraClasses}`}>
            <div className={'flex items-center gap-2'}>
                {new Array(5).fill(0).map((item,index)=> <img key={index} src={star} alt="" className="object-contain"/>)}
            </div>
            <span className={'font-bold'}>
                {children}
            </span>

        </div>
    );
};

export default SocialProofSectionRating;