import React from 'react';
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';

const ProductFinalCTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-card border-2 border-border rounded-2xl p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent"></div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background">
                <Sparkles className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">Start Your Free Trial Today</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6 leading-tight font-[family-name:var(--font-hanken)]">
              Stop Losing Deals. Start Using DealFlow AI.
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Join thousands of creators who've transformed their inbox chaos into organized opportunities and closed partnerships faster than ever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors inline-flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Setup in 60 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-lg p-4 text-center hover:border-muted-foreground/30 transition-colors">
            <div className="text-2xl font-bold text-foreground mb-1">5,000+</div>
            <div className="text-xs text-muted-foreground">Active Users</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center hover:border-muted-foreground/30 transition-colors">
            <div className="text-2xl font-bold text-foreground mb-1">50K+</div>
            <div className="text-xs text-muted-foreground">Deals Found</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center hover:border-muted-foreground/30 transition-colors">
            <div className="text-2xl font-bold text-foreground mb-1">95%</div>
            <div className="text-xs text-muted-foreground">Satisfaction</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center hover:border-muted-foreground/30 transition-colors">
            <div className="text-2xl font-bold text-foreground mb-1">$2.5M+</div>
            <div className="text-xs text-muted-foreground">Deals Closed</div>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questions? <a href="/contact" className="text-foreground font-medium hover:underline">Contact our team</a> or check out the <a href="/pricing" className="text-foreground font-medium hover:underline">pricing page</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductFinalCTASection;