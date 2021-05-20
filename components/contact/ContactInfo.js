import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function ContactInfo() {
	return (
		<div className="flex justify-center items-center flex-col font-paragraph bg-blue-500 w-full text-white text-xl py-7 md:grid md:grid-rows-3 md:grid-cols-4 md:h-56 md:px-5">
			<div className="md:col-span-4">
				<h4 className="font-heading font-bold mb-8 text-2xl uppercase">Holidaze Bergen</h4>
			</div>
			<div className="mb-8 md:mb-0 md:col-start-1 md:col-end-2 md:row-span-2 md:flex md:justify-start md:items-center">
				<p>
					123 Bergenvei <br />
					5006 Bergen <br />
					Norway
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 md:gap-5 md:row-span-2 md:col-span-2 md:col-start-2 md:col-end-4">
				<p className="flex">
					<FontAwesomeIcon className="w-6 h-6 mr-2" icon={faPhoneAlt} />
					+47 123 45 678
				</p>
				<p className="flex">
					<FontAwesomeIcon className="w-6 h-6 mr-2" icon={faEnvelope} />
					holidaze@post.com
				</p>
			</div>
			<div className="hidden md:col-start-4 md:col-end-5 md:row-span-2 md:flex md:justify-center md:items-start">
				<FontAwesomeIcon className="w-24 h-24" icon={faMapMarkerAlt} />
			</div>
		</div>
	);
}

export default ContactInfo;
