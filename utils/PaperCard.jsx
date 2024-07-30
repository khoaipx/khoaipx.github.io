const PaperCard = ({ title, url, authors, conference, time }) => {
    return (
        <div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
            <div className='mt-1'>
                <div>
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in'
                    >
                        <h3 className='md:block text-lg md:text-xl font-bold'>
                            {title}
                        </h3>
                    </a>
                </div>
                <div>
                    <p>{authors}</p>
                    <p className='text-sm text-sh-white-500'>
                        <span>{conference}</span> - <span>{time}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaperCard;
