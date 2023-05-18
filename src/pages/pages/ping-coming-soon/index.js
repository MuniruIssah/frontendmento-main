import React from 'react';
import logo from '../../../features/ping-coming-soon/images/logo.svg'
import illustration from '../../../features/ping-coming-soon/images/illustration-dashboard.png'
import PingComingSoonFooter from "../../../features/ping-coming-soon/components/ping-coming-soon-footer";
import PingComingSoonForm from "../../../features/ping-coming-soon/components/ping-coming-soon-form";
import {ToastContainer} from "react-toastify";
const Index = () => {
    return (
        <div className={'pingComingSoon w-[100vw] min-h-[100vh] flex justify-start items-center py-6'}>
            <main className={'max-w-screen-sm mx-auto p-5 flex flex-col items-center text-center gap-16 md:gap-12'}>
            {/*LOGO*/}
                <div className={'w-full flex flex-col items-center gap-7 md:gap-10'}>
                    <img src={logo} alt="" className="w-20"/>
                    <div className="w-full flex flex-col gap-5">
                        <h1 className={'text-3xl md:text-4xl'}><span className={'text-[#969696] font-light'}>We are launching</span> <span className={'font-bold text-[#151F29]'}>soon!</span></h1>
                        <span className="text-lg text-[#151F29] font-light">Subscribe and get notified</span>
                        <PingComingSoonForm/>
                    </div>
                </div>

                <img src={illustration} alt="" className="w-full"/>

                <PingComingSoonFooter/>
            </main>
            <ToastContainer/>
        </div>
    );
};

export default Index;