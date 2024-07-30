import {Award, Education, Experience, Publication} from "../components";
import Image from "next/image";
import UserImg from "../public/assets/images/icons/square.png";

const about = () => {
	return (
		<>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44 select-none relative group'>
						<Image
							className='rounded-full w-full h-full'
							src={UserImg}
							alt='KhoaiAvatar'
							layout='fill'
							draggable='false'
						/>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							className='text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							Pham Xuan Khoai
						</h2>
					</div>
					<div className='relative group inline-block'>
						<h2
							className='text-3xl font-bold mb-5 tracking-widest inline-block select-none'
						>
							Data Science Manager
						</h2>
					</div>

					<h1 className='text-2xl font-normal leading-10'>
							<span className='block'>
								TopCV Vietnam JSC.
							</span>
					</h1>
				</div>
			</div>

			<Experience />
			<Education />
			<Award />
			<Publication />
		</>
	);
};

export default about;
