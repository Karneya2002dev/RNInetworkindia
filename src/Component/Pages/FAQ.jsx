import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Manage My Estate provide?",
      answer:
        "We offer comprehensive property management, buy/sell/rent services, and residential construction. Our team handles everything from tenant management to property maintenance, real estate transactions, and new construction projects.",
    },
    {
      question: "How does the property management process work?",
      answer:
        "Our property management service includes tenant screening, rent collection, maintenance coordination, regular property inspections, and detailed financial reporting. We handle all day-to-day operations so you can enjoy passive income from your investment.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the greater metropolitan area and surrounding suburbs. Contact us to confirm if your property location falls within our service area.",
    },
    {
      question: "How are maintenance issues handled?",
      answer:
        "We have a 24/7 emergency hotline and a network of trusted contractors. Routine maintenance is scheduled promptly, and emergency issues are addressed immediately with regular updates provided to you.",
    },
    {
      question: "What are your fees for property management?",
      answer:
        "Our management fees are competitive and transparent. We offer customized packages based on your specific needs and property portfolio. Contact us for a detailed quote tailored to your requirements.",
    },
    {
      question: "Can you help with first-time home buyers?",
      answer:
        "Absolutely! We specialize in guiding first-time buyers through the entire process, from finding the right property to closing the deal. Our team provides education, support, and expert advice every step of the way.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
  id="faq"
  className="relative py-24 bg-gradient-to-b from-primary/10 via-background to-accent/10 overflow-hidden"
>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about how we manage, build, and protect your estate.
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border border-border/40 bg-card/70 backdrop-blur-md rounded-xl shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-card-foreground"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-muted-foreground transition-transform duration-300 group-hover:text-primary" />
                )}
              </button>

              {/* Smooth Transition */}
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100 py-0" : "grid-rows-[0fr] opacity-0 py-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
