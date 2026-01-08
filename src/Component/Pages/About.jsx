import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../../assets/about-welcome.jpg";
import missionVideo from "../../assets/app.mp4";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      const isTouch = "ontouchstart" in window;

      if (!isTouch) {
        gsap.utils.toArray(".bento-card").forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;

            gsap.to(card, {
              rotateY: x / 18,
              rotateX: -y / 18,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.4,
              ease: "power3.out",
            });
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-[#f4f1eb] overflow-hidden " id="about"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Real Estate Network India
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2">
              Our Legacy.
            </h2>
          </div>

          <button className="px-6 py-3 border-2 border-gray-900 rounded-full font-bold text-sm hover:bg-gray-900 hover:text-white transition">
            Explore More
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[200px]">

          {/* HERO CARD */}
          <div className="bento-card group sm:col-span-2 md:col-span-8 md:row-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden [perspective:1000px]">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Keerthi Promoters
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                For over a decade, we’ve delivered world-class real estate
                solutions across Chennai with integrity and value.
              </p>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition">
                Connect With Us
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 w-1/3 opacity-10 group-hover:opacity-20 transition pointer-events-none">
              <img src={aboutImage} alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* IMAGE CARD */}
          <div className="bento-card group sm:col-span-2 md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden relative min-h-[280px]">
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-medium">
                Headquartered in Chennai since 2009.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="bento-card md:col-span-3 bg-primary/10 rounded-3xl p-6 flex flex-col justify-center border border-primary/20">
            <span className="text-4xl font-black text-primary">15+</span>
            <span className="text-gray-700 font-bold uppercase text-xs">
              Years of Excellence
            </span>
          </div>

          <div className="bento-card md:col-span-3 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
            <span className="text-4xl font-black text-gray-900">2K+</span>
            <span className="text-gray-500 font-bold uppercase text-xs">
              Happy Families
            </span>
          </div>

          {/* MISSION VIDEO */}
          <div className="bento-card sm:col-span-2 md:col-span-6 md:row-span-2 rounded-3xl overflow-hidden relative min-h-[260px]">
            <video
              src={missionVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 p-8 md:p-10 text-white flex flex-col justify-between h-full">
              <div>
                <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                  Our Mission
                </h4>
                <p className="text-lg md:text-xl text-gray-200">
                  Providing complete real estate solutions under one roof
                  through ethics, clarity, and expertise.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary font-bold">
                  →
                </span>
                <span className="text-xs text-gray-300">
                  View Strategic Roadmap
                </span>
              </div>
            </div>
          </div>

          {/* CEO */}
          <div className="bento-card md:col-span-3 bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full" />
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                CEO
              </p>
              <p className="font-bold text-gray-900">Kamala Hasan</p>
            </div>
          </div>

          {/* QUOTE */}
          <div className="bento-card md:col-span-3 bg-gray-200 rounded-3xl p-6 flex items-center justify-center">
            <span className="italic text-gray-600 text-sm text-center">
              “Traditional values, modern strategies.”
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
