import React from 'react';
import ethereum from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import view from "../images/icon-view.svg";
import avatar from "../images/image-avatar.png";
import equilibrium from "../images/image-equilibrium.jpg";

const NftCardMain = () => {
    return (
        <div className={'max-w-[350px] rounded-2xl shadow-lg shadow-black/30 p-6 bg-[#14253D] flex flex-col space-y-5 transition-all ease-in-out'}>
            {/*IMAGE*/}
            <div className={'relative group'}>
                <img src={equilibrium} className={'object-fit rounded-xl'} alt={'equilibrium'}/>
                <div className={'hidden group-hover:grid absolute h-full w-full bg-[#00FFF7]/50 top-0 left-0 rounded-xl backdrop-blur-[1px] place-items-center transition-all ease-in-out'}>
                    <img src={view} className={'object-fit'} alt={'view'}/>
                </div>
            </div>
            {/*<div className="h-52 bg-cover bg-no-repeat bg-center rounded-2xl" style={{backgroundImage:`url(${equilibrium}`}}></div>*/}
            <h4 className={'text-white text-xl hover:text-[#00FFF7] cursor-pointer'}>Equilibrium #3438</h4>
            <p className={'text-[#8BACDA] text-[18px] font-light'}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={'divide-y divide-[#2F415B]'}>
                <div className={'flex items-center justify-between text-[16px] pb-5'}>
                    <div className={'flex items-center space-x-2 font-bold text-[#00FFF7]'}><img src={ethereum} className={'object-fit w-3 md:w-auto'} alt={'ethereum'}/><span>0.041 ETH</span></div>
                    <div className={'flex items-center space-x-2 text-[#8BACDA]'}><img src={clock} className={'object-fit w-3 md:w-auto'} alt={'clock'}/><span>3 days left</span></div>
                </div>
                <div className={'flex items-center space-x-3 text-[16px] pt-5'}>
                    <img src={avatar} className={'object-fit h-8 border border-white rounded-full'} alt={'avatar'}/>
                    <span ><span className={'text-[#8BACDA]'}>Creation of</span>{" "}<span className={'text-white hover:text-[#00FFF7] cursor-pointer'}>Jules Wyvern</span> </span>
                </div>
            </div>
        </div>
    );
};

export default NftCardMain;