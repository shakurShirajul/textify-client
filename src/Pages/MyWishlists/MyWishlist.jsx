import { BookmarkMinus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MyWishlist = ({ item, handleWishlistDelete }) => {
  const {
    _id,
    title,
    image,
    short_description,
    category,
    author_image,
    author_name,
    created_at,
  } = item;

  const currentDate = new Date(created_at);

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div className="max-w-lg mx-auto font-inter ">
      <div className="border rounded-xl p-5 space-y-2 bg-white">
        <img
          className="object-cover w-full rounded-xl aspect-video"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal gap-2">
          <div className="flex items-center gap-2">
            <img
              class="w-11 h-11 rounded-full"
              src={author_image}
              alt="Rounded avatar"
            />
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-base font-medium">{author_name}</h1>
                <h1 className="text-xs text-gray-600">{`${date}-${month}-${year}`}</h1>
              </div>
              <div>
                <button onClick={() => handleWishlistDelete(item._id)}>
                  <BookmarkMinus className="text-red-700" />
                </button>
              </div>
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
            <p className="text-right text-xs">
              #<span>{category}</span>
            </p>
          </div>
          <div className="flex justify-end gap-2">
            {/* <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Remove From Wishlist
            </button> */}
            <Link to={`/blogdetails/${_id}`} className="w-full">
              <button
                type="button"
                class="focus:outline-none text-white bg-[#20DC49] hover:bg-green-800 w-full  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#20DC49] dark:hover:bg-green-700 "
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
