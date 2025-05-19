const Comment = ({ comment }) => {
  const { content, commenter_name, commenter_image, created_at } = comment;

  const currentDate = new Date(created_at);

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div>
      <div class="flex items-start gap-2.5 font-inter">
        <img
          className="w-11 h-11 rounded-full"
          src={commenter_image}
          alt="Commenter Image"
        />
        <div className="flex flex-col w-full p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="grid rtl:space-x-reverse">
            <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
              {commenter_name}
            </h1>
            <h6 className="text-xs font-normal text-gray-500 dark:text-gray-400">{`${date}-${month}-${year}`}</h6>
          </div>
          <p className="text-base font-normal py-2.5 text-gray-900 dark:text-white w-full">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
