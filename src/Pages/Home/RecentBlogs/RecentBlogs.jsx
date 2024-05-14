import axios from "axios";
import RecentBlog from "./RecentBlog";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const RecentBlogs = () => {

    const { data: recentPosts, isPending } = useQuery({
        queryKey: ['recentPosts'],
        queryFn: async () => {
            const res = await axios.get('https://textify-black.vercel.app/blogs/recent', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        }
    })

    return (
        <div className="mx-5 md:mx-0">
            <h1 className="font-grotsk text-4xl font-semibold text-center mb-5">Recent Blogs</h1>
            <div className="max-w-6xl mx-auto">
                {
                    isPending && <div className="grid grid-cols-3 gap-2">
                        <CardSkeleton cards={6} />
                    </div>
                }
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        recentPosts?.map(post =>
                            <RecentBlog key={post._id} post={post}></RecentBlog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;