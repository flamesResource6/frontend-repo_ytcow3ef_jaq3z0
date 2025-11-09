import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-gradient-to-b from-rose-50 via-indigo-50 to-sky-50">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 shadow-sm border border-white/60">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Shield className="h-3.5 w-3.5" />
          </span>
          PCI-ready • Bank-grade security
        </div>

        <h1 className="mt-6 font-semibold tracking-tight text-slate-900 text-4xl sm:text-5xl md:text-6xl leading-tight">
          Modern payments for digital businesses
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
          A minimalist fintech platform to accept card payments, manage subscriptions, and grow revenue — all in a soft pastel interface your customers will love.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm md:text-base shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-colors"
          >
            <CreditCard className="h-5 w-5" />
            Start accepting payments
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/80 backdrop-blur text-indigo-700 px-5 py-3 text-sm md:text-base shadow ring-1 ring-indigo-100 hover:bg-white transition"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
