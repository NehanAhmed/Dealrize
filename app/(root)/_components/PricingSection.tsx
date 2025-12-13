import React from "react";
import { Check, X } from "lucide-react";
import { FlipLink } from "./FlipLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PricingFeature {
  name: string;
  free: boolean;
  pro: boolean;
}

const PricingSection: React.FC = () => {
  const features: PricingFeature[] = [
    { name: "Gmail Integration", free: true, pro: true },
    { name: "YouTube Integration", free: true, pro: true },
    { name: "AI Deal Detection", free: true, pro: true },
    { name: "Deals per Month", free: false, pro: true },
    { name: "AI Response Suggestions", free: false, pro: true },
    { name: "Full Kanban Pipeline", free: false, pro: true },
    { name: "Deal Analytics", free: false, pro: true },
    { name: "Priority Support", free: false, pro: true },
    { name: "Unlimited Accounts", free: false, pro: true },
  ];

  return (
    <section id="pricing" className="bg-background mt-40 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-foreground font-montserrat mb-4 text-6xl font-extrabold">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto w-xl text-lg text-neutral-800 dark:text-neutral-600">
            Start free and upgrade when you're ready to unlock the full power of
            AI-driven deal management.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mb-20 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Free Tier */}
          <div className="border-border bg-card hover:border-muted-foreground/30 rounded-xl border p-8 transition-colors">
            <div className="mb-6">
              <h3 className="text-foreground mb-2 font-[family-name:var(--font-hanken)] text-2xl font-semibold">
                Free Beta
              </h3>
              <p className="text-muted-foreground text-sm">
                Perfect for getting started
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-foreground text-5xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <button className="border-border text-foreground hover:bg-muted mb-8 w-full rounded-lg border-2 px-6 py-3 font-medium transition-colors">
              <FlipLink href="/get-started">Get Started Free</FlipLink>
            </button>

            <div className="space-y-4">
              <p className="text-foreground mb-4 text-sm font-medium">
                What's included:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    1 Gmail account
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    20 deals per month
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Basic 3-stage Kanban
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    10 AI responses/month
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="border-foreground bg-card relative rounded-xl border-2 p-8 shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-medium">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-foreground mb-2 font-[family-name:var(--font-hanken)] text-2xl font-semibold">
                Pro
              </h3>
              <p className="text-muted-foreground text-sm">
                For serious creators
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-foreground text-5xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <button className="bg-foreground text-background hover:bg-foreground/90 mb-8 w-full rounded-lg px-6 py-3 font-medium transition-colors">
              <FlipLink href="/get-started">Start Free Trial</FlipLink>
            </button>

            <div className="space-y-4">
              <p className="text-foreground mb-4 text-sm font-medium">
                Everything in Free, plus:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Unlimited Gmail accounts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Unlimited deals
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Full 5-stage Kanban
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Unlimited AI responses
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Advanced analytics
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Deal value tracking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Priority support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mx-auto max-w-4xl">
          <h3 className="text-foreground mb-8 text-center font-[family-name:var(--font-hanken)] text-2xl font-semibold">
            Compare Plans
          </h3>

          <div className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="text-foreground px-6 py-5 text-left text-sm font-semibold">
                      Features
                    </th>
                    <th className="text-foreground w-32 px-6 py-5 text-center text-sm font-semibold">
                      Free
                    </th>
                    <th className="text-foreground bg-muted/60 w-32 px-6 py-5 text-center text-sm font-semibold">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  {features.map((feature, index) => (
                    <tr
                      key={index}
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="text-foreground px-6 py-4 text-sm font-medium">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.free ? (
                          <div className="flex justify-center">
                            <div className="bg-foreground/10 rounded-full p-1">
                              <Check
                                className="text-foreground h-4 w-4"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X
                              className="text-muted-foreground/30 h-4 w-4"
                              strokeWidth={2}
                            />
                          </div>
                        )}
                      </td>
                      <td className="bg-muted/5 px-6 py-4 text-center">
                        {feature.pro ? (
                          <div className="flex justify-center">
                            <div className="bg-foreground/10 rounded-full p-1">
                              <Check
                                className="text-foreground h-4 w-4"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X
                              className="text-muted-foreground/30 h-4 w-4"
                              strokeWidth={2}
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-foreground font-montserrat mb-8 text-center text-4xl font-extrabold">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-border bg-card rounded-lg border px-6"
            >
              <AccordionTrigger className="text-foreground text-base font-medium hover:no-underline">
                Can I switch plans anytime?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-border bg-card rounded-lg border px-6"
            >
              <AccordionTrigger className="text-foreground text-base font-medium hover:no-underline">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm">
                Absolutely. We use read-only OAuth access and encrypt all
                tokens. Your inbox data stays private and secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-border bg-card rounded-lg border px-6"
            >
              <AccordionTrigger className="text-foreground text-base font-medium hover:no-underline">
                What happens when I hit the free tier limit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm">
                You'll be notified when approaching the 20 deals/month limit.
                You can upgrade to Pro for unlimited access anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-border bg-card rounded-lg border px-6"
            >
              <AccordionTrigger className="text-foreground text-base font-medium hover:no-underline">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm">
                Yes, we offer a 14-day money-back guarantee if you're not
                satisfied with the Pro plan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
