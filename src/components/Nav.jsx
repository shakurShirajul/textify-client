import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const activeButton = "border-b-2 border-green-600  text-green-600 font-semibold";
    const buttonStyle = "text-lg font-normal"

    return (
        <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto font-grotsk">
                <Navbar fluid rounded>
                    <NavbarBrand>
                        <NavbarToggle />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            <Link to='/'>Textify</Link>
                        </span>
                    </NavbarBrand>
                    <div className="flex md:order-2">
                        {
                            user ?
                                (
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" />
                                        <button
                                            onClick={logOut}
                                            className="focus:outline-none text-white bg-[#d33]  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#d33]">
                                            Logout
                                        </button>
                                    </div>
                                )
                                :
                                (
                                    <div className="flex items-center gap-2">
                                        <Link to='/login'><button className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 ">Login</button></Link>
                                        <Link to='/signup'> <button className="focus:outline-none text-white bg-green-600 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 ">Register</button></Link>
                                    </div>
                                )
                        }
                    </div>
                    <NavbarCollapse>
                        <NavLink to="/" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Home</span></NavLink>
                        <NavLink to="/addblog" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Add Blog</span></NavLink>
                        <NavLink to="/allblogs" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>All Blog</span></NavLink>
                        <NavLink to="/featuredblog" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Featured Blogs</span> </NavLink>
                        <NavLink to="/mywishlist" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Wishlist</span></NavLink>
                    </NavbarCollapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Nav;