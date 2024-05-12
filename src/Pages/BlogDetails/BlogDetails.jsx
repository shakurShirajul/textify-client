import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comments from '../../components/Comments';
import CardSkeleton from '../../components/CardSkeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const BlogDetails = () => {

    const { id: blog_id } = useParams();
    const { data: blog, isPending, isLoading, refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/blog/${blog_id}`);
            return res.data;
        }
    })
    
    return (
        <div className=''>
            {
                isLoading ?
                    (
                        <div className="grid grid-cols-2 gap-2">
                            <CardSkeleton cards={6} />
                        </div>
                    ) :
                    (
                        <div className='max-w-5xl mx-auto space-y-5 bg-white p-5 rounded-lg'>
                            <div className='space-y-2'>
                                <h1 className='text-4xl font-bold font-grotsk'>{blog?.title}</h1>
                                <p className='text-[20px] font-normal font-inter text-neutral-500'>{blog.short_description}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img
                                        src={blog.author_image}
                                        alt=""
                                        class="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className='text-base font-semibold'>{blog.author_name}</p>
                                        <p className='text-neutral-500 text-sm'>{blog.created_at}</p>
                                    </div>
                                </div>
                                <button className='font-martina text-green-700 font-medium text-xs p-2 text-center'>#{blog.category}</button>
                            </div>
                            <div className='space-y-3 border-b'>
                                <div className='space-y-2'>
                                    <img
                                        className='w-full rounded-lg'
                                        src={blog.image}
                                        alt=""
                                    />
                                </div>
                                <p className='text-xl font-newsreader'>{blog.long_description}</p>
                            </div>
                            <Comments blog_id={blog_id} />
                        </div>

                    )
            }

        </div>

    );
};

export default BlogDetails;