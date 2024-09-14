import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold text-center sm:text-left mb-3 flex items-center gap-3">
              Shreenathji Trade Links
            </h1>
            <p className="text-sm text-center sm:text-left">
              “Shreenathji Trade Links” Is A Wholesaler and Distributor Offering An Enormous Consignment Of Mill Scale, Carbon Blocks Etc. Since 2023 In Gandhidham, Gujarat.
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex justify-center sm:justify-start items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="py-8 px-4 md:col-start-3 md:col-end-4 text-right">
            <h1 className="sm:text-3xl text-xl font-bold text-left mb-3 flex items-center gap-3">
              Contact Us
            </h1>
            <p className="text-sm text-left">
              Plot No-231, Yogeshwar Nagar, Kidana, Kachchh, Gandhidham,<br />Kutch-370205, Gujarat, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
