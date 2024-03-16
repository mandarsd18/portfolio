import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="w-full h-16 sticky top-0 left-0 right-0 z-50 bg-[#EBFFF4] ">
        <header className="flex items-center justify-between h-full w-[90%] sm:w-[80%]  mx-auto">
          <Link
            className="text-2xl sm:text-3xl font-bold text-yellow-500 "
            to="/"
          >
            Mandar.me
          </Link>
          <nav ref={navRef} className="flex items-center z-50">
            <Link
              className="mx-4   font-semibold text-lg cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <Link
              className=" mx-4   font-semibold text-lg cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
            <Link
              className=" mx-4 font-semibold text-lg cursor-pointer"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>

            <Link
              className=" mx-4   text-lg font-semibold cursor-pointer"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className=" mx-4   text-lg font-semibold cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Contect me
            </Link>
            
            <button
              className="nav-btn nav-close-btn md:hidden"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn md:hidden" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
};

export default Navbar;
