import Link from 'next/link';
import { coverageTypes } from '../../data/coverage-types';

export const metadata = {
  title: 'Tiny Home Insurance Coverage Types | TinyHomeInsurance.co.nz',
  description: 'Explore all coverage types for tiny homes in NZ — building, contents, transit, liability, off-grid systems, and landlord insurance.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/coverage/' },
};

export default function CoveragePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.68) 0%, rgba(10,55,25,0.58) 50%, rgba(0,25,8,0.76) 100%), url('/images/tinyhome_insurance_1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-6">
            🌿 Specialist Tiny Home Insurance · New Zealand
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Coverage for<br /><span className="text-green-300">Every Tiny Home Type</span>
          </h1>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
            A comprehensive tiny home insurance package goes beyond just the building. Explore the covers available for your specific situation.
          </p>
          <div className="mt-8">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-900/40 text-lg">
              Get a Quote →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ── COVERAGE CARDS ───────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map(ct => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="bg-white rounded-2xl p-7 border-2 border-stone-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="text-4xl mb-4">{ct.icon}</div>
                <h2 className="font-bold text-stone-900 text-xl mb-2 group-hover:text-green-700 transition">{ct.name}</h2>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">{ct.shortDesc}</p>
                <div className="mt-5 flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:text-green-600 transition">
                  Learn more <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-2xl p-10 text-white text-center overflow-hidden relative"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(5,46,22,0.88) 0%, rgba(10,60,30,0.90) 100%), url('/images/tinyhome_insurance_2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-2xl font-bold mb-3">Not Sure What Cover You Need?</h2>
            <p className="text-stone-300 mb-6 max-w-xl mx-auto leading-relaxed">
              Our NZ-licensed advisers will assess your specific situation and recommend the right combination of covers for your tiny home. No obligation.
            </p>
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 px-10 rounded-xl transition-all shadow-lg shadow-green-900/30">
              Get Specialist Advice →
            </Link>
            <p className="mt-4 text-stone-400 text-sm">NZ-licensed advisers · Response within 1 business day</p>
          </div>
        </div>
      </section>
    </>
  );
}
