import image1 from "../assets/wp-content/uploads/2023/03/course-27-590x430.webp"
import image2 from "../assets/wp-content/uploads/2023/03/course-32-590x430.webp"
import image3 from "../assets/wp-content/uploads/2023/03/course-38-590x430.webp"
import image4 from "../assets/wp-content/uploads/2023/03/course-30-590x430.webp"
import image5 from "../assets/wp-content/uploads/2023/03/course-39-590x430.webp"
import image6 from "../assets/wp-content/uploads/2023/03/course-33-590x430.webp"
import image1_1 from "../assets/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
import image2_2 from "../assets/wp-content/uploads/2022/11/instructor-03-01-2-100x100.webp"
import image3_3 from "../assets/wp-content/uploads/2022/11/instructor-03-08-2-100x100.webp"
import image4_4 from "../assets/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp"
import image5_5 from "../assets/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
import image6_6 from "../assets/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp"

const PopularCourses = () => {

    return <div className='p-4'>
        <p className='text-blue-500 tracking-widest text-xl text-center mt-[7%] font-bold'>POPULAR COURSES</p>
        <p className=' tracking-widest text-3xl my-5 sm:text-4xl text-center  font-bold'>Featured On This Month</p>

        <div className=' gap-7 w-[80%] text mx-auto  grid md:grid-cols-2 lg:grid-cols-3 p-4'>
            {/* 1 St Card */}
            <div className=' '>
                <div className='  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image1} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image1_1} className='rounded-full h-12' alt="" />
                                <span>Janet Fleming</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>The Complete HTML & CSS Bootcamp 2023 Edition</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>
            {/* 2ns card */}
            <div className=''>
                <div className='grid  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image2} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image2_2} className='rounded-full h-12' alt="" />
                                <span>James Carlson</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>Grow Personal Financial Security Thinking & Principles</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>
            {/* 3rd card */}
            <div className=''>
                <div className='grid  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image3} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image3_3} className='rounded-full h-12' alt="" />
                                <span>Troy Hall</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>The Complete Guide to Build RESTful API Application</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>
            {/* 4th card */}
            <div className=' '>
                <div className='  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image4} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image4_4} className='rounded-full h-12' alt="" />
                                <span>Isabelle Bruner</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>Competitive Strategy Law for Management Consultants</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>
            {/* 5th card */}
            <div className=''>
                <div className='grid  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image5} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image5_5} className='rounded-full h-12' alt="" />
                                <span>Janet Fleming</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>Machine Learning A-Z: Hands-On Python and java</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>
            {/* 6th card */}
            <div className=''>
                <div className='grid  bg-slate-100 p-4 rounded-md   relative'>
                    <div className='overflow-hidden'>

                        <img className='rounded-md hover:scale-110 transition duration-500' src={image6} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={image6_6} className='rounded-full h-12' alt="" />
                                <span>Isabelle Bruner</span>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <i class="bi bi-star-fill text-orange-500"></i><span>(5.0)</span>
                                </div>
                                <div className='flex  px-4  left'>
                                    <p className='bg-orange-500 px-3 py-1 absolute top-7 left-4 text-white rounded-sm'><i class="bi bi-clock"></i> 15 Week</p>
                                    <i class="bi bi-heart-fill text-white absolute top-7 right-8 bg-gray-400 px-2 py-1 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-xl px-3'>Learning How To Write As A Professional Author</p>
                        </div>
                        <div className='flex gap-14 py-4 px-3'>
                            <div className='text-slate-500'><i class="bi bi-people"></i> 229 Students</div>
                            <div className='text-slate-500'><i class="bi bi-list-columns-reverse"></i> 16 Lessons</div>
                        </div>
                        <hr className='text-slate-500' />
                        <button className='bg-blue-500 px-4 py-1 text-white font-bold mt-4 rounded-sm'>$45.00</button>
                    </div>
                </div>
            </div>

        </div>


    </div>
}

export default PopularCourses 