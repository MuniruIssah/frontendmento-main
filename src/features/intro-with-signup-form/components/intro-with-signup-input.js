import React from 'react';
import error from '../images/icon-error.svg'
const IntroWithSignupInput = ({errorMessage='',placeholder,...props}) => {
    return (
        <div className={'w-full flex flex-col gap-2 '}>
            <div className={`flex h-14 px-5 py-3 rounded-lg  ${errorMessage.length>0?'border-2 border-[#FF7A7A]':'border border-[#B9B6D3]/60 focus-within:border-[#3E3C49]'} `}>
                <input type="text" placeholder={errorMessage.length>0?'':placeholder} {...props} className={`flex-1 h-full ${errorMessage.length>0?'text-[#FF7A7A]':'text-[#3E3C49]'} text-[14px] placeholder:text-[#3E3C49]/70 placeholder:font-medium outline-0`} />
                {errorMessage.length>0&&<img src={error} alt="" className={'w-5 object-contain'}/>}
            </div>
            {errorMessage.length>0&&<span className={'text-[#FF7A7A] italic text-xs self-end'}>{errorMessage}</span>}
        </div>
    );
};

export default IntroWithSignupInput;