import { useContext } from "react";
import DashboardTitle from "../../components/DashboardTitle";
import { AuthContext } from "../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const {
    data: blogs,
    isPending,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(`https://textify-black.vercel.app/blogs`, {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      });
      return res.data;
    },
  });

  let count = 0;
  if (!isLoading) {
    blogs.map((blog) => {
      if (blog.author_email === user.email) {
        count = count + 1;
      }
    });
  }
  return (
    <div className="bg-white w-full h-full rounded-xl p-5">
      <div className="space-y-5">
        <DashboardTitle title={"My Profile"} />
        <div>
          <div className="flex gap-5">
            <div className="avatar w-32 h-32">
              <img src={user.photoURL} className="rounded-xl" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Name: {user.displayName}
              </h1>
              <h1 className="font-medium">Email: {user.email}</h1>
              <h1>Published Blog: {count}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
