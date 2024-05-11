import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyWishlist from "./MyWishlist";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { AuthContext } from "../../providers/AuthProviders";


const MyWishlists = () => {
    const {user} = useContext(AuthContext);
    const { data: myWish, isPending } = useQuery({
        queryKey: ['recentPosts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/wishlists?email=${user.email}`);
            return res.data;
        }
    })
    console.log(myWish);

    return (
        <div>
            {/* <h1>Length: {myWish.length}</h1> */}
            {
                isPending && <div className="grid grid-cols-2 gap-2">
                    <CardSkeleton cards={6} />
                </div>
            }
            {
                myWish?.map(item=>
                    <MyWishlist item={item}/>
                )
            }
        </div>
    );
};

export default MyWishlists;