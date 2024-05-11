import axios from "axios";
import RecentBlog from "./RecentBlog";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const RecentBlogs = () => {

    const { data: recentPosts, isPending } = useQuery({
        queryKey: ['recentPosts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/blogs/recent');
            return res.data;
        }
    })


    console.log(recentPosts);

    return (
        <div className="max-w-5xl mx-auto">
            {
                isPending && <div className="grid grid-cols-2 gap-2">
                    <CardSkeleton cards={6} />
                </div>
            }
            <div className="grid grid-cols-2 gap-5">
                {
                    recentPosts?.map(post =>
                        <RecentBlog key={post._id} post={post}></RecentBlog>
                    )
                }
            </div>
        </div>
    );
};

export default RecentBlogs;