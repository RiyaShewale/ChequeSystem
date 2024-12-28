import React from 'react';
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import logo from '../../assets/banklogo.png'

const Header = ({ username }) => {
  return (
    <header className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md">
      
      <div className="flex items-center">       
        <img
          src={logo} 
          alt="Logo"
          className="h-10 w-10"
        />
      </div>

      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold">
          <FaUserCircle className="text-2xl" />
          <span>{username}</span>
        </div>
        <button
          className="flex items-center text-2xl hover:text-green-300"
          // onClick={onBack}
        >
          <FaArrowRight />
        </button>
      </div>
    </header>
  );
}

export default Header;
