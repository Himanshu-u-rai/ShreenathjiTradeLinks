import React from "react";

const PlantCard = ({ image }) => {
    return (
        <div className="dark:text-white group flex flex-col md:flex-row items-start">
            {/* Image Container with bg-gray-100 */}
            <div className="w-full md:w-1/2 h-64 overflow-hidden flex-shrink-0 rounded-2xl bg-gray-100 dark:bg-slate-800">
                <img
                    src={image}
                    alt="Plant"
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Text Container */}
            <div className="flex-1 p-4 bg-gray-100 dark:bg-slate-950 md:ml-6 rounded-2xl">
                <h2 className="line-clamp-1 text-xl sm:text-2xl font-semibold">
                    Fully functional plant to handle the client's requirement
                </h2>
                <p className="line-clamp-4 text-gray-500 text-sm sm:text-base md:text-lg">
                    This plant is engineered to be fully functional and tailored to meet the specific needs of clients. It is designed to efficiently handle various operational requirements, ensuring high performance and reliability. The plant's versatile capabilities make it an ideal solution for diverse applications, providing clients with a robust and adaptable system that delivers consistent and effective results.
                </p>
            </div>
        </div>
    );
};

export default PlantCard;
