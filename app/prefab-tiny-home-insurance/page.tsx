import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Prefab Tiny Home Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for prefab, modular, and kitset tiny homes. Cover for factory-built homes from delivery to permanent site, including transit and natural disaster.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/prefab-tiny-home-insurance/' },
};

const faqs = [
  {
    q: 'Does my prefab home need transit insurance during delivery from the factory to my site?',
    a: 'Yes — transit cover during delivery is one of the most important and most commonly overlooked aspects of prefab home insurance. The period between the factory and your section is when the home is at its most vulnerable: it is being loaded, transported on public roads, and craned or placed onto its foundation. Damage during this phase — cracking, impact from overhead obstacles, or structural distress from the transport — can be expensive to repair and may not be covered under either the manufacturer\'s warranty or a standard building policy. Confirm with your insurer that transit cover is in place before the delivery date, and ensure the transport contractor is adequately insured as well.',
  },
  {
    q: 'What happens if my prefab manufacturer becomes insolvent after delivery but before the warranty period ends?',
    a: 'Manufacturer insolvency is a real risk in any prefab or modular building market. Once your home has been delivered and handed over, your insurance policy (not the manufacturer\'s warranty) becomes your primary protection. A good building policy covers defects that cause sudden damage — such as a roof failure or structural collapse — but it is not a substitute for a construction warranty. Some specialist insurers offer latent defects cover as an extension, which provides longer-term protection against hidden construction faults that emerge after handover. If you are purchasing from a smaller or newer manufacturer, asking about latent defects cover is particularly worthwhile.',
  },
  {
    q: 'Is my prefab tiny home eligible for Natural Hazards Insurance (the replacement for EQC)?',
    a: 'The Natural Hazards Insurance Act 2023 (which replaced the Earthquake Commission Act) provides cover for residential buildings damaged by natural hazards — earthquakes, landslides, volcanic activity, hydrothermal activity, and tsunami. Eligibility depends on whether your dwelling qualifies as a "residential building" and whether it is covered by a qualifying insurance policy. Prefab homes that are permanently sited, connected to services, and covered by a standard residential building policy should generally qualify for Natural Hazards Insurance. However, if your prefab is classified as a relocatable structure, a vehicle, or a portable building, it may not meet the eligibility criteria — which is another reason why correct classification matters from the outset.',
  },
  {
    q: 'Does a prefab tiny home need a building consent?',
    a: 'Whether building consent is required depends on the size and type of the prefab, how it is installed, and the council\'s local rules. Under the Building Act 2004 Schedule 1 exemptions, certain smaller buildings may be exempt from consent — including some relocatable buildings and structures under 30m² in specific circumstances. However, most prefab homes that are intended as permanent dwellings will require building consent, code compliance certificates, and in many cases connection to council infrastructure. Your prefab supplier should guide you through the consenting process; working with a manufacturer whose products are well-documented and have been consented previously is a significant advantage.',
  },
  {
    q: 'Should I insure my prefab for the purchase price or the rebuild cost?',
    a: 'Always insure for the rebuild cost — not the purchase price, and not the rateable value. The rebuild cost is the amount required to demolish the existing structure, remove debris, and replace it with an equivalent prefab home including delivery, craning, foundation, and all connections. In a period of rising construction and supply chain costs, rebuild costs can be significantly higher than the original purchase price. Some specialist insurers offer "guaranteed replacement" cover for prefab homes where the rebuild cost at the time of the claim is met regardless of the sum insured, but this is only available for specific building types. In most cases, it is your responsibility to set an accurate sum insured and review it annually.',
  },
];

export default function PrefabTinyHomeInsurancePage() {
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
            <span className="text-green-300 text-sm font-semibold">🏗️ Prefab Home Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Prefab &amp; Modular Tiny Home Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Specialist cover for factory-built prefab homes, modular panel builds, and kitset tiny homes — from the factory floor to your section, and for the life of your home.
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

            {/* What Is Prefab Tiny Home Insurance? */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Prefab Tiny Home Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Prefab tiny home insurance is specialist cover for factory-built, modular, and kitset homes — dwellings that are manufactured off-site and then transported to a permanent or semi-permanent location. The prefab sector encompasses a wide range: from small kitset sleepouts assembled from flat-pack components, through to precision-engineered modular homes that arrive as complete, fully finished panels ready to bolt together on your section.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                For insurance purposes, prefab homes occupy a genuinely interesting position: in many ways they are easier to insure than owner-built homes. Factory manufacturing means quality control, documented construction processes, known materials, and consistent standards — all things that mainstream insurers find reassuring. The challenge arises not from the construction quality but from classification: is this a permanent building, a relocatable structure, or something in between? And critically, who covers the home during the transit and installation phase that every prefab must go through?
              </p>
              <p className="text-stone-700 leading-relaxed">
                A specialist prefab home insurance policy addresses all phases: the factory handover, the transit to your site, the installation and commissioning period, and the ongoing life of the home as your permanent dwelling. Getting each phase properly covered requires working with an insurer who understands the prefab construction process — not one who assumes all buildings are stick-framed on site.
              </p>
            </section>

            {/* Why Mainstream Insurers Sometimes Hesitate */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Insurers Sometimes Hesitate</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                While prefab construction is generally easier to insure than owner-built, mainstream insurers still encounter several questions that their standard products are not designed to answer cleanly.
              </p>
              <ul className="space-y-3">
                {[
                  'Classification uncertainty: some mainstream insurers are unsure whether to treat a modular home as a permanent building (standard home policy) or a relocatable structure (specialist policy), creating application friction.',
                  'Transit phase gap: neither the manufacturer\'s transit insurance nor your building policy may automatically cover damage during delivery and installation — a critical coverage gap.',
                  'Off-site manufacturing unfamiliarity: underwriters trained on site-built construction may not know how to assess modular construction quality, even when factory quality control is demonstrably superior.',
                  'Non-standard construction codes: some modular systems use engineering solutions rather than prescriptive standards, which can cause automated underwriting systems to flag the application for manual review.',
                  'Temporary classification before consent sign-off: during the period between delivery and final code compliance certification, a home\'s legal status may be ambiguous, creating potential coverage gaps.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Prefab Is Often Easier to Insure */}
            <section className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Prefab Is Actually Easier to Insure Than Owner-Built</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Once a specialist insurer is involved, prefab homes often attract more favourable terms than equivalent owner-built or heavily customised structures — because they come with documentation that owner-built homes often lack.
              </p>
              <ul className="space-y-2">
                {[
                  'Factory quality control records and inspection documentation',
                  'Known materials and construction specifications from the manufacturer',
                  'Engineering certifications for structural systems',
                  'Accurate, documented build costs from the factory invoice',
                  'Code compliance certificates from the building consent process',
                  'Consistent construction standards across all units of the same model',
                  'Access to manufacturer support for replacement parts and repairs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* What Prefab Tiny Home Insurance Typically Covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Prefab Tiny Home Insurance Typically Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">
                A comprehensive prefab home policy covers the full lifecycle of your home from delivery through to ongoing permanent occupation.
              </p>
              {[
                {
                  title: 'Building & Structure',
                  icon: '🏠',
                  items: [
                    'Modular panels, structural frame, and roof',
                    'Windows, doors, and external cladding',
                    'Internal linings and floor coverings',
                    'Fixed kitchen and bathroom fitouts',
                    'Plumbing and electrical systems',
                    'Foundation and connection infrastructure',
                    'Decks, steps, and external structures',
                    'Insulation and weather-tightness systems',
                  ],
                },
                {
                  title: 'Contents',
                  icon: '📦',
                  items: [
                    'Furniture and white goods',
                    'Electronics and appliances',
                    'Clothing and personal effects',
                    'Tools and sporting equipment',
                    'Valuables (jewellery, artwork)',
                  ],
                },
                {
                  title: 'Transit Cover (Delivery to Site)',
                  icon: '🚛',
                  items: [
                    'Loading at the factory or assembly point',
                    'Road transport to your section',
                    'Crane lifts and placement on foundation',
                    'Impact, cracking, and vibration damage',
                    'Third-party liability during transit',
                  ],
                },
                {
                  title: 'Natural Disaster / EQC Top-Up',
                  icon: '🏔️',
                  items: [
                    'Earthquake damage (NHI Act base + policy top-up)',
                    'Landslide and ground movement cover',
                    'Volcanic activity protection',
                    'Flood damage above NHI Act limits',
                    'Tsunami damage',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Prefab Construction in the NZ Regulatory Landscape</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The Ministry of Business, Innovation and Employment (MBIE) has been actively developing the regulatory framework for off-site manufacturing (OSM) in construction. Updated guidance and code changes have recognised that factory-built construction can achieve quality outcomes that meet or exceed site-built standards — validating what prefab advocates have argued for years. MBIE's work on OSM has included updating the Building Code compliance pathways to better accommodate modular and prefabricated building systems.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The local prefab industry has a number of well-established manufacturers whose products have been consented across multiple councils and whose quality track record is documented. Companies such as Eco Spaces, Tented Timber, Tiny Spaces, and various architectural prefab builders have demonstrated that factory-built homes can be designed, engineered, consented, and delivered to a consistently high standard. For insurance purposes, working with an established manufacturer whose documentation is solid is a significant advantage.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Post-Cyclone Gabrielle, there has been increased interest in prefab construction as a resilience tool — homes that can be built quickly, to consistent standards, and relocated if necessary. This has brought additional scrutiny to how prefab homes are classified, sited, and insured in areas with natural hazard risk. The Natural Hazards Insurance Act 2023 (which replaced the Earthquake Commission Act) is the primary mechanism for natural hazard cover on residential buildings; understanding how your prefab qualifies — and whether the NHI Act's per-claim limits are adequate for your rebuild cost — is an important part of your overall insurance planning.
              </p>
              <p className="text-stone-700 leading-relaxed">
                For modular homes, the sum insured question is typically more straightforward than for owner-built structures: the manufacturer's invoice price, plus installation and connections, gives a solid starting point for the rebuild cost. However, costs change over time — construction price inflation has been significant in recent years — so reviewing your sum insured annually against current manufacturer pricing is essential.
              </p>
            </section>

            {/* Sum Insured Guidance */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Prefab homes have the advantage of documented factory costs — which gives you a solid starting point for calculating your sum insured. The mistake is treating the purchase price as the rebuild cost without accounting for everything that happens after the factory gate.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Current supply cost from the manufacturer (not your purchase price)',
                  'Transport and delivery from factory to your site',
                  'Crane hire and installation costs',
                  'Foundation preparation and construction',
                  'Electrical connection and commissioning',
                  'Plumbing and wastewater connections',
                  'Consenting and engineering costs for the replacement build',
                  'Debris removal and demolition of the damaged structure',
                  'Temporary accommodation costs during the rebuild period',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Prefab Tiny Home Insurance FAQs</h2>
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
