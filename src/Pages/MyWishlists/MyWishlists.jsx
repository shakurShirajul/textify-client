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
            const res = await axios.get(`http://localhost:5000/wishlists?email=${user.email}`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        }
    })

    console.log(myWish);

    // Remove From Wishlist
    const handleWishlistDelete = (id) => {
        axios.delete(`http://localhost:5000/wishlist/${id}?email=${user.email}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
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