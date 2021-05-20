import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Navigation() {
	const router = useRouter();

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<nav className="bg-gray-800 text-white shadow-lg relative">
			<div className="flex justify-between items-center h-20 md:h-28 px-6 sm:px-16">
				<div className="text-3xl md:text-6xl font-headingAlt">
					<Link href="/">Holidaze</Link>
				</div>
				<ul className="xl:flex mr-8 2xl:mr-32 hidden h-full justify-center items-center">
					<li className="pr-20 text-2xl font-heading">
						<div
							className={
								router.pathname == "/"
									? "text-white border-b-2 border-white"
									: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
							}>
							<Link href="/">Home</Link>
						</div>
					</li>
					<li className="pr-20 text-2xl font-heading">
						<div
							className={
								router.pathname == "/hotels"
									? "text-white border-b-2 border-white"
									: "text-gray-300 transition ease-out duration-500 border-white border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-white"
							}>
							<Link href="/hotels">Hotels</Link>
						</div>
					</li>
					<li className="pr-20 text-2xl font-heading">
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
				<button className="mobile-menu-open xl:hidden" onClick={handleClick}>
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
			<div className={`${open ? "" : "hidden"}`}>
				<button
					className="mobile-menu-close xl:hidden flex absolute top-0 right-0 justify-center items-center z-20 mr-7 mt-7"
					onClick={handleClick}>
					<svg
						className="w-10 h-10 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<ul className="xl:hidden flex absolute top-0 right-0 h-screen lg:w-1/4 md:w-1/2 w-full bg-gray-800 flex-col justify-center items-center z-10">
					<li className="pb-10 text-2xl font-heading">
						<div
							className={
								router.pathname == "/" ? "text-white" : "text-gray-300 transition ease-out duration-500 hover:text-white"
							}
							onClick={handleClick}>
							<Link href="/">Home</Link>
						</div>
					</li>
					<li className="pb-10 text-2xl font-heading">
						<div
							className={
								router.pathname == "/hotels"
									? "text-white"
									: "text-gray-300 transition ease-out duration-500 hover:text-white"
							}
							onClick={handleClick}>
							<Link href="/hotels">Hotels</Link>
						</div>
					</li>
					<li className="pb-10 text-2xl font-heading">
						<div
							className={
								router.pathname == "/contact"
									? "text-white"
									: "text-gray-300 transition ease-out duration-500 hover:text-white"
							}
							onClick={handleClick}>
							<Link href="/contact">Contact</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
