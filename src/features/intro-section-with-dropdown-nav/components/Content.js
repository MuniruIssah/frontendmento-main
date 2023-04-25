import React from 'react';
import '../index.css'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'
const Content = () => {
    return (
        <div className={'w-full max-w-6xl h-[90vh]  mx-auto flex flex-col-reverse sm:flex-row  items-end gap-5  md:gap-16 xl:gap-20 sm:p-10'}>
            <div className="flex-1 flex flex-col space-y-14 p-4 sm:space-y-20 items-center sm:items-start text-left md:justify-end">
                <div className={'flex flex-col space-y-6 sm:space-y-10  items-center text-center sm:text-left sm:items-start'}>
                    <h1 className={'text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-none'}>Make remote work</h1>
                    <p className="text-[18px] text-[#696969]">
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch productivity soar.
                    </p>
                    <button className="btn primary">Learn More</button>
                </div>
                <Companies/>
            </div>
            <div className={'hero_bg'}></div>
        </div>
    );
};

export default Content;


const Companies=()=>{
    return (
        <div className={'flex items-center gap-5 sm:gap-10 flex-wrap'}>
            <img src={databiz} alt="databiz" className="h-4"/>
            <img src={audiophile} alt="audiophile" className="h-6"/>
            <img src={meet} alt="meet" className="h-4"/>
            <img src={maker} alt="maker" className="h-5"/>
        </div>
    )
}