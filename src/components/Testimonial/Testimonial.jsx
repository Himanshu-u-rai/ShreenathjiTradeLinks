import React from "react";
import Slider from "react-slick";
import businessman from "../../assets/logo/businessman.svg";

const testimonialData = [
  {
    id: 1,
    name: "Vilas B Desai - Mumbai, Maharashtra",
    text: "Outstanding Service and Quality!",
    img: businessman,
  },
  {
    id: 2,
    name: "Snehashish Mukhopadhyaya - Bhilai, Chhattisgarh",
    text: "Fast and Efficient Service!",
    img: businessman,
  },
  {
    id: 3,
    name: "Shahid Huq - Bangladesh",
    text: "Reliable and Consistent Supplier!",
    img: businessman,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <span id="Review"></span>
      <div className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => (
                <div key={id} className="my-6">
                  {/* card */}
                  <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                    <img
                      src={img}
                      alt="Businessman"
                      className="block mx-auto h-auto max-w-full sm:max-w-[200px] object-cover"
                    />
                    <div className="space-y-4">
                      <p className="text-gray-500 text-black/80 dark:text-white/80 sm:pr-10 xl:pr-40 text-sm sm:text-base md:text-lg">
                        “{text}”
                      </p>
                      <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
                    </div>
                    <p className="text-black/10 text-[6rem] sm:text-[12rem] font-serif absolute bottom-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
