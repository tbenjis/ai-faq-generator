import { useState } from "react";

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: billingInterval === "monthly" ? 9.99 : 99.99,
      features: [
        "50 FAQ Generations per month",
        "Basic customization options",
        "Email support",
        "Export to HTML/Markdown",
      ],
    },
    {
      id: "pro",
      name: "Professional",
      price: billingInterval === "monthly" ? 19.99 : 199.99,
      features: [
        "Unlimited FAQ Generations",
        "Advanced customization",
        "Priority support",
        "Export to all formats",
        "Custom branding",
        "API Access",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: billingInterval === "monthly" ? 49.99 : 499.99,
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Team collaboration",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={() => setBillingInterval("monthly")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              billingInterval === "monthly"
                ? "bg-primary-500 text-white"
                : "bg-white/10 text-white/70 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("yearly")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              billingInterval === "yearly"
                ? "bg-primary-500 text-white"
                : "bg-white/10 text-white/70 hover:text-white"
            }`}
          >
            Yearly
            <span className="ml-1 text-xs text-primary-300">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl backdrop-blur-lg ${
              plan.popular
                ? "bg-white/10 border-2 border-primary-500"
                : "bg-white/5 border border-white/10"
            } p-8 transform transition-all duration-200 hover:scale-105`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${plan.price}
              </span>
              <span className="text-white/70">/{billingInterval}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/70">
                  <svg
                    className="h-5 w-5 text-primary-500 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectPlan(plan.id)}
              className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-200 ${
                plan.popular
                  ? "bg-primary-500 hover:bg-primary-600"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
