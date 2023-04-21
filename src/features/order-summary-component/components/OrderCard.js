import React from 'react';
import OrderPlan from "./OrderPlan";
import OrderButton from "./OrderButton";
import hero from "../images/illustration-hero.svg";

const OrderCard = () => {
    return (
        <div className={'bg-white max-w-[400px] rounded-2xl shadow-lg shadow-[#3829E0]/10 overflow-hidden'}>
            <img src={hero} className={'object-fit'} alt={'hero'} />
            <div className={' py-7 md:py-10 px-7 text-center flex flex-col items-center space-y-5'}>
                <h2 className={'text-2xl font-bold text-[#1F2F56]'}>Order Summary</h2>
                <p className={'text-[15px] text-[#1F2F56]/60 md:w-4/5'}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <OrderPlan/>
                <OrderButton/>
                <button className={'text-[#7280A7] hover:text-[#1F2F56] text-sm font-bold'}>Cancel Order</button>
            </div>
        </div>
    );
};

export default OrderCard;