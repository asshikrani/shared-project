
import React from "react";
import { Mail, Phone, Facebook, Linkedin,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Meta Advertising Campaigns",
    description:
      "Proven expertise to optimize your Meta Ads for maximum ROI and growth.",
  },
  {
    title: "E-Commerce Strategy",
    description:
      "Boost your online store sales with tailored marketing & promotion strategies.",
  },
  {
    title: "Digital Marketing",
    description:
      "Certified skills in managing and growing brand presence online effectively.",
  },
  {
    title: "Social Media Promotions",
    description:
      "Creative social media management to engage and grow your audience smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 max-w-6xl mx-auto px-6 sm:px-12 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-8 text-emerald-400 text-center">Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-lg bg-darkgray hover:shadow-neon transition-shadow cursor-default"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center space-x-6 text-gray-400">
        <a
          href="mailto:yasirshikrani56@gmail.com"
          aria-label="Email"
          className="hover:text-primary transition-colors"
        >
          <Mail size={24} />
        </a>
        <a
          href="tel:+923266138477"
          aria-label="Phone"
          className="hover:text-primary transition-colors"
        >
          <Phone size={24} />
        </a>
        <a
          href="https://www.facebook.com/yasirmunir0?mibextid=ZbWKwL"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialInsta transition-colors"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-munir-3b5b55270"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialLinkedin transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://wa.me/message/W4G7ZM7ZEL76B1"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialBlue transition-colors"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;

