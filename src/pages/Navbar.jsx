import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoNavbar from "../assets/wp-content/uploads/2023/01/logo-2.png"
const Navbar = () => {
    const [selectBox, setSelectBox] = useState([
        { name: "home", to: "/" },
        { name: "about", to: "/" },
        { name: "courses", to: "/" },
        { name: "pages", to: "/" },
        { name: "blogs", to: "/" },
        { name: "shop", to: "/" },
    ])

    return <>
        <div className=' flex justify-between w-full bg-red-100 py-2 px-4'>
            <div>
                <img src={logoNavbar} alt="" />
            </div>
            <div>
                <select class="form-select" >
                    {selectBox.map(item => <option value="1" key={item.id}><Link to={item.to}>{item.name}</Link></option>
                    )}
                </select>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <div ><i className='text-lg bg-white rounded-lg text-blue-400 p-2 border-2  bi bi-search'></i></div>
                <div className=' '><i className='text-lg md:px-20 bg-white rounded-lg text-blue-400 p-2 border-2  bi bi-person'></i></div>
                <div className='lg:hidden'><i className='text-lg bg-white rounded-lg text-blue-400 p-2 border-2  bi bi-list'></i></div>
            </div>
        </div >


    </>
}

export default Navbar