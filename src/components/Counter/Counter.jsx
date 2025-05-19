import { BsTextParagraph } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";

const Counter = ({ stats }) => {
  return (
    <div className="p-6 my-6">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <FaUserAlt className="text-3xl lg:text-6xl text-blue-600" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">
              {stats.usersLength}
            </p>
            <p className="capitalize font-semibold text-gray-800">Users</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <BsTextParagraph className="text-3xl lg:text-6xl text-blue-600" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">
              {stats.blogsLength}
            </p>
            <p className="capitalize font-semibold text-gray-800">Post</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <MdOutlineInsertComment className="text-3xl lg:text-6xl text-blue-600" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">
              {stats.commentsLength}
            </p>
            <p className="capitalize font-semibold text-gray-800">Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
