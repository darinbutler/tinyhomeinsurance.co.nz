import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Skoolie & Converted Bus Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for skoolies and converted buses used as mobile tiny homes. Cover for the conversion fit-out, vehicle structure, contents, and public liability.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/skoolie-bus-insurance/' },
};

const faqs = [
  {
    q: 'Do I need vehicle insurance or home insurance for my skoolie?',
    a: 'The honest answer is that you need elements of both — and that is precisely why standard policies often fail skoolie owners. Your skoolie is a motor vehicle when it is on the road (requiring CTP and comprehensive vehicle cover) but functions as a home when it is stationary and you are living in it. A specialist policy bridges this gap by covering the conversion structure and residential contents under a home-style policy while ensuring the vehicle aspects are also addressed. Relying on a standalone vehicle policy for your entire skoolie typically leaves the habitable fit-out, appliances, and residential contents uninsured.',
  },
  {
    q: 'Am I covered for a road accident versus damage while the bus is stationary at a site?',
    a: 'These are two distinct risk scenarios that a comprehensive skoolie policy should address separately. Road accidents — collisions, rollovers, impact with infrastructure — are typically covered under the vehicle component of your policy, which responds when the bus is being driven. Damage while stationary at a campsite, holiday park, or freedom camping location — such as storm damage, fire, theft of contents, or liability for an injury to a visitor — falls under the residential component. Make sure you understand which parts of your cover respond in which circumstances, and that there are no gaps at the boundary between driving and stationary use.',
  },
  {
    q: 'Can I insure a bus conversion I built myself without using a certified builder?',
    a: 'Owner-built conversions can be insured, but they may require more documentation than professionally built skoolies. Insurers will want to understand the construction quality, materials used, and any safety systems installed. Photographs of the build process, receipts for materials, and evidence of electrical or gas work done to safe standards all help build an insurer\'s confidence. If your bus has a current Certificate of Fitness (CoF) from NZTA, that is a meaningful indicator that the vehicle aspect is roadworthy. The habitable fit-out is a separate matter — being able to demonstrate safe construction is the key factor for specialist insurers.',
  },
  {
    q: 'Are solar panels, batteries, and off-grid systems in my conversion covered?',
    a: 'Off-grid systems are a core feature of most skoolie conversions, and a good specialist policy should cover them. Solar panels, lithium or AGM battery banks, charge controllers, inverters, and associated wiring are all insurable as part of the conversion fit-out. However, you should confirm explicitly with your insurer what is and is not included — some policies cover fixed systems as part of the structure while treating portable items differently. Damage from electrical faults, surge, and fire originating in the battery or inverter system should also be covered; check specifically for exclusions around self-installed electrical work.',
  },
  {
    q: 'What are my legal rights around freedom camping in a skoolie, and does it affect my insurance?',
    a: 'The Freedom Camping Act 2011 allows freedom camping on public land that is not restricted, subject to self-containment requirements. A self-contained vehicle or dwelling has its own fresh water, wastewater holding, and toilet facilities — certified to NZS 5465. A skoolie that is certified self-contained has more freedom camping options than one that is not. For insurance purposes, where you are parked should not significantly affect your cover, but it is worth confirming with your insurer that there are no exclusions for freedom camping locations. Some policies may require that the vehicle be parked in a legal location for claims to be valid.',
  },
];

export default function SkoolieBusInsurancePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.75) 0%, rgba(10,55,25,0.65) 50%, rgba(0,25,8,0.82) 100%), url('/images/tinyhome_insurance_3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-300 text-sm font-semibold">🚌 Skoolie Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Skoolie &amp; Converted Bus Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Specialist cover for skoolies, coach conversions, and truck campers used as mobile homes — protecting both the vehicle structure and the residential fit-out that mainstream insurers don't know how to cover.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg"
          >
            Get a Quote →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* What Is Skoolie Insurance? */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Skoolie Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A skoolie — a converted school bus, coach, or large vehicle transformed into a mobile living space — occupies a genuinely unique insurance category. It is simultaneously a registered motor vehicle and a fully functioning home, and that dual nature is exactly what mainstream insurance products are not designed to handle. Vehicle insurers cover cars and trucks, not kitchens and bedrooms. Home insurers cover fixed addresses, not dwellings that drive down the highway. The result is that most skoolie owners find themselves in a coverage gap if they try to use off-the-shelf products.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Skoolie insurance from a specialist provider wraps vehicle and residential cover into a coherent policy that reflects the actual risk profile of a converted bus home. It recognises that the bus chassis and body have one set of risks (road transit, mechanical failure, collision), while the habitable fit-out — the timber framing, insulation, lining, cabinetry, fixed appliances, electrical system, solar array, water plumbing, and all your personal contents — has a quite different set of risks that residential-style cover is better designed to address.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Beyond the structural question, skoolie insurance needs to account for how and where you live. Freedom camping, holiday parks, private land, and urban parking all present different liability scenarios. Your insurer needs to understand your lifestyle to structure cover that actually works — and specialist providers who regularly place skoolie policies are better positioned to do this than a call centre operator working from a generic vehicle insurance script.
              </p>
            </section>

            {/* Why Mainstream Insurers Often Say No */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Insurers Often Say No</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Skoolies sit in the gap between two standard product categories, and mainstream insurers are generally not set up to bridge that gap. Here are the most common reasons applications are declined or coverage is inadequate:
              </p>
              <ul className="space-y-3">
                {[
                  'Vehicle or dwelling classification confusion: underwriting systems expect one or the other — a vehicle that is also a home does not fit the standard risk model.',
                  'Owner-built conversion with no certified builder or engineer signoff: mainstream insurers are uncomfortable with self-assessed construction quality and unknown materials.',
                  'Uncertain liability boundary: who is responsible when an accident happens — the vehicle insurer or the home insurer — creates hesitation on both sides.',
                  'No standard valuation method: valuing a bus conversion requires assessing both the vehicle\'s residual value and the replacement cost of the fit-out separately, which standard vehicle insurance systems cannot do.',
                  'Irregular or nomadic use: policies that require a fixed home address or regular garaging arrangements cannot accommodate the mobile lifestyle of a skoolie owner.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What Skoolie Insurance Typically Covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Skoolie Insurance Typically Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">
                A well-structured skoolie policy is built around four distinct coverage components, each addressing a different aspect of your mobile home.
              </p>
              {[
                {
                  title: 'Conversion Structure (Fit-Out)',
                  icon: '🔨',
                  items: [
                    'Timber framing, insulation, and linings',
                    'Fixed cabinetry, benchtops, and joinery',
                    'Built-in kitchen appliances',
                    'Bathroom and wet area fit-out',
                    'Fixed flooring and ceiling treatments',
                    'Solar panels, battery bank, and inverter',
                    'Water tank, pump, and plumbing',
                    'Custom electrical wiring and 12V/240V systems',
                  ],
                },
                {
                  title: 'Vehicle Structure (Bus)',
                  icon: '🚌',
                  items: [
                    'Bus chassis, body, and roof',
                    'Windows, doors, and emergency exits',
                    'Engine, drivetrain, and brakes',
                    'Collision and accidental damage',
                    'Fire and theft of the vehicle',
                    'Third-party vehicle damage',
                  ],
                },
                {
                  title: 'Contents',
                  icon: '📦',
                  items: [
                    'Furniture and soft furnishings',
                    'Electronics and entertainment equipment',
                    'Clothing and personal effects',
                    'Tools and outdoor gear',
                    'Portable appliances and cookware',
                  ],
                },
                {
                  title: 'Public Liability (Stationary)',
                  icon: '🛡️',
                  items: [
                    'Injury to visitors or passers-by',
                    'Property damage at campsite or park',
                    'Legal defence costs',
                    'Medical expenses for third parties',
                  ],
                },
              ].map((block) => (
                <div key={block.title} className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{block.icon}</span>
                    <h3 className="font-bold text-stone-900">{block.title}</h3>
                  </div>
                  <ul className="space-y-1.5 grid sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                        <span className="text-brand-600 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* NZ Legal Context */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Skoolies, NZTA, and the Legal Framework</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                From a road transport perspective, a converted bus must hold a current Certificate of Fitness (CoF) from the New Zealand Transport Agency (Waka Kotahi NZTA). CoF requirements apply to heavy motor vehicles — which most full-size school buses and coaches fall under — and cover safety systems, brakes, lighting, and structural integrity. A CoF does not assess the habitable fit-out, only the roadworthiness of the vehicle. However, maintaining a current CoF is important for insurance purposes: it demonstrates that the vehicle aspect of your skoolie meets regulatory standards.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The weight of your converted bus also matters. Vehicles over 3,500 kg GVM have different registration, licensing, and road user charge obligations. Many full-size school buses sit well above this threshold, which affects both the CoF process and the driver licence class required to operate them. If you are operating a large bus conversion, confirming that you hold the correct licence class is important — and relevant to your insurance, since driving without the correct licence could void a claim.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The skoolie and bus conversion community in this country is active and growing, with forums and Facebook groups providing practical advice on everything from conversion builds to freedom camping locations. The Freedom Camping Act 2011 governs where self-contained vehicles can camp on public land, and NZS 5465 sets the self-containment standard. Meeting this standard opens up more camping options and may be a condition of some insurance policies.
              </p>
              <p className="text-stone-700 leading-relaxed">
                For insurance, the most practical advice is to document your conversion thoroughly. Photographs, material specifications, receipts, and any certifications from qualified tradespeople all help establish the quality and value of your fit-out. This documentation becomes crucial when a claim is made and an insurer needs to assess the replacement cost of a custom-built living space.
              </p>
            </section>

            {/* Sum Insured Guidance */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Valuing a skoolie correctly requires treating the vehicle and the conversion separately. The bus itself has a market value that depreciates over time. The conversion fit-out has a replacement cost that reflects the materials and labour required to rebuild it from scratch — and for a high-quality custom conversion, this can easily exceed the value of the bus. Combine both figures to arrive at your total sum insured.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Current market value of the bus chassis (not purchase price)',
                  'Full replacement cost of the conversion fit-out (materials + labour)',
                  'Solar, battery, and electrical system replacement value',
                  'Plumbing, tanks, and water system replacement value',
                  'Contents replacement value (all portable items)',
                  'Cost of temporary accommodation if the bus is being repaired',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-bold rounded-lg hover:bg-brand-800 transition shadow-sm"
              >
                Talk to a Specialist →
              </Link>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Skoolie Insurance FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal Link Banner */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">Compare insurers</p>
                <p className="text-sm text-stone-600 mt-1">See how specialist providers compare against mainstream NZ insurers.</p>
              </div>
              <Link
                href="/compare/"
                className="flex-shrink-0 px-5 py-2.5 bg-stone-800 text-white text-sm font-bold rounded-lg hover:bg-stone-900 transition"
              >
                Compare Now →
              </Link>
            </div>
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
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand-600 font-medium transition"
                    >
                      <span>{l.icon}</span>{l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
              <ul className="space-y-3">
                {[
                  { href: '/blog/tiny-home-insurance-nz-guide/', label: 'The Complete NZ Tiny Home Insurance Guide' },
                  { href: '/coverage/', label: 'All Coverage Types' },
                  { href: '/compare/', label: 'Compare Insurers' },
                  { href: '/tiny-home-insurance-cost/', label: 'How Much Does Cover Cost?' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
