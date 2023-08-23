import React from 'react'
import blogImage1 from "../assets/wp-content/uploads/2023/01/course-06-2-590x430.webp"
import blogImage2 from "../assets/wp-content/uploads/2023/03/course-26-590x430.webp"

const BlogAndNews = () => {
    return <>
        <div className='bg-gradient-to-r from-red-200 px-5 py-20'>
            <div className='space-y-5'>
                <p className='text-xl font-bold tracking-widest text-blue-500'>BLOG & NEWS</p>
                <p className='sm:text-5xl text-3xl font-bold '>Trending on Our Blogs</p>
                <div className='text-white py-7'>
                    <button className='p-5 text-xl font-bold rounded-md bg-blue-500'>Read More Blogs <i className='bi bi-arrow-right text-xl font-bold'></i></button>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
                <div className="card  bg-white shadow-xl rounded-md p-12">
                    <div className="card-body space-y-5 py-5">
                        <h2 className="card-title text-blue-500 text-xl font-bold">SOCIAL MEDIA</h2>
                        <h2 className="card-title md:text-5xl text-3xl leading-snug font-bold">The Complete Web Developer Guideline 2023</h2>
                        <p className='font-semibold text-lg flex md:gap-5 gap-2'>
                            <i className='text-slate-400 bi bi-calendar-date'> 19 Feb, 2023</i>
                            <i className='text-slate-400 bi bi-person'> Posted By </i>
                            <span className='text-blue-500'>Janet Fleming</span>
                        </p>
                    </div>
                    <div className='overflow-hidden'>
                        <img className='w-full rounded-md hover:scale-110  duration-500' src={blogImage1} alt="Shoes" />
                    </div>
                </div>


                <div className="card  bg-white shadow-xl rounded-md p-12">
                    <div className="card-body space-y-5 py-5">
                        <h2 className="card-title text-blue-500 text-xl font-bold">BRANDING</h2>
                        <h2 className="card-title md:text-5xl text-3xl leading-snug font-bold">Social Media Marketing MASTERY( A-Z ) Journey</h2>
                        <p className='font-semibold text-lg flex gap-5'>
                            <i className='text-slate-400 bi bi-calendar-date'> 19 Feb, 2023</i>
                            <i className='text-slate-400 bi bi-person'> Posted By </i>
                            <span className='text-blue-500'>Janet Fleming</span>
                        </p>
                    </div>
                    <div className=' overflow-hidden'>
                        <img src={blogImage2} className='w-full rounded-md hover:scale-110  duration-500 ' alt="Shoes" />
                    </div>
                </div>
            </div>





        </div>


    </>
}

export default BlogAndNews