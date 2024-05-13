import React, { useContext } from 'react';
import AddBlogForm from './AddBlogForm';
import { AuthContext } from '../../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddBlog = () => {

    const { user } = useContext(AuthContext);

    const handleAddBlogSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.url.value;
        const category = form.category.value;
        const short_description = form.shortDescription.value;
        const long_description = form.longDescription.value;
        // Data From AuthContext
        const author_email = user.email;
        const author_name = user.name;
        const author_image = user.photoURL

        console.log(long_description)
        const data = {
            title,
            image,
            category,
            short_description,
            long_description,
            author_email,
            author_name,
            author_image,
        }
        const response = await axios.post('https://textify-black.vercel.app/blog/add', data,
            { headers: { 'Content-Type': 'application/json' } }
        )

        if (response.status === 201) {
            Swal.fire({
                title: "Blog Added Successfully!",
                confirmButtonText: "OK"
            });
            form.reset();
        }

    }

    return (
        <div>
            <AddBlogForm handleAddBlogSubmit={handleAddBlogSubmit} />
        </div>
    );
};

export default AddBlog;