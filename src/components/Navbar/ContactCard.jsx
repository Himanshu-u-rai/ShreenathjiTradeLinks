const ContactCard = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <p>Email: shreenathjigdm@gmail.com </p>
                <p>Phone: +91 8511114193</p>
                <p>Address: Plot No-231, Yogeshwar Nagar, Kidana, Kachchh, Gandhidham, Kutch-370205, Gujarat, India</p>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
