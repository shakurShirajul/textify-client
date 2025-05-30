import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddBlog from "../Pages/AddBlog/AddBlog";
import MyWishlists from "../Pages/MyWishlists/MyWishlists";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import FeaturedBlog from "../Pages/FeaturedBlog/FeaturedBlog";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Dashboard from "../layout/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import Wishlist from "../Pages/Dashboard/Wislist";
import WriteBlog from "../Pages/Dashboard/WriteBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addblog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/mywishlist",
        element: (
          <PrivateRoute>
            <MyWishlists />
          </PrivateRoute>
        ),
      },
      {
        path: "/allblogs",
        element: <AllBlogs />,
      },
      {
        path: "/blogdetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateblog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/featuredblog",
        element: <FeaturedBlog />,
      },
    ],
  },
  {
    path: "dashboard",
    errorElement: <PageNotFound />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "writeblog",
        element: (
          <PrivateRoute>
            <WriteBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
