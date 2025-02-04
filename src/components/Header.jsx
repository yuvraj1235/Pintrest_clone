import React from "react";
import {useNavigate} from "react-router-dom";
import { FaPinterest } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <header className="w-full bg-black text-red-500 shadow-md px-6 py-4 flex items-center justify-between">
   
      <div className="flex items-center hover:scale-90 space-x-2  cursor-pointer"  onClick={handleClick}>
        <FaPinterest className=" text-3xl" />
        <h1 className="text-2xl font-bold"  >Pintrest_clone</h1>
      </div>

   
      <div className="flex items-center w-1/3 max-w-lg bg-white rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-6 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
    
      </div>

 
      <div className="flex items-center hover:scale-90">
        <button 
          onClick={handleLogout} 
          className="flex items-center text-white hover:text-red-500 transition duration-200"
        >
          <IoIosLogOut className="text-2xl" />
          <span className="ml-2 ">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
