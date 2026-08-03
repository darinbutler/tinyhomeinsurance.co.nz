import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Floating Home & Houseboat Insurance | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for floating homes and houseboats in NZ. Cover for hull, residential interior, public liability, and storm risk for permanently moored live-aboards.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/floating-home-insurance/' },
};

const faqs = [
  {
    q: 'Do I need marine insurance or home insurance for my floating home?',
    a: 'The honest answer is that you need elements of both — which is exactly why standard marine and standard home insurance policies both fail floating home owners in important ways. Marine insurance covers the hull, engine, and vessel-related risks but was not designed to cover residential interior fitouts, domestic contents, or the liability risks of people living in a home rather than sailing a boat. Standard home insurance was designed for structures on land and typically excludes buildings on or over water. A specialist floating home policy bridges this gap by combining hull and superstructure cover with residential building and contents coverage under a single policy that understands how you actually live.',
  },
  {
    q: 'Is my floating home covered by the Natural Hazards Insurance Act (NHI Act)?',
    a: 'In most cases, no — and this is one of the most important insurance gaps for floating home owners to understand. The Natural Hazards Insurance Act 2023 (which replaced the Earthquake Commission Act) covers residential buildings that are on land. Marine vessels and structures on water are specifically outside its scope. This means that if your floating home is damaged by an earthquake, tsunami, or other natural hazard event, you cannot rely on NHI Act cover. Earthquake and natural hazard protection must be explicitly included in your specialist floating home policy, and you should confirm the limit is adequate for your full rebuild cost. Do not assume EQC-style protection exists — it does not for floating homes.',
  },
  {
    q: 'What is the difference between storm damage and flood damage for a floating home?',
    a: 'For a floating home, these concepts blur in ways that don\'t apply to land-based dwellings. Storm damage from wind, driving rain, or waves hitting the structure is typically covered under a marine or floating home building policy. Flooding of the interior from rising water, storm surge, or a vessel swamping is a distinct risk — and whether it is covered depends heavily on your policy wording. Some policies exclude damage from gradual water ingress or from flooding events that are classified as natural hazards (which, as noted, may not be covered under the NHI Act for floating homes). Working through exactly what each type of water-related damage event means for your policy is essential, and specialist advice is the best way to ensure there are no gaps.',
  },
  {
    q: 'What happens if the marina itself is damaged and my floating home is affected?',
    a: 'Damage to marina infrastructure — pontoons, wharves, pile systems, power and water connections — is the marina operator\'s responsibility, not yours. However, if marina infrastructure damage causes your floating home to be damaged (for example, a pontoon collapse, a pile failure, or a fire in the marina spreading to your home), your own floating home policy should respond to the damage to your home. You would then need to look at whether the marina operator\'s liability insurance covers the consequential losses — but that is a separate recovery action. Your own insurance is your first line of protection. Loss of marina berth access and temporary mooring costs while the marina is repaired may also be covered under your policy if you have loss-of-use provisions.',
  },
  {
    q: 'Can I list my floating home on Airbnb or rent it out, and will my insurance still cover me?',
    a: 'Short-term rental of a floating home is possible, but you must be transparent with your insurer about this use. Hosting paying guests creates significantly higher liability exposure than private owner occupation — guests may not be familiar with the hazards of a floating environment, and injuries or incidents are more likely. Most specialist floating home policies can accommodate occasional short-term rental with appropriate disclosure, but the liability component of your cover becomes critical. Maritime safety obligations may also be relevant — under Maritime NZ rules, the operator of a vessel or structure on navigable water has safety obligations to people aboard. Confirm both your insurance position and your Maritime NZ obligations before accepting Airbnb bookings on a moored floating home.',
  },
];

