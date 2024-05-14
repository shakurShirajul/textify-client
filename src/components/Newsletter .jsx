import Swal from "sweetalert2";

const Newsletter = () => {
    const handleNewsletter = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Your Email Added Successfully",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
        event.target.reset();
    }
    return (
        <div className="mx-5 md:mx-0">
            <div className="max-w-7xl mx-auto mt-20">
                <div className="border rounded-xl p-5 md:p-10  bg-white">
                    <div className="space-y-2 md:space-y-0 md:flex justify-between gap-10">
                        <div className="space-y-2 lg:space-y-5 ">
                            <h1 className="text-xl md:text-5xl font-grotsk font-medium">Subscribe Our Newsletter</h1>
                            <div className="space-y-1">
                                <h1 className="font-medium text-lg md:text-xl font-inter">Get more updates...</h1>
                                <p className="font-inter max-w-xl text-gray-500 font-medium">Do you want to get notified when a new blog is added to textify? Sign up for our newsletter and you'll be among the first to find out about new blogs</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className="space-y-2 w-full">
                                <form onSubmit={handleNewsletter} className="mx-auto space-y-4 sm:flex sm:space-y-0 w-full">
                                    <div className="relative w-full">
                                        <label for="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input required className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" />
                                    </div>
                                    <div>
                                        <input type="submit" className="py-3 px-5 w-full text-sm font-semibold text-center rounded-lg text-white border cursor-pointer bg-green-600 border-green-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 " value="Subscribe" />
                                    </div>
                                </form>
                                <h1 className="text-gray-500">We care about the protection of your data. <span className="text-blue-700">Read our Privacy Policy.</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;