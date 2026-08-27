'use client';
import { useRef, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '../data/site';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  variant?: 'compact' | 'full';
}

export default function QuoteForm({ variant = 'compact' }: QuoteFormProps) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
    setSubmitting(true);
    try {
      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setSubmitting(false);
        setError('Security check could not complete. Please try again.');
        return;
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, cfTurnstileToken: cfToken }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  const homeTypes = [
    ['thow', 'Tiny House on Wheels'],
    ['fixed', 'Fixed Foundation Tiny Home'],
    ['container', 'Container Home'],
    ['off-grid-cabin', 'Off-Grid Cabin'],
    ['park-home', 'Park Home / Relocatable Home'],
    ['other', 'Other'],
  ];

  const coverTypes = [
    ['building-contents', 'Building + Contents'],
    ['building-only', 'Building / Structure Only'],
    ['contents-only', 'Contents Only'],
    ['landlord', 'Landlord Insurance'],
    ['not-sure', 'Not Sure — Need Advice'],
  ];

  const hiddenFields = (
    <>
      <input type="hidden" name="_subject" value={SITE.formSubject} />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
    </>
  );

  if (variant === 'full') {
    return (
      <section className="bg-gradient-to-r from-stone-800 to-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Get Covered</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Ready to Protect Your Tiny Home?</h2>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                We compare insurers and find you the best suited policy for your tiny home. NZ-licensed specialist advisers respond within one business day.
              </p>
              <ul className="space-y-4 text-stone-300">
                {[
                  { icon: '✓', text: 'No-obligation quotes compared for you' },
                  { icon: '✓', text: 'Specialist tiny home advisers only' },
                  { icon: '✓', text: 'Covers tiny homes on wheels, containers &amp; off-grid' },
                  { icon: '✓', text: 'Response within 1 business day' },
                ].map(f => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: f.text }} />
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-6 text-sm text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔒</span>
                  <span>256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚫</span>
                  <span>No Spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span>1 Business Day</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl border border-stone-200">
              {hiddenFields}
              <h3 className="text-xl font-bold text-stone-900 mb-5">Get Your Specialist Quote</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                  <input type="text" name="name" required placeholder="Your name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Phone</label>
                  <input type="tel" pattern="[+]?[0-9\s\-().]{6,}" title="Please enter a valid phone number" minLength={6} name="phone" required placeholder="09 XXX XXXX"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Tiny Home Type</label>
                  <select name="home_type" required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option value="">Select home type...</option>
                    {homeTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Cover Required</label>
                  <select name="cover_type" required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option value="">Select cover type...</option>
                    {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                {error && <p className="text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
                <TurnstileWidget ref={turnstileRef} />
                <button type="submit" disabled={submitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-colors text-lg shadow-md">
                  {submitting ? 'Submitting…' : 'Get My Quote →'}
                </button>
                <p className="text-center text-xs text-gray-500">No obligation · No hidden fees · NZ-licensed advisers only</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-stone-800 rounded-2xl p-7 border-2 border-green-700/40 shadow-2xl shadow-black/30">
      <h3 className="text-xl font-bold text-white mb-1">Get Your Tiny Home Quote</h3>
      <p className="text-stone-400 text-sm mb-5">NZ-licensed advisers respond within 1 business day</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        {hiddenFields}
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Full Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full px-3 py-2.5 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Email</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full px-3 py-2.5 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Phone</label>
          <input type="tel" pattern="[+]?[0-9\s\-().]{6,}" title="Please enter a valid phone number" minLength={6} name="phone" required placeholder="09 XXX XXXX"
            className="w-full px-3 py-2.5 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm placeholder-stone-500 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Tiny Home Type</label>
          <select name="home_type" required
            className="w-full px-3 py-2.5 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Select type...</option>
            {homeTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1">Cover Required</label>
          <select name="cover_type" required
            className="w-full px-3 py-2.5 bg-stone-700 border border-stone-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Select cover...</option>
            {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        {error && <p className="text-xs bg-red-900/30 text-red-200 border border-red-500/40 rounded-lg px-3 py-2">{error}</p>}
        <TurnstileWidget ref={turnstileRef} />
        <button type="submit" disabled={submitting}
          className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-400 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md shadow-green-900/40">
          {submitting ? 'Submitting…' : 'Get My Quote →'}
        </button>
        <div className="border-t border-stone-700 pt-3 grid grid-cols-3 gap-2 text-center">
          <div className="bg-stone-700/50 rounded-lg py-2 px-1">
            <div className="text-base mb-0.5">🔒</div>
            <div className="text-xs text-stone-400 font-medium">SSL Secure</div>
          </div>
          <div className="bg-stone-700/50 rounded-lg py-2 px-1">
            <div className="text-base mb-0.5">🚫</div>
            <div className="text-xs text-stone-400 font-medium">No Spam</div>
          </div>
          <div className="bg-stone-700/50 rounded-lg py-2 px-1">
            <div className="text-base mb-0.5">⚡</div>
            <div className="text-xs text-stone-400 font-medium">1 Business Day</div>
          </div>
        </div>
      </form>
    </div>
  );
}
