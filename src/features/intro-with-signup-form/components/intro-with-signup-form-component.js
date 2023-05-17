import React, {useState} from 'react';
import IntroWithSignupFormButton from "./intro-with-signup-form-button";
import IntroWithSignupInput from "./intro-with-signup-input";
import {toast} from "react-toastify";
import {validateEmail} from "../helpers/validate-email";
import '../index.css'




const IntroWithSignupFormComponent = () => {
    const [state,setState]=useState({
        firstName:'',
        lastName:'',
        emailAddress:'',
        password:'',
    })
    const [errorState,setErrorState]=useState({
        firstName:'',
        lastName:'',
        emailAddress:'',
        password:'',
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
        setErrorState({...errorState,[name]:''})
    }
    const clearErrorState=()=>{
        setErrorState({
            ...errorState
            ,firstName:'',
            lastName:'',
            emailAddress:'',
            password:'',})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        clearErrorState()
        const newErrorState={...errorState};

        if(state.firstName==='') newErrorState.firstName= "First Name cannot be empty"
        if(state.lastName==='') newErrorState.lastName= "Last Name cannot be empty"
        if(state.emailAddress==='') newErrorState.emailAddress="Email Address cannot be empty"
        if(state.emailAddress!=''&&!validateEmail(state.emailAddress)) newErrorState.emailAddress="Looks like this is not an email"
        if(state.password==='')  newErrorState.password="Password cannot be empty"
        setErrorState(newErrorState);

        if(newErrorState.firstName==''&&newErrorState.lastName==''&&newErrorState.emailAddress==''&&newErrorState.password==''){
            toast.success("Form submitted successfully")
            setInterval(()=>{
                window.location.reload()
            },2000)

        }
    }
    return (
        <form onSubmit={handleSubmit} className={'blackShadow bg-white flex flex-col gap-6 items-center p-5 md:p-10 rounded-xl'}>
            <IntroWithSignupInput name={'firstName'} value={state.firstName} onChange={handleChange} errorMessage={errorState.firstName} placeholder={"First Name"} />
            <IntroWithSignupInput name={'lastName'} value={state.lastName} onChange={handleChange} errorMessage={errorState.lastName} placeholder={"Last Name"} />
            <IntroWithSignupInput name={'emailAddress'} value={state.emailAddress} onChange={handleChange} errorMessage={errorState.emailAddress} placeholder={"Email Address"} />
            <IntroWithSignupInput name={'password'} value={state.password} onChange={handleChange} errorMessage={errorState.password} placeholder={"Password"} type={'password'} />
            <IntroWithSignupFormButton>CLAIM YOUR FREE TRIAL</IntroWithSignupFormButton>
            <div className={'text-xs text-center'}>
                <span className={'text-[#B9B6D3]'}>By clicking the button, you are agreeing to our </span>
                <span className={'text-[#FF7A7A] font-bold'}>Terms and Services</span>
            </div>
        </form>
    );
};

export default IntroWithSignupFormComponent;