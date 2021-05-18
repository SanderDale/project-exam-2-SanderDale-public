import { useState } from "react";
import Moment from "react-moment";

function AdminEnquiries({ enquiries }) {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<>
			<div className="w-full font-heading border-b-2 border-black mb-5">
				<h2 className="text-2xl md:text-3xl xl:text-4xl xl:pb-2">Enquiries</h2>
			</div>
			<div>
				<div className="flex md:table w-full">
					<div className="hidden md:table-header-group font-heading">
						<div className="table-row text-left">
							<div className="table-cell pl-2 w-1/4 font-normal">Hotel</div>
							<div className="table-cell border-l border-gray-300 pl-2 w-1/4 font-normal">From</div>
							<div className="table-cell border-l border-gray-300 pl-2 w-1/4 font-normal">To</div>
							<div className="table-cell border-l border-gray-300 pl-2 w-1/2 font-normal">Name</div>
							<div className="table-cell border-l border-gray-300 pl-2 w-1/2 font-normal">Email</div>
						</div>
					</div>
					<div className="text-white flex flex-col w-full md:table-row-group font-paragraph">
						{enquiries.map((enquiry, i) => {
							return (
								<div
									key={enquiry.id}
									onClick={() => toggle(i)}
									className="flex flex-wrap justify-between items-center md:table-row bg-blue-600 odd:bg-blue-500 lg:hover:bg-blue-400">
									<div className="md:table-cell px-2 py-4 w-1/3 sm:w-1/2 md:w-1/4">{enquiry.hotel}</div>
									<Moment
										format="DD/MM/YYYY"
										className="md:table-cell text-center sm:text-left px-2 py-4 w-1/3 sm:w-1/4">
										{enquiry.from}
									</Moment>
									<Moment format="DD/MM/YYYY" className="md:table-cell px-2 py-4 w-1/3 sm:w-1/4">
										{enquiry.to}
									</Moment>
									<div className="px-2 py-4 w-20 md:w-1/2 hidden md:table-cell">{enquiry.name}</div>
									<div className="px-2 py-4 md:w-1/2 hidden md:table-cell">{enquiry.email}</div>
									<div className={selected == i ? "w-full block md:hidden" : "w-full hidden md:hidden"}>
										<div className="w-11/12 h-0.5 bg-white mx-auto"></div>
										<div className="p-2 w-1/2">{enquiry.name}</div>
										<div className="p-2 w-1/4">{enquiry.email}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminEnquiries;
