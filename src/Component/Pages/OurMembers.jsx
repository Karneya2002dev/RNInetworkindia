import React from 'react'
import Patronmembers from "./Members/Patronmembers";
import LifetimeMembers from "./Members/LifetimeMembers";

const OurMembers = () => {
  return (
    <section className="relative pt-28 pb-20 bg-slate-50">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our Members
        </h1>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto">
          Meet our respected Patron and Lifetime members who support and
          strengthen our association.
        </p>
      </div>

      {/* Patron Members Section */}
      <div className="mb-14">
        <Patronmembers />
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center mb-14">
        <span className="h-px w-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* Lifetime Members Section */}
      <div>
        <LifetimeMembers />
      </div>
    </section>)
}

export default OurMembers