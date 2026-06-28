import React from 'react'
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto'>

            {/* header */}
            <div className='text-center mb-14'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    Simple, Transparent Pricing
                </h2>
                <p className='text-gray-500 mt-3'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* pricing cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 flex flex-col gap-5 border ${
                        plan.popular
                            ? "text-white shadow-2xl scale-105"
                            : "bg-white border-gray-200 shadow-sm"
                        }`}
                        style={plan.popular ? { backgroundColor: "#7c3aed", borderColor: "#7c3aed" } : {}}
                    >

                        {/* popular badge */}
                        {plan.popular && (
                            <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                                <span className='bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full'>
                                    Most Popular
                                </span>
                            </div>
                        )}

                        {/* plan name */}
                        <div>
                            <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mt-1 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                                {plan.subtitle}
                            </p>
                        </div>

                        {/* price */}
                        <div className='flex items-end gap-1'>
                            <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                                {plan.price}
                            </span>
                            <span className={`text-sm mb-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>
                                {plan.period}
                            </span>
                        </div>

                        {/* features */}
                        <ul className='flex flex-col gap-3'>
                            {plan.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-2 text-sm'
                                >
                                    <FiCheck className={`shrink-0 ${plan.popular ? "text-white" : "text-green-600"}`} />
                                    <span className={plan.popular ? "text-purple-100" : "text-gray-600"}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* button */}
                        <button
                            className={`w-full py-3 rounded-full font-semibold transition-all hover:opacity-90 mt-2 ${
                            plan.popular
                                ? "bg-white text-[#7c3aed]"
                                : "text-white"
                            }`}
                            style={!plan.popular ? { backgroundColor: "#7c3aed" } : {}}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Pricing