import { useQuery, useQueryClient } from "@tanstack/react-query";
import RecentBlog from "../Home/RecentBlogs/RecentBlog";
import CardSkeleton from "../../components/CardSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";
import Search from "../../components/Search";



const AllBlogs = () => {

    const queryClient = useQueryClient();

    const { data: blogs, isPending, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/blogs`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        }
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const serachText = event.target.searchText.value;
        const res = await axios.get(`http://localhost:5000/blogs/search?title=${serachText}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        queryClient.setQueryData(['blogs'], res.data);
    }

    const handleSelect = async (event) => {
        console.log(event.target.value);
        const res = await axios.get(`http://localhost:5000/blogs?category=${event.target.value}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        queryClient.setQueryData(['blogs'], res.data);
    }

    return (
        <div className="max-w-5xl mx-auto">
            {
                isPending ?
                    (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <CardSkeleton cards={6} />
                        </div>
                    ) : (
                        <div>
                            <div className="my-10 mx-5 md:mx-0">
                                <Search handleFormSubmit={handleFormSubmit} handleSelect={handleSelect} />
                            </div>
                            <div className="mx-5 md:mx-0">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {
                                        blogs?.map(post =>
                                            <RecentBlog key={post._id} post={post}></RecentBlog>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    )
            }

        </div>
    );
};

export default AllBlogs;