import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white py-12 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center gap-10">
        <aside className="w-full text-center flex flex-col items-center gap-3">
          <div>
            <span className="text-3xl md:text-4xl font-bold tracking-tight">
              KeenKeeper
            </span>
          </div>
          <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-sm md:max-w-none md:whitespace-nowrap">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>

        <nav>
          <div className="flex justify-center gap-8">
            <a className="text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer hover:scale-110">
              <FaFacebook />
            </a>
            <a className="text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer hover:scale-110">
              <FaYoutube />
            </a>
            <a className="text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer hover:scale-110">
              <FaTwitter />
            </a>
          </div>
        </nav>

        <div className="w-full flex flex-col items-center gap-6">
          <hr className="w-full border-white/20" />
          <p className="text-[10px] md:text-xs tracking-wider opacity-60 text-center uppercase">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
