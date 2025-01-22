import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
// import CustomModal from "../Modal/Modal.Component";
import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;





function NavLg() {
  const [location, setLocation] = useState("");
return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        {/*icon*/}
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-64 h-14">
            <img 
              src="/Asset/logo.jpg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          </div>
      {/*nav-links*/}
      <div className="flex gap-2">
       <button className=" text-white bg-red-700 font-bold py-2 px-4 rounded">Trending </button>
       <button className=" text-white bg-red-700 font-bold py-2 px-4 rounded">Top Rated </button>
       <button className=" text-white bg-red-700 font-bold py-2 px-4 rounded">Upcoming</button>
      </div>
       
      </div>
    </>
  );
}

// Main NavBar Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen Navbar */}
   
      {/* Medium Screen Size */}
     
      {/* Large Screen Size */}
      <div className="hidden md:hidden lg:flex">
        <NavLg  />
      </div>
    </nav>
  );
};

export default Navbar;