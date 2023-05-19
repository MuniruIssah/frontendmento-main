import React from 'react';
import {ratings,comments} from "../data";
import SocialProofSectionRating from "./social-proof-section-rating";
import SocialProofCommentCard from "./social-proof-comment-card";

const SocialProofSectionMain = () => {
    return (
        <main className={'w-full max-w-[1100px] mx-auto flex flex-col gap-10 md:gap-16'}>
            <div className={'text-[#502050] grid md:grid-cols-2 gap-10'}>
                <div className={'flex flex-col items-center text-center md:items-start md:text-left justify-center gap-7'}>
                    <h1 className={'text-4xl max-w-xs md:text-6xl font-bold md:max-w-sm'}>10,000+ of our users love our products.</h1>
                    <p className="md:text-lg max-w-md text-[#937B92]">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                </div>
                <div className={'flex flex-col gap-4 justify-center'}>
                    {ratings.map((item,index)=><SocialProofSectionRating key={index} extraClasses={item.extraClasses}>{item.description}</SocialProofSectionRating>)}
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap  items-center gap-7 lg:h-[35vh]">
                {comments.map((item,index)=><SocialProofCommentCard key={index} {...item}  />)}
            </div>
        </main>
    );
};

export default SocialProofSectionMain;