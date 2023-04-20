import React from 'react';
import star from "../images/icon-star.svg";
import Rating from "./rating";
import SubmitButton from "./submitButton";

const RatingsForm = ({activeState,handleChange,handleSubmit}) => {
    return (
        <div className={'flex flex-col space-y-7 items-start'}>
            <div className={'h-[45px] w-[45px] sm:h-12 sm:w-12 rounded-full bg-[#7C8798]/10 flex justify-center items-center '}>
                <img src={star} className={'object-fit w-3 md:w-auto'} alt={'star'}/>
            </div>
            <div className={'flex flex-col space-y-3'}>
                <span className={'text-white text-2xl'}>How did we do?</span>
                <p className={'text-[#959EAC] text-[15px]'}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className={'w-full flex justify-between'}>
                {new Array(5).fill(0).map((item,index)=><Rating key={index+1} handleChange={handleChange} active={activeState}>{index+1}</Rating>)}
            </div>
            <SubmitButton submit={handleSubmit}/>
        </div>
    );
};

export default RatingsForm;