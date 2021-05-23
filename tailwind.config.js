module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			heading: ["Raleway", "sans-serif"],
			paragraph: ["Roboto", "sans-serif"],
			headingAlt: ["Playfair Display", "serif"],
		},
		extend: {
			height: {
				bannerHeight: "90vh",
			},
			backgroundImage: (theme) => ({
				"home-banner-big": "url('/images/bergen-brygge-homepage-big.jpg')",
				"home-banner-medium": "url('/images/bergen-brygge-homepage-medium.jpg')",
				"home-banner-small": "url('/images/bergen-brygge-homepage-small.jpg')",
				"login-banner-small": "url('/images/login-banner-small.jpg')",
				"login-banner-large": "url('/images/login-banner-large.jpg')",
			}),
			colors: {
				backgroundMain: "#242526",
				greenColor: "#00C267",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["odd"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
