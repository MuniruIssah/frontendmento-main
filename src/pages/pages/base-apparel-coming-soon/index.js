import React from 'react';
import BaseApparelColumnTwo from "../../../features/base-apparel-coming-soon/components/base-apparel-column-two";
import BaseApparelColumnOne from "../../../features/base-apparel-coming-soon/components/base-apparel-column-one";
import {ToastContainer} from "react-toastify";

const Index = () => {
    return (
        <>
        <div className={'baseApparelComingSoon w-[100vw] min-h-[100vh] grid md:grid-cols-5'}>
            <BaseApparelColumnOne/>
            <BaseApparelColumnTwo/>
        </div>
            <ToastContainer/>
        </>
    );
};

export default Index;