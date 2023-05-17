import React from 'react';
import '../index.css'
const IntroWithSignupFormButton = ({children}) => {
    return (
        <button className={'greenShadow bg-[#38CC8C] hover:bg-[#38CC8C]/70 py-3 w-full font-medium rounded-lg'}>
            {children}
        </button>
    );
};

export default IntroWithSignupFormButton;