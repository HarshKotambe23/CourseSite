import React from 'react'
import chooseUsImage from "../assets/wp-content/uploads/2022/10/choose-us-image-01-2.jpg"

const WhyChooseUs = () => {

    return <>
        <div className='flex flex-col lg:flex-row gap-5 py-[5%] px-[10%]'>
            <div>
                <div className='mb-10'>
                    <p className='font-bold tracking-widest text-blue-500 '>WHY CHOOSE US</p>
                    <p className='font-bold text-4xl '>Our Core Features</p>
                </div>
                <div className='grid grid-cols-1  gap-5 md:grid-cols-2'>
                    <div className='space-y-4'>
                        <div>
                            <i className='bi bi-person text-5xl text-orange-500'></i>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl font-bold'>Virtual Classroom</p>
                            <p className='text-gray-400'>Students can access course materials, participate in debate & discussions.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <i className='bi bi-house-heart text-5xl text-orange-500'></i>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl font-bold'>Remote Education</p>
                            <p className='text-gray-400'>Complete assignments from a remote location, such as their home or workplace.

                            </p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <i className='bi bi-book text-5xl text-orange-500'></i>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl font-bold'>Digital Learning</p>
                            <p className='text-gray-400'>Digital learning allows for more personalized and flexible learning experiences.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <i className='bi bi-alarm text-5xl text-orange-500'></i>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl font-bold'>Educator Support</p>
                            <p className='text-gray-400'>The goal of educator support is to promote learning and growth among teachers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className=' rounded-full' src={chooseUsImage} alt="" />
                <a href=""><i className='bi bi-play-fill
                 text-orange-500 absolute bg-white p-1 rounded-full 
                 top-60 left-48 text-5xl '></i></a>
            </div>
        </div>
    </>
}

export default WhyChooseUs