
import React from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide Meta Ads campaigns, e-commerce marketing strategy, certified digital marketing services, and social media promotion and management.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me via the contact form or via email and phone listed in the contact section.",
  },
  {
    question: "Do you offer custom campaigns?",
    answer: "Yes, all campaigns and marketing plans are tailored to your business needs and goals.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto my-16 px-6 sm:px-12 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="border border-border rounded-md p-4 bg-darkgray"
            open={false}
          >
            <summary className="cursor-pointer text-lg font-semibold">
              {question}
            </summary>
            <p className="mt-2 text-gray-300">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

