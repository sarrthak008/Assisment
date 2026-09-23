import React from 'react'

const Login = () => {
    return (
        <div className='bg-black relative h-screen w-screen flex items-center justify-center p-4 sm:p-0 whitespace-nowrap'>
            <div className='w-full max-w-[420px] sm:max-w-none h-auto sm:h-[47%] w-full sm:w-[50vw] bg-gray-200 rounded-md p-3 sm:p-2 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 shadow-2xl'>

                <div className='w-full sm:w-[230px] h-[160px] sm:h-full rounded-sm overflow-hidden bg-sky-300 flex-shrink-0'>
                    <img src='./images/bg.jpeg' className='h-full w-full object-cover' alt="Login background" />
                </div>

                <div className='h-full w-full sm:w-[60%] flex gap-3 flex-col justify-center items-start px-2 sm:px-0'>
                    <h2 className='text-xl sm:text-2xl font-bold text-gray-900 text-left w-full tracking-tight'>Admin Login</h2>

                    <div className='w-full flex flex-col gap-1'>
                        <label className='text-xs font-semibold text-gray-700 ml-1'>Email</label>
                        <input
                            type='email'
                            placeholder='email@gmail.com'
                            className='w-full sm:w-[90%] outline-none rounded-md py-1.5 px-3 text-sm sm:text-base bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all'
                        />
                    </div>

                    <div className='w-full flex flex-col gap-1'>
                        <label className='text-xs font-semibold text-gray-700 ml-1'>Password</label>
                        <input
                            type='password'
                            placeholder='pass@1234'
                            className='w-full sm:w-[90%] outline-none rounded-md py-1.5 px-3 text-sm sm:text-base bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all'
                        />
                    </div>

                    <div className='w-full mt-4 sm:mt-7'>
                        <button
                            type='submit'
                            className='w-full sm:w-[90%] py-2.5 cursor-pointer rounded-md text-center text-sm font-medium bg-black text-white hover:bg-gray-800 active:scale-[0.99] transition-all shadow-md'
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login