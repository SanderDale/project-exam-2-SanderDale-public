import Link from "next/link";

export default function Breadcrumbs({ hotelName }) {
	return (
		<div className="hidden lg:flex lg:w-9/12 xl:w-7/12 mx-auto px-5 mt-16 text-blue-500">
			<Link href="/hotels">All Hotels /</Link>
			<p className="pl-2 text-gray-500">{hotelName}</p>
		</div>
	);
}
