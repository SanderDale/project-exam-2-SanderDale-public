import Head from "next/head";
import axios from "axios";
import { BASE_URL } from "./../../constants/api";
import Breadcrumbs from "../../components/hotelDetails/Breadcrumbs";
import HotelDetails from "../../components/hotelDetails/HotelDetails";

export const getStaticPaths = async () => {
	const response = await axios.get(BASE_URL + "/hotels");
	const hotels = response.data;

	const paths = hotels.map((hotel) => {
		return {
			params: { id: hotel.id.toString() },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const response = await fetch(BASE_URL + "/hotels/" + id);
	const data = await response.json();

	return {
		props: { hotel: data },
	};
};

export default function Details({ hotel }) {
	return (
		<div>
			<Head>
				<title>Holidaze | Details</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Breadcrumbs hotelName={hotel.name} />
			<HotelDetails
				hotelName={hotel.name}
				hotelImage={hotel.image.url}
				hotelDescription={hotel.description}
				hotelRating={hotel.rating}
				hotelPrice={hotel.price}
			/>
			<div className="w-10/12 sm:w-8/12 lg:w-9/12 xl:w-7/12 h-1 border-b-2 mx-auto px-5"></div>
			<div>google maps</div>
		</div>
	);
}
