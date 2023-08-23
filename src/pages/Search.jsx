import React from 'react'

const Search = () => {
    return <>
        <div className='bg-blue-500 h-[500px] text-center space-y-7'>
            <div className='pt-[150px]'><p className='text-white  text-xl font-bold tracking-widest'>SUBSCRIBE NEWSLETTER</p></div>
            <div><p className='text-white  text-5xl font-bold '>Get Every Latest News</p></div>
            <div className='flex justify-center pt-5'>
                <i className='bi bi-envelope-open rounded-l-lg bg-white p-5 text-gray-400 font-semibold text-2xl'></i>
                <input type="text" className='bg-white p-5 text-gray-400  text-2xl border-none
                 w-[90%] ' placeholder='Enter your mail address' />
                <button className='bi bi-send rounded-r-lg bg-white p-5 text-gray-400 font-semibold text-2xl'></button>
            </div>
        </div>



    </>
}

export default Search