import React from 'react';
import { Sparkles, Shield, Zap, Target } from 'lucide-react';

const ProductAITechSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "95%+ Detection Accuracy",
      description: "Our AI correctly identifies brand deals with industry-leading precision"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Real-Time Processing",
      description: "Analyzes emails instantly as they arrive, no delays or backlogs"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Smart Spam Filtering",
      description: "Automatically removes low-quality offers and affiliate spam"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-4">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">AI Technology</span>
          </div>

          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            Powered by Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge machine learning to transform how influencers discover and manage brand partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - AI Explanation */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-foreground text-background">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    GPT-4 Powered Intelligence
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our AI uses OpenAI's latest GPT-4 model to understand email context, identify brand collaboration requests, estimate deal values, and generate professional responses—all in milliseconds.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="text-base font-semibold text-foreground mb-3">
                  What Our AI Detects
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span>Brand partnership proposals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span>Sponsored content opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span>Affiliate collaboration requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span>Campaign invitations from agencies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span>Long-term brand ambassadorships</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-foreground mb-1">95%+</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-foreground mb-1">&lt;1s</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </div>
            </div>
          </div>

          {/* Right - Capabilities */}
          <div>
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-foreground/5 text-foreground shrink-0">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-2">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* How AI Learns */}
              <div className="bg-muted/20 border border-border rounded-xl p-6">
                <h4 className="text-base font-semibold text-foreground mb-3">
                  Continuously Improving
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our AI learns from user feedback to improve accuracy over time. When you mark deals correctly or incorrectly classified, the system gets smarter for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 py-8 border-t border-border">
          <div className="text-center">
            <div className="text-sm font-medium text-foreground mb-1">Powered By</div>
            <div className="text-xs text-muted-foreground">OpenAI GPT-4</div>
          </div>
          <div className="h-8 w-px bg-border"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-foreground mb-1">Security</div>
            <div className="text-xs text-muted-foreground">OAuth 2.0 Encrypted</div>
          </div>
          <div className="h-8 w-px bg-border"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-foreground mb-1">Compliance</div>
            <div className="text-xs text-muted-foreground">GDPR & SOC 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAITechSection;