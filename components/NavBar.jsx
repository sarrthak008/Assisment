import React from 'react'

const NavBar = () => {
    
    return (
        <div className='h-16 w-full bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30'>
           <div className='w-full max-w-sm'>
                <input
                    type='text'
                    placeholder='Search product...'
                    className='w-full outline-none rounded-lg py-1.5 px-3 text-sm bg-gray-50/50 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all text-gray-800'
                />
            </div>
\
            <button className='flex-shrink-0 px-4 py-2 cursor-pointer rounded-lg text-center text-xs font-medium bg-black text-white hover:bg-gray-800 active:scale-[0.99] transition-all shadow-sm'>
                + Add Product
            </button>
        </div>
    )
}

export default NavBar