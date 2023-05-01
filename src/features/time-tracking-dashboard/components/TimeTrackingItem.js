import React from 'react';
import more from '../images/icon-ellipsis.svg'
import moreWhite from '../images/icon-ellipsis-white.svg'
// import MoreComponent from '../images/icon-ellipsis.svg'
const TimeTrackingItem = ({title,timeframes,currentFilter,itemImage,extraClasses}) => {
    return (
        <div className={`rounded-xl  ${extraClasses} overflow-hidden  pt-10  bg-no-repeat bg-right-top`}
             style={{backgroundImage:`url(${itemImage})`}}>
            <div className="w-full rounded-xl bg-[#1C1F4A] hover:bg-[#6F76C8] cursor-pointer text-white p-5 flex flex-col space-y-5">
                <div className="flex justify-between items-center">
                    <span className="">{title}</span>
                    <div className={'group'}>
                        <img src={more} className="group-hover:hidden object-contain"/>
                        <img src={moreWhite} className="object-contain hidden group-hover:block"/>
                    </div>

                    {/*<MoreComponent className={'hover:fill-white'} />*/}
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:space-y-3 sm:items-start">
                    <h3 className={'text-3xl md:text-5xl font-light transition-all ease-in-out'}>{timeframes[currentFilter].current}{timeframes[currentFilter].current>1?'hrs':'hr'}</h3>
                    <span className={'text-sm text-[#BDC1FF] font-light  transition-all ease-in-out'}>Last week - {timeframes[currentFilter].previous}{timeframes[currentFilter].previous>1?'hrs':'hr'}</span>
                </div>
            </div>

        </div>
    );
};

export default TimeTrackingItem;