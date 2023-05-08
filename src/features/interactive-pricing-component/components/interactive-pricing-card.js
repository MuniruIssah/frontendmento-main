import React, {useState} from 'react';
import check from '../images/icon-check.svg'
import {Slider} from "./slider";
import {Switch} from "./switch";

const InteractivePricingCard = () => {
    const [step,setStep]=useState(1)
    const [checked,setChecked]=useState(false)
    const [state,setState]=useState({
        views:'10k pageviews',
        cash:8.00
    });

    const handleSliderChange=(value)=>{
        setStep(value[0])
        handleCurrentValue(value,checked)
    }

    const handleCurrentValue=(value,checked)=>{
        let selectedStepValues=sliderStepsAndValues.filter(item=>item.step==value)[0]
        let cash=checked?selectedStepValues.value*12-selectedStepValues.value*0.25:selectedStepValues.value;
        setState({...state,views: selectedStepValues.description,cash: cash})
    }
    const handleSwitchChange=(value)=>{
        setChecked(value)
        handleCurrentValue(step,value)

    }
    return (
        <div className={'w-full bg-white rounded-xl shadow-md divide-y divide-gray-200'}>
            <div className={'flex flex-col gap-10 md:gap-14 p-8 md:p-12'}>
                <div className={'flex items-center justify-center md:justify-between'}>
                    <span className={'text-[#858FAD] tracking-[3px] text-[15px] uppercase'}>{state.views}</span>
                    <div className={'items-center gap-2 hidden md:flex'}>
                        <span className={'text-5xl text-[#293356] font-bold'}>${state.cash}.00</span>
                        <span className={'text-[#858FAD] text-[15px]'}>{checked?'/ year':'/ month'}</span>
                    </div>
                </div>
                <Slider min={1}  step={1} max={5} value={[step]} onValueChange={handleSliderChange} />
                <div className={'flex items-center justify-center gap-2 md:hidden'}>
                    <span className={'text-4xl text-[#293356]'}>${state.cash}.00</span>
                    <span className={'text-[#858FAD] text-[15px]'}>{checked?'/ year':'/ month'}</span>
                </div>
                <div className={'w-full flex justify-center items-center gap-3 text-sm text-[#858FAD]'}>
                    <span>Monthly Billing</span>
                    <Switch checked={checked} onCheckedChange={handleSwitchChange} className={'data-[state=checked]:bg-[#10D5C2] data-[state=unchecked]:hover:bg-[#10D5C2] data-[state=unchecked]:bg-[#CDD7EE] '}/>
                    <div className={'relative'}>
                        <span className={''}>Yearly Billing</span>
                        <span className={'absolute text-[12px]  md:w-24 top-[-1px] ml-1 md:ml-2 py-[1.5px] text-[#FF8C66] bg-[#FEECE7] rounded-xl'}>
                            <span className={'hidden md:block'}>25% discount</span>
                            <span className={'md:hidden px-1'}>-25%</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={'w-full flex flex-col md:flex-row items-center gap-10 md:justify-between p-8 md:p-12'}>
                <div className={'text-center w-full flex flex-col items-center md:items-start md:text-left'}>
                    {perks.map((item,index)=><PerkItem key={index} perk={item}/>)}
                </div>
                <button className={'bg-[#293356] w-52 md:w-80  py-3 text-sm text-[#BDCCFF] hover:text-white rounded-full'}>Start my trial</button>
            </div>
        </div>
    );
};

export default InteractivePricingCard;

const perks=[
    'Unlimited websites',
    '100% data ownership',
    'Email reports'
]

const PerkItem=({perk})=>{
    return(
        <div className={'flex items-center gap-2 text-[#858FAD] text-[15px]'}><img src={check}/><span>{perk}</span></div>
    );
}


const sliderStepsAndValues=[
    {
        step:1,
        value:8,
        description:'10K pageviews'
    },
    {
        step:2,
        value:12,
        description:'50K pageviews'
    },
    {
        step:3,
        value:16,
        description:'100K pageviews'
    },
    {
        step:4,
        value:24,
        description:'500K pageviews'
    },
    {
        step:5,
        value:36,
        description:'1M pageviews'
    },
]