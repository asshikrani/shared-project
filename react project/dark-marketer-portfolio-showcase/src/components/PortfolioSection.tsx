
import React from "react";

const projects = [
  {
    title: "Meta Ads Campaign Boost",
    description:
      "Increased conversions by 40% with a strategic meta ads campaign for retail client.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    title: "E-Commerce Platform Marketing",
    description:
      "Developed tailored marketing plan to drive 30% sales growth in 6 months.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    title: "Social Media Growth Strategy",
    description:
      "Managed social media promotions leading to doubling of audience engagement.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    title: "Digital Marketing Certified Projects",
    description:
      "Leveraged certifications to implement effective campaigns across platforms.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-16 max-w-6xl mx-auto px-6 sm:px-12 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Portfolio & Projects
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg overflow-hidden shadow-neon shadow-md hover:scale-[1.03] hover:shadow-primary/70 transition-transform duration-300"
            aria-label={`View project: ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-darkgray text-gray-100">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

