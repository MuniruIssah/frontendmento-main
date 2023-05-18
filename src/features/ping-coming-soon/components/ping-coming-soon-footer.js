import React from 'react';
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";

const PingComingSoonFooter = () => {
    return (
        <footer className={'flex flex-col items-center gap-5'}>
            <div className={'flex items-center gap-3'}>
                <PingIconButton extraClasses={"p-[8.5px]"}><FaFacebookF/></PingIconButton>
                <PingIconButton><FaTwitter/></PingIconButton>
                <PingIconButton><FaInstagram/></PingIconButton>
            </div>
            <span className={'text-sm text-[#969696]/80'}>© Copyright Ping. All rights reserved.</span>
        </footer>
    );
};

export default PingComingSoonFooter;

const PingIconButton=({children,extraClasses})=>{
    return (
        <div className={`h-7 w-7 p-1.5 flex items-center justify-center rounded-full border border-[#969696]/30  hover:border-[#4F7DF3] hover:bg-[#4F7DF3] cursor-pointer  text-[#4F7DF3] hover:text-white ${extraClasses}`}>
            {children}
        </div>
    );
}