import Head from "next/head";
import AddHotelForm from "../components/addHotel/AddHotelForm";

export default function NewHotel() {
	return (
		<div className="flex justify-center items-center flex-col pb-10">
			<Head>
				<title>Holidaze | Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col w-11/12 justify-center items-center">
				<h1 className="font-heading text-4xl my-10 font-semibold tracking-wide">Add New Hotel</h1>
				<AddHotelForm />
			</div>
		</div>
	);
}
