import Layout from "../components/layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}

export default MyApp;
