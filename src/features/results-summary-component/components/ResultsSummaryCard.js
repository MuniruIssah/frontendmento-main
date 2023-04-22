import React from 'react';
import reaction from '../images/icon-reaction.svg'
import memory from '../images/icon-memory.svg'
import verbal from '../images/icon-verbal.svg'
import visual from '../images/icon-visual.svg'
import '../index.css'
const ResultsSummaryCard = () => {
    return (
        <div className={'results_card_wrapper'}>
            <div className={'results_col_one'}>
                <span className={'results_main_title'}>Your Result</span>
                <div className={'results_circle'}>
                    <span className={'results_main_number'}>76</span>
                    <span className={'results_sub_number'}>of 100</span>
                </div>
                <span className={'results_status'}>Great</span>
                <p className={'results_sub_status'}>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className={'results_col_two'}>
                <span className={'results_summary_title'}>Summary</span>
                <div className={'results_summary_list'}>
                    {
                        summaries.map((item,index)=><SummaryItem {...item} key={index} />)
                    }
                </div>
                <button className={'results_continue'}>Continue</button>
            </div>
        </div>
    );
};

export default ResultsSummaryCard;


const SummaryItem=({icon,title,score,extraClasses})=>{
    return(
        <div className={`results_summary_item_wrapper ${extraClasses} `}>
            <div className={'results_summary_item_title'}><img className={''} src={icon} alt={title}/><span>{title}</span></div>
            <div className={'results_summary_item_value'}><span className={'text-[#303B5A]'}>{score}</span><span className={'text-[#303B5A]/50'}>/ 100</span></div>
        </div>)
}

const summaries=[{
    icon:reaction,
    title:'Reaction',
    score:'80',
    extraClasses:'text-[#FF5757] bg-[#FF5757]/5'
},
    {
        icon:memory,
        title:'Memory',
        score:'92',
        extraClasses:'text-[#FFB01F] bg-[#FFB01F]/5'
    },
    {
        icon:verbal,
        title:'Verbal',
        score:'61',
        extraClasses:'text-[#00BD91] bg-[#00BD91]/5'
    },
    {
        icon:visual,
        title:'Visual',
        score:'72',
        extraClasses:'text-[#1125D4] bg-[#1125D4]/5'
    },

]