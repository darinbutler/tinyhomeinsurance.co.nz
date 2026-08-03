import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata = {
  title: 'Off-Grid Home Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for off-grid homes and tiny homes in New Zealand. Cover for solar panels, battery systems, rainwater infrastructure, and remote rural properties.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/off-grid-home-insurance/' },
};

const systemsCovered = [
  { icon: '☀️', title: 'Solar Energy Systems', items: ['Rooftop and ground-mounted solar panels', 'Micro-inverters and string inverters', 'DC isolators and wiring', 'Monitoring systems and smart controllers', 'Storm and hail damage', 'Theft of panels from remote sites'] },
  { icon: '🔋', title: 'Battery Storage', items: ['Lithium iron phosphate (LiFePO4) battery banks', 'Tesla Powerwall and equivalent systems', 'Lead-acid and gel battery arrays', 'Battery management systems (BMS)', 'Fire damage from battery thermal events', 'Water ingress and weather damage'] },
  { icon: '💧', title: 'Water Systems', items: ['Rainwater collection tanks (poly and steel)', 'Submersible and pressure pumps', 'UV filtration and treatment systems', 'Greywater treatment systems', 'Frost and freeze damage (South Island)', 'Storm damage to collection infrastructure'] },
  { icon: '♻️', title: 'Waste Management', items: ['Composting toilet systems', 'Septic and primary treatment systems', 'Aerobic treatment units (ATUs)', 'Greywater dispersal systems', 'Mechanical failure cover (some policies)'] },
];

const faqs = [
  {
    q: 'Are my solar panels automatically covered under my home building insurance?',
    a: 'Not always. Many standard home building policies cover solar panels as part of the structure if they\'re permanently fixed to the roof — but "permanently fixed" is often interpreted narrowly. Ground-mounted arrays, battery sheds, and off-grid infrastructure away from the main structure may not be automatically included. Always ask your insurer specifically about solar panels and battery systems.',
  },
  {
    q: 'What happens if my battery bank catches fire? Is that covered?',
    a: 'Battery thermal events (internal cell failure leading to fire) are an emerging risk that not all insurers address clearly. Specialist off-grid policies typically cover fire damage from battery systems including the cost of replacing the battery bank, repairing structural damage, and any related contents damage. Check your policy wording for specific battery fire exclusions.',
  },
  {
    q: 'My property has no street address. Can I still get insurance?',
    a: 'Yes. While mainstream insurers typically need a registered street address, specialist off-grid insurers routinely cover rural and remote properties using GPS coordinates, lot numbers, or property descriptions. You\'ll need to provide accurate location information, and the insurer may apply a rural or remote loading to your premium.',
  },
  {
    q: 'Is an off-grid home covered for earthquake damage in NZ?',
    a: 'Properties with a registered address and rateable value may qualify for coverage under New Zealand\'s Natural Hazards Insurance Act 2023. Off-grid homes without a registered address or rateable value may not qualify, meaning earthquake cover must be explicitly included in your specialist building policy. Always confirm with your adviser.',
  },
  {
    q: 'Can I cover my off-grid home if it\'s on leased or Māori land?',
    a: 'Yes, though the legal structure of the land ownership may affect how the policy is written. Homes on Māori land (including whenua Māori leases) can be insured for the structure and contents — even if the land itself is not owned. Your adviser will need details of the lease arrangement to structure the policy correctly.',
  },
  {
    q: 'How do I insure off-grid systems that aren\'t permanently attached to the house?',
    a: 'Detached infrastructure — a battery shed 50 metres from the main house, a ground-mounted solar array on a hill — typically requires a specific endorsement or a separate outbuildings and infrastructure policy. Describe your full site layout to your adviser so they can ensure nothing is inadvertently excluded.',
  },
];

