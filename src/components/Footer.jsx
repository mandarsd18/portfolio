import React from 'react'
import { FaGithub, FaFacebook, FaSquareInstagram, FaLinkedin,FaPhoneAlt, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import{AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-blue-50 py-8'>
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 text-center ">Mandar.me</h1>
            <div className="flex items-center justify-center gap-2 mt-3">
              <a className=" cursor-pointer" href="https://github.com/mandarsd18" target="blank">
                <FaGithub className=" text-yellow-500 text-2xl" />
              </a>
              <a className=" cursor-pointer" href="#" target="blank">
                <FaFacebook className=" text-yellow-500 text-2xl" />
              </a>
              <a className=" cursor-pointer" href="https://instagram.com/allabout.mandar?igshid=NGExMmI2YTkyZg== " target="blank">
                <AiFillInstagram className="text-3xl text-yellow-500" />
              </a>
              <a className=" cursor-pointer" href="https://www.linkedin.com/in/mandar-deshmukh-ab6479235 " target="blank">
                <FaLinkedin className="text-yellow-500 text-3xl" />
              </a>
            </div>
            <h1 className='text-yellow-500 text-sm mt-5 font-semibold text-center'>©Mandar,All rights reserved</h1>
        </div>

    </div>
  )
}

export default Footer