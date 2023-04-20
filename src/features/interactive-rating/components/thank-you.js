import React from 'react';
import thank_you from "../images/illustration-thank-you.svg";

const ThankYou = ({rating}) => {
    return (
        <div className={'flex flex-col space-y-6 items-center text-center pt-3 pb-5'}>
                <img src={thank_you} className={'object-fit'} alt={'thank you'}/>
            <span className={'text-[#FB7413]/80 bg-[#7C8798]/10 px-6 text-[14px]  py-1.5 rounded-3xl'}>You selected {rating} out of 5</span>
            <h3 className={'text-white text-3xl'}>Thank you!</h3>
            <p className={'text-[#959EAC] text-[15px]'}>We appreciate you taking the time to give a rating. If you  ever need more support, don't hesitate to get in touch!</p>
        </div>
    );
};

export default ThankYou;