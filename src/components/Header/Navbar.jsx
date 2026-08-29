import { NavLink } from "react-router";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `mr-3 rounded-sm p-2 ${
      isActive
        ? "border border-[#23BE0A] font-bold text-[#23BE0A]"
        : "hover:bg-gray-200"
    }`;

  const links = (
    <>
      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkStyle}>
        About
      </NavLink>

      <NavLink to="/readList" className={linkStyle}>
        Book List
      </NavLink>

      <NavLink to="/pagesToRead" className={linkStyle}>
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow menu-sm"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl font-bold">
          Book Vibe
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn mr-3 bg-[#23BE0A] text-white">
          Sign In
        </a>

        <a className="btn bg-[#59C6D2] text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;