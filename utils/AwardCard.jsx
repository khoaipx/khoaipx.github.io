const AwardCard = ({ award, contest, time }) => {
	return (
		<div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='mt-1'>
				<div>
					<h3 className='md:block text-lg md:text-xl font-bold'>
						{award}
					</h3>
					<p>{contest}</p>
					<p className='text-sm text-sh-white-500'>
						<span>{time}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AwardCard;
