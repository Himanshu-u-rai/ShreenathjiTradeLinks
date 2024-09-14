import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Carbonblock from "../../assets/blog/Carbonblock.webp";
import Carbonfilter from "../../assets/blog/Carbonfilter.webp";
import CoalFines from "../../assets/blog/CoalFines.webp";
import DolomiteLumps from "../../assets/blog/DolomiteLumps.webp";
import IronMillScale from "../../assets/blog/IronMillScale.webp";
import IronOreFines from "../../assets/blog/IronOreFines.webp";
import Melamine from "../../assets/blog/Melamine.webp";
import IronOre from "../../assets/blog/IronOre.webp";
import MSP from "../../assets/blog/MSP.webp";
import MillScale from "../../assets/blog/MillScale.webp";

const BlogsData = [
  {
    id: 1,
    image: Carbonblock,
    title: "Carbon Block",
    description:
      "Carbon Block is a high-performance material used for filtration and energy storage. It effectively removes impurities and enhances process efficiency in various industries. Its versatile applications and reliable performance make it crucial for improving operational outcomes and ensuring high-quality results across diverse manufacturing and environmental processes.",

  },
  {
    id: 2,
    image: Carbonfilter,
    title: "Carbon filter",
    description:
      "Carbon Filter is a natural, porous material that excels at filtering impurities from water. Its activated carbon content helps remove contaminants and odors, ensuring cleaner and fresher water. Ideal for both home and industrial use, it enhances water quality and contributes to healthier living environments. ",

  },
  {
    id: 3,
    image: CoalFines,
    title: "Coal Fines",
    description:
      " Coal Fines are small particles of coal produced during mining and processing. They are used in various industrial applications, including as a fuel source in power generation and in the production of carbon products. Efficient handling and processing of coal fines are essential for maintaining energy efficiency and environmental standards.",

  },
  {
    id: 4,
    image: DolomiteLumps,
    title: "Dolomite Lumps",
    description:
      " Dolomite Lumps are naturally occurring rock formations composed primarily of calcium magnesium carbonate. These lumps are used in various industrial processes, including as a flux in steelmaking and as a soil conditioner in agriculture. Dolomite is valued for its chemical properties and durability in diverse applications. ",

  },
  {
    id: 5,
    image: IronMillScale,
    title: "Iron Mill Scale",
    description:
      " Iron Mill Scale is a byproduct of the steel manufacturing process, consisting of oxidized iron particles that form on the surface of steel during hot rolling. It is often recycled or used in various industrial applications, including as a raw material in the production of iron and steel products.",

  },
  {
    id: 6,
    image: IronOreFines,
    title: "Iron Ore Fines",
    description:
      " Iron Ore Fines are small particles of iron ore, typically less than 6mm in size, resulting from the mining and processing of iron ore. These fines are used in various steel-making processes, including sintering and pelletizing, to produce high-quality iron and steel products.",

  },
  {
    id: 7,
    image: Melamine,
    title: "Melamine",
    description:
      " Melamine is a versatile organic compound used in various industrial applications, including the production of durable, heat-resistant plastics and laminates. It is commonly utilized in kitchenware, cabinetry, and as a fire retardant. Melamine's properties make it ideal for creating strong, long-lasting materials.",

  },
  {
    id: 8,
    image: IronOre,
    title: "IronOre",
    description:
      " Iron Ore is a natural resource used primarily in steelmaking. It is rich in iron oxides, which are extracted and processed to produce iron and steel. Iron ore is essential for manufacturing various structural and industrial products, contributing significantly to the global economy.",


  },
  {
    id: 9,
    image: MSP,
    title: "Mill Scale Powder",
    description:
      " Mill Scale Powder is a byproduct of steel production, formed as a flaky layer on hot-rolled steel. It contains iron oxides and is used in various applications, including as a raw material in cement production and in steelmaking. Its recycling contributes to resource efficiency and cost reduction.",


  },
  {
    id: 10,
    image: MillScale,
    title: "MillScale",
    description:
      " MillScale is a layer of iron oxide that forms on the surface of steel during hot rolling. It's typically dark gray and flaky. Mill scale is valuable as a raw material in the production of cement and can be recycled to improve steelmaking efficiency and reduce costs.",


  },
];

const BlogsComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === BlogsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);


    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span id="Images"></span>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container relative">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Product Image
          </h1>
          <div className="grid grid-cols-1 gap-6 relative items-center">
            {/* Blog card */}
            <div className="relative">
              <BlogCard {...BlogsData[currentIndex]} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
