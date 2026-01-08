import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Owner",
      rating: 5,
      text: "Manage My Estate transformed how I handle my properties. Their professionalism and attention to detail are unmatched. I couldn't be happier with their service!",
    },
    {
      name: "Michael Chen",
      role: "First-time Buyer",
      rating: 5,
      text: "As a first-time homebuyer, I was nervous about the process. The team at MME guided me every step of the way. They made my dream of homeownership a reality!",
    },
    {
      name: "Emily Rodriguez",
      role: "Investor",
      rating: 5,
      text: "I've worked with many property management companies, but MME stands out. Their transparency, communication, and results speak for themselves. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real Stories from Real People
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
