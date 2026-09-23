"use client"
import api from '@/config/axios'
import { login, loginUser } from '@/services/authService'
import useAuthStore from '@/store/Auth'
import React, { useState } from 'react'
import { toast } from 'sonner'


const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const { login } = useAuthStore()

    const handelSubmit = async (e) => {
        e.preventDefault()
        if (!formData.username || !formData.password) {
            toast.error("Please enter username and password.");
            return;
        }
        setLoading(true);
        const toastId = toast.loading("Logging in...");
        try {
            let data = await loginUser(formData.username, formData.password);
            if (data) {
                toast.dismiss(toastId)
                toast.success("Login Successfully..")
                login(data, data.accessToken)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            toast.dismiss(toastId)
            setLoading(false)
        }
    }

    return (
        <div className='bg-black relative h-screen w-screen flex items-center justify-center p-4 sm:p-0 whitespace-nowrap'>
            <div className='w-full max-w-[420px] sm:max-w-none h-auto sm:h-[47%] w-full sm:w-[50vw] bg-gray-200 rounded-md p-3 sm:p-2 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 shadow-2xl'>

                <div className='w-full sm:w-[230px] h-[160px] sm:h-full rounded-sm overflow-hidden bg-sky-300 flex-shrink-0'>
                    <img src='./images/bg.jpeg' className='h-full w-full object-cover' alt="Login background" />
                </div>

                <div className='h-full w-full sm:w-[60%] flex gap-3 flex-col justify-center items-start px-2 sm:px-0'>
                    <h2 className='text-xl sm:text-2xl font-bold text-gray-900 text-left w-full tracking-tight'>Admin Login</h2>

                    <div className='w-full flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-700 ml-1'>Enter your username</label>
                        <input
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            type='email'
                            placeholder='email@gmail.com'
                            className='w-full sm:w-[90%] outline-none rounded-md py-1.5 px-3 text-sm sm:text-base bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all'
                        />
                    </div>

                    <div className='w-full flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-700 ml-1'>Enter your password</label>
                        <input
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            type='password'
                            placeholder='pass@1234'
                            className='w-full sm:w-[90%] outline-none rounded-md py-1.5 px-3 text-sm sm:text-base bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all'
                        />
                    </div>

                    <div className='w-full mt-4 sm:mt-7'>
                        <button
                            onClick={(e) => handelSubmit(e)}
                            className='w-full sm:w-[90%] py-2.5 cursor-pointer rounded-md text-center text-sm font-medium bg-black text-white hover:bg-gray-800 active:scale-[0.99] transition-all shadow-md'
                        >
                            {
                                loading ? "Loading..." : "Log In"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login