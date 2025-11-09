import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Tabs = ({ active, onChange }) => (
  <div className="inline-flex rounded-xl bg-white/70 backdrop-blur p-1 ring-1 ring-slate-200">
    {['Sign in', 'Create account'].map((label, idx) => (
      <button
        key={label}
        onClick={() => onChange(idx)}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
          active === idx ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:bg-white'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

const Input = ({ icon: Icon, ...props }) => (
  <div className="flex items-center gap-2 rounded-xl bg-white/80 ring-1 ring-slate-200 px-3 py-2.5">
    <Icon className="h-4 w-4 text-slate-400" />
    <input {...props} className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400" />
  </div>
);

const Auth = () => {
  const [tab, setTab] = useState(0);

  return (
    <section id="auth" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Authentication built in</h3>
          <p className="mt-3 text-slate-600">Secure sign in with email and password. Add social login later with a click.</p>
          <ul className="mt-6 space-y-3 text-slate-700 text-sm list-disc pl-5">
            <li>Magic link and password flows</li>
            <li>Rate-limited and protected endpoints</li>
            <li>Session management and JWT support</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-rose-50 p-6 ring-1 ring-slate-200">
          <div className="flex justify-center">
            <Tabs active={tab} onChange={setTab} />
          </div>
          <div className="mt-6 space-y-3">
            {tab === 1 && (
              <Input icon={User} placeholder="Full name" type="text" />
            )}
            <Input icon={Mail} placeholder="Email address" type="email" />
            <Input icon={Lock} placeholder="Password" type="password" />
            <button className="w-full mt-2 rounded-xl bg-indigo-600 text-white py-2.5 text-sm font-medium hover:bg-indigo-700 transition">
              {tab === 0 ? 'Sign in' : 'Create account'}
            </button>
            <p className="text-center text-xs text-slate-500">By continuing you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
