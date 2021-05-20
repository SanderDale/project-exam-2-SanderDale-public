import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

function AdminMessages({ messages }) {
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
				<h2 className="text-2xl md:text-3xl xl:text-4xl xl:pb-2">Messages</h2>
			</div>
			<div>
				{messages.map((message, i) => {
					return (
						<div
							key={message.id}
							onClick={() => toggle(i)}
							className="bg-blue-600 odd:bg-blue-500 lg:hover:bg-blue-400 text-white font-paragraph lg:px-8 px-3 py-3 md:py-5 flex justify-center items-center flex-col cursor-pointer">
							<div className="flex justify-start items-center w-full">
								<div className="w-12 md:w-14 flex justify-center items-center md:mr-5">
									{selected == i ? (
										<FontAwesomeIcon className="w-6 h-6 mr-4" icon={faEnvelopeOpen} />
									) : (
										<FontAwesomeIcon className="w-6 h-6 mr-4" icon={faEnvelope} />
									)}
								</div>
								<div className="flex flex-col md:flex-row w-9/12">
									<p className="md:w-1/2 lg:w-1/4">{message.name}</p>
									<p className="md:w-1/2">{message.email}</p>
								</div>
							</div>
							<div className={selected == i ? "flex flex-col justify-center items-start w-full" : "hidden"}>
								<div className="w-full my-2 md:my-4 h-0.5 bg-white mx-auto"></div>
								<div className="flex">
									<p className="mr-3">Message:</p>
									<p className="lg:max-w-screen-md">{message.message}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default AdminMessages;
