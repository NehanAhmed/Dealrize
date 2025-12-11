import React from 'react';
import { Check, X } from 'lucide-react';
import { FlipLink } from './FlipLink';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
        <section id='pricing' className="py-24 px-4 bg-background mt-40">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-extrabold text-foreground mb-4 font-montserrat">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-neutral-800 dark:text-neutral-600 text-lg w-xl mx-auto">
                        Start free and upgrade when you're ready to unlock the full power of AI-driven deal management.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {/* Free Tier */}
                    <div className="border border-border rounded-xl p-8 bg-card hover:border-muted-foreground/30 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-foreground mb-2 font-[family-name:var(--font-hanken)]">
                                Free Beta
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Perfect for getting started
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-foreground">$0</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                        </div>

                        <button className="w-full py-3 px-6 rounded-lg border-2 border-border text-foreground font-medium hover:bg-muted transition-colors mb-8">
                            <FlipLink href='/get-started'>

                                Get Started Free
                            </FlipLink>
                        </button>

                        <div className="space-y-4">
                            <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">1 Gmail account</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">20 deals per month</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Basic 3-stage Kanban</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">10 AI responses/month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tier */}
                    <div className="border-2 border-foreground rounded-xl p-8 bg-card relative shadow-lg">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-medium">
                                Most Popular
                            </span>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-foreground mb-2 font-[family-name:var(--font-hanken)]">
                                Pro
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                For serious creators
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-foreground">$29</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                        </div>

                        <button className="w-full py-3 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors mb-8">
                            <FlipLink href='/get-started' >

                                Start Free Trial
                            </FlipLink>
                        </button>

                        <div className="space-y-4">
                            <p className="text-sm font-medium text-foreground mb-4">Everything in Free, plus:</p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Unlimited Gmail accounts</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Unlimited deals</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Full 5-stage Kanban</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Unlimited AI responses</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Advanced analytics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Deal value tracking</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Priority support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-[family-name:var(--font-hanken)]">
                        Compare Plans
                    </h3>

                    <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-muted/40">
                                        <th className="text-left py-5 px-6 text-sm font-semibold text-foreground">
                                            Features
                                        </th>
                                        <th className="text-center py-5 px-6 text-sm font-semibold text-foreground w-32">
                                            Free
                                        </th>
                                        <th className="text-center py-5 px-6 text-sm font-semibold text-foreground bg-muted/60 w-32">
                                            Pro
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {features.map((feature, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-muted/20 transition-colors"
                                        >
                                            <td className="py-4 px-6 text-sm font-medium text-foreground">
                                                {feature.name}
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                {feature.free ? (
                                                    <div className="flex justify-center">
                                                        <div className="rounded-full bg-foreground/10 p-1">
                                                            <Check className="h-4 w-4 text-foreground" strokeWidth={2.5} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex justify-center">
                                                        <X className="h-4 w-4 text-muted-foreground/30" strokeWidth={2} />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-center bg-muted/5">
                                                {feature.pro ? (
                                                    <div className="flex justify-center">
                                                        <div className="rounded-full bg-foreground/10 p-1">
                                                            <Check className="h-4 w-4 text-foreground" strokeWidth={2.5} />
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
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h3 className="text-4xl font-extrabold text-foreground mb-8 text-center font-montserrat">
                        Frequently Asked Questions
                    </h3>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="border border-border rounded-lg bg-card px-6">
                            <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                                Can I switch plans anytime?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground pb-4">
                                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border border-border rounded-lg bg-card px-6">
                            <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                                Is my data secure?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground pb-4">
                                Absolutely. We use read-only OAuth access and encrypt all tokens. Your inbox data stays private and secure.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border border-border rounded-lg bg-card px-6">
                            <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                                What happens when I hit the free tier limit?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground pb-4">
                                You'll be notified when approaching the 20 deals/month limit. You can upgrade to Pro for unlimited access anytime.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border border-border rounded-lg bg-card px-6">
                            <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                                Do you offer refunds?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground pb-4">
                                Yes, we offer a 14-day money-back guarantee if you're not satisfied with the Pro plan.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;