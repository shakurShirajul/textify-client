import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyWishlist from "./MyWishlist";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { AuthContext } from "../../providers/AuthProviders";


const MyWishlists = () => {

    const { user } = useContext(AuthContext);

    const [myWish, setMyWish] = useState([]);
    const { data, isPending } = useQuery({
        queryKey: ['recentPosts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/wishlists?email=${user.email}`);
            setMyWish(res.data);
            return res.data;
        }
    })
    console.log(myWish);

    // Remove From Wishlist
    const handleWishlistDelete = (id) => {
        console.log("delete", id);
        axios.delete(`http://localhost:5000/wishlist/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const remaining = myWish.filter(item => item._id != id)
                    setMyWish(remaining);
                    console.log("remaining", remaining);
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
        </div>
    );
};

export default MyWishlists;