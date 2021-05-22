import Image from "next/image";
import Link from "next/link";

function HotelsList({ hotelName, hotelImage, hotelDescription, hotelRating, hotelPrice, hotelId }) {
	return (
		<div key={hotelId} className="border-b-2 m-5 w-10/12 md:w-3/4 grid grid-cols-3 sm:grid-cols-4 pb-4 font-heading">
			<div className="row-span-2">
				<div className="lg:hidden">
					<Image
						src={hotelImage}
						width={100}
						height={150}
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className="hidden lg:block">
					<Image
						src={hotelImage}
						width={250}
						height={250}
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-2 sm:row-span-2 ml-2 sm:ml-5">
				<h1 className="text-lg sm:text-4xl font-semibold">{hotelName}</h1>
				<p className="hidden sm:block pt-5 mb-4 pr-2">{hotelDescription}</p>
			</div>
			<div className="col-span-2 sm:col-span-1 sm:row-span-2 ml-2 flex flex-col">
				<p className="h-1/3 text-sm sm:text-2xl flex justify-end items-center">
					Rating
					<span className="bg-blue-500 text-white px-2 py-1 ml-2 rounded font-paragraph text-xs sm:text-lg">
						{hotelRating}
					</span>
				</p>
				<p className="h-1/3 text-sm sm:text-lg font-paragraph flex justify-end items-end sm:mb-5 lg:mb-0 my-1">
					NOK {hotelPrice}
				</p>
				<div className="flex items-center sm:items-start lg:items-center justify-center sm:justify-end text-white text-sm sm:text-lg h-1/3">
					<Link href={"/detail/" + hotelId}>
						<a className="h-7 sm:h-9 w-full sm:w-44 flex items-center justify-center bg-blue-500 hover:text-blue-500 hover:bg-transparent border-blue-500 border-2 transition ease-out duration-300">
							Details
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HotelsList;
