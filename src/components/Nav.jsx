import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const activeButton = "border-b-2 border-[#0B6EFE]  text-[#0B6EFE] font-semibold";
    const buttonStyle = "text-lg font-normal"

    return (
        // <div>
        //     {/* fixed top-0 left-0 right-0 border-2 */}
        //     <div className="font-grotsk  bg-white">
        //         <Navbar fluid rounded>
        //             <NavbarBrand>
        //                 <NavbarToggle />
        //                 <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Textify</span>
        //             </NavbarBrand>
        //             <div className="flex md:order-2">
        //                 {
        //                     user ?
        //                         (
        //                             <div className="flex items-center gap-2">
        //                                 <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" />
        //                                 <button
        //                                     onClick={logOut}
        //                                     className="bg-[#0B6EFE] p-2 text-sm md:p-3 md:text-base text-white font-medium rounded-lg">
        //                                     Logout
        //                                 </button>
        //                             </div>
        //                         )
        //                         :
        //                         (
        //                             <div className="flex items-center gap-2">
        //                                 <Link to='/login'><button>Login</button></Link>
        //                                 <Link to='/signup'> <button>Register</button></Link>
        //                             </div>
        //                         )
        //                 }
        //             </div>
        //             <NavbarCollapse>
        //                 <NavLink to="/" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Home</span></NavLink>
        //                 <NavLink to="/addblog" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Add Blog</span></NavLink>
        //                 <NavLink to="/allblogs" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>All Blog</span></NavLink>
        //                 <NavLink to="/mylist" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Featured Blogs</span> </NavLink>
        //                 <NavLink to="/mywishlist" className={({ isActive }) => isActive && activeButton}><span className={buttonStyle}>Wishlist</span></NavLink>
        //             </NavbarCollapse>
        //         </Navbar>
        //     </div>
        // </div>


        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        to='/'
                        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
                    >
                        Textify
                    </Link>

                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            user ?
                                (
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" />
                                        <button
                                            onClick={logOut}
                                            className="bg-[#0B6EFE] p-2 text-sm md:text-base text-white font-medium rounded-lg">
                                            Logout
                                        </button>
                                    </div>
                                )
                                :
                                (
                                    <div className="flex items-center gap-2">
                                        <Link to='/login'><button>Login</button></Link>
                                        <Link to='/signup'> <button>Register</button></Link>
                                    </div>
                                )
                        }
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/addblog' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/allblogs' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to='/FeaturedBlog' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Featured Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to='/mywishlist' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Wishlist</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
};

export default Nav;