import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Platforms = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

 const platforms = [
  {
    name: "MicroSite Pro",
    feature: "Create Microsite",
    url: "https://micro-site-two.vercel.app/",
    description:
      "Create stunning real estate microsites instantly to showcase properties with modern design and detail.",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Digital View",
    feature: "Digital View of the Property",
    url: "https://realestatesnetworkindiapvtltd.com/blindersoe-panel/login",
    description:
      "Experience a digital tour and detailed property visualization to enhance decision-making and client engagement.",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Propety Manager",
    feature: "Property Management",
    url: "https://app.funnelworkz.com/",
    description:
      "Manage property listings, leads, and workflows with an efficient real-estate management dashboard.",
    color: "from-purple-500 to-purple-700",
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

      // Cards Animation
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1,
          delay: i * 0.2,
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
      ref={sectionRef}
      id="platforms"
      className="relative py-28 bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] text-white overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-gradient-to-br from-primary to-transparent rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent to-transparent rounded-full opacity-10 blur-3xl" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Explore Our Platforms
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering real estate professionals and investors with innovative digital tools.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} rounded-t-3xl`}
              />

              {/* Card Content */}
              <div className={`bg-gradient-to-br ${platform.color} rounded-2xl p-6 mb-6`}>
                <h3 className="text-2xl font-bold text-center text-white drop-shadow-md">
                  {platform.name}
                </h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-center min-h-[80px]">
                {platform.description}
              </p>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                Visit Platform <ExternalLink className="h-4 w-4" />
              </a>

              {/* Glow hover effect */}
            {/* Glow hover effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-500 rounded-3xl pointer-events-none" />

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Discover how our connected platforms simplify and elevate your real estate ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
