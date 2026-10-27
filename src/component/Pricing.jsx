const plans = [
    {
        name: 'Starter',
        description: 'Perfect for getting started',
        price: '$0',
        button: 'Get Started Free',
        cardStyle: 'bg-blue-50',
        buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month',
        ],
    },
    {
        name: 'Pro',
        description: 'Best for professionals',
        price: '$29',
        button: 'Start Pro Trial',
        popular: true,
        cardStyle: 'bg-blue-600',
        buttonStyle: 'bg-white text-blue-700 hover:bg-blue-50',
        features: [
            'Access to all premium tools',
            'Unlimited templates',
            'Priority support',
            'Unlimited projects',
            'Cloud sync',
            'Advanced analytics',
        ],
    },
    {
        name: 'Enterprise',
        description: 'For teams and businesses',
        price: '$99',
        button: 'Contact Sales',
        cardStyle: 'bg-emerald-50',
        buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding',
        ],
    },
];

const Pricing = () => {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="my-4 text-4xl font-bold sm:text-5xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-slate-600">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`relative flex min-h-[380px] mt-8 flex-col rounded-2xl border rounded-lg p-6 shadow-2xl sm:p-8 ${
                                plan.popular ? 'text-white' : 'text-slate-900'
                            } ${plan.cardStyle}`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
                                    Most Popular
                                </span>
                            )}

                            <h2 className="text-2xl font-semibold">{plan.name}</h2>
                            <p className={`mt-1 ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>
                            <p className="mt-6 text-4xl font-bold">
                                {plan.price}
                                <span className={`text-base font-normal ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>
                                    /Month
                                </span>
                            </p>

                            <ul className={`mt-5 flex-1 space-y-2 ${plan.popular ? 'text-white' : 'text-slate-600'}`}>
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className={`text-lg leading-6 ${plan.popular ? 'text-white' : 'text-emerald-500'}`}
                                        >
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn mt-8 w-full rounded-full border-0 ${plan.buttonStyle}`}
                            >
                                {plan.button}
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
