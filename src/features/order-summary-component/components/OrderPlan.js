import React from 'react';
import music from '../../../features/order-summary-component/images/icon-music.svg'

const OrderPlan = () => {
    return (
        <div className={'w-full flex items-center space-x-3 p-5 rounded-xl bg-[#F5F7FF]'}>
            {/*<div/>*/}
            <img src={music} className={'object-fit'} alt={'Music'} />
            <div className={'flex-1 flex justify-between items-center'}>
                <div className={' flex flex-col space-y-2'}>
                    <span className={'font-bold text-sm text-[#1F2F56]'}>Annual Plan</span>
                    <span className={'text-sm text-[#7280A7]'}>$59.99/year</span>
                </div>
                <span className={'text-sm underline hover:no-underline text-[#3829E0] hover:text-[#3829E0]/70 font-bold'}>Change</span>
            </div>
        </div>
    );
};

export default OrderPlan;