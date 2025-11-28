"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Chioma Adeleke",
    role: "Founder, Bloom Cosmetics",
    location: "Victoria Island, Lagos",
    image: "CA",
    rating: 5,
    text: "Managing my Ajo group used to be a nightmare with WhatsApp. Now I have trust scores for every member and automatic payment tracking. Game changer!",
    highlight: "Ajo Groups",
  },
  {
    name: "Ibrahim Musa",
    role: "Senior Developer, Andela",
    location: "Wuse, Abuja",
    image: "IM",
    rating: 5,
    text: "The 2026 tax calculator saved me ₦247,000 this year. I had no idea about the rent relief benefits until Nalo showed me.",
    highlight: "Tax Center",
  },
  {
    name: "Blessing Okafor",
    role: "Content Creator & Influencer",
    location: "Port Harcourt",
    image: "BO",
    rating: 5,
    text: "Tracking my 5 income streams was chaos. The Hustle Optimizer told me exactly where to focus my energy. My income is up 40% this quarter!",
    highlight: "Income Streams",
  },
  {
    name: "Tunde Balogun",
    role: "Marketing Lead, Sterling Bank",
    location: "Bodija, Ibadan",
    image: "TB",
    rating: 5,
    text: "The budgeting tools are simple but powerful. I finally understand where my money goes every month. Already saved ₦350,000 in 3 months.",
    highlight: "Budgeting",
  },
  {
    name: "Amara Nwosu",
    role: "HR Consultant, Deloitte",
    location: "Enugu",
    image: "AN",
    rating: 5,
    text: "I was skeptical about the financial assistant, but the Oracle AI gives better advice than my accountant. And it's always available!",
    highlight: "Financial Guide",
  },
  {
    name: "Yusuf Adewale",
    role: "CEO, PayStack Alumni",
    location: "Lekki, Lagos",
    image: "YA",
    rating: 5,
    text: "From tracking company expenses to managing payroll tax, Nalo handles it all. My accountant is impressed with how organized everything is now.",
    highlight: "Tax & Budgeting",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
            <Star className="h-4 w-4 text-primary fill-current" strokeWidth={3} />
            <span className="text-xs font-black uppercase tracking-wide">
              5-Star Rated by Users
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Loved by 10,247 Nigerians
          </h2>
          <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
            Real stories from real users taking control of their finances
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 space-y-4 hover:border-primary transition-colors"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary" strokeWidth={3} />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-primary fill-current"
                    strokeWidth={3}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm font-bold text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex px-3 py-1 bg-primary/10 border-2 border-primary/20">
                <span className="text-xs font-black uppercase text-primary">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t-2 border-border">
                <div className="w-12 h-12 bg-primary border-2 border-border flex items-center justify-center">
                  <span className="text-sm font-black text-primary-foreground">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-black">{testimonial.name}</p>
                  <p className="text-xs font-bold text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs font-bold text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-primary">4.9/5</p>
            <p className="text-xs font-bold text-muted-foreground uppercase mt-1">
              Average Rating
            </p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-primary">10,247</p>
            <p className="text-xs font-bold text-muted-foreground uppercase mt-1">
              Happy Users
            </p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-primary">98%</p>
            <p className="text-xs font-bold text-muted-foreground uppercase mt-1">
              Would Recommend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
