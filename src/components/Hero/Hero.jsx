import React from "react";
import yellowCar from "../../assets/website/team.avif";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-[20px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 sm:-bottom-8 -right-4 sm:-right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md max-w-[80%] sm:max-w-[auto]"
            >
              <p className="text-gray-500 text-sm ">⭐Clients</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Your One-Stop Solution for High-Quality{" "}
              <span className="text-primary">Industrial Materials</span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="300">
              "Reliable Wholesaler & Distributor of Industrial Materials"<br />
              We supply high-quality mill scale, carbon blocks, and more, offering competitive pricing and prompt delivery for all bulk orders.            </p>


          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