export default function FloatingHomeInsurancePage() {
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
            <span className="text-green-300 text-sm font-semibold">⚓ Floating Home Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Floating Home &amp; Houseboat Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Specialist cover for permanently moored floating homes and houseboats — bridging the gap between marine and residential insurance for live-aboard owners at marinas, rivers, and coastal moorings.
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

            {/* What Is Floating Home Insurance? */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Floating Home Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Floating home insurance is specialist cover for permanently or semi-permanently moored vessels used as primary residences — including purpose-built floating homes, converted vessels fitted out as dwellings, and traditional houseboats. These homes sit in one of the most genuinely difficult insurance categories: they are simultaneously a marine asset (hull on water, exposed to weather and tidal forces) and a residential dwelling (kitchen, bathroom, living spaces, domestic contents), and standard products designed for either category alone will leave significant gaps.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Marine insurance — typically the natural starting point for anything on water — covers hulls and engines, marine liability, and nautical risks. But marine policies were designed for vessels that move: they are calibrated for navigation risks, not for the domestic hazards of permanent occupation. A marine policy for your floating home is unlikely to cover the kitchen appliances, the bathroom fitout, the furniture, or the liability risk of a visitor slipping on your deck while you are entertaining. It is a vessel policy, not a home policy.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Residential home insurance, on the other hand, is designed entirely for land-based structures and almost universally excludes buildings on or over water. Trying to insure a floating home under a standard residential policy will typically result in either an outright decline or a policy that is silent on the water-based aspects — meaning you are effectively uninsured for a wide range of risks that are specific to your situation. Specialist floating home insurance exists precisely to fill this gap, combining hull protection, residential building cover, contents insurance, and appropriate liability in a single coherent policy.
              </p>
            </section>

            {/* Why Mainstream Insurers Often Say No */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Insurers Often Say No</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                The marine-residential split is the fundamental challenge — but there are several specific underwriting concerns that arise when floating homes are presented to standard insurers.
              </p>
              <ul className="space-y-3">
                {[
                  'Marine vs residential classification split: the hull is not covered by home insurance; the residential interior is not covered by marine insurance. Most insurers operate in one category, not both.',
                  'Heightened storm and weather exposure: a floating home is far more exposed to wind, wave action, storm surge, and flooding than a land-based house — creating a risk profile that mainstream home underwriters are not calibrated for.',
                  'Mooring and site tenure uncertainty: floating homes typically depend on resource consents and marina agreements for their mooring — an uncertain tenure that makes long-term insuring more complex.',
                  'No EQC-style safety net: the absence of Natural Hazards Insurance Act cover for marine structures means the insurer carries 100% of the natural disaster risk, which affects how specialty insurers price and structure policies.',
                  'Valuation complexity: valuing a floating home requires assessing both the vessel/hull value and the residential fitout separately — a dual valuation that mainstream products are not designed to perform.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What Floating Home Insurance Typically Covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Floating Home Insurance Typically Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">
                A comprehensive floating home policy is structured around four core components, each addressing a distinct dimension of your live-aboard home's risk profile.
              </p>
              {[
                {
                  title: 'Hull & Superstructure (Marine Coverage)',
                  icon: '⚓',
                  items: [
                    'Steel, aluminium, or fibreglass hull',
                    'Deck, wheelhouse, and superstructure',
                    'Marine fittings, cleats, and fendering',
                    'Engine and propulsion systems',
                    'Mooring lines and anchoring equipment',
                    'Underwater gear and hull fittings',
                    'Collision with other vessels or structures',
                    'Storm and weather damage to the vessel',
                  ],
                },
                {
                  title: 'Residential Interior & Contents',
                  icon: '🏠',
                  items: [
                    'Internal fitout: linings, floors, ceiling',
                    'Fixed kitchen and bathroom fittings',
                    'Plumbing and electrical systems below deck',
                    'Furniture and soft furnishings',
                    'Electronics and entertainment equipment',
                    'Clothing and personal effects',
                    'Appliances and cooking equipment',
                    'Valuables and collectibles',
                  ],
                },
                {
                  title: 'Public Liability',
                  icon: '🛡️',
                  items: [
                    'Injury to guests and visitors aboard',
                    'Damage to adjacent vessels or marina structures',
                    'Legal defence costs',
                    'Medical expenses for third-party injuries',
                    'Environmental liability (fuel spill)',
                    'Short-term rental guest liability',
                  ],
                },
                {
                  title: 'Storm, Flood & Sinking Risk',
                  icon: '🌊',
                  items: [
                    'Storm surge and wave damage',
                    'Flooding of interior from extreme weather',
                    'Sinking from hull breach or bilge failure',
                    'Salvage and recovery costs',
                    'Pollution clean-up costs',
                    'Temporary accommodation during repair',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Floating Homes and the Regulatory Landscape</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Floating homes in this country exist in several distinct communities. The Marlborough Sounds has a long tradition of floating baches and permanently moored dwellings, some with multi-generational histories. The Whanganui River has houseboats and converted vessels used as permanent and seasonal residences. Auckland marinas — particularly in the Waitemata Harbour — host live-aboard communities at a number of berths. Each setting has its own consenting, mooring, and regulatory context.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Maritime New Zealand (Te Manatū Waka) has jurisdiction over vessels on navigable waters and administers the Maritime Transport Act 1994. If your floating home is classified as a vessel — even one that does not move — Maritime NZ requirements may apply, including vessel registration and potentially safety equipment obligations. The definition of what constitutes a "vessel" versus a "structure" for Maritime NZ purposes is not always straightforward, and the classification affects both your regulatory obligations and your insurance options.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Resource consent is typically required to moor a floating home on a permanent basis. Councils regulate the use of coastal marine areas and river beds through their regional policy statements and plans. Consent conditions often specify the type of structure, waste management requirements, and duration of the mooring. Insurance underwriters will want to understand whether your mooring arrangement has current consent — and what the consent conditions say about permanence and use.
              </p>
              <p className="text-stone-700 leading-relaxed">
                The critical insurance point that cannot be overstated: the Natural Hazards Insurance Act 2023 does NOT cover marine vessels or structures on water. There is no NHI Act baseline for floating homes — your specialist policy must carry 100% of the natural hazard risk. Earthquake, tsunami, and landslide-induced water surge all need to be explicitly addressed in your policy. Confirm your natural hazard cover limits are adequate for your full rebuild cost, not just the hull value.
              </p>
            </section>

            {/* Sum Insured Guidance */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Floating home valuations require a dual approach: the vessel/hull value and the residential fitout value are separate figures that should be assessed independently. The total sum insured must cover both, plus all associated recovery costs — salvage, pollution clean-up, temporary mooring, and alternative accommodation while repairs are completed.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Current hull replacement or rebuild value (marine survey recommended)',
                  'Full replacement cost of the residential interior fitout',
                  'Residential contents at today\'s replacement cost',
                  'Salvage and recovery costs if the vessel sinks',
                  'Pollution liability from fuel or waste water in a sinking event',
                  'Temporary mooring costs while your berth is unavailable',
                  'Temporary accommodation costs during the repair period',
                  'Loss of rental income if the home is unavailable',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Floating Home Insurance FAQs</h2>
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
