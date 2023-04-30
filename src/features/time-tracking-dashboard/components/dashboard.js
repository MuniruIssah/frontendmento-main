import React from 'react';
import TimeTrackingProfile from "./TimeTrackingProfile";
import {dummyTrackingStats} from "../utils";
import TimeTrackingItem from "./TimeTrackingItem";
import '../index.css'
const Dashboard = () => {
    return (
        <div className={'timeTrackingDashboardInner w-full max-w-screen-lg grid gap-8'}>
            <TimeTrackingProfile/>
            {
                dummyTrackingStats.map((item,index)=><TimeTrackingItem {...item} key={index} />)
            }
        </div>
    );
};

export default Dashboard;

