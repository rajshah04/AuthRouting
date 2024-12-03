import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../../Redux/Slices/authSlice';
import { signup } from '../../Services/Operations/authAPI';

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false) ;
    const [showConfirmPassword, setShowConfirmPassword] = useState(false) ;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }) ;

    const {firstName, lastName, email, password, confirmPassword} = formData ;

    const changeHandler = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        })) ;
    }

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const submitHandler = (e) => {
        e.preventDefault() ;

        const signupData = {...formData} ;

        dispatch(setSignupData(signupData)) ;

        dispatch(signup(firstName, lastName, email, password, confirmPassword, navigate)) ;

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }) ;

        // console.log(accountType) ;
        // console.log(formData) ;
    }


    return (
        <form className='mt-2 flex w-full flex-col gap-y-4' onSubmit={submitHandler}>

            <p className='text-white text-center text-4xl'>
                Signup Form
            </p>

            {/* Name div */}
            <div className='flex flex-col md:flex-row gap-6'>
                <label className='w-full relative'>
                    <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                        First Name <sub className='text-red-600 text-lg'>*</sub>
                    </p>
                    
                    <input required type="text" name='firstName' value={firstName} 
                    placeholder='Enter first name' 
                    className='w-full rounded-lg bg-slate-800 p-3 text-white tracking-wide border-b-2 border-slate-700' 
                    onChange={changeHandler}/>
                    
                </label>

                <label className='w-full relative'>
                    <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                        Last Name <sub className='text-red-600 text-lg'>*</sub>
                    </p>
                    
                    <input required type="text" name='lastName' value={lastName} 
                    placeholder='Enter last name' 
                    className='w-full rounded-lg bg-slate-800 p-3 text-white tracking-wide border-b-2 border-slate-700' 
                    onChange={changeHandler}/>
                </label>
            </div>

            {/* email address */}
            <label className='w-full'>
                <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                    Email Address <sub className='text-red-600 text-lg '>*</sub>
                </p>
                
                <input required type='text' name='email' value={email} 
                placeholder='Enter email address' 
                className='w-full rounded-lg bg-slate-800 p-3 text-white border-b-2  border-slate-700' 
                onChange={changeHandler}/>
            </label>

            {/* Passwords div */}
            <div className='flex flex-col md:flex-row gap-6'>
                <label className='w-full relative'>
                    <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                        Create Password <sub className='text-red-600 text-lg'>*</sub>
                    </p>
                    
                    <input required type={`${showPassword ? "text" : "password"}`} name='password' value={password} 
                    placeholder='Enter password' 
                    className='w-full rounded-lg bg-slate-800 p-3 text-white tracking-wide border-b-2 border-slate-700' 
                    onChange={changeHandler}/>
                    <span className='absolute' onClick={() => setShowPassword((prev) => (!prev))}>
                        {
                            showPassword ? 
                            (<AiOutlineEyeInvisible className='cursor-pointer text-2xl -translate-x-10 translate-y-3' fill='#AFB2BF' />) 
                            : (<AiOutlineEye className='cursor-pointer text-2xl -translate-x-10 translate-y-3' fill='#AFB2BF' />)
                        }
                    </span>
                    
                </label>

                <label className='w-full relative'>
                    <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                        Confirm Password <sub className='text-red-600 text-lg'>*</sub>
                    </p>
                    
                    <input required type={`${showConfirmPassword ? "text" : "password"}`} name='confirmPassword' value={confirmPassword} 
                    placeholder='Confirm password' 
                    className='w-full rounded-lg bg-slate-800 p-3 text-white tracking-wide border-b-2 border-slate-700' 
                    onChange={changeHandler}/>
                    <span className='absolute' onClick={() => setShowConfirmPassword((prev) => (!prev))}>
                        {
                            showConfirmPassword ? 
                            (<AiOutlineEyeInvisible className='cursor-pointer text-2xl -translate-x-10 translate-y-3' fill='#AFB2BF' />) 
                            : (<AiOutlineEye className='cursor-pointer text-2xl -translate-x-10 translate-y-3' fill='#AFB2BF' />)
                        }
                    </span>
                </label>
            </div>      

            <button type='submit' className='bg-yellow-400 border-b-2 border-yellow-300 text-center text-base font-medium text-black rounded-lg py-2 px-3 mt-6 hover:scale-95 transition-all duration-200'>
                Create Account
            </button>

        </form>
    )
}

export default SignupForm