import React from 'react';
import { Mail, Youtube, Instagram, MessageCircle, CheckCircle2, Clock } from 'lucide-react';

const ProductIntegrationsSection: React.FC = () => {
  const activeIntegrations = [
    {
      icon: <Mail className="h-8 w-8" />,
      name: "Gmail",
      description: "Monitor inbox for brand deals automatically",
      status: "active",
      features: ["Real-time sync", "Read-only access", "Thread detection"]
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      name: "YouTube Studio",
      description: "Track partnership offers from comments & DMs",
      status: "active",
      features: ["Channel messages", "Comment monitoring", "Creator replies"]
    }
  ];

  const comingSoonIntegrations = [
    {
      icon: <Instagram className="h-8 w-8" />,
      name: "Instagram",
      description: "Direct message and comment scanning"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      name: "TikTok",
      description: "Creator inbox and collaboration invites"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            Seamless Platform Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect the platforms you already use. One-click authentication syncs your accounts securely in seconds.
          </p>
        </div>

        {/* Active Integrations */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <CheckCircle2 className="h-5 w-5 text-foreground" />
            <h3 className="text-xl font-semibold text-foreground">Available Now</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activeIntegrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-foreground/5 text-foreground">
                    {integration.icon}
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                    Active
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {integration.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>

                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2.5 px-4 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
                  Connect {integration.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">Coming Soon</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comingSoonIntegrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                  Coming Soon
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50 text-muted-foreground">
                    {integration.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </div>

                <button className="w-full py-2.5 px-4 border border-border text-muted-foreground rounded-lg text-sm font-medium cursor-not-allowed">
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">60s</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Secure OAuth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">15min</div>
              <div className="text-sm text-muted-foreground">Sync Frequency</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  Your Data Stays Private
                </h4>
                <p className="text-sm text-muted-foreground">
                  Read-only access means we never modify or delete your emails. Disconnect anytime.
                </p>
              </div>
              <button className="px-6 py-2.5 border-2 border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap">
                Learn About Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntegrationsSection;