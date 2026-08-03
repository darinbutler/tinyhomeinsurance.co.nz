import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { coverageTypes } from '../data/coverage-types';
import { SITE } from '../data/site';

export const metadata = {
  title: 'Tiny Home Insurance NZ | THOWs, Containers & Off-Grid Cover',
  description: 'We compare insurers and connect you with the right cover for your tiny home — THOWs, container homes, and off-grid dwellings. NZ-licensed advisers respond within one business day.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/' },
};

const lifestyleTypes = [
  {
    icon: '🚛',
    title: 'Tiny House on Wheels',
    subtitle: 'Mobile · Towable · Relocatable',
    desc: 'Freedom to roam NZ\'s backroads, lifestyle blocks, and communities — with specialist cover that travels with you.',
    img: '/images/tinyhome_insurance_1.jpg',
  },
  {
    icon: '☀️',
    title: 'Off-Grid Cabin',
    subtitle: 'Solar · Rainwater · Battery',
    desc: 'Living off the grid on a lifestyle block or rural property, self-sufficient and surrounded by New Zealand nature.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '📦',
    title: 'Container Home',
    subtitle: 'Repurposed · Modern · Sustainable',
    desc: 'Architectural container conversions from Northland to Southland — specialist cover for non-standard construction.',
    img: 'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🏠',
    title: 'Fixed Foundation',
    subtitle: 'Sub-70m² · Compact Living',
    desc: 'Compact homes built for intentional living — on rural sections, lifestyle blocks, or tucked into urban plots.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
];

type CellVal = boolean | 'partial';
const insurerComparison: { feature: string; aa: CellVal; initio: CellVal; state: CellVal; specialist: CellVal }[] = [
  {
    feature: 'Tiny home on wheels (not fixed)',
    aa: false,
    initio: false,
    state: false,
    specialist: true,
  },
  {
    feature: 'Off-grid systems (solar, battery, rainwater)',
    aa: false,
    initio: false,
    state: false,
    specialist: true,
  },
  {
    feature: 'Container home / non-standard construction',
    aa: false,
    initio: 'partial',
    state: false,
    specialist: true,
  },
  {
    feature: 'Owner-built / DIY tiny home',
    aa: false,
    initio: false,
    state: false,
    specialist: true,
  },
  {
    feature: 'Transit cover when towing',
    aa: false,
    initio: false,
    state: false,
    specialist: true,
  },
  {
    feature: 'Campground / lifestyle block siting',
    aa: 'partial',
    initio: false,
    state: false,
    specialist: true,
  },
  {
    feature: 'Homes built under 2026 consent exemption',
    aa: false,
    initio: 'partial',
    state: false,
    specialist: true,
  },
  {
    feature: 'Fixed tiny home with CoC & fixed foundation',
    aa: true,
    initio: true,
    state: 'partial',
    specialist: true,
  },
];

function CellIcon({ val }: { val: CellVal }) {
  if (val === true) return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>;
  if (val === 'partial') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-bold">~</span>;
  return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-600 text-sm font-bold">✗</span>;
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,35,12,0.60) 0%, rgba(8,45,18,0.45) 50%, rgba(0,18,5,0.70) 100%), url('/images/tinyhome_insurance_2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        {/* grain overlay */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-8 tracking-wide">
              🌿 Specialist Tiny Home Insurance · New Zealand
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Live Free.<br />
              <span className="text-green-300">Live Tiny.</span><br />
              Live Protected.
            </h1>

            <p className="text-xl md:text-2xl text-stone-200 mb-4 leading-relaxed font-light">
              Tiny home on wheels. Container conversion. Off-grid cabin on a lifestyle block. Standard insurers were not built for the way you live.
            </p>
            <p className="text-lg text-stone-300 mb-10 leading-relaxed">
              We compare insurers and find you the best suited policy for your tiny home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-900/40 text-lg">
                Get a Quote →
              </Link>
              <Link href="/coverage/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all text-lg">
                Explore Coverage
              </Link>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── USP BAR ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
            {[
              { icon: '🏅', label: 'NZ-Licensed Advisers', sub: 'Referred advisers are FMCA-licensed' },
              { icon: '⚡', label: 'Fast Response', sub: 'One trusted specialist provider' },
              { icon: '🚛', label: 'Wheels, Containers & Off-Grid', sub: 'All tiny home types covered' },
              { icon: '🔒', label: 'No Obligation', sub: 'Compare and decide at your pace' },
            ].map(u => (
              <div key={u.label} className="py-6 px-5 text-center">
                <div className="text-2xl mb-2">{u.icon}</div>
                <div className="font-bold text-stone-900 text-sm leading-tight mb-1">{u.label}</div>
                <div className="text-stone-500 text-xs">{u.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE TYPES ──────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Your Home. Your Way.</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">
              Built for the Way Tiny Home People Live
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Mainstream insurers designed their policies for 200m² houses in the suburbs. The tiny home lifestyle is different — and your cover should be too.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifestyleTypes.map(t => (
              <div key={t.title}
                className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end group cursor-default shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 30%, rgba(0,20,5,0.92) 100%), url('${t.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                <div className="absolute inset-0 opacity-60 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, rgba(0,20,5,0.85) 0%, transparent 60%)` }} />
                <div className="relative p-6 text-white">
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <div className="text-xs font-bold text-green-300 tracking-widest uppercase mb-1">{t.subtitle}</div>
                  <h3 className="text-xl font-extrabold mb-2">{t.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 px-8 rounded-xl transition shadow-md shadow-brand-900/20">
              Get Specialist Cover →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SPECIALIST ───────────────────────────────────────── */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,46,22,0.90) 0%, rgba(10,60,30,0.88) 50%, rgba(3,30,12,0.93) 100%), url('/images/tinyhome_insurance_2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">The Tiny Home Challenge</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-8 leading-snug">
                Why Standard Home Insurance<br />Falls Short
              </h2>
              <div className="space-y-4">
                {[
                  {
                    bad: true,
                    title: 'Tiny homes on wheels are usually declined outright',
                    desc: 'Major NZ insurers won\'t cover a home that can be moved — even if you never plan to move it. They\'ll tell you to get caravan insurance instead.',
                  },
                  {
                    bad: true,
                    title: 'Caravan insurance isn\'t the right answer',
                    desc: 'Caravan policies have low limits and depreciation clauses designed for manufactured caravans — not for a custom-built home worth $150,000+.',
                  },
                  {
                    bad: true,
                    title: 'Off-grid systems and owner-built homes are excluded',
                    desc: 'Solar panels, battery banks, rainwater systems, and homes you\'ve built yourself are routinely excluded by standard policies.',
                  },
                  {
                    bad: false,
                    title: 'We compare insurers and find who will say yes',
                    desc: 'We work with specialists who understand the NZ tiny home market and can place your exact home — on wheels, in a container, or off-grid — at full replacement value.',
                  },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.bad ? '✗' : '✓'}</span>
                    <div>
                      <div className={`font-bold text-base ${item.bad ? 'text-red-300' : 'text-green-300'}`}>{item.title}</div>
                      <div className="text-stone-300 text-sm mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSURER COMPARISON TABLE ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Know Your Options</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">How Mainstream Insurers Compare</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Most NZ insurers weren't built for tiny homes. See where the gaps are — and why specialist cover matters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left py-4 px-5 font-semibold text-sm w-2/5">Cover Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-sm">AA Insurance</th>
                  <th className="text-center py-4 px-4 font-semibold text-sm">Initio</th>
                  <th className="text-center py-4 px-4 font-semibold text-sm">State / Tower</th>
                  <th className="text-center py-4 px-4 font-semibold text-sm bg-green-800">Specialist<br />(via our advisers)</th>
                </tr>
              </thead>
              <tbody>
                {insurerComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="py-3.5 px-5 text-sm font-medium text-stone-800">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon val={row.aa} /></td>
                    <td className="py-3.5 px-4 text-center"><CellIcon val={row.initio} /></td>
                    <td className="py-3.5 px-4 text-center"><CellIcon val={row.state} /></td>
                    <td className="py-3.5 px-4 text-center bg-green-50"><CellIcon val={row.specialist} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table legend */}
          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold text-xs">✓</span>
              Generally available
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs">~</span>
              Conditional / case by case
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold text-xs">✗</span>
              Generally not available
            </div>
          </div>

          {/* Comparison disclaimer */}
          <div className="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-700">Comparison disclaimer:</strong> This table is based on publicly available policy wordings, underwriting guidelines, and published insurer statements as at 2026. Individual circumstances vary and insurers may accept or decline risks on a case-by-case basis. Policy terms change; always confirm current coverage terms with the insurer or a licensed adviser before making any insurance decision. This information is general in nature and does not constitute personalised financial advice.
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl transition shadow-lg shadow-green-900/20 text-lg">
              Find the Right Specialist Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COVERAGE TYPES ───────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,30,15,0.82) 0%, rgba(5,40,15,0.85) 100%), url('/images/tinyhome_insurance_1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">What We Cover</span>
            <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">Comprehensive Cover for Every Tiny Home</h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              From the structure and contents through to transit, off-grid systems, and landlord cover — specialist policies built around how you actually live.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverageTypes.slice(0, 6).map(ct => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="group rounded-2xl border border-white/10 hover:border-green-400 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5">
                <div className="text-4xl mb-4">{ct.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-300 transition">{ct.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{ct.shortDesc}</p>
                <div className="mt-4 text-green-400 text-sm font-semibold group-hover:text-green-300 transition">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage/"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-stone-900 font-bold py-3 px-8 rounded-xl transition">
              View All Coverage Types
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Simple Process</span>
            <h2 className="text-4xl font-extrabold text-stone-900 mt-2 mb-4">Three Steps to Specialist Cover</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us About Your Home',
                desc: 'Fill in the short quote form — your home type, location, what you need covered. Two minutes, no commitment.',
                detail: 'Tiny home on wheels, container, off-grid, fixed — we handle them all.',
              },
              {
                step: '02',
                title: 'A Specialist Contacts You',
                desc: 'A NZ-licensed adviser who actually knows tiny homes reviews your details and reaches out within one business day.',
                detail: 'No call centres. Real advisers who understand your lifestyle.',
              },
              {
                step: '03',
                title: 'Choose the Right Cover',
                desc: 'Compare options tailored to your situation and budget. No pressure, no hidden fees, no obligation.',
                detail: 'Cover that fits your home exactly — not a standard template.',
              },
            ].map(s => (
              <div key={s.step}
                className="relative bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-green-500 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-6xl font-black text-stone-100 group-hover:text-green-50 absolute top-6 right-6 leading-none select-none transition-colors duration-300">{s.step}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-green-700 group-hover:bg-green-600 text-white font-extrabold text-lg flex items-center justify-center mb-5 transition-colors duration-300">
                    {parseInt(s.step)}
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-xl mb-3 group-hover:text-green-800 transition-colors duration-300">{s.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-green-700 text-sm font-semibold">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL QUOTE FORM ───────────────────────────────────────── */}
      <QuoteForm variant="full" />

      {/* ── FINAL CTA BANNER ─────────────────────────────────────── */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5,46,22,0.82) 0%, rgba(3,30,12,0.90) 100%), url('/images/tinyhome_insurance_3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Your Tiny Home Deserves<br />
            <span className="text-green-300">Real Protection</span>
          </h2>
          <p className="text-stone-300 text-xl mb-10 leading-relaxed">
            Connect with a NZ specialist today. No obligation — response within one business day.
          </p>
          <Link href="/contact/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-extrabold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-green-900/40 text-xl">
            Get a Quote →
          </Link>
          <p className="mt-6 text-stone-400 text-sm">
            No spam. No pressure. NZ-licensed advisers only.
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': SITE.domain,
        name: SITE.name,
        description: SITE.description,
        url: SITE.domain,
        email: SITE.email,
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        serviceType: 'Insurance Advisory Service',
        priceRange: 'Free to consumer',
        knowsAbout: [
          'Tiny home insurance New Zealand',
          'THOW insurance NZ',
          'Container home insurance NZ',
          'Off-grid home insurance',
          'Tiny home on wheels insurance',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Tiny Home Insurance Products',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building & Structure Insurance' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contents Insurance' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transit & Towing Cover' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Public Liability Insurance' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off-Grid Systems Cover' }},
          ],
        },
      })}} />
    </>
  );
}
