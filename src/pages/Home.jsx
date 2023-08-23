import React from 'react'
import Course33 from "../assets/wp-content/uploads/2023/03/course-33-590x430.webp"
import Workshop2 from "../assets/wp-content/uploads/2022/10/workshop-2.png"
import Videoimage2 from "../assets/wp-content/uploads/2022/10/Video-image-2.png"
const Home = () => {



    return <>
        <div className='flex flex-col lg:flex-row  max-w-[90%]  bg-gradient-to-br from-red-100 '>
            <div className=' p-3 md:flex lg:order-2 pt-[10%] md:flex-wrap md:items-center '>

                <div className='bg-white border-0 p-3  rounded-md space-y-3 md:w-[40%] w-[90%]'>
                    <div className=' relative order-1 overflow-hidden' >
                        <img src={Course33} className='h-70 rounded-md hover:scale-110 transition duration-500 ' alt="" />
                        <button className='bg-blue-500 p-1 rounded-md absolute top-4 left-2 text-white'>UI Design</button>
                    </div>
                    <div className='space-x-2'>
                        <i className='bi bi-list text-orange-600'></i> 19 Lessons
                        <i className='bi bi-clock text-orange-600'></i> 15 Houre
                    </div>
                    <div className='w-[80%]'>
                        <p className='font-bold text-base'>Learning How To Write As A Professional Author</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ex reiciendis, quos ad odit laborum modi quis.</p>
                    </div>
                </div>
                <div className='bg-white mt-4  rounded-md  order-3 relative left-12  '>
                    <img src={Workshop2} alt="" />
                    <p className='space-y-3 font-semibold text-lg'>Design Workshop</p>
                    <p className='space-y-3  text-sm'>Today at 6:00 am</p>
                    <div className='mt-4 text-white'>
                        <button className='bg-orange-600 p-2 rounded-md'>Join Now <i className='items-centerbi bi-arrow-right p-2'></i></button>
                    </div>
                </div>
                <div className='order-2 bg-white sm:w-[50%]  relative top-16 left-5 '>
                    <img src={Videoimage2} alt="" className='lg:scale-100' />
                </div>

            </div>
            <div className='flex flex-col lg:order-1 pt-[10%] ml-[8%] mr-0' >
                <div className='text-blue-600 tracking-widest font-semibold'>EXCELLENCE IN EDUCATION</div>
                <div className='  font-bold font-sans text-3xl sm:text-[40px] lg:text-[65px] py-3 min-h-[250px]   leading-[85px] '>Start Better Learning Future From Here</div>
                <div className='border-l-2 my-4 border-blue-600 text-xl  text-slate-400 px-4'>Empower yourself with the knowledge and skills gained through online education! The key to your future!</div>
                <div>
                    <button className='p-4 font-bold text-white bg-blue-500 rounded-md shadow-xl hover:bg-blue-950 transition duration-1000 hover:text-slate-50'>Get Started Today <i className='items-centerbi bi-arrow-right p-2'></i></button>
                </div>


            </div>
        </div>
        <div className='flex justify-center'>
            <button><i class="bi bi-caret-down text-3xl border rounded-full px-2 py-1 bg-white relative bottom-3"></i></button>
        </div>



    </>
}

export default Home