import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductHeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
              <span className="text-xs font-medium text-foreground">AI-Powered Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-[family-name:var(--font-hanken)]">
              Turn Inbox Chaos Into Closed Deals
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              DealFlow AI automatically finds brand partnerships hidden in your Gmail and YouTube, organizes them in a visual pipeline, and helps you respond professionally—all powered by advanced AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 border-2 border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Setup in 60 seconds</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Trusted by 1,000+ creators</span>
              </div>
            </div>
          </div>

          {/* Right - Product Screenshot Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-border bg-muted/20 overflow-hidden shadow-lg">
              {/* Dashboard Preview - Replace with actual screenshot */}
              <div className="w-full h-full bg-card p-6">
                <div className="space-y-4">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="h-8 w-32 bg-muted rounded"></div>
                    <div className="h-8 w-24 bg-foreground rounded"></div>
                  </div>
                  
                  {/* Mock Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-3">
                        <div className="h-4 w-20 bg-muted rounded"></div>
                        <div className="space-y-2">
                          <div className="h-24 bg-muted/50 rounded-lg border border-border"></div>
                          <div className="h-24 bg-muted/50 rounded-lg border border-border"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-sm text-muted-foreground mb-1">Deals Found</div>
              <div className="text-2xl font-bold text-foreground">47</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;