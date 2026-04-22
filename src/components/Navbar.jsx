import React, { useState } from 'react';
import LogoImg from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { FaHome } from 'react-icons/fa';
import { CiViewTimeline } from 'react-icons/ci';
import { IoIosStats } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow">
      <div className="flex justify-between items-center py-4 container mx-auto px-4">
        <img src={LogoImg} alt="Logo" className="w-24" />
        <button
          className="md:hidden text-green-600 text-3xl transition-transform duration-300 active:scale-90"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu className={`transition-all duration-200`} />
        </button>

        <ul
          className={`flex flex-col md:flex-row gap-3 md:gap-6 absolute md:static bg-white/95 backdrop-blur-sm md:bg-transparent right-4 md:right-auto w-40 md:w-auto transition-all duration-500 ease-in-out z-50 rounded-lg ${
            open
              ? 'top-16 opacity-100 p-2 shadow-2xl border border-gray-100'
              : '-top-100 opacity-0 md:opacity-100'
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm md:text-base transition-colors ${
                isActive
                  ? 'bg-[#244d3f] text-green-400 font-semibold'
                  : 'text-green-600 hover:bg-green-50'
              }`
            }
          >
            <FaHome size={16} /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm md:text-base transition-colors ${
                isActive
                  ? 'bg-[#244d3f] text-green-400 font-semibold'
                  : 'text-green-600 hover:bg-green-50'
              }`
            }
          >
            <CiViewTimeline size={18} /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm md:text-base transition-colors ${
                isActive
                  ? 'bg-[#244d3f] text-green-400 font-semibold'
                  : 'text-green-600 hover:bg-green-50'
              }`
            }
          >
            <IoIosStats size={16} /> Stats
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
