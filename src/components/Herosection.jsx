import React from "react";
import face from "../assets/face.jpg";

import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../assets/Mandar_Deshmukh_Resume.pdf"
import { FaGithub, FaFacebook, FaSquareInstagram, FaLinkedin,FaPhoneAlt, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import{AiFillInstagram} from 'react-icons/ai'

const Herosection = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[80%] mx-auto h-[90vh] flex flex-col items-center justify-center gap-4">
        <div className="border border-1 bg-yellow-500 rounded-full w-[40%] mx-auto sm:w-[30%] lg:w-[20%] overflow-hidden">
          <img src={face} alt="" className="w-full mx-auto" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full sm:w-[80%] md:w-[60%] lg:w[40%] mx-auto">
          <p className="font-semibold">Let's create something new</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi,I'm <span className="text-yellow-500">Mandar</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            A Full-Stack Web Developer
          </h1>
          <p className="text-xs sm:text-sm text-center mt-2  font-semibold">
          "Passionate web developer with comprehensive knowledge of the MERN stack, proficiently crafting dynamic, scalable, and immersive web solutions for diverse projects."
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 bg-yellow-500 px-3 text-white py-2 rounded-full">
          <a href={resume} download="resume" className="flex items-center justify-center gap-2 font-semibold">Download CV <MdOutlineFileDownload/></a>
          
        </div>
        <div className="flex items-center justify-center gap-2">
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
      </div>
    </>
  );
};

export default Herosection;
