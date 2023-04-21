import React from 'react';
import background from '../../../features/order-summary-component/images/pattern-background-desktop.svg'
import OrderCard from "../../../features/order-summary-component/components/OrderCard";
const Index = () => {
    return (
        <div className={'oscomp w-[100vw] h-[100vh] bg-contain bg-no-repeat bg-top bg-[#E0E8FF] grid place-items-center p-5'} style={{backgroundImage:`url(${background})`}}>
            <OrderCard/>
        </div>
    );
};

export default Index;