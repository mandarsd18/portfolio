import React from "react";
import data from "./data";
import { Link } from "react-router-dom";
import image1 from "../assets/Blogify.png";
import image2 from "../assets/NtUIclone.png"
import image3 from "../assets/filesharing.png"
import image4 from "../assets/traves.png"

const Projects = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-8" id="projects">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">My Projects</h1>
        </div>
        <div className="columns-1 sm:columns-2">
          <div className="flex flex-col lg:flex-row gap-2 w-full  bg-blue-100 p-2 rounded-md shadow-sm mb-4">
            <div className="w-full">
              <img src={image1} alt="" className="object-cover w-full h-[250px] rounded-sm"/>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">Blogify</h1>
              <p className="text-xs font-semibold">Blogify is blogging platform that allow you to share your thoughts online and read other's thoughts</p>
              <ul  className="flex flex-wrap gap-2 mt-2">
                <li className="bg-white px-2 py-1.5  sm:text-sm text-xs shadow-sm rounded-sm font-semibold">React.js</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">
                  Node.js
                </li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Express.JS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">MongoDB</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Taiwing CSS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">JWT</li>
              </ul>
              <div className="flex gap-2 mt-2 text-white ">
              <a href="" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Source Code</a>
              <a href="" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Demo</a>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full  bg-blue-100 p-2 rounded-md shadow-sm mb-4">
            <div className="w-full">
              <img src={image3} alt="" className="object-cover w-full h-[250px] rounded-sm"/>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">FileSharing Application</h1>
              <p className="text-xs font-semibold">It is file sharing system which can send any file with password encryption or without password encryption.</p>
              <ul  className="flex flex-wrap gap-2 mt-2">
                <li className="bg-white px-2 py-1.5  sm:text-sm text-xs shadow-sm rounded-sm font-semibold">EJS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">
                  CSS
                </li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Javascript</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Node.JS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">MongoDB</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Express.JS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Multer</li>
              </ul>
              <div className="flex gap-2 mt-2 text-white ">
              <a href="https://github.com/mandarsd18/fileSharingWeb"  target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Source Code</a>
              <a href="https://filesharingweb.onrender.com/"  target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Demo</a>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full  bg-blue-100 p-2 rounded-md shadow-sm mb-4">
            <div className="w-full">
              <img src={image2} alt="" className="object-cover w-full h-[250px] rounded-sm"/>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">Netflix UI Clone</h1>
              <p className="text-xs font-semibold">It is clone of netflix UI with integration of TMDB api and youtube api for trailer of movies</p>
              <ul  className="flex flex-wrap gap-2 mt-2">
                <li className="bg-white px-2 py-1.5  sm:text-sm text-xs shadow-sm rounded-sm font-semibold">React.js</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">
                TMDM Api
                </li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Youtube Api</li>
            
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Taiwing CSS</li>
                
              </ul>
              <div className="flex gap-2 mt-2 text-white ">
              <a href="https://github.com/mandarsd18/netflixclone"  target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Source Code</a>
              <a href="https://netflixclone-three-opal.vercel.app/" target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Demo</a>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full  bg-blue-100 p-2 rounded-md shadow-sm mb-4">
            <div className="w-full">
              <img src={image4} alt="" className="object-cover w-full h-[250px] rounded-sm"/>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">Travels</h1>
              <p className="text-xs font-semibold">Travels is online tour and travel agency with you can book trip to various destination online</p>
              <ul  className="flex flex-wrap gap-2 mt-2">
                <li className="bg-white px-2 py-1.5  sm:text-sm text-xs shadow-sm rounded-sm font-semibold">React.js</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">
                  Node.js
                </li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Express.JS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">MongoDB</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">Taiwing CSS</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">JWT</li>
                <li className="bg-white px-2 py-1.5 sm:text-sm text-xs shadow-sm rounded-sm font-semibold">RazorPay</li>
              </ul>
              <div className="flex gap-2 mt-2 text-white ">
              <a href="https://github.com/mandarsd18/Travels"  target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Source Code</a>
              <a href="https://travels-pearl.vercel.app/"  target="blank" className="px-3 font-semibold py-1.5 rounded-full text-sm bg-yellow-500 shadow-sm inline">Demo</a>
              </div>
             
            </div>
          </div>

          
        </div>
        
        
      </div>
    </>
  );
};

export default Projects;
