import Image from 'next/image';

const EduCard = ({ institution, url, logo, titles }) => {
	return (
		<div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='flex items-center gap-3'>
				<div className='flex items-center w-14 h-14 md:w-16 md:h-16'>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in'
					>
						<Image
							src={logo}
							alt={institution + ' logo'}
							objectFit='contain'
							draggable='false'
							width={160}
							height={160}
						/>
					</a>
				</div>
				<h3 className='md:hidden block text-lg md:text-xl font-bold'>
					{institution}
				</h3>
			</div>
			<div className='mt-1'>
				<div>
					<h3 className='hidden md:block text-lg md:text-xl font-bold'>
						{institution}
					</h3>
				</div>
				{titles.map((item) => (
					<div>
						<p>{item.degree}</p>
						<p className='text-sm text-sh-white-500'>
							<span>{item.startDate}</span> - <span>{item.endDate}</span>
						</p>
					</div>
					))}
			</div>
		</div>
	);
};

export default EduCard;
