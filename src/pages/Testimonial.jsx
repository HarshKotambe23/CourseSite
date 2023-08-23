import React from 'react'
import image7 from "../assets/wp-content/uploads/2022/10/testimonial-01-2.jpg"


const Testimonial = () => {

    return <>
        <div
            class=" md:h-screen bg-gradient-to-r from-red-100 to-blue-50"
        >
            <p className='text-blue-500 tracking-widest font-bold text-center pt-10'>TESTIMONIAL</p>
            <p className=' tracking-widest font-bold text-center text-4xl font-sans py-5'>What Our Student Says</p>
            <div className='px-[10%]'>
                <img className=' ' src={image7} alt="" />
            </div>
            {/* CAROUSEL------------------------------------------------------------------------------------------------- */}
            <div>


            </div>

        </div>
    </ >



}

export default Testimonial