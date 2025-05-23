import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const navBarRoutes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Write Blog",
    link: "/addblog",
  },
  {
    name: "All Blog",
    link: "/allblogs",
  },
  {
    name: "Featured Blogs",
    link: "/featuredblog",
  },
  {
    name: "Wishlist",
    link: "/mywishlist",
  },
];

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const activeButton = "text-lg text-green-600 font-semibold";
  const buttonStyle = "text-lg font-normal";

  return (
    <div className="bg-base-100 w-full border-b">
      <div className="max-w-7xl mx-auto ">
        <div className="navbar">
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navBarRoutes.map((navBarRoute, index) => (
                  <li key={index}>
                    <NavLink
                      to={navBarRoute.link}
                      className={({ isActive }) =>
                        isActive ? activeButton : buttonStyle
                      }
                    >
                      {navBarRoute.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/" className="font-semibold text-2xl text-green-700">
              Textify
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
              {navBarRoutes.map((navBarRoute, index) => (
                <li key={index}>
                  <NavLink
                    to={navBarRoute.link}
                    className={({ isActive }) =>
                      isActive ? activeButton : buttonStyle
                    }
                  >
                    {navBarRoute.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/dashboard/profile">Dashboard</Link>
                  </li>
                  <li>
                    <p onClick={logOut}>Logout</p>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <button className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 ">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="focus:outline-none text-white bg-green-600 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 ">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
