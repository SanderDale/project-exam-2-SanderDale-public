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
					height={110}
					layout="responsive"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="flex justify-center items-center flex-col lg:grid lg:gap-0 grid-rows-5 grid-cols-10 px-5 mx-auto mb-10 lg:mt-10 gap-5 sm:gap-10 w-10/12 sm:w-8/12 lg:w-9/12 xl:w-7/12 lg:h-96 lg:auto-cols-auto">
				<div className="flex justify-center items-center lg:items-start flex-col lg:col-span-2 lg:col-start-1 lg:col-end-6 lg:row-span-3">
					<h1 className="text-3xl sm:text-5xl my-8 sm:my-10 lg:my-8 font-semibold">{hotelName}</h1>
					<p>{hotelDescription}</p>
				</div>
				<div className="flex justify-between lg:justify-start w-full lg:row-span-1 lg:col-start-1 lg:col-end-6 lg:items-center lg:w-full lg:h-full">
					<p className="h-1/3 text-sm sm:text-2xl lg:w-full flex justify-center lg:justify-start items-center lg:items-center lg:order-2">
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
						className="uppercase h-9 sm:h-9 w-full sm:w-44 flex items-center justify-center rounded bg-blue-500"
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
