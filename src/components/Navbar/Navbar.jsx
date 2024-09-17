import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import Logo from "../../assets/website/Vector.png";
import DarkMode from "./DarkMode";

// MenuLinks array
export const MenuLinks = [
  {
    id: 1,
    name: "Our Products",
    link: "/#about",
  },
  {
    id: 2,
    name: "Reviews",
    link: "/#Review",
  },
  {
    id: 3,
    name: "Images",
    link: "/#Images",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleContactCard = () => {
    setShowContactCard(!showContactCard);
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <a target="_blank" href="" className="flex items-center gap-2 sm:gap-3">
            <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
            <span className="text-xl sm:text-2xl font-semibold">
              Shreenathji Trade Links
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <ul className="flex items-center gap-6">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <a
                    href={link}
                    className="text-base sm:text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                className="primary-btn hidden md:block"
                onClick={toggleContactCard}
              >
                Get in Touch
              </button>
            </ul>
            <DarkMode />
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      <div
        className={`${showMenu ? "left-0" : "-left-[100%]"
          } fixed bottom-0 top-0 z-20 flex flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-6 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-start gap-4 px-4">
          <div className="flex items-center gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1 className="text-xl font-semibold">Welcome</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We're glad to have you here!
              </p>
            </div>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4 text-lg">
              {MenuLinks.map((data) => (
                <li key={data.name}>
                  <a
                    href={data.link}
                    className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
          <h1 className="text-center text-sm">
            Tradin-Mining-Co
          </h1>
        </div>
      </div>
      {/* Contact Card */}
      {showContactCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p>Email: shreenathjigdm@gmail.com </p>
            <p>Phone: +91 8511114193</p>
            <p>
              Address: Plot No-231, Yogeshwar Nagar, Kidana, Kachchh, Gandhidham, Kutch-370205, Gujarat, India
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={toggleContactCard}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
