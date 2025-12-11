import React from 'react';
import { Link2, Sparkles, Columns3, ArrowRight } from 'lucide-react';

const ProductHowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Link2 className="h-6 w-6" />,
      title: "Connect & Scan",
      description: "Link your Gmail and YouTube in 60 seconds. Our AI instantly analyzes your last 90 days of messages—no manual work required.",
      details: [
        "One-click OAuth authentication",
        "Read-only access (your data stays private)",
        "Scans complete inbox history in seconds",
        "No data migration or export needed"
      ],
      image: "dashboard-connect.png"
    },
    {
      number: "02",
      icon: <Sparkles className="h-6 w-6" />,
      title: "Discover Hidden Deals",
      description: "AI surfaces every brand partnership opportunity buried in your inbox. Real offers organized, spam filtered out automatically.",
      details: [
        "95%+ accurate deal detection",
        "Identifies brand emails vs spam",
        "Estimates deal value automatically",
        "Continuous monitoring (every 15 minutes)"
      ],
      image: "dashboard-deals.png"
    },
    {
      number: "03",
      icon: <Columns3 className="h-6 w-6" />,
      title: "Close & Earn",
      description: "Respond with AI-generated replies, track deals in your visual pipeline, and never miss another partnership worth thousands.",
      details: [
        "AI-suggested professional responses",
        "5-stage visual Kanban pipeline",
        "Follow-up reminders for warm leads",
        "Deal analytics and success metrics"
      ],
      image: "dashboard-pipeline.png"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            How DealFlow AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cluttered inbox to closed partnerships in three simple steps. See exactly how our AI transforms your workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-muted-foreground/30">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-lg bg-foreground/5 text-foreground">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-3xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <div className="space-y-3 mb-6">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Note */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border">
                  <span className="text-xs text-muted-foreground">
                    Powered by GPT-4 & secure OAuth 2.0
                  </span>
                </div>
              </div>

              {/* Dashboard Screenshot Placeholder */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-xl border border-border bg-card overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-muted/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted/30 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Dashboard Screenshot: {step.image}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-xl border border-border bg-card">
            <p className="text-foreground font-medium">
              Ready to transform your inbox into a deal-closing machine?
            </p>
            <button className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHowItWorksSection;    