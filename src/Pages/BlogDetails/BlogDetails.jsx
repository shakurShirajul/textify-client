import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Comments from '../../components/Comments';
import CardSkeleton from '../../components/CardSkeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react';

const BlogDetails = () => {

    const { id: blog_id } = useParams();

    const [blog, setBlog] = useState([])
    const { data: blogData, isPending, isLoading } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/blog/${blog_id}`, {
                withCredentials: true, headers: {
                    'content-type': 'application/json'
                },
            });
            setBlog(res.data);
            console.log("Hello", res);
            return res.data;
        }
    })

    let author_email;

    if (!isPending) {
        author_email = blog?.author_email;
    }

    console.log("here is shirajul", blog);

    return (
        <div className=''>
            {
                isLoading ?
                    (
                        <div className="flex items-center justify-center">
                            <CardSkeleton cards={1} />
                        </div>
                    ) :
                    (
                        <div className='md:max-w-5xl mx-auto space-y-5 bg-white p-5 rounded-lg'>
                            <div className='space-y-2'>
                                <h1 className='text-4xl font-bold font-grotsk'>{blog?.title}</h1>
                                <p className='text-[20px] font-normal font-inter text-neutral-500'>{blog?.short_description}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img
                                        src={blog?.author_image}
                                        alt=""
                                        class="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className='text-base font-semibold'>{blog?.author_name}</p>
                                        <p className='text-neutral-500 text-sm'>{blog?.created_at}</p>
                                    </div>
                                </div>
                                <button className='font-martina text-green-700 font-medium text-xs p-2 text-center'>#{blog?.category}</button>
                            </div>
                            <div className='space-y-3 border-b'>
                                <div className='space-y-2'>
                                    <img
                                        className='w-full rounded-lg'
                                        src={blog?.image}
                                        alt=""
                                    />
                                </div>
                                <p className='text-xl font-newsreader'>{blog?.long_description}</p>
                            </div>
                            <div className='flex justify-end'>
                                <Link type="button"
                                    to={`/updateblog/${blog_id}`}
                                    class="text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
                                >
                                    View Details
                                </Link>
                            </div>
                            <Comments blog_id={blog_id} author_email={author_email} />
                        </div>
                    )
            }
        </div>

    );
};

export default BlogDetails;