import React, {useState} from 'react';
import InteractiveRatingCardWrapper from "../../../features/interactive-rating/components/interactive-rating-card-wrapper";
import RatingsForm from "../../../features/interactive-rating/components/ratings-form";
import ThankYou from "../../../features/interactive-rating/components/thank-you";
const Index = () => {
    const [activeState,setActiveState]=useState()
    const [submitted,setSubmitted]=useState(false)
    const handleChange=(rating)=>setActiveState(rating)
    const handleSubmit=()=>{
        if(!activeState){
            alert('Please select a rating');
            return;
        }
        setSubmitted(prevState => !prevState);
    }
    return (
        <div className={'irc w-[100vw] h-[100vh] bg-[#121417] flex items-center justify-center p-5'}>
            <InteractiveRatingCardWrapper>
                {!submitted?<RatingsForm activeState={activeState} handleChange={handleChange} handleSubmit={handleSubmit}/>:<ThankYou rating={activeState}/>}
            </InteractiveRatingCardWrapper>
        </div>
    );
};

export default Index;

export const Head = () => <title>Interactive Rating Component</title>
