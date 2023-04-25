import React from 'react';
import Header from "../../../features/intro-section-with-dropdown-nav/components/Header";
import Content from "../../../features/intro-section-with-dropdown-nav/components/Content";

const Index = () => {
    return (
        <div className={'introswdn w-[100vw] h-[100vh] bg-[#FAFAFA] flex flex-col overflow-auto'}>
            <Header/>
            <Content/>
        </div>
    );
};

export default Index;