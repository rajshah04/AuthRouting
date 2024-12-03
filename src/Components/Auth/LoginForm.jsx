import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/Operations/authAPI';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false) ;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }) ;

    const {email, password} = formData ;

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
        dispatch(login(email, password, navigate)) ;
    }

    // console.log(accountType) ;
    // console.log(formData) ;

    return (
        <form className='mt-2 flex w-full flex-col gap-y-4' onSubmit={submitHandler}>

            <p className='text-white text-center text-4xl'>
                Login Form
            </p>

            <label className='w-full'>
                <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                    Email Address <sub className='text-red-600 text-lg '>*</sub>
                </p>
                
                <input required type='text' name='email' value={email} 
                placeholder='Enter email address' 
                className='w-full rounded-lg bg-slate-800 p-3 text-white border-b-2  border-slate-700' 
                onChange={changeHandler}/>
            </label>

            <label className='w-full relative'>
                <p className='text-sm leading-[22px] font-normal text-white mb-1'>
                    Password <sub className='text-red-600 text-lg'>*</sub>
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

            <button type='submit' className='bg-yellow-400 border-b-2 border-yellow-300 text-center text-base font-medium text-slate-950 rounded-lg py-2 px-3 mt-6 hover:scale-95 transition-all duration-200'>
                Log In
            </button>

        </form>
    ) 
}

export default LoginForm