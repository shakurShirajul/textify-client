import DashboardTitle from "../../components/DashboardTitle";
import AddBlog from "../AddBlog/AddBlog";

const WriteBlog = () => {
  return (
    <div className="bg-white w-full h-full rounded-xl p-5">
      <div className="space-y-5">
        <DashboardTitle title={"Create Blog"} />
        <div>
          <AddBlog />
        </div>
      </div>
    </div>
  );
};
export default WriteBlog;
