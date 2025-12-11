import React from 'react';
import { Check, X } from 'lucide-react';

const ProductComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Deal Detection",
      manual: false,
      dealflow: true,
      manualDetail: "Manually scan every email",
      dealflowDetail: "AI finds deals automatically"
    },
    {
      feature: "Time to Find Deals",
      manual: "2-3 hours daily",
      dealflow: "Instant",
      isMetric: true
    },
    {
      feature: "Deals Missed",
      manual: "30-40% overlooked",
      dealflow: "0% with AI scanning",
      isMetric: true
    },
    {
      feature: "Organization System",
      manual: false,
      dealflow: true,
      manualDetail: "Spreadsheets or folders",
      dealflowDetail: "Visual Kanban pipeline"
    },
    {
      feature: "Response Speed",
      manual: "Days to respond",
      dealflow: "Minutes with AI",
      isMetric: true
    },
    {
      feature: "Professional Responses",
      manual: false,
      dealflow: true,
      manualDetail: "Write from scratch",
      dealflowDetail: "AI-generated suggestions"
    },
    {
      feature: "Deal Analytics",
      manual: false,
      dealflow: true,
      manualDetail: "Manual tracking",
      dealflowDetail: "Automatic metrics"
    },
    {
      feature: "Follow-up Reminders",
      manual: false,
      dealflow: true,
      manualDetail: "Easy to forget",
      dealflowDetail: "Automated reminders"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[family-name:var(--font-hanken)]">
            DealFlow AI vs Manual Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly how much time and revenue you're losing with manual inbox management.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left py-5 px-6 text-sm font-semibold text-foreground w-2/5">
                    Capability
                  </th>
                  <th className="text-center py-5 px-6 text-sm font-semibold text-muted-foreground w-[30%]">
                    Manual Management
                  </th>
                  <th className="text-center py-5 px-6 text-sm font-semibold text-foreground bg-foreground/5 w-[30%]">
                    DealFlow AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisons.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/10 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-foreground">
                      {item.feature}
                    </td>

                    {/* Manual Column */}
                    <td className="py-4 px-6 text-center">
                      {item.isMetric ? (
                        <div className="text-sm text-muted-foreground font-medium">
                          {item.manual}
                        </div>
                      ) : item.manual ? (
                        <div className="flex justify-center">
                          <div className="rounded-full bg-foreground/10 p-1">
                            <Check className="h-4 w-4 text-foreground" strokeWidth={2.5} />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex justify-center mb-1">
                            <X className="h-4 w-4 text-muted-foreground/30" strokeWidth={2} />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.manualDetail}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* DealFlow Column */}
                    <td className="py-4 px-6 text-center bg-foreground/5">
                      {item.isMetric ? (
                        <div className="text-sm text-foreground font-semibold">
                          {item.dealflow}
                        </div>
                      ) : item.dealflow ? (
                        <div>
                          <div className="flex justify-center mb-1">
                            <div className="rounded-full bg-foreground/10 p-1">
                              <Check className="h-4 w-4 text-foreground" strokeWidth={2.5} />
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.dealflowDetail}
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X className="h-4 w-4 text-muted-foreground/30" strokeWidth={2} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground mb-2">10hrs</div>
            <div className="text-sm text-muted-foreground">Saved per week</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground mb-2">3-5x</div>
            <div className="text-sm text-muted-foreground">More deals closed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground mb-2">$15K+</div>
            <div className="text-sm text-muted-foreground">Revenue recovered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparisonSection;