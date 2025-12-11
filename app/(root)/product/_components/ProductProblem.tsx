import React from 'react';
import { AlertCircle, Mail, Clock, TrendingDown, Inbox } from 'lucide-react';

const ProductProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Inbox className="h-5 w-5" />,
      title: "Drowning in 200+ Daily Emails",
      description: "Brand deals buried under spam, newsletters, and fan mail"
    },
    {
      icon: <TrendingDown className="h-5 w-5" />,
      title: "Missing 30% of Partnership Offers",
      description: "High-value collaborations lost in cluttered inboxes forever"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Wasting 10+ Hours Weekly",
      description: "Manually sorting, organizing, and tracking brand conversations"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Losing Track of Negotiations",
      description: "Deals going cold because you forgot to follow up"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Problem</span>
          </div>

          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            You're Losing $15K+ Yearly in Missed Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day, valuable brand partnerships slip through the cracks while you're stuck managing inbox chaos manually.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-muted/50 text-foreground">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-card border-2 border-border rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground mb-4">
              <span className="font-semibold">The average influencer misses 3-5 brand deals monthly</span> that never get a second chance. That's lost revenue you'll never recover.
            </p>
            <p className="text-muted-foreground">
              Manual inbox management isn't scalable. As your audience grows, so does the chaos—and the opportunity cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductProblemSection;