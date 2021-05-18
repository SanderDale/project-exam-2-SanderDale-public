import Head from "next/head";
import axios from "axios";
import { BASE_URL } from "./../constants/api";
import Searchbar from "../components/search/Searchbar";
import HotelsList from "../components/hotels/HotelsList";

export default function Hotels({ hotels }) {
	const hotelNames = hotels.map((hotel) => hotel.name);

	return (
		<div>
			<Head>
				<title>Holidaze | Hotels</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-5xl sm:text-7xl text-center my-8 sm:my-10 lg:my-16 xl:my-20 font-semibold">Hotels</h1>
			<main className="flex flex-col xl:grid xl:grid-cols-4 items-center xl:items-start justify-center w-full">
				<div className="w-full px-5 sm:px-20 lg:px-0 lg:pl-10 pt-5 flex justify-center items-center">
					<div className="w-full flex justify-center items-center">
						<Searchbar hotelNames={hotelNames} />
					</div>
				</div>
				<div className="flex flex-col items-center xl:col-span-3 w-11/12 mb-10">
					{hotels.map((hotel) => {
						return (
							<HotelsList
								key={hotel.id}
								hotelName={hotel.name}
								hotelImage={hotel.image.url}
								hotelDescription={hotel.description}
								hotelRating={hotel.rating}
								hotelPrice={hotel.price}
								hotelId={hotel.id}
							/>
						);
					})}
				</div>
			</main>
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
