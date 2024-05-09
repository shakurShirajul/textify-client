import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const activeButton = "border-b-2 border-[#0B6EFE]  text-[#0B6EFE] font-semibold";
    const buttonStyle = "text-lg font-normal"

    return (
        <div className="font-grotsk">
            <Navbar fluid rounded>
                <NavbarBrand>
                    <NavbarToggle />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Textify</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <div className="flex items-center gap-2">
                        <Link to='/login'><button>Login</button></Link>
                        <Link to='/signup'> <button>Register</button></Link>
                    </div>
                </div>
                <NavbarCollapse>
                    <NavLink to="/" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Home</span></NavLink>
                    <NavLink to="/addblog" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Add Blog</span></NavLink>
                    <NavLink to="/addItem" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>All Blog</span></NavLink>
                    <NavLink to="/mylist" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Featured Blogs</span> </NavLink>
                    <NavLink to="/mylist" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Wishlist</span></NavLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default Nav;