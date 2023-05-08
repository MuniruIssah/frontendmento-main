import React from 'react';
import InteractivePricingWrapper
    from "../../../features/interactive-pricing-component/components/interactive-pricing-wrapper";

const Index = () => {
    return (
        <div className={'interPricing w-[100vw] min-h-[100vh] flex items-start justify-center pt-16 px-5'}>
            <InteractivePricingWrapper/>
        </div>
    );
};

export default Index;