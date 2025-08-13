import { CheckIcon } from "lucide-react"
const tiers = [
    {
        name: 'Starter',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: "The perfect plan if you're just getting started with our product.",
        features: ['Filter up to 200 emails/month', 'Detect Brand Deal Easily', 'Basic deal Tracking Dashboard', 'Email Priorty Sorting','24/7 Support'],
        featured: false,
    },
    {
        name: 'Pro',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$49',
        description: 'For growing influencers who need more advanced features and support.',
        features: [
            'Unlimited 1000 emails/month',
            'AI Powered auto-replies',
            'Advanced Deal tracking and Remincders',
            'Multiple inbox Integration',
            'Priority Support',
          
        ],
        featured: true,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
    return (
        <div className="font-poppins     relative isolate bg-zinc-50 px-6 py-24 sm:py-32 lg:px-8">
            
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-orange">Pricing</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-blue sm:text-6xl">
                    Simple Plans for Every Influencer
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                Whether you’re just starting out or managing multiple brand partnerships, we’ve got a plan to help you close more deals — faster.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-orange' : 'text-orange', 'text-base/7 font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-white' : 'text-blue',
                                    'text-5xl font-semibold tracking-tight',
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-600',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-orange' : 'text-orange', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-orange text-white shadow-xs hover:bg-orange/75 focus-visible:outline-indigo-500'
                                    : 'text-orange inset-ring inset-ring-indigo-200 hover:inset-ring-blue focus-visible:outline-blue',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
