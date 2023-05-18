import React from 'react';
import hero from "../images/hero-desktop.jpg";

const BaseApparelColumnTwo = () => {
    return (
        <div className="hidden md:block md:col-span-2">
            <img src={hero} alt="" className="object-cover h-full w-full"/>
        </div>
    );
};

export default BaseApparelColumnTwo;