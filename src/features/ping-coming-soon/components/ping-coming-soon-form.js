import React, {useMemo, useState} from 'react';
import {validateEmail} from "../helpers/validate-email";
import {toast} from "react-toastify";

const PingComingSoonForm = () => {
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

        toast.success("You will be notified every now and then")

        setInterval(()=>{
            window.location.reload()
        },2000)
    }

    const emailError=useMemo(()=>state.emailError.length>0?true:false,[state.emailError])


    return (
        <form className={'w-full flex flex-col md:flex-row items-stretch gap-5'} onSubmit={handleSubmit}>
            <div className={'flex-1 flex flex-col gap-2 items-stretch '}>
                <input type="text" name={'emailAddress'} onChange={handleChange} value={state.emailAddress} placeholder={emailError?'':'Your email address...'} className={`flex-1 rounded-full h-12 px-5 py-3 text-[#151F29] border ${emailError?'border-[#FF5263]':'border-[#C2D3FF] focus:border-[#969696]'}  placeholder:text-[#C2D3FF]/70 placeholder:font-light focus:outline-0  `}/>
                {emailError&&<span className="w-full text-sm italic text-left text-[#FF5263]">{state.emailError}</span>}
            </div>
            <button type={"submit"} className="w-full text-white text-sm font-semibold bg-[#4F7DF3] hover:bg-[#4F7DF3]/80  md:w-48 rounded-full h-12 shadow-lg shadow-[#4F7DF3]/50 ">Notify Me</button>
        </form>
    );
};

export default PingComingSoonForm;