import React from 'react';
import { Star, TrendingUp, DollarSign, Clock } from 'lucide-react';

const ProductTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Finally found deals I didn't even know existed in my inbox. Closed three partnerships in the first week—this is a game-changer for creators.",
      name: "@TechWithTim",
      role: "Tech Creator • 1.2M Subscribers",
      metric: { icon: <DollarSign className="h-4 w-4" />, value: "$8K", label: "First Month" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      quote: "DealFlow AI saved me 10+ hours weekly. The AI response suggestions are so good, brands think I have a full management team.",
      name: "@SarahDiAvola",
      role: "Lifestyle Influencer • 450K Subscribers",
      metric: { icon: <Clock className="h-4 w-4" />, value: "10hrs", label: "Saved Weekly" },
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
    },
    {
      quote: "I was missing 30% of my brand deals buried in spam. Now every opportunity is organized and tracked—my revenue literally doubled.",
      name: "@MattDAvella",
      role: "Documentary Creator • 3.8M Subscribers",
      metric: { icon: <TrendingUp className="h-4 w-4" />, value: "2x", label: "Revenue Growth" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Creators" },
    { number: "50K+", label: "Deals Found" },
    { number: "95%", label: "User Satisfaction" },
    { number: "$2.5M+", label: "Deals Closed" }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            Trusted by Thousands of Creators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how influencers are using DealFlow AI to discover hidden opportunities and grow their partnership revenue.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-muted-foreground/30 transition-colors"
            >
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-foreground fill-foreground" 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border">
                <div className="text-foreground">
                  {testimonial.metric.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {testimonial.metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.metric.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Highlight */}
        <div className="bg-muted/20 border border-border rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                Found 47 Deals
              </div>
              <div className="text-sm text-muted-foreground">
                Average in first 30 days
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                3x Faster
              </div>
              <div className="text-sm text-muted-foreground">
                Deal closure time
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                $15K Average
              </div>
              <div className="text-sm text-muted-foreground">
                Monthly partnership value
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTestimonialsSection;