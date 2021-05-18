import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import EnquiryForm from "./EnquiryForm";

function EnquiryModal({ showModal, setShowModal, hotelName }) {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const background = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const modal = {
		hidden: { y: "-100vh", opacity: 0 },
		visible: {
			y: "0",
			opacity: 1,
			transition: { delay: 0.2, type: "tween" },
		},
	};

	return (
		<AnimatePresence>
			{showModal ? (
				<motion.div
					className="bg-black bg-opacity-30 w-full h-full flex fixed top-0 right-0 justify-center items-start z-50"
					ref={modalRef}
					onClick={closeModal}
					variants={background}
					initial="hidden"
					animate="visible"
					exit="hidden">
					<motion.div
						className="bg-white text-black flex flex-col justify-center items-center my-5 py-5 w-72 md:w-9/12 lg:w-1/2 relative"
						variants={modal}>
						<h1 className="text-5xl font-heading my-5">Booking</h1>
						<EnquiryForm hotelName={hotelName} />
						<FontAwesomeIcon
							className="w-6 h-6 md:w-8 md:h-8 absolute m-2 right-0 top-0 cursor-pointer"
							icon={faTimes}
							onClick={() => setShowModal((prev) => !prev)}
						/>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}

export default EnquiryModal;
