import React, { useState } from "react";
import { FaCubes } from "react-icons/fa";

const skillsData = [
  {
    name: "Mill Scale",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "We are A Wholesaler and Distributor Offering An Enormous Consignment Of Mill Scale",
    aosDelay: "0",
  },
  {
    name: "Iron Ore",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Pioneers in the industry, we offer Grey Iron Ore Lumps, IRON ORE FINE 55+, IRON ORE FINE 58 and Iron Ore Lumps from India.",
    aosDelay: "300",
  },
  {
    name: "Iron Ore Fines",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Offering you a complete choice of products which include Red Iron Ore Fines, IRON FINE53 Product and Iron Ore 52 To 63 Fines And Size Lumps.",
    aosDelay: "500",
  },
  {
    name: "Carbon Block",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Wholesale Trader of a wide range of products which include Anode Carbon Block.",
    aosDelay: "700",
  },
  {
    name: "Coal Fines",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Pioneers in the industry, we offer Natural Charcoal Fine from India.",
    aosDelay: "700",
  },
  {
    name: "Mill Scale Powder",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our product range includes a wide range of Iron Mill Scale.",
    aosDelay: "700",
  },
  {
    name: "Carbon Filter",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Offering you a complete choice of products which include Anthracite Carbon 25/kg.",
    aosDelay: "700",
  },
  {
    name: "Steam Irons",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "Offering you a complete choice of products which include Iron Ore Mining.",
    aosDelay: "700",
  },
  {
    name: "Iron Mill Scale",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "We offer Mill Scale, that of Industry grade.",
    aosDelay: "700",
  },
  {
    name: "Dolomite Lumps",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "700",
  },
  {
    name: "Melamine",
    icon: <FaCubes className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "700",
  },
];

const Services = () => {
  const initialVisibleCount = 4; // Initially show 4 cards
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleShowMore = () => {
    setVisibleCount(skillsData.length); // Show all cards
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount); // Show initial number of cards
  };

  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Products
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are a leading Wholesale Trader of Mill Scale Ferrous Oxide, Natural Mill Scale, HSS Mill Scale Dust, MILL SCALE 69+ and Stainless Steel Mill Scale Powder from Gandhidham, India.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.slice(0, visibleCount).map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div

            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            {visibleCount < skillsData.length ? (
              <button
                onClick={handleShowMore}
                className="primary-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="primary-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
