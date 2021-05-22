import Head from "next/head";
import axios from "axios";
import { BASE_URL } from "./../constants/api";
import Searchbar from "./../components/search/Searchbar";

export default function Home({ hotels }) {
	const hotelNames = hotels.map((hotel) => hotel.name);

	return (
		<div>
			<Head>
				<title>Holidaze | Home</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>

			<div className="h-bannerHeight lg:bg-home-banner-big md:bg-home-banner-medium bg-home-banner-small bg-center bg-cover flex justify-center items-center text-white flex-col">
				<div className="w-3/4 xl:w-2/4 text-center h-full flex items-end pb-20">
					<h1 className="font-headingAlt text-2xl md:text-5xl lg:text-7xl leading-snug">
						Find the best hotel for your next stay in Bergen
					</h1>
				</div>
				<div className="h-full px-5 flex items-start justify-center w-full xl:w-1/3">
					<Searchbar hotelNames={hotelNames} />
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	let hotels = [];

	try {
		const response = await axios.get(BASE_URL + "/hotels");
		hotels = response.data;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			hotels: hotels,
		},
	};
}
