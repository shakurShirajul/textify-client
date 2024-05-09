const RecentBlog = ({ post }) => {
    const { title, image, short_description, category, author_image, author_name, created_at } = post;
    return (
        <div className="max-w-lg mx-auto font-inter">
            <div className="border rounded-xl p-5 space-y-4">
                <img className="object-cover w-full rounded-xl aspect-video" src={image} alt="" />
                <div className="flex flex-col justify-between leading-normal gap-4">
                    <div className="flex items-center gap-2">
                        <img class="w-11 h-11 rounded-full" src={author_image} alt="Rounded avatar" />
                        <div>
                            <h1 className="text-base font-medium">{author_name}</h1>
                            <h1>{created_at}</h1>
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-grotsk">{title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    </div>
                    <div>
                        <p className="text-right">Categrory: <span>{category}</span></p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">Wishlist Button</button>
                        <button type="button" class="focus:outline-none text-white bg-[#20DC49] hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#20DC49] dark:hover:bg-green-700 ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;