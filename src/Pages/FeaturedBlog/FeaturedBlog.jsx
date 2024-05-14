import { Helmet } from "react-helmet-async";
import FeaturedTable from "./FeaturedTable";

const FeaturedBlog = () => {
    return (
        <div >
            <Helmet>
                <title>Featured Blog | Textify</title>
            </Helmet>
            <div >
                <FeaturedTable />
            </div>
        </div>
    );
};

export default FeaturedBlog;