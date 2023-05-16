import React, {useMemo, useState} from 'react';
import articleImage from '../images/drawers.jpg'
import michelle from '../images/avatar-michelle.jpg'
import share from '../images/icon-share.svg'
import share1 from '../images/icon-share1.svg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"
const ArticlePreviewCard = () => {
    return (
        <div className="max-w-screen-md  grid grid-cols-1 md:grid-cols-5 rounded-xl overflow-hidden shadow-lg shadow-[]/50">
            <div className="bg-cover h-[35vh] md:h-auto col-span-2 bg-no-repeat bg-center " style={{backgroundImage:`url(${articleImage})`}}></div>
            <div className="col-span-3 bg-white flex flex-col px-10 py-7 gap-5 relative">
                <h3 className={'text-base md:text-xl text-[#48556A] font-bold'}>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
                <p className="text-sm text-[#9EAFC2]">
                    Ever been in a room and felt like something was missing?
                    Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                </p>
                <ProfileSection/>
            </div>
        </div>
    );
};

export default ArticlePreviewCard;


const ProfileSection=()=>{
    const [sharing,setSharing]=useState(false)
    const handleSharing=()=>setSharing(prevState => !prevState)
    return (
        <div className={'w-full flex items-center justify-between'}>
            <div className="flex gap-4 items-center text-sm">
                <img src={michelle} alt="" className="w-12 rounded-full"/>
                <div className="flex flex-col">
                    <h6 className="font-bold text-[#48556A]">Michelle Appleton</h6>
                    <span className="text-[#9EAFC2]">28 Jun 2020</span>
                </div>
            </div>
            <Popover>
                <PopoverTrigger className={'hidden md:block'}>
                    <div className={`h-9 w-9 grid place-items-center  rounded-full ${sharing?'bg-[#6D7F97]':'bg-[#ECF2F8]'}`}>
                        {sharing?<img src={share1} className="object-contain w-4"/>:<img src={share} className="object-contain w-4"/>}
                    </div>
                </PopoverTrigger>
                <PopoverContent side={"top"} sideOffset={10} className={'bg-[#48556A] flex justify-around rounded-xl border-0 shadow-md shadow-[#6D7F97]/50'}>
                    <span className={'text-[#9EAFC2] text-sm tracking-[5px]'}>SHARE</span>
                    <div className={'flex gap-3'}>
                        <img src={facebook} className="object-contain w-4"/>
                        <img src={twitter} className="object-contain w-4"/>
                        <img src={pinterest} className="object-contain w-4"/>
                    </div>
                </PopoverContent>
            </Popover>
            <div onClick={handleSharing} className={`md:hidden h-9 w-9 grid place-items-center  rounded-full cursor-pointer ${sharing?'bg-[#6D7F97]':'bg-[#ECF2F8]'}`}>
                <img src={share} className="object-contain w-4"/>
            </div>
            {sharing&&
                <div className={'absolute left-0 bottom-0 w-full bg-[#4a5464] py-5 flex justify-around'}>
                <div className={'flex gap-4 items-center'}>
                    <span className={'text-[#9EAFC2] text-sm tracking-[5px]'}>SHARE</span>
                    <div className={'flex gap-3'}>
                        <img src={facebook} className="object-contain w-6"/>
                        <img src={twitter} className="object-contain w-6"/>
                        <img src={pinterest} className="object-contain w-6"/>
                    </div>
                </div>
                <div onClick={handleSharing} className={` h-9 w-9 grid place-items-center  rounded-full cursor-pointer bg-[#6D7F97]`}>
                    <img src={share1} className="object-contain w-4"/>
                </div>

            </div>}



        </div>
    )
}