const Search = ({ handleFormSubmit, handleSelect }) => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="flex">
                    <select
                        onChange={handleSelect}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg  hover:bg-gray-200  focus:outline-none focus:ring-gray-100">
                        <option className="text-green-600" selected disabled value="">Choose a Category</option>
                        <option value="Travel">Travel</option>
                        <option value="Productivity">Productivity</option>
                        <option value="Creativity">Creativity</option>
                        <option value="Health">Health</option>
                        <option value="Technology">Technology</option>
                        <option value="AI">AI</option>
                        <option value="Programming">Programming</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="History">History</option>
                        <option value="Science">Science</option>
                    </select>
                    <form
                        onSubmit={handleFormSubmit}
                        className="relative w-full">
                        <input
                            type="search"
                            name="searchText"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search Blogs...."
                        />
                        <button
                            type="submit"
                            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;