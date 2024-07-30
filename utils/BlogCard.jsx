const BlogCard = ({ title, description, tag, date, slug }) => {
    return (
        <div className="container max-w-4xl px-10 py-6 mx-auto bg-sh-dark-500 border-2 border-sh-dark text-sh-white rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-400">{date}</span>
                <span className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{tag}</span>
            </div>
            <div className="mt-3">
                <a rel="noopener noreferrer" href={slug} className="text-2xl font-bold hover:underline"> {title} </a>
                <p className="mt-2"> {description} </p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <a rel="noopener noreferrer" href={slug} className="hover:underline dark:text-violet-400">Read more</a>
            </div>
        </div>
    );
};

export default BlogCard;
