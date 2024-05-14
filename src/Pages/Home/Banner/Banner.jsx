import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="bg-white mb-10">
            <section className="md:max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="grid items-center">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <h1 className="font-bold text-center text-5xl md:text-6xl md:text-left">Welcome to <span className="text-green-500">Textify</span></h1>
                                <p className="text-lg text-center md:text-left">Discover amazing stories and insightful articles on various topics.</p>
                            </div>
                            <div className="flex justify-center md:justify-start gap-5">
                                <Link to='/allblogs'><button className="flex-1 text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm md:text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">Read Blogs</button></Link>
                                <Link to='/featuredblog'> <button className="flex-1 focus:outline-none text-white bg-green-600 hover:bg-green-800  font-semibold rounded-lg text-sm md:text-base px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 ">Featured Blogs</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.postimg.cc/zfb3wmHL/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg" alt="" className="object-contain rounded-xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Banner;