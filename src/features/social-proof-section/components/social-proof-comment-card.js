import React from 'react';

const SocialProofCommentCard = ({image,name,title,description,extraClasses}) => {
    return (
        <div className={`w-92 h-10/12 p-8 bg-[#502050] rounded-lg flex flex-col gap-6 ${extraClasses}`}>
            <div className={'flex items-center gap-5'}>
                <img src={image} alt="" className="w-10 rounded-full"/>
                <div className={'flex flex-col'}>
                    <h6 className={'text-white font-bold'}>{name}</h6>
                    <span className="text-[#EE68A4]">{title}</span>
                </div>
            </div>
            <p className="text-white"><q> {description} </q></p>
        </div>
    );
};

export default SocialProofCommentCard;