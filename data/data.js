import {
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

export const GITHUB_API_URL = 'https://api.github.com';

export const GITHUB_USERNAME = 'khoaipx';

export const Companies = [
	{
		id: 1,
		institution: 'TopCV Vietnam JSC.',
		url: 'https://www.topcv.vn/',
		logo: '/assets/images/companies/topcv.png',
		titles: [
			{
				degree: 'Data Science Manager',
				startDate: 'Jun. 2022',
				endDate: 'Present',
			},
			{
				degree: 'Product R&D Manager',
				startDate: 'Oct. 2020',
				endDate: 'Jun. 2022',
			},
			{
				degree: 'AI Engineer',
				startDate: 'Jan. 2020',
				endDate: 'Dec. 2021',
			}
		]
	},
	{
		id: 2,
		institution: 'Menteelogy - YBox',
		url: 'https://menteelogy.ybox.vn/profile/MentorXuanKhoai',
		logo: '/assets/images/companies/menteelogy.png',
		titles: [
			{
				degree: 'Mentor',
				startDate: 'Mar. 2023',
				endDate: 'Aug. 2024',
			}
		]
	},
	{
		id: 3,
		institution: 'Finsify Co.,Ltd',
		url: 'https://finsify.com/',
		logo: '/assets/images/companies/finsify.png',
		titles: [
			{
				degree: 'Data Scientist/ Leader of AI Team',
				startDate: 'Sep. 2017',
				endDate: 'Aug. 2018',
			}
		]
	},
	{
		id: 4,
		institution: 'VNG Corporation',
		url: 'https://www.vng.com.vn/',
		logo: '/assets/images/companies/vng.png',
		titles: [
			{
				degree: 'Research Scientist',
				startDate: 'Aug. 2016',
				endDate: 'Apr. 2017',
			}
		]
	},
	{
		id: 5,
		institution: 'Rich Anchor Technology',
		logo: '/assets/images/companies/ra.png',
		titles: [
			{
				degree: 'Machine Learning Engineer',
				startDate: 'Mar. 2016',
				endDate: 'Aug. 2016',
			}
		]
	},
];

export const Institutions = [
	{
		id: 1,
		institution: 'FPT University',
		url: 'https://daihoc.fpt.edu.vn/',
		logo: '/assets/images/institutions/fpt.png',
		titles: [
			{
				degree: 'Bachelor’s Degree, Computer Science',
				startDate: '2011',
				endDate: '2015',
			}
		]
	},

];

export const SocialMedia = [
	{
		id: 1,
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/khoaipx93/',
	},
	{
		id: 2,
		label: 'Contact Me',
		icon: <FaRegEnvelope />,
		url: 'mailto:phamxuankhoai@gmail.com',
	},
];

export const Awards = [
	{
		id: 1,
		award: 'Postgraduate Studentship - Doctor of Philosophy Program',
		contest: 'City University of Hong Kong',
		time: 2018,
	},
	{
		id: 2,
		award: 'Third Prize – Rank 10',
		contest: 'ACM-ICPC Asian Regional Contest (site Hanoi, Vietnam)',
		time: 2015,
	},
	{
		id: 3,
		award: 'Honorable mention – Rank 21',
		contest: 'ACM-ICPC Asian Regional Contest (site Phuket, Thailand)',
		time: 2015,
	},
	{
		id: 4,
		award: 'Honorable mention – Rank 14',
		contest: 'ACM-ICPC National Content, Second round (Ho Chi Minh, Vietnam)',
		time: 2014,
	},
	{
		id: 5,
		award: 'Second Prize',
		contest: 'Informatics Olympic Contest for Students, Division A (Ho Chi Minh, Vietnam)',
		time: 2014,
	},
	{
		id: 6,
		award: 'Full scholarship',
		contest: 'FPT University',
		time: 2011,
	},
	{
		id: 7,
		award: 'Third Prize',
		contest: 'National Contest for gifted students (Subject: Physics)',
		time: 2011,
	},
]

export const Papers = [
	{
		id: 1,
		title: 'Building a semantic role labelling system for Vietnamese',
		url: 'https://ieeexplore.ieee.org/document/7381877',
		authors: 'Thai-Hoang Pham, Xuan-Khoai Pham*, Phuong Le-Hong',
		conference: 'Proceedings of the 10th International Conference on Digital Information Management, Jeju Islands, South Korea',
		time: 2015,
	},
	{
		id: 2,
		title: 'On the Use of Machine Translation-Based Approaches for Vietnamese Diacritic Restoration',
		url: 'https://ieeexplore.ieee.org/document/8300596',
		authors: 'Thai-Hoang Pham, Xuan-Khoai Pham*, Phuong Le-Hong',
		conference: 'Proceedings of the 21th International Conference on Asian Language Processing, Singapore',
		time: 2017,
	},
	{
		id: 3,
		title: 'NNVLP: A Neural Network-Based Vietnamese Language Processing Toolkit',
		url: 'https://aclweb.org/anthology/papers/I/I17/I17-3010/',
		authors: 'Thai-Hoang Pham, Xuan-Khoai Pham*, Phuong Le-Hong',
		conference: 'Proceedings of the 8th International Joint Conference on Natural Language Processing, Tapei, Taiwan',
		time: 2017,
	},
	{
		id: 4,
		title: 'Building a Spoonerism Detection System for Vietnamese',
		url: 'https://www.aclweb.org/anthology/papers/Y/Y18/Y18-1063/',
		authors: 'Thai-Hoang Pham, Xuan-Khoai Pham*',
		conference: 'Proceedings of the 32nd Pacific Asia Conference on Language, Information and Computation, Hong Kong',
		time: 2018,
	},
]
