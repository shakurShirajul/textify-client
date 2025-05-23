import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../components/DashboardTitle";
import MyWishlist from "../MyWishlists/MyWishlist";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import CardSkeleton from "../../components/CardSkeleton";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import MyWishlists from "../MyWishlists/MyWishlists";

const Wishlist = () => {
  const { user, updateToast, errorToast } = useContext(AuthContext);

  const {
    data: myWishlists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myWishlist"],
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
    <div className="bg-white w-full h-full rounded-xl p-5">
      <Helmet>
        <title>Dashboard | Wishlist</title>
      </Helmet>
      <div className="space-y-5">
        <DashboardTitle title={"My Wishlist"} />
        <MyWishlists />
        <ToastContainer />
      </div>
    </div>
  );
};
export default Wishlist;
