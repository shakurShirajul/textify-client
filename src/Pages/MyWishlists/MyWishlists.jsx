import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyWishlist from "./MyWishlist";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer } from "react-toastify";


const MyWishlists = () => {

    const { user, updateToast, errorToast } = useContext(AuthContext);


    const { data: myWish, isPending, refetch } = useQuery({
        queryKey: ['recentPosts'],
        queryFn: async () => {
            const res = await axios.get(`https://textify-black.vercel.app/wishlists?email=${user.email}`);
            return res.data;
        }
    })

    console.log(myWish);

    // Remove From Wishlist
    const handleWishlistDelete = (id) => {
        axios.delete(`https://textify-black.vercel.app/wishlist/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    updateToast("Remove Successfully");
                    refetch();
                }
            })
    }

    return (
        <div>
            {
                isPending && <div className="grid grid-cols-2 gap-2">
                    <CardSkeleton cards={6} />
                </div>
            }
            <div className="grid grid-cols-2">
                {
                    myWish?.map(item =>
                        <MyWishlist item={item}
                            handleWishlistDelete={handleWishlistDelete} />
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyWishlists;