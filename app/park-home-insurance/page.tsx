import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Park Home Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for park homes and relocatable homes in NZ. Cover for manufactured homes at holiday parks, lifestyle communities, and rural sites.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/park-home-insurance/' },
};

const faqs = [
  {
    q: 'What is the difference between park home insurance and caravan insurance?',
    a: 'Caravan insurance is designed for vehicles that are regularly towed and used for holidays — it focuses on road transit, recreational use, and short-term accommodation. Park home insurance, by contrast, covers a manufactured dwelling that is permanently or semi-permanently sited at a park or lifestyle community and used as a primary or long-term residence. Park homes are typically larger, have fixed connections to utilities, and carry a much higher replacement value than a caravan. The insurance needs — building cover, contents, liability, and legal costs — are closer to residential home insurance than standard caravan cover.',
  },
  {
    q: 'Am I covered if the park closes or I am evicted from my site?',
    a: 'Standard park home insurance does not cover the financial consequences of a park closure or eviction — that falls under legal protection or residents\' rights legislation rather than insurance. However, your policy should cover the cost of physically relocating your home if you need to move it to another site. If your home is damaged during transit as a result of a forced relocation, transit cover should also respond. It is worth checking whether your policy includes temporary accommodation costs while you arrange a new site, and always review your site agreement to understand your rights under residential park legislation.',
  },
  {
    q: 'Can I get insurance for an older park home — for example, one built more than 20 years ago?',
    a: 'Yes, but it can be more difficult to place through standard insurers, who may be concerned about older construction standards, materials (such as original wiring or plumbing), and the difficulty of sourcing replacement parts. Specialist insurers who focus on manufactured and relocatable housing are more comfortable assessing older homes on their individual merits. An inspection or condition report may be required, and your premium may reflect the home\'s age. Being upfront about any upgrades — such as rewiring, re-roofing, or replumbing — can help improve your terms.',
  },
  {
    q: 'Does my insurance cover the home during transit when relocating between parks?',
    a: 'Transit cover is a specific extension that protects your park home while it is being lifted, loaded, transported, and re-sited at a new location. Not all building policies automatically include transit — you need to check the policy schedule and, if necessary, add it before the move. Transit cover typically needs to be arranged ahead of time and may require you to use a qualified and insured relocator. Damage during the actual move — including cracking, impact damage, and connection failures — is what transit cover is designed to respond to.',
  },
  {
    q: 'What happens if the park\'s shared infrastructure — roads, water mains, or power — is damaged?',
    a: 'Damage to shared park infrastructure such as internal roads, water supply lines, communal sewage systems, or electrical reticulation is typically the responsibility of the park owner, not individual residents. Your park home insurance covers your dwelling and its direct connections — not shared services beyond the meter or connection point. If damage to park infrastructure makes your home uninhabitable, check your policy for loss-of-use or temporary accommodation provisions. Disputes about who bears responsibility for infrastructure damage can sometimes be complex, so it is worth understanding your site agreement before an event occurs.',
  },
];

