import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
	name: yup.string().required("Please enter hotel name").min(5, "Please enter the full hotel name"),
	price: yup.number().required("Please enter hotel price").typeError("Price must be a number").positive().integer(),
	rating: yup
		.number()
		.required("Please enter hotel rating")
		.typeError("Rating must be a number")
		.max(10, "Rating must be 10 or lower")
		.positive(),
	image: yup.string().required("Please upload a hotel image"),
	description: yup
		.string()
		.required("Please enter your description")
		.min(10, "Your description must be more then 10 characters"),
});

function AddHotelForm() {
	const [auth, setAuth] = useContext(AuthContext);
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(null);
	const [file, setFile] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();

	const handleChange = (event) => {
		console.log(event.target.files);
		setFile(event.target.files[0]);
	};

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		const formData = new FormData();
		formData.append(
			"data",
			JSON.stringify({ name: data.name, price: data.price, rating: data.rating, description: data.description })
		);
		formData.append("files.image", file);

		try {
			const response = await http.post("/hotels/", formData);
			console.log("data", response);
			setSubmitSuccess("Hotel Added!");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="w-full flex flex-col justify-center items-center mb-24">
			{submitSuccess && (
				<span className="text-center lg:h-80 py-20 lg:my-32 text-2xl w-full mb-5">{submitSuccess}</span>
			)}
			{submitSuccess ? (
				""
			) : (
				<form
					onSubmit={handleSubmit(onSubmit)}
					disabled={submitting}
					className="flex flex-col w-72 md:w-9/12 lg:w-1/2 lg:my-10">
					{serverError && (
						<span className="text-center p-1 mb-5 w-full bg-red-400 border-red-600 border-2">{serverError}</span>
					)}
					<fieldset className="flex flex-col w-full" disabled={submitting}>
						<input
							className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
							type="text"
							name="name"
							placeholder="Hotel name *"
							ref={register}
						/>
						{errors.name && (
							<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
								{errors.name.message}
							</span>
						)}
						<input
							className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
							type="text"
							name="price"
							placeholder="Price *"
							ref={register}
						/>
						{errors.price && (
							<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
								{errors.price.message}
							</span>
						)}
						<input
							className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
							type="text"
							name="rating"
							placeholder="Rating *"
							ref={register}
						/>
						{errors.rating && (
							<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
								{errors.rating.message}
							</span>
						)}
						<div className="flex flex-col">
							<label className="font-heading md:text-xl">Image *</label>
							<input
								className="w-full md:text-xl md:h-14 mt-2 mb-5"
								onChange={handleChange}
								type="file"
								accept="image/*"
								name="image"
								ref={register}
							/>
							{errors.image && (
								<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
									{errors.image.message}
								</span>
							)}
						</div>
						<textarea
							className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mb-5"
							type="text"
							name="description"
							placeholder="Description *"
							ref={register}
						/>
						{errors.description && (
							<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
								{errors.description.message}
							</span>
						)}
						<button className="w-full md:w-56 h-12 md:h-14 font-heading  text-white hover:text-blue-500 text-xl md:text-2xl bg-blue-500 hover:bg-transparent border-blue-500 border-2 tracking-widest transition ease-out duration-300 mt-5">
							{submitting ? "Adding hotel..." : "Add Hotel"}
						</button>
					</fieldset>
				</form>
			)}
		</div>
	);
}

export default AddHotelForm;
