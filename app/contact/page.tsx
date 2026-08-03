import { SITE } from '../../data/site';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Get a Tiny Home Insurance Quote | TinyHomeInsurance.co.nz',
  description: 'Request a quote for tiny home insurance in New Zealand. NZ-licensed advisers respond within one business day.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/contact/' },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.68) 0%, rgba(10,55,25,0.58) 60%, rgba(0,25,8,0.76) 100%), url('/images/tinyhome_insurance_2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-5">
            🌿 Specialist Tiny Home Insurance · New Zealand
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get Your Specialist Quote</h1>
          <p className="text-xl text-stone-200 leading-relaxed">
            Tell us about your tiny home and a NZ-licensed specialist adviser will be in touch within one business day.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── LEFT: USPs + Trust ───────────────────────────────── */}
            <div className="lg:col-span-2 space-y-7">

              {/* Why us */}
              <div className="bg-white rounded-2xl border border-stone-200 p-7">
                <h2 className="font-extrabold text-stone-900 text-xl mb-5">Why Choose a Specialist?</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: '✓',
                      title: 'We know who will say yes',
                      desc: 'Most mainstream insurers decline tiny homes on wheels and off-grid dwellings. We work with the specialists who will actually cover yours.',
                    },
                    {
                      icon: '✓',
                      title: 'We compare — you choose',
                      desc: 'We compare insurers and find you the best suited policy for your tiny home. No obligation to proceed.',
                    },
                    {
                      icon: '✓',
                      title: 'NZ-licensed advisers',
                      desc: 'Our advisers are regulated under the Financial Markets Conduct Act 2013. You deal with a real person who understands your lifestyle.',
                    },
                    {
                      icon: '✓',
                      title: 'Fast response',
                      desc: 'One trusted provider responds within one business day — no call centre runaround.',
                    },
                  ].map(u => (
                    <div key={u.title} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <div className="font-bold text-stone-900 text-sm mb-0.5">{u.title}</div>
                        <div className="text-stone-500 text-sm leading-relaxed">{u.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-stone-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-sm text-stone-400 uppercase tracking-widest mb-5">You&apos;re in safe hands</h3>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { icon: '🔒', label: '256-bit SSL', sub: 'Secure form' },
                    { icon: '🚫', label: 'No Spam', sub: 'Privacy protected' },
                    { icon: '⚡', label: '1 Business Day', sub: 'Fast response' },
                  ].map(b => (
                    <div key={b.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl mb-1.5">{b.icon}</div>
                      <div className="text-xs font-bold text-white leading-tight">{b.label}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{b.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
                  <div className="flex items-center gap-2"><span className="text-green-400">✓</span> NZ-licensed advisers regulated under the FMCA</div>
                  <div className="flex items-center gap-2"><span className="text-green-400">✓</span> No cost to you — adviser commission from insurers</div>
                  <div className="flex items-center gap-2"><span className="text-green-400">✓</span> No obligation to proceed with any quote</div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h3 className="font-bold text-stone-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    { n: '1', title: 'We receive your enquiry', desc: 'Your details are securely forwarded to a NZ-licensed insurance adviser.' },
                    { n: '2', title: 'Adviser reviews your situation', desc: 'The adviser assesses your tiny home type, location, and cover requirements.' },
                    { n: '3', title: 'You receive a call or email', desc: 'Within one business day, the adviser contacts you with options and a quote.' },
                    { n: '4', title: 'Choose your cover', desc: 'Compare options and proceed only if you\'re happy. No pressure, no obligation.' },
                  ].map(step => (
                    <li key={step.n} className="flex gap-3">
                      <span className="w-7 h-7 rounded-full bg-green-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">{step.n}</span>
                      <div>
                        <div className="font-semibold text-stone-900 text-sm">{step.title}</div>
                        <div className="text-stone-500 text-sm mt-0.5">{step.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Disclosure */}
              <div className="text-xs text-stone-500 leading-relaxed">
                <strong className="text-stone-700">Financial Advice Disclosure:</strong> TinyHomeInsurance.co.nz is a referral service. We connect you with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. Information on this page is general in nature and does not constitute personalised financial advice. Advisers earn commission from insurers; there is no cost to you for the referral service.
              </div>
            </div>

            {/* ── RIGHT: Form ──────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border-2 border-green-600 shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-extrabold text-stone-900 mb-2">Get Your Tiny Home Quote</h2>
                <p className="text-stone-500 text-sm mb-7 leading-relaxed">
                  Fill in the short form below. A NZ-licensed tiny home specialist will compare options and be in touch within one business day.
                </p>
                <ContactForm formSubject={SITE.formSubject} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
