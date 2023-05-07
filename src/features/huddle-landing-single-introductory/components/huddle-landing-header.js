import React from 'react';
import logo from '../images/logo.svg'
const HuddleLandingHeader = () => {
    return (
        <header>
            <img  src={logo} className={'w-36 md:w-auto'} />
        </header>
    );
};

export default HuddleLandingHeader;