import React from 'react'
import AboutImage from "../assets/wp-content/uploads/2022/10/about-image-01-2.jpg"
import AboutImage2 from "../assets/wp-content/uploads/2022/10/about-image-02-2.jpg"

const About = () => {
    return <>
        <div className='p-4 flex gap-16 flex-col lg:flex-row '>
            <div className='md:w-[50%] lg:pl-10 lg:pt-10 '>
                <div className=' '>
                    <img className='relative' src={AboutImage} alt="" />
                </div>
                {/* <div className='hidden sm:block'>
                    <img src={AboutImage2} alt="" className='rounded-md absolute left-80 md:bottom-0 md:left-96' />
                </div> */}
            </div>
            <div className='lg:w-[50%] flex flex-col gap-5'>
                <p
                    className='font-semibold tracking-wider text-blue-500'>ABOUT US
                </p>
                <p className='font-bold font-sans text-4xl leading-[60px]'>
                    Creating A Community Of Life Long Learners
                </p>
                <p className=' text-md text-slate-500'>
                    Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.
                </p>
                <div className='flex gap-4 my-5'>
                    <div className='text-3xl '><i class="bi bi-book border rounded-full py-2 px-3 bg-orange-500 text-white"></i></div>
                    <div>
                        <p className='font-bold '>Flexible Classes</p>
                        <p className='text-slate-500'>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.</p>
                    </div>
                </div>
                <div className='flex gap-4 my-5'>
                    <div className='text-3xl '><i class="bi bi-buildings-fill border rounded-full py-2 px-3 bg-orange-500 text-white"></i></div>
                    <div>
                        <p className='font-bold'>Learn From Anywhere</p>
                        <p className='text-slate-500'>Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.</p>
                    </div>
                </div>
                <div>
                    <button className='bg-blue-500 px-5 text-white hover:bg-blue-950 transition duration-500 py-3 rounded-md'>Know About Us <i className='items-centerbi bi-arrow-right p-2'></i></button>
                </div>
            </div>

        </div>

    </>
}

export default About