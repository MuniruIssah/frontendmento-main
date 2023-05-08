import React, {useEffect, useState} from 'react';
import divider from '../images/pattern-divider-desktop.svg'
import mobile_divider from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import {generateAdvice} from "../api";
import AdviceLoader from "./advice-loader";
const AdviceCard = () => {
    const [slip,setSlip]=useState({
        id:0,advice:''
    })
    const [isLoading,setIsLoading]=useState(true)
    const generateAdv=async()=>{
        setIsLoading(true)
        const response= await generateAdvice();
        setSlip(response?.slip);
        setIsLoading(false)
    }
    useEffect(()=>{
        generateAdv()

    },[])

    return (
        <div className={'bg-[#323A49] max-w-lg rounded-2xl shadow-lg flex flex-col space-y-6 md:space-y-12 items-center relative text-center px-5 md:px-10 pt-10 md:pt-12 pb-16 '}>
            {isLoading?<><AdviceLoader/></>:
                <>
                    <div className={'flex flex-col space-y-6'}>
                        <span className={'text-[#52FFA8] text-xs md:text-sm tracking-[4px]'}>ADVICE # {slip.id}</span>
                        <p className={'text-[#CEE3E9] text-2xl font-bold'}><q>{slip.advice}</q></p>
                    </div>
                    <img className={'object-fit hidden md:block'} src={divider} alt={'divider'} />
                    <img className={'object-fit md:hidden'} src={mobile_divider} alt={'mobile divider'} />
                    <button onClick={generateAdv} className={'bg-[#52FFA8] group h-16 w-16 grid place-items-center rounded-full absolute -bottom-8 hover:shadow-[0_5px_15px_15px_rgba(82,255,168,0.3)]'}>
                        <img className={'object-fit group-hover:animate-spin'} src={dice} alt={'dice'} />
                    </button>
                </>}
        </div>
    );
};

export default AdviceCard;