export default function ParkHomeInsurancePage() {
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
            <span className="text-green-300 text-sm font-semibold">🏡 Park Home Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Park Home &amp; Relocatable Home Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Specialist cover for manufactured and relocatable homes sited at lifestyle communities, holiday parks, and rural properties — where standard insurers often struggle to help.
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

            {/* What Is Park Home Insurance? */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Park Home Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Park home insurance is specialist residential cover for manufactured and relocatable dwellings that are permanently or semi-permanently sited at a park, lifestyle community, or rural property. Unlike a standard house policy — which assumes a site-built home on freehold land — park home insurance is designed to account for the unique characteristics of manufactured construction: factory-built frames, lightweight cladding systems, skid or pad foundations, and the possibility that the home may need to be relocated in future.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Park homes in this country range from affordable retirement community homes through to high-end designer relocatables on lifestyle blocks. What they share is a construction method and land arrangement that falls outside the assumptions built into mainstream residential policies — which is why specialist cover matters. A standard home insurer may decline cover outright, impose restrictive exclusions, or undervalue the replacement cost of a manufactured dwelling.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Specialist park home insurance addresses all of this directly: it accounts for manufactured construction methods, covers transit risks if the home is relocated, and can be structured around the realities of leasehold or licensed site arrangements rather than freehold ownership. Whether your park home is at a retirement village, a coastal holiday community, or a rural lifestyle park, specialist cover gives you genuine protection that matches how you actually live.
              </p>
            </section>

            {/* Why Mainstream Insurers Often Say No */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Insurers Often Say No</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Most mainstream insurers design their home products around conventional site-built houses on freehold land. Park homes and relocatable dwellings sit outside that template in several important ways, often triggering automatic declines or heavily caveated cover.
              </p>
              <ul className="space-y-3">
                {[
                  'Non-standard construction: factory-built frames, steel chassis, lightweight cladding, and modular joinery that mainstream underwriters may not know how to value accurately.',
                  'Leasehold or licensed site: you own the home but not the land — a structure that many standard policies are not designed to accommodate.',
                  'Park rules and site agreements: some parks restrict which insurers or valuers can be used, creating administrative complications for mainstream providers.',
                  'Older manufactured homes: homes built more than 15–20 years ago may face outright declines from mainstream insurers concerned about construction standards and replacement parts.',
                  'Mobility and relocatability: the fact that a home can potentially be moved means mainstream underwriters may be uncertain about how to classify it — leading to exclusions or gaps in cover.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What Park Home Insurance Typically Covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Park Home Insurance Typically Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">
                A well-structured park home policy brings together several coverage components that together provide comprehensive protection for your manufactured dwelling and everything in it.
              </p>
              {[
                {
                  title: 'Building Structure',
                  icon: '🏠',
                  items: [
                    'Factory-built frame and chassis',
                    'Roof, walls, and cladding systems',
                    'Windows, doors, and glazing',
                    'Fixed kitchen and bathroom fittings',
                    'Internal linings and floor coverings',
                    'Plumbing and electrical systems',
                    'Decks, steps, and awnings',
                    'Skid or pad foundations',
                  ],
                },
                {
                  title: 'Contents Insurance',
                  icon: '📦',
                  items: [
                    'Furniture and white goods',
                    'Electronics and appliances',
                    'Clothing and personal effects',
                    'Valuables (jewellery, artwork)',
                    'Tools and sporting equipment',
                    'Temporary removal cover',
                  ],
                },
                {
                  title: 'Transit Cover (When Relocating)',
                  icon: '🚛',
                  items: [
                    'Lifting and loading at origin site',
                    'Road transport between sites',
                    'Setting down and reconnection at new site',
                    'Impact, cracking, and vibration damage',
                    'Third-party liability during transit',
                  ],
                },
                {
                  title: 'Public Liability',
                  icon: '🛡️',
                  items: [
                    'Injury to visitors at your home',
                    'Damage to park infrastructure caused by your home',
                    'Legal defence costs',
                    'Medical expenses for third-party injury',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Park Homes and the Regulatory Landscape</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The legal framework for park home residents has been an evolving area. The Residential Tenancies Act 1986 extends protections to occupants of residential parks in certain circumstances — including rules around notice periods, rent increases, and eviction procedures. The Residential Tenancies Amendment Act 2010 introduced specific provisions for mobile home park tenants, giving residents greater security of tenure than was previously available. Understanding how these protections apply to your specific site arrangement is important context for any insurance conversation.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The Manufactured Home Industry Association of New Zealand (MHIANZ) represents manufacturers, dealers, and park operators across the sector. Their members are typically responsible for building homes to the NZS 3604 standard or equivalent engineered solutions, which provides insurers with confidence about construction quality. Homes built by MHIANZ members and installed to manufacturer specifications are generally easier to insure than owner-modified or unknown-origin homes.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Under Building Act consent rules, manufactured homes under 70m² may be eligible for exemptions from full building consent requirements in eligible zones — a change that has expanded the market for smaller park homes and relocatables. However, consent exemption does not mean quality exemption: insurers will still want evidence of sound construction, and homes built without any documentation may be harder to place.
              </p>
              <p className="text-stone-700 leading-relaxed">
                For insurance purposes, the most important factor is the home's valuation. Manufactured homes do not follow the same depreciation curve as site-built houses, and replacement costs can be substantially different from market value. Working with a specialist insurer who understands the manufactured home market means your sum insured will reflect actual rebuild cost — not an estimate based on standard residential data that doesn't apply to your home.
              </p>
            </section>

            {/* Sum Insured Guidance */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Underinsurance is a particular risk for park home owners, because standard residential valuation tools are calibrated for site-built homes — not manufactured dwellings. Your sum insured should reflect the true cost of replacing your home from scratch: supply, delivery, installation, connections, and any consenting costs. Do not use purchase price or rateable value as a proxy — these figures rarely match actual replacement cost.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Factory supply cost of an equivalent manufactured home',
                  'Transport and delivery to your site',
                  'Site preparation, levelling, and pad installation',
                  'Utility connections (power, water, wastewater)',
                  'Deck, steps, and external fitout',
                  'Temporary accommodation costs during the rebuild period',
                  'Debris removal and demolition of the damaged home',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Park Home Insurance FAQs</h2>
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
