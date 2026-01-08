import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import propertyMgmtImg from "../../assets/service-property-management.jpg";
import buySellRentImg from "../../assets/service-buy-sell-rent.jpg";
import constructionImg from "../../assets/service-construction.jpg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const services = [
    {
      title: "Property Management",
      description:
        "We ensure your property remains in pristine condition — maximizing value, maintaining trust, and delivering seamless long-term management for owners and tenants alike.",
      image: propertyMgmtImg,
    },
    {
      title: "Buy / Sell / Rent",
      description:
        "Whether you’re searching for your dream home or listing a property, our team delivers transparent, reliable, and expert real estate guidance every step of the way.",
      image: buySellRentImg,
    },
    {
      title: "Residential Construction",
      description:
        "From blueprint to final finish, we design and build premium residential spaces tailored to your lifestyle, quality standards, and modern living needs.",
      image: constructionImg,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Card Animation
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 bg-[#faf7f2] overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering expertise, reliability, and innovation across every corner of real estate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="mt-2 text-primary font-semibold hover:text-primary/80 transition-all duration-300">
                  Learn More →
                </button>
              </div>

              {/* Accent border */}
              <div className="h-[3px] w-0 group-hover:w-full bg-primary transition-all duration-500 mx-8 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
