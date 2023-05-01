import React, {useState} from 'react';
import TimeTrackingProfile from "./TimeTrackingProfile";
import {dummyTrackingStats} from "../utils";
import TimeTrackingItem from "./TimeTrackingItem";
import '../index.css'
const Dashboard = () => {
    const [currentFilter,setCurrentFilter]=useState('daily')
    return (
        <div className={'timeTrackingDashboardInner w-full max-w-screen-lg grid gap-8'}>
            <TimeTrackingProfile currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            {
                dummyTrackingStats.map((item,index)=><TimeTrackingItem currentFilter={currentFilter} {...item} key={index} />)
            }
        </div>
    );
};

export default Dashboard;

