// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useRef } from "react";
// import { patronMembers } from "./Patron";
// import { Link } from "react-router-dom";
// const Patronmembers = () => {
//   const sliderRef = useRef(null);

//   const scroll = (direction) => {
//     if (!sliderRef.current) return;

//     const width = sliderRef.current.offsetWidth;
//     sliderRef.current.scrollBy({
//       left: direction === "left" ? -width : width,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative w-full py-20 bg-gradient-to-b from-slate-50 to-white">
//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
//           Patron Members
//         </h2>
//         <p className="mt-3 text-slate-600">
//           Pillars of leadership and excellence
//         </p>
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10
//         bg-white/80 backdrop-blur border border-slate-200
//         text-slate-800 p-3 rounded-full shadow-lg
//         hover:bg-sky-500 hover:text-white transition"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10
//         bg-white/80 backdrop-blur border border-slate-200
//         text-slate-800 p-3 rounded-full shadow-lg
//         hover:bg-sky-500 hover:text-white transition"
//       >
//         <ChevronRight />
//       </button>

//       {/* Carousel */}
//       <div
//         ref={sliderRef}
//         className="flex gap-8 overflow-x-hidden mx-16 py-5 scroll-smooth px-15"
//       >
//         {patronMembers.map((member) => (
//           <Link
//             to={member.link}
//             key={member.id}
//             className="group min-w-[300px] md:min-w-[340px]
//             rounded-3xl bg-white/70 backdrop-blur-xl
//             border border-white/60 shadow-xl
//             p-8 text-center transition
//             hover:-translate-y-2 hover:shadow-2xl"
//           >
//             {/* Avatar with gradient ring */}
//             <div className="relative mx-auto mb-5 w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-1">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-full rounded-full object-cover bg-white"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="text-lg font-bold text-slate-900">
//               {member.name}
//             </h3>

//             {/* Role */}
//             <p className="text-sky-600 text-sm font-medium mt-1">
//               {member.designation}
//             </p>

//             {/* Company */}
//             <p className="text-slate-700 text-sm mt-2 leading-snug">
//               {member.company}
//             </p>

//             {/* Location */}
//             <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">
//               {member.location}
//             </p>

//             {/* Hover ID */}
//             <div
//               className="mt-4 opacity-0 group-hover:opacity-100
//               transition text-xs text-slate-400"
//             >
//               Member ID: {member.id}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Patronmembers;



import React from "react";
import { patronMembers } from "./Patron";
import { Link } from "react-router-dom";

const Patronmembers = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Patron Members
        </h2>
        <p className="mt-3 text-slate-600">
          Pillars of leadership and excellence
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {patronMembers.map((member) => (
            <Link
              to={member.link}
              key={member.id}
              className="group
                rounded-3xl bg-white/70 backdrop-blur-xl
                border border-white/60 shadow-xl
                p-8 text-center transition
                hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-1">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-slate-900">
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-sky-600 text-sm font-medium mt-1">
                {member.designation}
              </p>

              {/* Company */}
              <p className="text-slate-700 text-sm mt-2 leading-snug">
                {member.company}
              </p>

              {/* Location */}
              <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">
                {member.location}
              </p>

              {/* Member ID */}
              <div
                className="mt-4 opacity-0 group-hover:opacity-100
                transition text-xs text-slate-400"
              >
                Member ID: {member.id}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patronmembers;
