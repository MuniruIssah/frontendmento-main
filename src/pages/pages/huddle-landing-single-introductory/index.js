import React from 'react';
import HuddleLandingHeader from "../../../features/huddle-landing-single-introductory/components/huddle-landing-header";
import HuddleLandingMain from "../../../features/huddle-landing-single-introductory/components/huddle-landing-main";
import HuddleLandingFooter from "../../../features/huddle-landing-single-introductory/components/huddle-landing-footer";

const Index = () => {
    return (
        <div className={'huddleLSI w-[100vw] min-h-[100vh] px-7 md:px-16 py-10 grid place-items-center'}>
            <div className={'max-w-screen-xl flex flex-col space-y-16'}>
                <HuddleLandingHeader/>
                <HuddleLandingMain/>
                <HuddleLandingFooter/>
            </div>

        </div>
    );
};

export default Index;