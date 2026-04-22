import React from 'react';
import LogoImg from '../assets/logo-xl.png';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white p-6">
      <div className="flex flex-col items-center text-center gap-6 container mx-auto">
        <img src={LogoImg} alt="" className="w-32" />
        <p className="font-bold">
          Your personal shelf of meaningful connections. Browse, tend, and{' '}
          <br />
          nurture the relationships that matter most.
        </p>
        <p className="font-bold">Social Links</p>
        <div className="flex gap-4 justify-center text-2xl">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaXTwitter />
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
