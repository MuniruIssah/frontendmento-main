import React, {useState,useMemo} from 'react';
import arrow from '../images/icon-arrow.svg'
import '../index.css'
import {validateEmail} from "../helpers/validate-email";
import {toast} from "react-toastify";
const BaseApparelForm = () => {

    const [state,setState]=useState({
        emailAddress:'',
        emailError:''
    })
    const clearError=()=>{
        setState({...state,emailError: ''});
    }
    const handleChange=({target:{name,value}})=>setState({...state,[name]:value})
    const handleSubmit=(e)=>{
        e.preventDefault();
        clearError()
        if(state.emailAddress==='') {
            setState({...state, emailError: "Whoops! It looks like you forgot to add your email"})
            return;
        }

        if(!validateEmail(state.emailAddress)) {
            setState({...state, emailError: "Please provide a valid email address"})
            return;
        }

        toast.success("Thanks for joining our newsletter")

        setInterval(()=>{
            window.location.reload()
        },2000)
    }

    const emailError=useMemo(()=>state.emailError.length>0?true:false,[state.emailError])

    return (
        <div className={'w-full flex flex-col gap-4'}>
        <form className={`w-full flex h-[6vh] md:h-[7vh]`} onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={state.emailAddress} name={'emailAddress'}
                   className={`flex-1 h-full bg-transparent text-sm md:text-base text-[#413A3A] placeholder:text-[#CE9797]/40 pl-5 pr-16 py-2 focus:outline-0 rounded-l-full  
                   ${emailError?'border-2 border-r-0 border-[#F96262]':'border border-r-0 border-[#CE9797]'}
                    `}
                   placeholder={emailError?'':'Email Address'}/>
            <button  className="baseApparelFormButton rounded-full w-16 md:w-28 grid place-items-center -ml-7 md:-ml-12 hover:scale-105">
                <img src={arrow} alt="" className="object-contain w-3"/>
            </button>
        </form>
            {emailError&&<span className={'text-sm px-5 text-[#F96262]'}>{state.emailError}</span>}
        </div>
    );
};

export default BaseApparelForm;