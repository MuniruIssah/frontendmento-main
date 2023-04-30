import React from 'react';
import background from '../images/bg-pattern-card.svg'
import victor from '../images/image-victor.jpg'

const ProfileCard = () => {
    return (
        <div className={"w-full max-w-sm rounded-2xl bg-white shadow-md overflow-hidden"}>
                <div className={'bg-contain h-36'} style={{backgroundImage:`url(${background})`}} />
                <div className={'w-full flex flex-col divide-y'}>
                    <div className={'flex flex-col items-center'}>
                        <img src={victor} alt="victor" className="rounded-full ring-2 ring-white h-24 -mt-12"/>
                        <div className={'flex flex-col items-center my-5 space-y-3'}>
                            <div className="flex space-x-2">
                                <h5 className={'text-[#2D3248] font-bold text-[18px]'}>Victor Crest</h5>
                                <span className={'text-[#6A6F81] text-[18px]'}>26</span>
                            </div>
                            <span className={'text-[#969696] text-sm'}>London</span>
                        </div>
                    </div>

                    <div className="flex justify-around w-full p-6">
                        {dummyStats.map((item,index)=><Stat {...item} key={index}/>)}
                    </div>
                </div>


        </div>
    );
};

export default ProfileCard;
const dummyStats=[
    {
        value:"80k",
        name:"Followers"
    },
    {
        value:"803k",
        name:"Likes"
    },
    {
        value:"1.4k",
        name:"Photos"
    },
]

const Stat=({value,name})=>{
    return(
        <div className={'flex flex-col items-center text-center space-y-1'}>
            <h5 className={'text-[#2D3248] font-bold text-[18px] uppercase'}>{value}</h5>
            <span className={'text-[#969696] text-xs'}>{name}</span>
        </div>
    );
}