import React from 'react';
import Dashboard from "../../../features/time-tracking-dashboard/components/dashboard";

const Index = () => {
    return (
        <div className={'timeTrackingDashboard w-[100vw] min-h-[100vh] flex items-center justify-center bg-[#0F1424] p-5'}>
            <Dashboard/>
        </div>
    );
};

export default Index;