import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locations } from '../../../data/locations';
import QuoteForm from '../../../components/QuoteForm';

export function generateStaticParams() {
  return locations.map(l => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = locations.find(l => l.slug === city);
  if (!loc) return {};
  // Keep title ≤60 chars — shorten if needed
  const rawTitle = `Tiny Home Insurance ${loc.name} | TinyHomeInsurance.co.nz`;
  const title = rawTitle.length <= 60 ? rawTitle : `Tiny Home Insurance — ${loc.name} | TinyHomeInsurance.co.nz`;
  return {
    title,
    description: loc.heroIntro.slice(0, 160),
    alternates: { canonical: `https://www.tinyhomeinsurance.co.nz/locations/${city}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = locations.find(l => l.slug === city);
  if (!loc) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.75) 0%, rgba(10,55,25,0.65) 50%, rgba(0,25,8,0.82) 100%), url('/images/tinyhome_insurance_1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/locations/" className="inline-flex items-center gap-2 text-green-200 text-sm mb-4 hover:text-white transition">← All Locations</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-green-200 bg-white/10 border border-white/20 rounded-full px-3 py-1">{loc.region}</span>
            <span className="text-xs text-green-100 bg-white/10 border border-white/20 rounded-full px-3 py-1 capitalize">{loc.type}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 max-w-3xl">Tiny Home Insurance — {loc.name}</h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">{loc.tagline}</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg">Get a Quote →</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* About living here */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Tiny Home Living in {loc.name}</h2>
              <p className="text-stone-700 leading-relaxed mb-4">{loc.heroIntro}</p>
              <p className="text-stone-700 leading-relaxed">{loc.localContext}</p>
            </section>

            {/* Climate and terrain */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Climate & Natural Hazard Risks</h2>
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">🌤️ Climate</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">{loc.climate}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">⛰️ Terrain & Hazard Risk</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">{loc.terrainRisk}</p>
                </div>
              </div>
            </section>

            {/* Popular tiny home types */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Popular Tiny Home Types Here</h2>
              <ul className="space-y-3">
                {loc.popularTinyHomeTypes.map((type, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key insurance challenges */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Key Insurance Considerations</h2>
              <p className="text-stone-600 mb-5 text-sm">Insurance requirements vary by location. Here are the key considerations for tiny home owners in {loc.name}:</p>
              <ul className="space-y-3">
                {loc.keyInsuranceChallenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700 text-sm bg-stone-50 rounded-lg p-3 border border-stone-200">
                    <span className="text-amber-500 font-bold mt-0.5 text-base">!</span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Getting the right cover */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting the Right Cover for {loc.name}</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Tiny home insurance is never one-size-fits-all, and location makes a significant difference. An adviser who understands the specific risks and requirements for {loc.name} — whether that&apos;s earthquake risk, flood zone exposure, coastal surcharges, or council consent requirements — will find you appropriate cover at the right price.</p>
              <p className="text-stone-700 leading-relaxed mb-6">We connect tiny home owners with NZ-licensed insurance advisers who have experience across all these scenarios. When you submit a quote request, we share your location and home type details with advisers who can give you specific advice for your situation.</p>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-bold rounded-lg hover:bg-brand-800 transition shadow-sm">Get Location-Specific Advice →</Link>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">{loc.name} Tiny Home Insurance FAQs</h2>
              <div className="space-y-6">
                {loc.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Coverage Types</h3>
              <ul className="space-y-2">
                {[
                  { href: '/coverage/building-structure/', icon: '🏠', label: 'Building & Structure' },
                  { href: '/coverage/contents-insurance/', icon: '📦', label: 'Contents Insurance' },
                  { href: '/coverage/transit-towing-cover/', icon: '🚛', label: 'Transit & Towing' },
                  { href: '/coverage/public-liability/', icon: '🛡️', label: 'Public Liability' },
                  { href: '/coverage/off-grid-systems/', icon: '☀️', label: 'Off-Grid Systems' },
                  { href: '/coverage/landlord-insurance/', icon: '🔑', label: 'Landlord Insurance' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand-600 font-medium transition">
                      <span>{l.icon}</span>{l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Other Locations</h3>
              <ul className="space-y-2">
                {locations.filter(l => l.slug !== loc.slug).slice(0, 6).map(l => (
                  <li key={l.slug}>
                    <Link href={`/locations/${l.slug}/`} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">{l.name}</Link>
                  </li>
                ))}
                <li><Link href="/locations/" className="text-sm text-brand-600 font-semibold">All locations →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
