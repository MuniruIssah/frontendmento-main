import React from 'react';
import {faqData} from "../utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./accordion"

import '../index.css'
import atBox from "../images/illustration-box-desktop.svg"
import mobileImg from "../images/illustration-woman-online-mobile.svg"
const FaqContainer = () => {
    return (
        <div className={'w-full max-w-sm lg:max-w-screen-lg relative min-h-[60vh] bg-white rounded-3xl grid lg:grid-cols-2 '}>
            <img src={atBox} className="hidden lg:block absolute w-48 z-50  -left-24 top-[42%] object-contain"/>
            <div className="faqBackground h-[14vh] lg:h-auto lg:min-h-[18vh] relative">
                <div className={'lg:hidden absolute w-full flex justify-center -top-[14vh]'}>
                    <img src={mobileImg} className=" block -inset-1 w-64"/>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center lg:items-start p-8 lg:p-10">
                <h2 className="text-4xl font-bold text-[#1D1E35]">FAQ</h2>
                <div className="flex flex-col items-start  w-full">
                    <Accordion type="single" collapsible className="w-full">

                    {faqData.map((item,index)=>(
                            <AccordionItem value={item.title} key={index}>
                                <AccordionTrigger className={'text-[14px]  text-left text-[#787887] hover:text-[#F47C57] hover:no-underline [&[data-state=open]]:text-[#4A4B5E] [&[data-state=open]]:font-bold'}>
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent  className={'text-[13px] text-[#787887] hover:no-underline'}>
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>

                    ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FaqContainer;