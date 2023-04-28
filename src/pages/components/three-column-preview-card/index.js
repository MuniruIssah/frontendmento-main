import React from 'react';
import ThreeColumnWrapper from "../../../features/three-column-preview-card/components/three-column-wrapper";

const Index = () => {
    return (
        <div className={'threeColumnPreviewCard w-[100vw] min-h-[100vh] overflow-auto bg-[#F2F2F2] flex justify-center items-center justify-center p-7 sm:p-10'}>
            <ThreeColumnWrapper/>
        </div>
    );
};

export default Index;