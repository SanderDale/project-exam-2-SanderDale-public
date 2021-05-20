import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";

function Footer() {
	const router = useRouter();

	const [auth, setAuth] = useContext(AuthContext);

	return (
		<footer className="bg-gray-800 flex flex-col md:flex-row justify-center items-center p-7 font-heading text-2xl">
			<div className="md:w-full flex justify-center items-center pb-5 md:pb-0">
				<ul className="flex bg-gray-800 flex-col lg:flex-row text-center">
					<li className="pb-5 lg:pb-0 lg:mr-7 xl:mr-20">
						<div
							className={
								router.pathname == "/"
									? "text-white border-b-2 border-white"
									: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
							}>
							<Link href="/">Home</Link>
						</div>
					</li>
					<li className="pb-5 lg:pb-0 lg:mr-7 xl:mr-20">
						<div
							className={
								router.pathname == "/hotels"
									? "text-white border-b-2 border-white"
									: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
							}>
							<Link href="/hotels">Hotels</Link>
						</div>
					</li>
					<li className="lg:pb-0">
						<div
							className={
								router.pathname == "/contact"
									? "text-white border-b-2 border-white"
									: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
							}>
							<Link href="/contact">Contact</Link>
						</div>
					</li>
				</ul>
			</div>
			<div className="h-1 md:h-32 w-3/4 md:w-2 bg-gray-500 mb-5 md:mb-0"></div>
			<div className="flex w-3/4 md:w-full justify-evenly text-white mb-5">
				<a href="#">
					<FontAwesomeIcon className="w-8 h-8" icon={faTwitterSquare} />
				</a>
				<a href="#">
					<FontAwesomeIcon className="w-8 h-8" icon={faFacebookSquare} />
				</a>
				<a href="#">
					<FontAwesomeIcon className="w-8 h-8" icon={faInstagram} />
				</a>
			</div>
			<div className="h-1 md:h-32 w-3/4 md:w-2 bg-gray-500 mb-5 md:mb-0"></div>
			<div className="md:w-full flex justify-center items-center">
				{auth ? (
					<div
						className={
							router.pathname == "/adminPage"
								? "text-white border-b-2 border-white"
								: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
						}>
						<Link href="/adminPage">
							<a className="flex justify-center items-center">
								<FontAwesomeIcon className="w-6 h-6 pr-2" icon={faUser} />
								Admin Page
							</a>
						</Link>
					</div>
				) : (
					<div
						className={
							router.pathname == "/adminLogin"
								? "text-white border-b-2 border-white"
								: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
						}>
						<Link href="/adminLogin">
							<a className="flex justify-center items-center">
								<FontAwesomeIcon className="w-6 h-6 pr-2" icon={faUser} />
								Admin
							</a>
						</Link>
					</div>
				)}
			</div>
		</footer>
	);
}

export default Footer;
