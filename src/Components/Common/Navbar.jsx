import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Services/Operations/authAPI';


const Navbar = () => {
    const { token } = useSelector((state) => state.auth) ;

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    return (
        <div className='flex h-14 items-center justify-center bg-slate-950 border-b-[2px] border-b-slate-900'>

            <div className='flex w-11/12 items-center justify-between gap-x-10'>

                <div>
                    
                </div>

                <div className='flex items-center gap-x-4'>

                            <Link to="/">
                                <button className='px-[12px] py-[8px] text-white hover:text-yellow-300 transition-all duration-200'>
                                    Home
                                </button>
                            </Link>

                            {
                                token !== null && (
                                    <Link to="/secured-page">
                                        <button className='px-[12px] py-[8px] text-white hover:text-yellow-300 transition-all duration-200'>
                                            Secured Page
                                        </button>
                                    </Link>
                                )
                            }


                </div>

                {/* Login/Signup */}
                <div className='flex items-center gap-x-4'>
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='border border-slate-200 bg-slate-600 px-[12px] py-[8px] text-white rounded-md hover:scale-95 transition-all duration-200'>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className='border border-slate-200 bg-slate-600 px-[12px] py-[8px] text-white rounded-md hover:scale-95 transition-all duration-200'>
                                    Sign up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && (
                            <button onClick={() => dispatch(logout(navigate))} className='border border-slate-200 bg-slate-600 px-[12px] py-[8px] text-white rounded-md hover:scale-95 transition-all duration-200'>
                                Logout
                            </button>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default Navbar