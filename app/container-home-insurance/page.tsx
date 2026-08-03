import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Container Home Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for shipping container homes in New Zealand. Cover for single and multi-container conversions, off-grid container homes, and container sleepouts.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/container-home-insurance/' },
};

const faqs = [
  {
    q: 'Is a container home classed as a permanent dwelling for insurance purposes?',
    a: 'It depends on how your container home is installed. If it\'s placed on a permanent foundation and has a rateable value from your local council, most insurers will treat it as a permanent dwelling. If it\'s placed on temporary blocks or skids without a foundation, some insurers may classify it differently — affecting your eligibility for standard home insurance and potentially requiring a specialist policy.',
  },
  {
    q: 'Does container home insurance cover the structure itself or just the contents?',
    a: 'Specialist container home insurance covers both. Building cover protects the corten steel shell, windows, doors, cladding, internal linings, plumbing, electrical systems, and fixed fittings. Contents cover protects everything inside — furniture, appliances, electronics, and personal effects. The two are typically separate components of your overall policy.',
  },
  {
    q: 'My container home is off-grid — are the solar panels and battery system covered?',
    a: 'Standard building policies may not automatically include off-grid systems. You\'ll need to ask your insurer specifically whether solar panels, battery banks, charge controllers, inverters, and rainwater infrastructure are covered. Some specialist insurers include these as standard for off-grid builds; others offer them as an endorsement. Always confirm before you buy.',
  },
  {
    q: 'Can I get building consent for a container home in NZ?',
    a: 'Yes, container homes can get building consent in New Zealand, though the process can be more complex than standard builds. Engineers are typically required to certify the structural integrity of the container and any modifications. Some councils have more experience with container builds than others. Your insurer will want to know whether your home has consent — and whether it was designed by a registered architect or engineer.',
  },
  {
    q: 'Are multi-container homes (stacked or joined containers) more expensive to insure?',
    a: 'Multi-container builds are more complex structures with higher rebuild costs, so premiums are typically higher than for single-container homes. However, the critical factor is an accurate sum insured — the full cost to demolish the existing structure and rebuild from scratch. Don\'t underinsure to save on premiums; this creates a shortfall when you need to claim.',
  },
  {
    q: 'What if my container home is on rural land without a street address?',
    a: 'Insurers need a physical location to assess risk, but not necessarily a formal street address. GPS coordinates, lot number, or a description of the location (e.g., "Section 3B, Smith Road, Hawke\'s Bay") are typically sufficient. If your property has no rate assessment from the council, you\'ll need a specialist insurer who can underwrite rural and off-grid properties without a registered address.',
  },
];

