import Image from "next/image";
import { useState } from "react";
import EnquiryModal from "../enquiries/EnquiryModal";

function HotelDetails({ hotelName, hotelImage, hotelDescription, hotelRating, hotelPrice }) {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<>
			<EnquiryModal showModal={showModal} setShowModal={setShowModal} hotelName={hotelName} />
			<div className="lg:hidden">
				<Image
					src={hotelImage}
					width={320}
					height={150}
					layout="responsive"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="flex justify-center items-center flex-col lg:grid grid-rows-5 grid-cols-10 mx-auto my-12 md:my-16 lg:mb-52  w-9/12 sm:w-8/12 lg:w-9/12 xl:w-7/12 lg:h-96 lg:auto-cols-auto">
				<div className="flex justify-center items-center lg:items-start flex-col lg:col-span-2 lg:col-start-1 lg:col-end-6 lg:row-span-3 mb-8 md:mb-10">
					<h1 className="text-3xl sm:text-5xl mb-8 sm:mb-10 lg:mb-8 font-heading font-semibold text-center lg:text-left">
						{hotelName}
					</h1>
					<p className="sm:text-2xl font-paragraph">{hotelDescription}</p>
				</div>
				<div className="flex justify-between lg:justify-start w-full sm:w-8/12 lg:w-full lg:row-span-1 lg:col-start-1 lg:col-end-6 lg:items-center lg:h-full mb-8 md:mb-10 lg:mb-5">
					<p className="h-1/3 text-sm sm:text-2xl lg:w-full flex justify-center lg:justify-start items-center lg:items-center lg:order-2 font-heading">
						Rating
						<span className="bg-blue-500 text-white py-1 px-2 ml-2 rounded font-paragraph text-xs sm:text-lg">
							{hotelRating}
						</span>
					</p>
					<p className="h-1/3 text-sm sm:text-2xl lg:w-full font-paragraph flex justify-end lg:justify-start items-end lg:items-center sm:mb-5 lg:mb-0 lg:order-1">
						NOK {hotelPrice}
					</p>
				</div>
				<div className="w-full text-white sm:flex sm:justify-center sm:items-center lg:col-start-1 lg:col-end-3 lg:justify-start">
					<button
						className="uppercase font-heading h-9 sm:h-10 w-full sm:w-44 flex items-center justify-center bg-blue-500 sm:text-xl hover:text-blue-500 hover:bg-transparent border-blue-500 border-2 transition ease-out duration-300"
						onClick={openModal}>
						Book Now
					</button>
				</div>
				<div className="hidden lg:block mx-auto w-80 h-80 lg:row-start-1 lg:row-span-5  col-start-7 col-end-11">
					<Image
						src={hotelImage}
						width={350}
						height={350}
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			</div>
		</>
	);
}

export default HotelDetails;
