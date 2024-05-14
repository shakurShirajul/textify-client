import { Helmet } from "react-helmet-async";
import Newsletter from "../../components/Newsletter ";
import AuthorCards from "./AuthorCard/AuthorCards";
import Banner from "./Banner/Banner";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Textify</title>
            </Helmet>
            <Banner/>
            <RecentBlogs/>
            <Newsletter/>
            <AuthorCards/>
        </div>
    );
};

export default Home;