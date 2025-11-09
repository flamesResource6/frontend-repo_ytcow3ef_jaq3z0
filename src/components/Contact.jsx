import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';

const Input = ({ icon: Icon, ...props }) => (
  <div className="flex items-center gap-2 rounded-xl bg-white/90 ring-1 ring-slate-200 px-3 py-2.5">
    <Icon className="h-4 w-4 text-slate-400" />
    <input {...props} className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400" />
  </div>
);

const TextArea = ({ icon: Icon, ...props }) => (
  <div className="flex items-start gap-2 rounded-xl bg-white/90 ring-1 ring-slate-200 px-3 py-2.5">
    <Icon className="h-4 w-4 text-slate-400 mt-1" />
    <textarea {...props} className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400 min-h-[120px]" />
  </div>
);

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-50 via-indigo-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Let’s talk</h3>
          <p className="mt-3 text-slate-600">Tell us about your use case and we’ll reach out within one business day.</p>
          <div className="mt-6 rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200">
            <form onSubmit={onSubmit} className="space-y-3">
              <Input icon={User} placeholder="Full name" required />
              <Input icon={Mail} placeholder="Work email" type="email" required />
              <TextArea icon={MessageSquare} placeholder="How can we help?" required />
              <button className="w-full rounded-xl bg-indigo-600 text-white py-2.5 text-sm font-medium hover:bg-indigo-700 transition">
                {sent ? 'Message sent ✓' : 'Send message'}
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We’ll never share your information. By submitting you agree to our Terms.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200">
          <h4 className="text-slate-900 font-semibold">Our promise</h4>
          <ul className="mt-3 space-y-2 text-slate-700 text-sm list-disc pl-5">
            <li>Human reply within one business day</li>
            <li>No pushy sales — just honest answers</li>
            <li>We’ll guide you to the best plan for your stage</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
