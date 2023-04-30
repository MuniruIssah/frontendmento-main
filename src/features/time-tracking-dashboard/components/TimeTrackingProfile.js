import React, {useState} from 'react';
import jeremy from '../images/image-jeremy.png'
const TimeTrackingProfile = () => {
    const [currentFilter,setCurrentFilter]=useState("Daily")
    const handleChangeFilter=(filter)=>setCurrentFilter(filter);
    return (
        <div className={'row-span-2 bg-[#1C1F4A] w-full h-full flex flex-col rounded-2xl'}>
            <div className="rounded-2xl bg-[#5847EB] p-7 flex items-center gap-4 sm:gap-0 sm:flex-col sm:space-y-6 sm:items-start h-3/4">
                <img src={jeremy} alt="jeremy" className="h-16 ring-2 ring-white rounded-full"/>
                <div className=" flex flex-col items-start space-y-1 sm:space-y-2">
                    <span className={'text-sm text-[#BDC1FF]'}>Report for</span>
                    <h3 className={'text-2xl sm:text-4xl text-white font-light'}>Jeremy Robson</h3>
                </div>
            </div>
            <div className="w-full  flex-1 flex justify-center sm:flex-col sm:items-start sm:space-y-3 p-5">
                {
                    dummyFilters.map((item,index)=><ProfileFilter changeFilter={()=>handleChangeFilter(item)} currentFilter={currentFilter} title={item} key={index} />)
                }
            </div>
        </div>
    );
};

export default TimeTrackingProfile;
const dummyFilters=['Daily','Weekly','Monthly']
const ProfileFilter=({title,currentFilter,changeFilter})=>{
    const isActive=currentFilter===title
    return(
        <div onClick={changeFilter} className={`w-full cursor-pointer  text-center sm:text-left hover:text-white ${isActive?'text-white':'text-[#6F76C8]'}`}>{title}</div>
    );
}