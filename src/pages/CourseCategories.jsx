import React from 'react'
import Card1 from "../assets/wp-content/uploads/2023/02/course-26-590x430.webp"
import Card2 from "../assets/wp-content/uploads/2023/02/course-29-590x430.webp"
import Card3 from "../assets/wp-content/uploads/2023/03/data-analysis-590x430.webp"
import Card4 from "../assets/wp-content/uploads/2023/02/course-27-590x430.webp"
const CourseCategories = () => {

    return <>
        <div class=" md:h-screen bg-gradient-to-r from-red-100 to-blue-50">

            <div className='text-center'>
                <p className='font-bold tracking-wider text-blue-500'>COURSE CATEGORIES</p>
                <p className='font-bold text-4xl my-5'>Popular Topics To Learn</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center  gap-7 '>
                    <div className='flex gap-7 flex-col sm:flex-row p-14 md:p-0 md:py-5'>
                        <div className='flex flex-col h-[400px] lg:w-[250px] bg-white rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300'>
                            <div className=''>
                                <img src={Card1} className='lg:h-[200px]  text-center' alt="" />
                            </div>
                            <div className='flex flex-col gap-2  text-center p-2 '>
                                <p className='text-blue-500'>5 Courses</p>
                                <p className='font-bold text-lg '>Business Analysis</p>
                                <p className='text-slate-500 text-md'>The course covers the tools used in business analysis.</p>

                            </div>
                        </div>
                        <div className='flex flex-col h-[400px] lg:w-[250px] bg-white rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={Card2} className='lg:h-[200px]' alt="" />
                            </div>
                            <div className='flex flex-col gap-2  text-center p-2'>
                                <p className='text-blue-500'>3 Courses</p>
                                <p className='font-bold text-lg '>Sales Marketing</p>
                                <p className='text-slate-500 text-md'>You'll learn how to promote or sell services to customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-7 flex-col sm:flex-row p-14 md:p-0 md:py-5'>
                        <div className='flex flex-col h-[400px] lg:w-[250px] bg-white rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={Card3} className='lg:h-[200px]' alt="" />
                            </div>
                            <div className='flex flex-col gap-2  text-center p-2'>
                                <p className='text-blue-500'>4 Courses</p>
                                <p className='font-bold text-lg '>Data Science</p>
                                <p className='text-slate-500 text-md'>Students will learn about how data analysis methods works.</p>
                            </div>
                        </div>
                        <div className='flex flex-col h-[400px] lg:w-[250px] bg-white rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={Card4} className='lg:h-[200px]' alt="" />
                            </div>
                            <div className='flex flex-col gap-2  text-center p-2'>
                                <p className='text-blue-500'>6 Courses</p>
                                <p className='font-bold text-lg '>Creativity</p>
                                <p className='text-slate-500 text-md'>Students in this course will learn about creative process.</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className='py-5 text-center'>
                <button className='bg-blue-500 px-5 text-white hover:bg-blue-950 transition duration-500 py-3 rounded-md font-bold  '>Know About Us <i className='items-centerbi bi-arrow-right p-2'></i></button>
            </div>





        </div>

    </>
}

export default CourseCategories