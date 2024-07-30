import Image from 'next/image';

const BlogPost = ({ title, author, date, content }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <article className="prose lg:prose-xl mx-auto">
                <header className="mb-4">
                    <h1 className="text-4xl font-bold mb-2">{title}</h1>
                    <div className="flex items-center space-x-4">
                        <div>
                            <p className="text-lg font-medium">{author}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </header>
                <section className="text-lg leading-relaxed text-gray-700">{content}</section>
            </article>
        </div>
    );
};

export default BlogPost;