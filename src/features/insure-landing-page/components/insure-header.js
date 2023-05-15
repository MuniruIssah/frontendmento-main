import React from 'react';
import InsureLink from "./insure-link";
import InsureButton from "./insure-button";
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
const InsureHeader = ({showNav,toggleNav}) => {
    return (
        <header className={'w-full py-5 relative z-30 bg-white px-6 md:px-0'}>
            <div className={'w-full max-w-screen-lg mx-auto flex justify-between items-center'}>
                {/*LOGO*/}
                {/*<div />*/}
                <img src={logo} alt="insure" className="object-contain"/>
                {/*LINKS*/}
                <div className="hidden md:flex items-center gap-6">
                    <InsureLink>how we work</InsureLink>
                    <InsureLink>blog</InsureLink>
                    <InsureLink>account</InsureLink>
                    <InsureButton primary>View Plans</InsureButton>
                </div>
                <img onClick={toggleNav} src={toggleNav?hamburger:close} alt="" className="cursor-pointer md:hidden"/>
            </div>

        </header>
    );
};

export default InsureHeader;