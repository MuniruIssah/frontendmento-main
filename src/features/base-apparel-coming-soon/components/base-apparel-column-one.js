import React from 'react';
import logo from '../images/logo.svg'
import heroMobile from '../images/hero-mobile.jpg'
import BaseApparelForm from "./base-apparel-form";
const BaseApparelColumnOne = () => {
    return (
        <div className="md:col-span-3 py-7 md:pt-20">
            <div className={'max-w-lg mx-auto flex items-start flex-col gap-16 md:gap-32'}>
                <div className={'w-full flex flex-col items-start gap-7'}>
                    <img src={logo} alt="" className="object-contain w-28 md:w-auto mx-8 md:mx-5 lg:mx-0"/>
                    <img src={heroMobile} alt="" className="md:hidden object-contain w-full"/>
                </div>


                <div className={'flex flex-col items-start gap-10 text-center md:text-left mx-8 md:mx-5 lg:mx-0'}>
                    <span className={'text-5xl md:text-7xl tracking-[10px] '}>
                        <span className={'text-[#CE9797] font-light'}>WE'RE </span>
                        <span className={'text-[#413A3A]'}>COMING SOON</span>
                    </span>
                    <p className="text-[#CE9797]">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                    <BaseApparelForm/>

                </div>
            </div>
        </div>
    );
};

export default BaseApparelColumnOne;