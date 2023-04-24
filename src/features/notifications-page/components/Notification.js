import React, {useMemo} from 'react';

const Notification = ({id=0,avatar,user,action,time,read,post='',group='',message='',preview='',handleRead}) => {
   const action_=useMemo(()=>{
       switch (action){
           case "reaction":
               return "reacted to your recent post"
           case "follow":
               return "followed you"
           case "group-join":
               return "has joined your group"
           case "group-exit":
               return "left the group"
           case "comment":
               return "commented on your picture"
           default:
               return "sent you a private message"
       }
   },[action])

    const handleReadNotification=()=>{
       if(!read) handleRead(id)
    }
    return (
        <div className={`flex items-start space-x-3 p-3 text-[15px] rounded-2xl cursor-pointer ${!read?'bg-[#F7FAFD]':''}`} onClick={handleReadNotification}>
            <img src={avatar} className={'object-fit h-10'} alt={user}/>
            <div className={'flex-1 flex items-start justify-between'}>
                <div className="flex flex-col items-start space-y-1">
                <span className={'items-center relative'}><span className={'font-bold  cursor-pointer text-[#1C202B] hover:text-[#0A317B] mr-1.5'}>{user}</span>
                    <span className={'text-[#5E6778] inline  mr-1.5'}>{action_}</span>
                    {post.length>0&&<span className={'text-[#5E6778] hover:text-[#0A317B] font-bold mr-1.5 cursor-pointer'}>{post}</span>}
                    {group.length>0&&<span className={'text-[#0A317B] font-bold mr-1.5 cursor-pointer'}>{group}</span>}
                    {!read&&<span className={'h-2 w-2 bg-[#F65351] rounded-full inline-block'}></span>}</span>
                    <span className={'text-[#939DAE]'}>{time}</span>
                    {message&&<p className={'p-4 text-[14px] text-[#5E6778] border border-[#DDE7EE] rounded hover:bg-[#E5EFFA]'}>{message}</p>}
                </div>
                {preview&&<img src={preview} className={'object-fit h-10'} alt={user}/>}
            </div>


        </div>
    );
};

export default Notification;