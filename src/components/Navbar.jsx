import { FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { VscGraphLine } from 'react-icons/vsc';
import { Link } from 'react-router';
import MyNavLink from './MyNavLink';
import { PiHamburgerThin } from 'react-icons/pi';

const Navbar = () => {
  const navItems = [
    {
      path: '/',
      text: 'Home',
      icon: <FaHome />,
    },
    {
      path: '/timeline',
      text: 'Timeline',
      icon: <RiTimeLine />,
    },
    {
      path: '/stats',
      text: 'Stats',
      icon: <VscGraphLine />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-100 w-full">
      <div className="navbar max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 mr-2 pointer-events-auto"
            >
              <PiHamburgerThin className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-999 mt-3 w-52 p-4 shadow-xl flex flex-col gap-3 border border-base-200"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <MyNavLink
                    to={item.path}
                    className="flex items-center gap-3 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-base">{item.text}</span>
                  </MyNavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-[#244d3f] whitespace-nowrap"
          >
            KeenKeeper
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyNavLink
                  to={item.path}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.text}</span>
                </MyNavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
