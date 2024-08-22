import React from 'react'
import { Link } from "react-router-dom"
import '../index.css'
import { FcGraduationCap } from "react-icons/fc";

const Navbar = () => {
    return (
        // Navbar Start
        <>
            <div className='w-screen h-auto py-[2.5vh] bg-gradient-to-r from-[#03AED2] to-[#FDDE55]  text-black  flex justify-between items-center gap-3 px-3 flex-col lg:flex-row  '>
                {/* Left side */}
                <div className="logo font-semibold text-center flex justify-center items-center  text-xl gap-3 ">
                    <FcGraduationCap className='h-[3.5rem] w-[3.5rem]' />  Special Scholarship Scheme for J&K and Ladakh (PM-USPY)
                </div>
                {/* Left side end */}




                {/* Right side */}
                <img className='w-[17em]' src="src\Images\logo_new.png" alt="" />
                {/* Right side end */}

            </div>
        // Navbar End
            {/* Extended Navbar */}
            <div className="extendednav w-screen h-auto py-[2.5vh] bg-gradient-to-r from-[#336562d3] to-[#161c0fba]  text-white  flex justify-center items-center gap-3 px-3   ">


                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>

            </div>
        </>
    )
}

export default Navbar