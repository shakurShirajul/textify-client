import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const RecentBlog = ({ post }) => {
  const {
    _id,
    title,
    image,
    short_description,
    category,
    author_image,
    author_name,
    created_at,
  } = post;
  const { user, updateToast, errorToast } = useContext(AuthContext);

  const currentDate = new Date(created_at);

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const handleWishListButton = async () => {
    console.log(user?.email);

    if (user?.email === undefined) {
      return errorToast("Login For Add To Wishlist");
    }

    const result = await axios.post(
      `https://textify-black.vercel.app/wishlist?email=${user.email}`,
      {
        user_email: user.email,
        blog_id: post._id,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.status === 208) {
      errorToast("Already Added To Wishlist");
    } else if (result.status === 201) {
      updateToast("Added To Wishlist");
    }
  };
  return (
    <div>
      <div className="max-w-lg  mx-auto font-inter ">
        <div className="border rounded-xl p-5 space-y-4 bg-white ">
          <img
            className="object-cover w-full rounded-xl aspect-video"
            src={image}
            alt=""
          />
          <div className="flex flex-col justify-between leading-normal gap-4">
            <div className="flex items-center gap-2">
              <img
                className="w-11 h-11 rounded-full"
                src={author_image}
                alt="Rounded avatar"
              />
              <div>
                <h1 className="text-base font-medium">{author_name}</h1>
                <h1 className="text-xs">{`${date}-${month}-${year}`}</h1>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-grotsk line-clamp-1">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                {short_description}
              </p>
            </div>
            <div>
              <p className="text-right text-sm">
                Categrory: <span>{category}</span>
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleWishListButton}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
              >
                Add to Wishlist
              </button>
              <Link
                type="button"
                to={`/blogdetails/${_id}`}
                className="focus:outline-none text-white bg-green-600 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 "
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecentBlog;
