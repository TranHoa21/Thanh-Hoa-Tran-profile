'use client';

import { useState } from 'react';

const plans = ['Static', 'Standard', 'Premium'];

const pricingData: {
  [key: string]: {
    title: string;
    subtitle: string;
    price: string;
    description: string;
    features: string[];
    isRecommended?: boolean;
  };
} = {
  Static: {
    title: 'Basic Package',
    subtitle: 'MODDUL WEBSITE',
    price: '250 USD',
    description: 'Suitable for small websites with limited pages and basic features.',
    features: [
      'Home, Banner, Category, Contact',
      'No Admin Page, Blog',
      'Design with template',
      'Mobile compatible',
      'CMS included',
      'Free SSL',
      'SEO standard design',
      'Free hosting 1 year',
      'Support 10 posts/products',
    ],
  },
  Standard: {
    title: 'Medium Package',
    subtitle: 'MODDUL WEBSITE',
    price: '625 USD',
    description: 'Ideal for growing businesses needing more integrated features.',
    features: [
      'All pages: Home, Banner, Category, Page Admin, Blog, Contact',
      'Design with template',
      'Livechat, Messenger, Zalo',
      'Mobile compatible',
      'CMS included',
      'Free SSL',
      'Speed optimization',
      'SEO standard design',
      'Free hosting 1 year',
      'Install Google Analytics',
      'Support 20 posts/products',
      'E-commerce features',
    ],
    isRecommended: true,
  },
  Premium: {
    title: 'VIP Package',
    subtitle: 'MODDUL WEBSITE',
    price: '1250 USD',
    description: 'Complete solution for professional e-commerce or high-traffic websites.',
    features: [
      'All pages: Home, Banner, Category, Page Admin, Blog, Contact',
      'Design with template',
      'Livechat, Messenger, Zalo',
      'Mobile compatible',
      'CMS included',
      'Free SSL',
      'Speed optimization',
      'Multi-language support',
      'Install Google Analytics',
      'Free hosting 1 year',
      'Support 30 posts/products',
      'Full featured e-commerce',
    ],
  },
};


export default function PricingSection() {
  const [activePlan, setActivePlan] = useState('Standard');
  const current = pricingData[activePlan];

  return (
    <section className="bg-[#0F1116] text-white py-20 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left text */}
        <div>
          <h4 className="text-sm text-red-600 uppercase mb-2 tracking-wide">
            Pricing
          </h4>
          <h2 className="text-4xl font-bold">My Pricing</h2>
        </div>

        {/* Pricing card on the right */}
        <div className="relative bg-[#1A1C22] rounded-xl shadow-xl px-6 py-10">
          {/* Recommended tag */}
          {current.isRecommended && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2B2D33] text-xs text-white px-5 py-1 rounded-full shadow">
              Recommended
            </div>
          )}

          {/* Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8">
            {plans.map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`px-6 py-2 rounded-md text-sm transition-all duration-200 font-medium
                  ${activePlan === plan
                    ? 'bg-red-600 text-white'
                    : 'bg-[#111318] text-gray-300 hover:bg-[#2A2C33]'
                  }`}
              >
                {plan}
              </button>
            ))}
          </div>

          {/* Pricing info */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{current.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{current.subtitle}</p>
            <div className="text-2xl text-red-600 font-bold mb-6">{current.price}</div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">{current.description}</p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300 mb-8">
              {current.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Order now */}
            <div className="text-center mb-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-red-700 transition-all shadow-lg">
                ORDER NOW →
              </button>
            </div>

            {/* Footer note */}
            <div className="flex justify-center gap-6 text-xs text-gray-500 mt-4">
              <span>⚡ 2 Days Delivery</span>
              <span>↺ Unlimited Revision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
