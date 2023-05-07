import React from 'react';
import {huddleLandingFooterIcons} from "../data";

const HuddleLandingFooter = () => {
    return (
        <footer className={'flex items-center justify-center md:justify-end gap-5'}>
            {huddleLandingFooterIcons.map((item,index)=><FooterLink key={index} {...item} />)}
        </footer>
    );
};

export default HuddleLandingFooter;

const FooterLink=({icon,title})=>{
return(
    <div className={'h-10 w-10 grid place-items-center border border-white text-white rounded-full cursor-pointer transition-all ease-in-out hover:text-[#E882E8] hover:border-[#E882E8]'}>
        {icon}
    </div>
);
}

