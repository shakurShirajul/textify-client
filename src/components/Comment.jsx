const Comment = ({ comment }) => {
    const { content, commenter_name, commenter_image } = comment;
    return (
        <div>
            <div class="flex items-start gap-2.5">
                <img className="w-11 h-11 rounded-full" src={commenter_image} alt="Commenter Image" />
                <div className="flex flex-col w-full p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{commenter_name}</span>
                        {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span> */}
                    </div>
                    <p className="text-base font-normal py-2.5 text-gray-900 dark:text-white w-full">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;