import Head from "next/head";
import LoginForm from "./../components/adminLogin/LoginForm";

export default function AdminLogin() {
	return (
		<div className="flex justify-center items-center flex-col md:flex-row md:py-32 md:px-5 md:mb-24 border-gray-500 border-b-2 md:border-0 md:max-w-5xl md:mx-auto">
			<Head>
				<title>Holidaze | Admin Login</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<div className="flex justify-center md:justify-start items-center flex-col w-full bg-login-banner-small md:bg-login-banner-large bg-cover bg-center text-white md:h-96 lg:min-h-96 md:rounded-l-2xl md:shadow-lg md:pt-16">
				<h1 className="font-heading text-4xl xl:text-5xl py-7">Admin Login</h1>
				<p className="px-10 font-paragraph hidden md:block xl:text-xl w-96">
					In the admin panel you can check orders and messages as well as add hotels to your page.
				</p>
			</div>
			<div className="flex justify-center items-start md:items-center py-16 pb-24 bg-gray-800 w-full text-white md:h-96 lg:min-h-96 md:rounded-r-2xl md:shadow-lg">
				<LoginForm />
			</div>
		</div>
	);
}
