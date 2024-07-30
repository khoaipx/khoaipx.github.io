import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({
	name,
	image,
	siteUrl,
	keywords,
	description,
	googleVerification,
}) => {
	const routerPath =
		useRouter().pathname.replaceAll('/', '').charAt(0).toUpperCase() +
		useRouter().pathname.replaceAll('/', '').slice(1);
	const pageTitle =
		routerPath === ''
			? 'Pham Xuan Khoai | Data Scientist'
			: routerPath + ' | Pham Xuan Khoai';
	return (
		<Head>
			{/* Settings */}
			{/* <meta charset='utf-8' /> */}
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='referrer' content='origin' />
			<link href='/manifest.json' rel='manifest' />
			<meta name='page-type' content='Portfolio' />
			<meta name='audience' content='Everyone' />
			<meta name='color-scheme' content='only dark' />
			<meta name='theme-color' content='#1A1F2A' />

			{/* Search Engine */}
			<meta name='robots' content='index, follow' />
			<meta name='googlebot' content='index, follow' />
			<meta name='google-site-verification' content={googleVerification} />

			{/* Page Information */}
			<title>{pageTitle}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<meta name='copyright' content={name} />
			<meta name='author' content={name} />
			<meta name='publisher' content={name} />

			{/* Schema.org Microdata */}
			<meta itemProp='name' content={pageTitle} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content={image} />

			{/* Facebook / OpenGraph  */}
			<meta property='og:title' content={pageTitle} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={siteUrl} />
			<meta property='og:site_name' content={name} />
			<meta property='og:image' content={image} />
			<meta property='og:description' content={description} />
		</Head>
	);
};

Meta.defaultProps = {
	keywords:
		'khoai, khhoaipx, pham xuan khoai, khoaipx website, khoai website, khoai px, khoaipx portfolio, khoai portfolio',
	description:
		'Pham Xuan Khoai is a data scientist based in Hanoi, Vietnam',
	image: 'https://khoaipx.github.io/assets/images/icons/icon-565x565.png',
	siteUrl: 'https://khoaipx.github.io/',
	name: 'Pham Xuan Khoai',
	googleVerification: '-VWwIykdJbQGhK3d8nzPANo47wDrZG42v9',
};
export default Meta;
