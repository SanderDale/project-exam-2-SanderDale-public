import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";

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
		const formData = new FormData();
		formData.append(
			"data",
			JSON.stringify({ name: data.name, price: data.price, rating: data.rating, description: data.description })
		);
		formData.append("files.image", file);

		try {
			const response = await http.post("/hotels/", formData);
			console.log("data", response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
				{serverError && <span>{serverError}</span>}
				<input className="mb-5" type="text" name="name" placeholder="Hotel name" ref={register} />
				{errors.name && <span>{errors.name.message}</span>}
				<input className="mb-5" type="text" name="price" placeholder="Price" ref={register} />
				{errors.price && <span>{errors.price.message}</span>}
				<input className="mb-5" type="text" name="rating" placeholder="Rating" ref={register} />
				{errors.rating && <span>{errors.rating.message}</span>}
				<div className="flex flex-col">
					<label>Image</label>
					<input className="mb-5" onChange={handleChange} type="file" name="image" placeholder="Image" ref={register} />
					{errors.image && <span>{errors.image.message}</span>}
				</div>
				<textarea className="mb-5" type="text" name="description" placeholder="Description" ref={register} />
				{errors.description && <span>{errors.description.message}</span>}
				<button>{submitting ? "Adding hotel..." : "Add Hotel"}</button>
			</form>
		</div>
	);
}

export default AddHotelForm;
