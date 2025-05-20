import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyWishlist from "./MyWishlist";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyWishlists = () => {
  const { user, updateToast, errorToast } = useContext(AuthContext);

  const {
    data: myWish,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["recentPosts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://textify-black.vercel.app/wishlists?email=${user.email}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
  });

  // console.log(myWish);

  // Remove From Wishlist
  const handleWishlistDelete = (id) => {
    axios
      .delete(
        `https://textify-black.vercel.app/wishlist/${id}?email=${user.email}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.deletedCount > 0) {
          updateToast("Remove Successfully");
          refetch();
        }
      });
  };

  return (
    <div className="mt-10 min-h-screen ">
      <Helmet>
        <title>My Wishlists | Textify</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        {isPending && (
          <div className="grid grid-cols-3 gap-5">
            <CardSkeleton cards={6} />
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {myWish?.map((item) => (
            <MyWishlist
              item={item}
              handleWishlistDelete={handleWishlistDelete}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyWishlists;
