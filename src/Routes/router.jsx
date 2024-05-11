import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddBlog from "../Pages/AddBlog/AddBlog";
import MyWishlists from "../Pages/MyWishlists/MyWishlists";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/addblog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "/mywishlist",
                element: <MyWishlists/>,
            }
        ]
    }
])

export default router;