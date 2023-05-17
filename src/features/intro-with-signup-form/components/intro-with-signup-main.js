import React from 'react';
import IntroWithSignupFormComponent from "./intro-with-signup-form-component";
import '../index.css'

const IntroWithSignupMain = () => {
    return (
        <main className={'w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-white'}>
            <section className="w-full flex flex-col items-center text-center md:text-left md:items-stretch justify-center gap-5 md:gap-10">
                <h1 className={'text-3xl md:text-5xl font-bold'}>Learn to code by watching others</h1>
                <p className="text-sm md:text-base opacity-90">See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </section>
            <section className="w-full flex flex-col justify-center gap-6">
                <div className={'blackShadow w-full text-center bg-[#6055A5] py-4 px-14 md:px-0 rounded-xl font-light'}><span className={'font-bold'}>Try it free 7 days</span> <span className={'opacity-80'}>then $20/mo. thereafter</span></div>
                <IntroWithSignupFormComponent/>
            </section>
        </main>
    );
};

export default IntroWithSignupMain;