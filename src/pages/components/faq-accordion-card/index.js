import React from 'react';
import FaqContainer from "../../../features/faq-accordion-card/components/faq-container";

const Index = () => {
    return (
        <div className={'faqAccordionCard w-[100vw] min-h-[100vh] overflow-auto bg-gradient-to-b from-[#AF67E9] to-[#6565E7] flex items-center justify-center p-5'}>
            <FaqContainer/>
        </div>
    );
};

export default Index;