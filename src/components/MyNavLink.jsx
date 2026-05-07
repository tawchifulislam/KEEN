import { NavLink } from 'react-router';

const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-2 ${className} ${isActive && 'text-[#244d3f] border-b border-[#244d3f]'}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
