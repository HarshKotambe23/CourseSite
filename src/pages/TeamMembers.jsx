import React from 'react'
import TeamMember1 from "../assets/wp-content/uploads/2022/11/instructor-03-01-2.webp"
import TeamMember2 from "../assets/wp-content/uploads/2022/11/instructor-03-02-2.webp"
import TeamMember3 from "../assets/wp-content/uploads/2022/11/instructor-03-03-2.webp"
import TeamMember4 from "../assets/wp-content/uploads/2022/11/instructor-03-06-2.webp"

const TeamMembers = () => {

    return <>
        <div className=' h-full bg-blue-500 p-10'>
            <p className='tracking-widest text-center font-bold text-white pt-[5%] '>TEAM MEMBERS</p>
            <p className='text-4xl text-center font-bold text-white p-5'>Meet Our Instructor</p>

            <div className='grid mx-auto sm:grid-cols-2 group md:grid-cols-3 lg:grid-cols-4'>
                <div className=' m-5 relative '>
                    <img className='mx-auto w-full rounded-lg  ' src={TeamMember1} alt="" />
                    <div className='bg-white w-full p-5 rounded-lg absolute hidden group-hover:block space-y-2 -right-5 -bottom-[5%]  -translate-x-5 transition duration-500'>
                        <p className='font-bold text-2xl'>James Carlson</p>
                        <p className='text-gray-400'>Worldpress Expert</p>
                        <div className='space-x-4 text-blue-500'>
                            <i className='bi bi-linkedin'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-youtube'></i>

                        </div>
                    </div>
                </div>
                <div className=' m-5 relative'>
                    <img className='mx-auto w-full rounded-lg ' src={TeamMember2} alt="" />
                    <div className='bg-white w-full p-5 rounded-lg absolute space-y-2 -right-5 -bottom-[5%] hover:-translate-x-5 transform duration-500'>
                        <p className='font-bold text-2xl'>Nancy Phipps</p>
                        <p className='text-gray-400'>Digital Marketer</p>
                        <div className='space-x-4 text-blue-500'>
                            <i className='bi bi-linkedin'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-youtube'></i>

                        </div>
                    </div>
                </div>
                <div className=' m-5 relative'>
                    <img className='mx-auto w-full rounded-lg ' src={TeamMember3} alt="" />
                    <div className='bg-white w-full p-5 rounded-lg absolute space-y-2 -right-5 -bottom-[5%] hover:-translate-x-5 transform duration-500'>
                        <p className='font-bold text-2xl'>Troy Hall</p>
                        <p className='text-gray-400'>PHP Expert</p>
                        <div className='space-x-4 text-blue-500'>
                            <i className='bi bi-linkedin'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-youtube'></i>

                        </div>
                    </div>
                </div>
                <div className=' m-5 relative'>
                    <img className='mx-auto w-full rounded-lg ' src={TeamMember4} alt="" />
                    <div className='bg-white w-full p-5 rounded-lg absolute space-y-2 -right-5 -bottom-[5%] hover:-translate-x-5 transform duration-500'>
                        <p className='font-bold text-2xl'>Isabell Burner</p>
                        <p className='text-gray-400'>UI Designer</p>
                        <div className='space-x-4 text-blue-500'>
                            <i className='bi bi-linkedin'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-youtube'></i>

                        </div>
                    </div>
                </div>

            </div>


        </div>


    </>
}

export default TeamMembers