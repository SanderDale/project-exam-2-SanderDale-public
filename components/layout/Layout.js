import Footer from "./Footer";
import Navigation from "./Navbar";

function Layout({ children }) {
	return (
		<div>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
