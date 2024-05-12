import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../../components/CommentBox';
import Comments from '../../components/Comments';

const BlogDetails = () => {
    const { id: blog_id } = useParams();

    const { data: blog, isPending } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/blog/${blog_id}`);
            return res.data;
        }
    })
    // console.log(blog);

    if (isPending) {
        return <h1>Loading...</h1>
    }

    // console.log("Is Me", comments);

    const { title, image, category, short_description: s_d, long_description: l_d, created_at: time, author_image, author_email, author_name } = blog;


    return (
        <div className=''>
            <div className='max-w-5xl mx-auto space-y-5 bg-white p-5 rounded-lg'>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-bold font-grotsk'>{title}</h1>
                    <p className='text-[20px] font-normal font-inter text-neutral-500'>{s_d}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img
                            src={author_image}
                            alt=""
                            class="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className='text-base font-semibold'>{author_name}</p>
                            <p className='text-neutral-500 text-sm'>{time}</p>
                        </div>
                    </div>
                    <button className='font-martina text-green-700 font-medium text-xs p-2 text-center'>#{category}</button>
                </div>
                <div className='space-y-3 border-b'>
                    <div className='space-y-2'>
                        <img
                            className='w-full rounded-lg'
                            src={image}
                            alt=""
                        />

                    </div>
                    <p className='text-xl font-newsreader'>{l_d}</p>
                </div>
                <Comments blog_id={blog_id}/>
                <CommentBox />
            </div>
        </div>

    );
};

export default BlogDetails;