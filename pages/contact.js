import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Image from "next/image";

export default function Contact() {
	return (
		<div className="flex justify-center items-center flex-col pb-10">
			<Head>
				<title>Holidaze | Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex justify-center items-center md:items-start flex-col md:w-4/5 xl:w-1/2">
				<h1 className="uppercase my-5 md:mt-16 text-3xl md:text-6xl font-heading font-semibold tracking-wide">
					Contact Us
				</h1>
				<p className="w-4/5 font-paragraph mb-5 xl:mb-8 md:text-xl">
					Feel free to contact us with any questions you might have about our hotels or your visit to Bergen!
				</p>
			</div>
			<div className="flex justify-center xl:items-start items-center flex-col xl:grid xl:grid-cols-2 xl:grid-rows-3 w-4/5 xl:w-1/2 xl:gap-5">
				<div className="flex justify-center items-center flex-col w-full md:order-2 xl:row-span-2">
					<ContactForm />
				</div>
				<div className="flex justify-center items-center flex-col mb-5 xl:mb-0 pb-5 xl:pb-0 border-gray-500 border-b-2 xl:border-0 w-full md:order-1 xl:col-start-1 xl:col-end-3 xl:row-span-1">
					<ContactInfo />
				</div>
				<div className="flex justify-center items-center flex-col mb-5 w-full md:order-3 xl:row-span-2">
					<Image src="/images/google-maps-placeholder.png" width={1000} height={1000} />
				</div>
			</div>
		</div>
	);
}
