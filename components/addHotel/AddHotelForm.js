import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "./../../constants/api";

const schema = yup.object().shape({
	name: yup.string().required("Please enter hotel name").min(5, "Please enter the full hotel name"),
	price: yup.string().required("Please enter hotel price"),
	rating: yup.string().required("Please enter hotel rating"),
	image: yup.string().required("Please upload a hotel image"),
	description: yup
		.string()
		.required("Please enter your description")
		.min(10, "Your description must be more then 10 characters"),
});

function AddHotelForm() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(null);
	const [file, setFile] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function handleChange(event) {
		console.log(event.target.files);

		setFile(event.target.files[0]);
	}

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);
		console.log(data);

		try {
			const response = await axios.post(BASE_URL + "/hotels/", data);
			console.log("response", response.data);
			setSubmitSuccess("Hotel Added!");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
				{serverError && <span>{serverError}</span>}
				<input type="text" name="name" placeholder="Hotel name" ref={register} />
				{errors.name && <span>{errors.name.message}</span>}
				<input type="text" name="price" placeholder="Price" ref={register} />
				{errors.price && <span>{errors.price.message}</span>}
				<input type="text" name="rating" placeholder="Rating" ref={register} />
				{errors.rating && <span>{errors.rating.message}</span>}
				<input type="file" onChange={handleChange} name="image" placeholder="Image" ref={register} />
				{errors.image && <span>{errors.image.message}</span>}
				<textarea type="text" name="description" placeholder="Description" ref={register} />
				{errors.description && <span>{errors.description.message}</span>}
				<button>{submitting ? "Adding hotel..." : "Add Hotel"}</button>
			</form>
		</div>
	);
}

export default AddHotelForm;
