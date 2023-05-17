import React from 'react';
import IntroWithSignupMain from "../../../features/intro-with-signup-form/components/intro-with-signup-main";
import {ToastContainer} from "react-toastify";
const Index = () => {
    return (
        <div className={'introWithSignUpForm w-[100vw] min-h-[100vh] flex items-center justify-center p-8 md:p-5'}>
            <IntroWithSignupMain/>
            <ToastContainer/>
        </div>
    );
};

export default Index;