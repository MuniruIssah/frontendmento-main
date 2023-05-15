import React from 'react';
import InsureLink from "./insure-link";
import logo from "../images/logo.svg";
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa";
import '../index.css'
import {footerSections} from "../data";

const InsureFooter = () => {
    return (
        <div className={'insureFooter bg-[#FAFAFA] w-full px-6 lg:px-0 py-14'}>
            <div className={'w-full max-w-screen-lg mx-auto flex flex-col gap-4 md:flex-row items-center justify-between border-b border-gray-300 pb-7'}>
                <img src={logo} alt="insure" className="object-contain"/>
                {/*SOCIAL MEDIA LINKS*/}
                <div className={'flex gap-2'}>
                    <FooterSocialMediaIcon><AiFillFacebook/></FooterSocialMediaIcon>
                    <FooterSocialMediaIcon><AiOutlineTwitter/></FooterSocialMediaIcon>
                    <FooterSocialMediaIcon><FaPinterest/></FooterSocialMediaIcon>
                    <FooterSocialMediaIcon><AiOutlineInstagram/></FooterSocialMediaIcon>
                </div>
            </div>
            <div className={'w-full max-w-screen-lg mx-auto flex flex-wrap gap-6 md:gap-0 items-start justify-between py-7'}>
                {footerSections.map((item,index)=><FooterLinksSection {...item} key={index} />)}
            </div>

        </div>
    );
};

export default InsureFooter;

const FooterLinksSection=({title,links})=>{
    return (
        <div className={'flex-1 min-w-[200px] flex-shrink-0 flex flex-col items-center text-center sm:text-left sm:items-start gap-4'}>
            <span className={'uppercase text-[14px] text-[#837D87]'}>{title}</span>
            <div className="flex flex-col gap-2">
                {links.map((item,index)=><InsureLink key={index} primary>{item}</InsureLink>)}
            </div>
        </div>
    );
}
const FooterSocialMediaIcon=({children})=>{
    return <div className={'text-gray-500 hover:text-black cursor-pointer'}>{children}</div>
}