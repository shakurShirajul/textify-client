import {
  House,
  LogOut,
  UserRoundPen,
  NotebookPen,
  Bookmark,
  Home,
} from "lucide-react";
import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const navBarRoutes = [
  {
    icon: <UserRoundPen />,
    name: "Profile",
    link: "/dashboard/profile",
  },
  {
    icon: <NotebookPen />,
    name: "Write Blog",
    link: "/dashboard/writeblog",
  },
  {
    icon: <Bookmark />,
    name: "Wishlist",
    link: "/dashboard/Wishlist",
  },
];

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const activeButton =
    "text-white bg-primary border-none rounded-lg font-semibold duration-300";
  return (
    <div>
      <div className="grid lg:flex">
        <div className="hidden lg:grid  lg:w-64 lg:h-full">
          <ul className="bg-base-200 text-base-content p-4 h-screen">
            {navBarRoutes.map((navBarRoute, index) => (
              <li key={index}>
                <NavLink
                  to={navBarRoute.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg ${
                      isActive && activeButton
                    }`
                  }
                >
                  <span>{navBarRoute.icon}</span>
                  <span>{navBarRoute.name}</span>
                </NavLink>
              </li>
            ))}
            <hr className="border-black my-5" />
            <li>
              <Link
                to="/"
                className="flex items-center cursor-pointer gap-2 p-2 rounded-lg"
              >
                <span>
                  <Home />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li
              className="flex items-center cursor-pointer gap-2 p-2 rounded-lg"
              onClick={logOut}
            >
              <span>
                <LogOut />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="grid lg:hidden p-2 bg-base-200 text-center">
          <ul className="flex items-center justify-end gap-5">
            {navBarRoutes.map((navBarRoute, index) => (
              <li key={index}>
                <NavLink
                  to={navBarRoute.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg ${
                      isActive && activeButton
                    }`
                  }
                >
                  <span>{navBarRoute.name}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/"
                className="flex items-center cursor-pointer gap-2 p-2 rounded-lg"
              >
                <span>Home</span>
              </Link>
            </li>
            <li
              className="flex items-center cursor-pointer gap-2 p-2 rounded-lg"
              onClick={logOut}
            >
              <span>
                <LogOut />
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-screen m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
