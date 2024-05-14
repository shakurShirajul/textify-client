import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer } from 'react-toastify';

const UpdateBlogForm = ({ updateBlog }) => {


    const { user, updateToast, successToast, errorToast } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(
        {
            defaultValues: {
                title: updateBlog?.title,
                image: updateBlog?.image,
                category: updateBlog?.category,
                short_description: updateBlog?.short_description,
                long_description: updateBlog?.long_description,
            }
        }
    );

    const onSubmit = (data) => {
        const { title, image, category, short_description, long_description } = data;

        axios.patch(`https://textify-black.vercel.app/blog/update/${updateBlog?._id}?email=${user.email}`, data, { withCredentials: true })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    successToast("Blog Update Successfully");
                }
                else {
                    errorToast("Something Went Wrong");
                }
            });
    };

    return (
        <div className=''>
            <div className='md:max-w-5xl mx-auto bg-white p-5 rounded-lg font-inter'>
                <form onSubmit={handleSubmit(onSubmit)} class="bg-white space-y-5">
                    <div className="relative z-0">
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        />
                        <label for="standard_success" className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Blog Title
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative z-0">
                            <input
                                type="url"
                                {...register("image", { required: true })}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                required
                            />
                            <label for="standard_success" className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Image URL
                            </label>
                        </div>
                        <div className="w-full mx-auto">
                            <select
                                {...register("category", { required: true })}
                                name="category"
                                className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600">
                                required
                                <option className="text-green-600" selected disabled value="">Choose a Category</option>
                                <option value="Travel">Travel</option>
                                <option value="Productivity">Productivity</option>
                                <option value="Creativity">Creativity</option>
                                <option value="Health">Health</option>
                                <option value="Technology">Technology</option>
                                <option value="AI">AI</option>
                                <option value="Programming">Programming</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="History">History</option>
                                <option value="Science">Science</option>

                            </select>
                        </div>
                    </div>
                    <div className="relative z-0">
                        <input
                            type="text"
                            name="shortDescription"
                            {...register("short_description", { required: true })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label for="standard_success" className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Short Description
                        </label>
                    </div>
                    <div>
                        <div className="w-full mb-4 border border-green-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                            </svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                    </svg>
                                    <span className="sr-only">Full screen</span>
                                </button>
                                <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Show full screen
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                                <label for="editor" className="sr-only">Publish post</label>
                                <textarea
                                    {...register("long_description", { required: true })}
                                    rows="8"
                                    className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an blog..."
                                    required
                                    name="longDescription"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <input
                                type="submit"
                                className="cursor-pointer inline-flex items-center px-5 py-2.5 text-sm text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900 hover:bg-green-800 font-semibold"
                                value="Update Blog"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default UpdateBlogForm;