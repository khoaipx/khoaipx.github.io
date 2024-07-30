import { highlightList } from '../data/highlights';
import { HighlightPoint } from '../utils';

const Highlights = () => {
	return (
		<a
			href='mailto:phamxuankhoai@gmail.com'
			target='_blank'
		>
			<section className='p-4 bg-sh-dark-500 shadow-lg border-l-4 border-x-sh-blue rounded-sm text-sh-blue'>
				<h2 className='text-lg font-bold inline-block text-transparent bg-clip-text mb-3 bg-gradient-to-r from-sh-blue via-[#a855f7] to-sh-purple'>
					Contact me if you want to:
				</h2>
				<div>
					{highlightList.map((point) => (
						<HighlightPoint key={point.id} text={point.text} />
					))}
				</div>
			</section>
		</a>
	);
};

export default Highlights;