export default function ContainerHomeInsurancePage() {
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
            <span className="text-green-300 text-sm font-semibold">🏗️ Container Home Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Container Home Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Shipping container homes are innovative, durable, and increasingly popular in NZ — but they require specialist insurance that understands non-standard construction. We connect you with advisers who do.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg">
            Get Container Home Insurance Advice →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* What is container home insurance */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Container Home Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Container home insurance is specialist building and contents cover designed for homes built from shipping containers (ISO standard 20ft or 40ft steel intermodal containers). These homes range from simple single-container sleepouts and studios to multi-container family homes with stacked or joined configurations, full-spec kitchens and bathrooms, high-end cladding and insulation, and off-grid energy systems.</p>
              <p className="text-stone-700 leading-relaxed mb-4">Because shipping containers are classified as &quot;non-standard construction&quot; by most mainstream home insurers — using corten steel rather than timber frame, brick, or concrete — many standard policies won&apos;t cover them, or will apply significant exclusions or undervalue the structure. Specialist container home insurance is underwritten by insurers with experience in non-standard builds, ensuring your home is covered at full replacement cost without arbitrary caps or exclusions.</p>
              <p className="text-stone-700 leading-relaxed">In New Zealand, the container home market has grown steadily since around 2015, with builders such as ContainerCo, NZ Steel Buildings, and a range of independent builders offering container conversions across the country. The finished product — properly insulated, lined, plumbed, and finished — can cost $80,000 for a basic single-container studio to $600,000+ for a premium multi-container family home.</p>
            </section>

            {/* Why standard doesn't work */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Home Insurers Often Decline Container Homes</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Most mainstream home insurers in New Zealand have underwriting rules that restrict coverage to &quot;standard construction&quot; — typically defined as timber frame or masonry with a standard roof, on a permanent foundation with a rateable value. Container homes fall outside these guidelines for several reasons:</p>
              <ul className="space-y-3 mb-4">
                {[
                  'Corten steel construction is classified as non-standard, leading to flat refusals or restrictive sub-limits on rebuilding costs',
                  'Homes without building consent (some older container builds) may be excluded under general consent-compliance clauses',
                  'Off-grid properties without a grid connection or registered address may not qualify for underwriting',
                  'Container homes on rural land or lifestyle blocks may be treated as outbuildings rather than primary dwellings',
                  'Modifications to the original container structure (cut-outs for windows and doors, welded additions) may be flagged as increasing structural risk',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed">Specialist insurers with experience in container homes understand that corten steel is actually a highly durable material, that modifications by qualified engineers are structurally sound, and that off-grid properties on lifestyle blocks are legitimate residential dwellings. Their underwriting models reflect reality — not outdated standard-construction norms.</p>
            </section>

            {/* Cover types */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Container Home Insurance Typically Covers</h2>

              <div className="space-y-5">
                {[
                  {
                    title: 'Building & Structure Cover',
                    icon: '🏠',
                    items: [
                      'Corten steel shell and structural components',
                      'Windows, doors, and custom openings',
                      'Internal linings, insulation, and fit-out',
                      'Plumbing, electrical, and heating systems',
                      'Fixed kitchen and bathroom fittings',
                      'Decking, verandas, and fixed external structures',
                      'Fire, storm, flood, earthquake, and accidental damage',
                    ],
                  },
                  {
                    title: 'Contents Insurance',
                    icon: '📦',
                    items: [
                      'Furniture, appliances, and electronics',
                      'Clothing, valuables, and personal effects',
                      'Tools and equipment',
                      'Replacement-as-new cover for most items',
                    ],
                  },
                  {
                    title: 'Off-Grid Systems (Optional Endorsement)',
                    icon: '☀️',
                    items: [
                      'Solar panels and mounting systems',
                      'Battery storage (Tesla Powerwall, Pylontech, etc.)',
                      'Charge controllers and inverters',
                      'Rainwater collection and treatment systems',
                      'Composting or septic systems',
                    ],
                  },
                  {
                    title: 'Public Liability',
                    icon: '🛡️',
                    items: [
                      'Visitor injury on your property',
                      'Third-party property damage',
                      'Legal defence and compensation costs',
                    ],
                  },
                ].map(block => (
                  <div key={block.title} className="bg-stone-50 rounded-xl p-5 border border-stone-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{block.icon}</span>
                      <h3 className="font-bold text-stone-900">{block.title}</h3>
                    </div>
                    <ul className="space-y-1.5 grid sm:grid-cols-2">
                      {block.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-brand-600 font-bold mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* NZ context */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Container Homes: Insurance and Legal Context</h2>
              <p className="text-stone-700 leading-relaxed mb-4">New Zealand&apos;s Building Code (Building Act 2004 and Building Code Clause B1 — Structure) requires that all permanent dwellings meet structural performance standards. Container homes can meet these standards — many engineers have developed standard structural specifications for common container configurations — but it requires documentation: engineering calculations, producer statements, and in many cases a consent from your local council.</p>
              <p className="text-stone-700 leading-relaxed mb-4">From a natural disaster perspective, New Zealand&apos;s Natural Hazards Insurance Act 2023 (which replaced the EQC Act) covers earthquake, landslip, volcanic eruption, tsunami, and certain storm damage for eligible residential buildings. Container homes with a rateable value and registered address may qualify for natural disaster cover under the Act&apos;s provisions. Those without a registered address or rateable value need explicit earthquake and natural hazard coverage within their specialist building policy.</p>
              <p className="text-stone-700 leading-relaxed mb-4">For container homes used as rental accommodation — particularly short-stay or Airbnb listings — <Link href="/coverage/landlord-insurance/" className="text-brand-700 hover:text-brand-800 font-medium underline">landlord insurance</Link> provides specific cover for tenant damage, liability, and rental income loss. This is separate from standard building and contents cover and is essential if you&apos;re earning rental income.</p>
              <p className="text-stone-700 leading-relaxed">The <Link href="/blog/container-home-insurance-nz/" className="text-brand-700 hover:text-brand-800 font-medium underline">complete NZ guide to container home insurance</Link> covers building consent, site requirements, and how to get the right cover for your specific build. Our advisers can also help you navigate the consent process if you&apos;re still in the planning stage.</p>
            </section>

            {/* Getting the sum insured right */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-4">The most common insurance mistake container home owners make is underinsuring — setting a sum insured based on purchase price or council valuation rather than the full cost to rebuild. For container homes, the rebuild cost includes:</p>
              <ul className="space-y-2 mb-5">
                {[
                  'Cost of new container(s) at current prices (container prices fluctuate significantly)',
                  'Transport and placement costs to your site',
                  'Structural modifications: cut-outs, welds, reinforcements (require qualified engineering)',
                  'Insulation and internal lining (spray foam or panel insulation)',
                  'Full fit-out: kitchen, bathroom, flooring, windows, doors',
                  'Electrical and plumbing installation by licensed tradespeople',
                  'Off-grid systems installation (solar, battery, water)',
                  'Decking, access ramps, and external structures',
                  'Demolition and site clearance costs (often overlooked)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed mb-5 text-sm">A specialist adviser can help you calculate an accurate sum insured. If you have detailed quotes or invoices from your build, bring these to your appointment — they&apos;re the best evidence of rebuild cost.</p>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-bold rounded-lg hover:bg-brand-800 transition shadow-sm">
                Talk to a Container Home Specialist →
              </Link>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Container Home Insurance FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">Compare insurers for container homes</p>
                <p className="text-sm text-stone-600 mt-1">See how specialist providers compare against mainstream NZ insurers for non-standard construction cover.</p>
              </div>
              <Link href="/compare/" className="flex-shrink-0 px-5 py-2.5 bg-stone-800 text-white text-sm font-bold rounded-lg hover:bg-stone-900 transition">
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
                  { href: '/coverage/public-liability/', icon: '🛡️', label: 'Public Liability' },
                  { href: '/coverage/off-grid-systems/', icon: '☀️', label: 'Off-Grid Systems' },
                  { href: '/coverage/landlord-insurance/', icon: '🔑', label: 'Landlord Insurance' },
                  { href: '/coverage/loss-of-use/', icon: '🏕️', label: 'Loss of Use' },
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
              <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
              <ul className="space-y-3">
                {[
                  { href: '/blog/container-home-insurance-nz/', label: 'Container Home Insurance NZ Guide' },
                  { href: '/blog/tiny-home-insurance-nz-guide/', label: 'The Complete NZ Tiny Home Insurance Guide' },
                  { href: '/blog/off-grid-tiny-home-insurance/', label: 'Off-Grid Tiny Home Insurance' },
                  { href: '/blog/nz-tiny-home-building-regulations-2026/', label: 'NZ Building Regulations 2026' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />
    </div>
  );
}
