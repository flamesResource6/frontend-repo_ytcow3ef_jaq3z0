import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Test the waters and start collecting payments.',
    features: ['Up to 100 transactions/mo', 'Basic analytics', 'Email support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    description: 'For growing businesses that need automation.',
    features: ['10k transactions/mo', 'Subscriptions', 'Webhooks & API', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    description: 'Tailored pricing for large-scale operations.',
    features: ['Unlimited volume', 'Dedicated CSM', 'SLA & SSO', 'Custom integrations'],
    highlight: false,
  },
];

const PricingCard = ({ tier }) => (
  <div className={`flex flex-col rounded-2xl border ${tier.highlight ? 'border-indigo-300 bg-white shadow-xl shadow-indigo-100' : 'border-slate-200 bg-white/80'} p-6`}> 
    <div className="flex items-baseline justify-between">
      <h3 className="text-slate-900 font-semibold text-lg">{tier.name}</h3>
      <div className="text-indigo-700 font-semibold text-2xl">
        {tier.price}
        <span className="text-slate-500 text-base">{tier.period}</span>
      </div>
    </div>
    <p className="mt-2 text-slate-600 text-sm">{tier.description}</p>
    <ul className="mt-6 space-y-3">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-slate-700">
          <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-600">
            <Check className="h-4 w-4" />
          </span>
          <span className="text-sm">{f}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-6 w-full rounded-xl py-2.5 text-sm font-medium transition ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50'}`}>
      {tier.highlight ? 'Get started' : 'Choose plan'}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-sky-50 via-indigo-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Only pay for what you use. No hidden fees.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
