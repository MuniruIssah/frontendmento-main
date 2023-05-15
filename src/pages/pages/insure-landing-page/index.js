import React, {useState} from 'react';
import InsureHeader from "../../../features/insure-landing-page/components/insure-header";
import InsureFindMore from "../../../features/insure-landing-page/components/insure-find-more";
import InsureFooter from "../../../features/insure-landing-page/components/insure-footer";
import InsurePerks from "../../../features/insure-landing-page/components/insure-perks";
import InsureContentTop from "../../../features/insure-landing-page/components/insure-content-top";
import introLeft from "../../../features/insure-landing-page/images/bg-pattern-intro-left-desktop.svg";
import introRightMobile from "../../../features/insure-landing-page/images/bg-pattern-intro-right-mobile.svg";
import introImageMobile from "../../../features/insure-landing-page/images/image-intro-mobile.jpg";
import InsureMobileMenu from "../../../features/insure-landing-page/components/insure-mobile-menu";

const Index = () => {
    const [showNav,setShowNav]=useState(false)
    const handleNav=()=>setShowNav(prevState => !prevState)
    return (
        <div className={'relative insureLandingPage w-[100vw] h-[100vh] overflow-auto flex flex-col gap-32 md:gap-48 transition-all ease-in-out'}>
            <div className={'w-full relative md:mb-16'}>
                <InsureHeader showNav={showNav} toggleNav={handleNav}/>
                <img src={introImageMobile} className="md:hidden w-full"/>
                <InsureContentTop/>
                <img src={introLeft} className="hidden md:block absolute -bottom-1/2"/>
                <img src={introRightMobile} className="md:hidden absolute right-0 -bottom-44"/>
            </div>
            <InsurePerks/>
            <InsureFindMore/>
            <InsureFooter/>
            {showNav&&<InsureMobileMenu/>}
        </div>
    );
};

export default Index;