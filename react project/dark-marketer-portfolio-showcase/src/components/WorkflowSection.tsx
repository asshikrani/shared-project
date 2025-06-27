
import React from "react";

const steps = [
  {
    title: "Consultation",
    description: "Understanding your business goals and marketing needs.",
  },
  {
    title: "Strategy Planning",
    description: "Creating tailored meta ads and e-commerce marketing plans.",
  },
  {
    title: "Campaign Execution",
    description: "Launching targeted ads and promotions across social media.",
  },
  {
    title: "Optimization & Reporting",
    description: "Analyzing campaign performance and optimizing for best results.",
  },
];

const WorkflowSection = () => {
  return (
    <section
      id="workflow"
      className="max-w-4xl mx-auto my-16 px-6 sm:px-12 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Workflow</h2>
      <ol className="space-y-6 list-decimal list-inside text-gray-300">
        {steps.map(({ title, description }) => (
          <li key={title}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkflowSection;

