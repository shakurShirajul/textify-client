import Newsletter from "../../components/Newsletter ";
import AuthorCards from "./AuthorCard/AuthorCards";
import Banner from "./Banner/Banner";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentBlogs/>
            <Newsletter/>
            <AuthorCards/>
        </div>
    );
};

export default Home;