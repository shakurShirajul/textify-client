import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../../components/Comments";
import CardSkeleton from "../../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { id: blog_id } = useParams();
  const { user } = useContext(AuthContext);

  const [blog, setBlog] = useState([]);

  const {
    data: blogData,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axios.get(
        `https://textify-black.vercel.app/blog/${blog_id}?email=${user.email}`,
        {
          withCredentials: true,
        }
      );
      setBlog(res.data);
      return res.data;
    },
  });

  let author_email;

  if (!isPending) {
    author_email = blog?.author_email;
  }

  const currentDate = new Date(blog?.created_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  console.log("here is shirajul", blog);

  return (
    <div className="mt-10">
      <Helmet>
        <title>Details | Textify</title>
      </Helmet>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <CardSkeleton cards={1} />
        </div>
      ) : (
        <div className="md:max-w-5xl mx-auto space-y-5 bg-white p-5 rounded-lg">
          <div className="flex items-center gap-2">
            <img
              src={blog?.author_image}
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-base font-semibold">{blog?.author_name}</p>
              <p className="text-neutral-500 text-xs">{`${date}-${month}-${year}`}</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold font-grotsk">{blog?.title}</h1>
            <p className="font-normal font-inter text-neutral-500">
              {blog?.short_description}
            </p>
          </div>

          <div className="space-y-3 border-b">
            <div className="space-y-2">
              <img
                className="aspect-auto rounded-lg"
                src={blog?.image}
                alt=""
              />
              <h1 className="font-martina text-green-700 font-medium text-xs text-right">
                #{blog?.category}
              </h1>
            </div>
            <p className="font-newsreader">{blog?.long_description}</p>
          </div>
          <div className="flex justify-end">
            {user.email === author_email && (
              <Link
                type="button"
                to={`/updateblog/${blog_id}`}
                class="text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
              >
                Update Blog
              </Link>
            )}
          </div>
          <Comments blog_id={blog_id} author_email={author_email} />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
