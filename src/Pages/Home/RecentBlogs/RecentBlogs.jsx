import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {

    const [recentPost, setRecentPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs/recent')
            .then(res => setRecentPost(res.data));
    }, [])

    console.log(recentPost);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-5">
                {
                    recentPost.map(post =>
                        <RecentBlog key={post._id} post={post}></RecentBlog>
                    )
                }
            </div>
        </div>
    );
};

export default RecentBlogs;