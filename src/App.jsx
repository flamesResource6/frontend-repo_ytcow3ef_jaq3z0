import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Sections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen w-full text-slate-800 bg-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold text-slate-900">PastelPay</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#auth" className="hover:text-slate-900">Auth</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-3 py-1.5 text-sm hover:bg-indigo-700">Get started</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Pricing />
        <Auth />
        <Sections />
      </main>

      <footer className="py-10 bg-white border-t border-slate-200 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
