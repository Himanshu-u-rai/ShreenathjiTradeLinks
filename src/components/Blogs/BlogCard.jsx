import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description }) => {
  return (
    <>
      <div className="dark:text-white group flex flex-col md:flex-row items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 flex-shrink-0 rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="No image"
            className="h-full w-full object-contain bg-white"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-2 p-4 bg-white dark:bg-slate-950 md:ml-6 w-full md:w-1/2 rounded-2xl">
          <h1 className="line-clamp-1 text-xl sm:text-2xl font-semibold">
            {title}
          </h1>
          <p className="line-clamp-4 text-gray-500 text-sm sm:text-base md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
