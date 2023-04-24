import React, {useMemo, useState} from 'react';
import {notifications as notifications_} from "../data/notifications";
import Notification from "./Notification";

const NotificationsWrapper = () => {
    const [notifications,setNotifications]=useState(notifications_)
    const unReadNotifications=useMemo(()=>notifications.filter(item=>!item.read).length,[notifications])

    const markAllAsRead=()=>{
        const allNotifications=[...notifications].map((item)=>({...item,read:true}))
        setNotifications(allNotifications)
    }

    const read=(id)=>{
        const allNotifications=[...notifications].map((item)=>item.id==id?({...item,read:true}):item);
        setNotifications(allNotifications)
    }

    return (
        <div className={'w-full h-[100vh] md:h-[90vh] max-w-[670px] bg-white md:rounded-2xl md:shadow-md overflow-auto px-4 md:px-7 py-10 flex flex-col space-y-5 '}>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <h1 className={'text-xl text-[#1C202B] font-bold'}>Notifications</h1>
                    <span className={'bg-[#0A317B] py-0.5 text-sm px-2.5 rounded text-white'}>{unReadNotifications}</span>
                </div>
                <button type={"button"} className={'text-[#5E6778] hover:text-[#0A317B] text-[14px]'} onClick={markAllAsRead}>Mark all as read</button>
            </div>
            <div className="flex flex-col space-y-2">
                {notifications.map(item=><Notification {...item} key={item.id} handleRead={read}/>)}
            </div>

        </div>
    );
};

export default NotificationsWrapper;