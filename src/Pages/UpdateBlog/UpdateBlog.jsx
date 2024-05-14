import { useQuery } from '@tanstack/react-query';
import UpdateBlogForm from './UpdateBlogForm';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const UpdateBlog = () => {

    const { id: blog_id } = useParams();

    const { user, successToast, errorToast } = useContext(AuthContext);

    console.log(user.email, blog_id);

    // const [updateBlog, setUpdateBlog] = useState([]);
    const { data: updateBlog, isPending, isLoading } = useQuery({
        queryKey: ['updateBlog'],
        queryFn: async () => {
            const res = await axios.get(`https://textify-black.vercel.app/blog/${blog_id}?email=${user.email}`, {
                withCredentials: true
            });
            // setUpdateBlog(res.data);
            return res.data;
        }
    })


    if (isPending) {
        return <div className='h-screen flex items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    console.log(updateBlog)
    return (
        <div className='mt-10'>
            <Helmet>
                <title>Update Blog | Textify</title>
            </Helmet>
            <UpdateBlogForm updateBlog={updateBlog} />
        </div>
    );
};

export default UpdateBlog;