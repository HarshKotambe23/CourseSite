import React from 'react'

const Contact = () => {
    return <>
        <div className='bg-blue-950 h-full text-xl text-slate-300 grid grid-cols-1 md:grid-cols-2 py-20 px-5 gap-10'>
            <div className='flex flex-col gap-10'>
                <div>
                    <img className='text-slate-300' src="https://akashskillhub.github.io/course-site/wp-content/uploads/2023/02/logo-white-2.png" alt="" />
                </div>
                <div >
                    <p className=' '>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                    </p>
                </div>
                <div className='text-4xl flex gap-4 '>
                    <i className='bg-blue-900 p-3  rounded-md bi bi-facebook'></i>
                    <i className='bg-blue-900 p-3  rounded-md bi bi-linkedin'></i>
                    <i className='bg-blue-900 p-3  rounded-md bi bi-pinterest'></i>
                    <i className='bg-blue-900 p-3  rounded-md bi bi-twitter'></i>
                </div>
            </div>
            <div>
                <div className='text-3xl font-bold pb-7'>
                    <p className='text-3xl '>Explore</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Ablout Us</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Upcoming Events</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Blog & News</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> FAQ Question</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Testimonial</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Privacy Policy</a>
                </div>

            </div>
            <div>
                <div className='text-3xl font-bold pb-7'>
                    <p>Useful Links</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Contact Us</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Pricing Plan</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Gallery</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Instructor</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-chevron-double-right"></i> Purchase Guide</a>
                </div>
            </div>
            <div>
                <div className='text-3xl font-bold pb-7'>
                    <p>Contact Info</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-geo-alt"></i> 275 Quadra Street Victoria Road, New York</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-telephone-fill"></i> + 1 (237) 382-2839</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-telephone-fill"></i> + 1 (237) 382-2840</a>
                    <a className=' hover:text-blue-700 duration-500 font-bold' href=""><i class="   bi bi-envelope"></i> yourmailaddress@example.com</a>
                </div>
            </div>

        </div>


    </>
}

export default Contact