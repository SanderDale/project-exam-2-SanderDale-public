import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./../../context/AuthContext";
import { BASE_URL } from "./../../constants/api";

const schema = yup.object().shape({
	identifier: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const router = useRouter();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(BASE_URL + "/auth/local", data);
			setAuth(response.data);
			router.push("/adminPage");
		} catch (error) {
			console.log("error", error);
			setLoginError("Wrong username or password");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<form
			className="flex justify-center items-center flex-col w-4/5 font-heading"
			onSubmit={handleSubmit(onSubmit)}
			disabled={submitting}>
			{loginError && (
				<span className="text-center p-1 mb-5 w-full bg-red-400 border-red-600 border-2">{loginError}</span>
			)}
			<fieldset className="flex justify-center items-center flex-col gap-5 md:gap-2 w-full" disabled={submitting}>
				<div className="relative flex w-full flex-wrap items-stretch mb-3">
					<input
						className="bg-transparent placeholder-white border-white border-2 w-full mb-2 relative"
						type="text"
						name="identifier"
						placeholder="Username"
						ref={register}
					/>
					<span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
						<FontAwesomeIcon className="w-6 h-6 pr-2" icon={faUser} />
					</span>
					{errors.identifier && (
						<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
							{errors.identifier.message}
						</span>
					)}
				</div>
				<div className="relative flex w-full flex-wrap items-stretch mb-3">
					<input
						className="bg-transparent placeholder-white border-white border-2 w-full mb-2"
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="on"
						ref={register}
					/>
					<span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
						<FontAwesomeIcon className="w-6 h-6 pr-2" icon={faUnlock} />
					</span>
					{errors.password && (
						<span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
							{errors.password.message}
						</span>
					)}
				</div>
				<button className="bg-blue-500 placeholder-white border-blue-500 border-2 w-full py-2 text-xl" type="submit">
					{submitting ? "Logging in..." : "Login"}
				</button>
			</fieldset>
		</form>
	);
}

export default LoginForm;
