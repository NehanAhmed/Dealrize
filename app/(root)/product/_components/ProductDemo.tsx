import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const ProductDemoSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            See DealFlow AI in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI-powered platform transforms inbox chaos into organized opportunities in under 90 seconds.
          </p>
        </div>

        {/* Video/Demo Container */}
        <div className="relative">
          <div className="aspect-video rounded-xl border-2 border-border bg-muted/20 overflow-hidden shadow-2xl">
            {/* Video Thumbnail/Placeholder */}
            <div className="relative w-full h-full bg-card flex items-center justify-center group cursor-pointer hover:bg-muted/30 transition-colors">
              {/* Mock Dashboard Screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/10"></div>
              
              {/* Play Button Overlay */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="h-8 w-8 text-background ml-1" fill="currentColor" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-1">Watch Product Demo</p>
                  <p className="text-sm text-muted-foreground">1:30 minutes</p>
                </div>
              </div>

              {/* Demo Badge */}
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-foreground/90 backdrop-blur-sm">
                <span className="text-xs font-medium text-background">Product Walkthrough</span>
              </div>
            </div>
          </div>

          {/* Integration Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Replace this section with your embedded video (Loom, YouTube, Vimeo) or interactive demo tool (Storylane, Navattic, Arcade)
            </p>
          </div>
        </div>

        {/* Demo Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-2">0:00-0:30</div>
            <div className="text-sm text-muted-foreground">Connect inbox & see first scan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-2">0:30-1:00</div>
            <div className="text-sm text-muted-foreground">AI detects deals & organizes pipeline</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-2">1:00-1:30</div>
            <div className="text-sm text-muted-foreground">Generate responses & close deals</div>
          </div>
        </div>

        {/* Alternative Demo CTA */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 border-2 border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors inline-flex items-center gap-2">
            Try Interactive Demo
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoSection;