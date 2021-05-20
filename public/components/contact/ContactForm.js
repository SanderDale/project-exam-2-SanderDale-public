import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "./../../constants/api";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name").min(5, "Please enter your full name"),
	email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
	message: yup.string().required("Please enter your message").min(10, "Your message must be more then 10 characters"),
});

function ContactForm() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);
		console.log(data);

		try {
			const response = await axios.post(BASE_URL + "/messages/", data);
			console.log("response", response.data);
			setSubmitSuccess("Thank you for your message!");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	console.log(errors);

	return (
		<>
			{submitSuccess && (
				<span className="text-center py-20 text-2xl border-gray-500 border-b-2 w-full mb-5 xl:border-0">
					{submitSuccess}
				</span>
			)}
			{submitSuccess ? (
				""
			) : (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-center font-paragraph my-5 xl:my-0 pb-5 border-gray-500 border-b-2 w-full md:items-end xl:border-0">
					{serverError && <span>{serverError}</span>}
					<input
						className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
						type="text"
						name="name"
						placeholder="Full name *"
						ref={register}
					/>
					{errors.name && <span>{errors.name.message}</span>}
					<input
						className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
						type="email"
						name="email"
						placeholder="Email *"
						ref={register}
					/>
					{errors.email && <span>{errors.email.message}</span>}
					<textarea
						className="border-2 focus:border-black focus:ring-black w-full h-24 md:h-44 md:text-xl mb-5"
						type="text"
						name="message"
						placeholder="Message... *"
						ref={register}
					/>
					{errors.message && <span>{errors.message.message}</span>}
					<button className="w-full md:w-48 h-12 md:h-14 font-heading  text-white hover:text-blue-500 text-xl md:text-2xl bg-blue-500 hover:bg-transparent border-blue-500 border-2 tracking-widest transition ease-out duration-300">
						{submitting ? "Sending..." : "SEND"}
					</button>
				</form>
			)}
		</>
	);
}

export default ContactForm;