export default function OffGridHomeInsurancePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.75) 0%, rgba(10,55,25,0.65) 50%, rgba(0,25,8,0.82) 100%), url('/images/tinyhome_insurance_1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-300 text-sm font-semibold">☀️ Off-Grid Specialist Insurance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Off-Grid Home Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Off-grid living means investing in solar, batteries, rainwater, and more. Standard home insurance rarely covers these systems properly. Specialist off-grid cover protects everything you&apos;ve built.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg">
            Get Off-Grid Insurance Advice →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* What is off-grid home insurance */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Off-Grid Home Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Off-grid home insurance is specialist cover for properties that operate independently of the national electricity grid, reticulated water supply, or public sewerage — or all three. In New Zealand, off-grid living is most common in rural and semi-rural settings: lifestyle blocks, forestry land, remote coastal properties, and tiny home communities where grid connection is impractical or undesirable.</p>
              <p className="text-stone-700 leading-relaxed mb-4">An off-grid home typically includes significant investment in energy and water infrastructure: solar panels, battery storage, inverters, generators, rainwater tanks and pump systems, filtration and treatment equipment, and composting or septic waste systems. The total value of this infrastructure can easily be $30,000 to $150,000 on top of the building structure itself.</p>
              <p className="text-stone-700 leading-relaxed mb-4">Mainstream home insurers are not set up to underwrite this complexity. Their models assume grid connection, reticulated water, and standard waste disposal. Off-grid homes fall into a &quot;too hard&quot; category for many standard insurers — leading to flat refusals, arbitrary exclusions, or policies that leave critical infrastructure completely uninsured.</p>
              <p className="text-stone-700 leading-relaxed">Specialist off-grid home insurance is designed specifically for this reality. It covers the building structure, the off-grid systems, the contents, and your liability — in a single policy that understands how off-grid living actually works.</p>
            </section>

            {/* Off-grid systems coverage */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Off-Grid Systems: What&apos;s Covered</h2>
              <p className="text-stone-700 leading-relaxed mb-6">Specialist off-grid insurance can cover all elements of your energy and water independence. Below are the main system categories and what cover typically includes:</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {systemsCovered.map(block => (
                  <div key={block.title} className="bg-stone-50 rounded-xl p-5 border border-stone-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{block.icon}</span>
                      <h3 className="font-bold text-stone-900 text-sm">{block.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
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

            {/* NZ off-grid context */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Off-Grid Living: The Insurance Landscape</h2>
              <p className="text-stone-700 leading-relaxed mb-4">New Zealand has some of the best conditions in the world for off-grid living: high solar irradiance (especially in the North Island and Marlborough/Nelson regions), abundant rainfall for water collection, and significant land availability in rural areas. The country&apos;s geography — from Northland&apos;s subtropical warmth to Otago&apos;s high country cold — means that off-grid system design and insurance risk vary considerably by region.</p>
              <p className="text-stone-700 leading-relaxed mb-4">From an insurance perspective, New Zealand has no specific regulation governing off-grid properties as a category. The Financial Markets Conduct Act 2013 governs all insurance products and requires clear disclosure of coverage and exclusions. When you buy off-grid home insurance, the insurer must provide you with a product disclosure statement (PDS) that clearly identifies what is and isn&apos;t covered.</p>
              <p className="text-stone-700 leading-relaxed mb-4">Natural disaster cover is a key consideration. New Zealand&apos;s Natural Hazards Insurance Act 2023 provides coverage for earthquake, landslip, and certain storm damage for eligible properties. Off-grid homes without a registered address or rateable value may not qualify, meaning you need explicit natural hazard cover in your specialist policy. This is particularly important in seismically active regions like the East Coast, Hawke&apos;s Bay, Marlborough, and Wellington.</p>
              <p className="text-stone-700 leading-relaxed">Fire risk is elevated for some off-grid homes due to the combination of remote location, battery infrastructure, and potentially longer emergency response times. Good insurers will assess your fire risk based on your specific setup — battery type, storage location, fire suppression equipment, and distance from the nearest fire station. Investing in good fire safety measures (smoke detectors, fire extinguishers, battery storage separate from the main house) can positively affect your premium.</p>
            </section>

            {/* Healthy Homes */}
            <section className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Off-Grid Rentals and the Healthy Homes Standards</h2>
              <p className="text-stone-700 leading-relaxed mb-4">If you rent your off-grid tiny home to tenants, New Zealand&apos;s Healthy Homes Standards (which apply from 2021 for most rentals and 2024 for all private rentals) require minimum standards for insulation, heating, ventilation, moisture management, and draught stopping. Off-grid homes are not exempt from these standards.</p>
              <p className="text-stone-700 leading-relaxed mb-4">From an insurance perspective, compliance with Healthy Homes Standards doesn&apos;t directly affect your cover — but non-compliance can affect your liability if a tenant suffers health issues and makes a claim against you. <Link href="/coverage/landlord-insurance/" className="text-brand-700 hover:text-brand-800 font-medium underline">Tiny home landlord insurance</Link> provides liability cover for tenant injury and property damage claims, which is essential if you&apos;re renting to tenants.</p>
              <p className="text-stone-700 leading-relaxed">Our <Link href="/blog/healthy-homes-standards-tiny-home-nz/" className="text-brand-700 hover:text-brand-800 font-medium underline">guide to Healthy Homes Standards for tiny homes</Link> covers what&apos;s required and how off-grid heating and ventilation systems can meet the standards.</p>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Off-Grid Home Insurance FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Coverage links */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Coverage Types for Off-Grid Homes</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { href: '/coverage/building-structure/', icon: '🏠', label: 'Building & Structure', desc: 'Core structural cover for your home' },
                  { href: '/coverage/off-grid-systems/', icon: '☀️', label: 'Off-Grid Systems', desc: 'Solar, battery, water and waste' },
                  { href: '/coverage/contents-insurance/', icon: '📦', label: 'Contents Insurance', desc: 'Furniture, electronics, personal effects' },
                  { href: '/coverage/public-liability/', icon: '🛡️', label: 'Public Liability', desc: 'Visitor and third-party cover' },
                  { href: '/coverage/landlord-insurance/', icon: '🔑', label: 'Landlord Insurance', desc: 'For off-grid rental properties' },
                  { href: '/coverage/loss-of-use/', icon: '🏕️', label: 'Loss of Use', desc: 'Temporary accommodation cover' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex flex-col gap-1.5 p-4 rounded-xl border border-stone-200 hover:border-brand-300 hover:bg-brand-50 transition group">
                    <span className="text-2xl">{l.icon}</span>
                    <span className="font-semibold text-stone-900 group-hover:text-brand-800 text-sm">{l.label}</span>
                    <span className="text-xs text-stone-500">{l.desc}</span>
                  </Link>
                ))}
              </div>
            </section>

            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">See how insurers compare for off-grid cover</p>
                <p className="text-sm text-stone-600 mt-1">Not all NZ insurers cover off-grid homes. Our comparison shows who does — and what they include.</p>
              </div>
              <Link href="/compare/" className="flex-shrink-0 px-5 py-2.5 bg-stone-800 text-white text-sm font-bold rounded-lg hover:bg-stone-900 transition">
                Compare Insurers →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
              <ul className="space-y-3">
                {[
                  { href: '/blog/off-grid-tiny-home-insurance/', label: 'Off-Grid Tiny Home Insurance NZ Guide' },
                  { href: '/blog/healthy-homes-standards-tiny-home-nz/', label: 'Healthy Homes Standards for Tiny Homes' },
                  { href: '/blog/best-regions-tiny-home-living-nz/', label: 'Best NZ Regions for Off-Grid Living' },
                  { href: '/blog/tiny-home-earthquake-insurance-nz/', label: 'Earthquake Insurance for Remote Homes' },
                  { href: '/coverage/off-grid-systems/', label: 'Off-Grid Systems Cover: Full Guide' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-800 text-white rounded-xl p-5 text-xs leading-relaxed">
              <p className="font-bold text-green-400 mb-1">Off-Grid Specialists</p>
              <p className="text-stone-300">We work with NZ insurers who understand off-grid living — solar, battery, rainwater, composting toilets — and can cover your full property on a single policy.</p>
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
