import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Tiny Home on Wheels Insurance NZ | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for tiny homes on wheels (THOW) in NZ. Building, transit, liability and contents cover for THOWs parked or in motion. NZ-licensed advisers.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/tiny-home-on-wheels/' },
};

const faqs = [
  {
    q: 'Is my THOW covered when it\'s parked on private land?',
    a: 'Yes. Most specialist THOW policies cover your tiny home on wheels while it\'s stationary on a declared site — whether that\'s private rural land, a lifestyle block, a leased section, or a campground. You must declare the site address when you take out the policy, and notify your insurer if you change location.',
  },
  {
    q: 'What happens to my insurance when I\'m towing my THOW?',
    a: 'When your THOW is in transit, your building cover is typically suspended and transit cover takes over. This covers structural damage, overturning, collision, and accidental damage during towing. Many specialist policies make the switch automatically, but always confirm this with your adviser before moving.',
  },
  {
    q: 'My THOW is built on a trailer — can I use my car insurance to cover it?',
    a: 'No. Your car or tow vehicle insurance covers the vehicle itself, not the THOW being towed. The THOW requires its own specialist insurance policy that covers the structure (building cover) when stationary and transit cover while moving. A standard caravan policy is not appropriate for a THOW, as it won\'t cover the value of a high-spec custom build.',
  },
  {
    q: 'Can I get THOW insurance if my home doesn\'t have building consent?',
    a: 'Building consent rules for THOWs changed in New Zealand in recent years. Many THOWs are classified as vehicles rather than buildings and may not require building consent. However, your insurer needs accurate information about your home\'s construction, size, and classification. Disclosure is essential — if you\'re unsure of your consent status, a specialist adviser can help you clarify this before applying.',
  },
  {
    q: 'Does THOW insurance cover off-grid systems like solar panels?',
    a: 'Standard building policies may not automatically cover off-grid systems. Ask specifically about solar panels, battery banks, inverters, and rainwater systems — these may require an endorsement or separate off-grid systems cover. Specialist tiny home insurers are more likely to include these as standard or offer them as optional add-ons.',
  },
  {
    q: 'How is the sum insured calculated for a custom THOW?',
    a: 'The sum insured should reflect the full cost to rebuild your THOW from scratch today — not what you paid for it. If your THOW cost $120,000 to build but custom joinery, materials, and labour would cost $180,000 to replicate today, your sum insured should be $180,000. Getting an accurate rebuild estimate from your builder or a specialist estimator is the best starting point.',
  },
];

export default function TinyHomeOnWheelsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.75) 0%, rgba(10,55,25,0.65) 50%, rgba(0,25,8,0.82) 100%), url('/images/tinyhome_insurance_2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-300 text-sm font-semibold">🚛 THOW Specialist Cover</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Tiny Home on Wheels Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Your THOW is a full-time home, a significant investment, and a unique asset that needs specialist insurance. Standard caravan, campervan, or house policies don&apos;t cut it — specialist THOW insurance does.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg">
            Get THOW Insurance Advice →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* What is a THOW */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is a Tiny Home on Wheels (THOW)?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">A tiny home on wheels (THOW) is a purpose-built dwelling constructed on a steel trailer chassis, designed to be towed by a vehicle and used as a primary or secondary residence. THOWs are distinct from caravans and campervans in that they are built to residential standards — with insulation, full kitchens, wet areas, sleeping lofts, and often off-grid energy systems — rather than recreational standards.</p>
              <p className="text-stone-700 leading-relaxed mb-4">In New Zealand, the THOW movement has grown significantly since the mid-2010s, driven by housing affordability, lifestyle flexibility, and environmental values. There are now several NZ-based THOW builders including Bachlife, Build Tiny, and Tiny House Company, along with a growing community of owner-builders who construct their own homes to individual specifications.</p>
              <p className="text-stone-700 leading-relaxed mb-4">THOWs in New Zealand typically range from 6 metres to 11 metres in length, are built on trailers ranging from 3.5 tonnes to 12 tonnes, and can be valued anywhere from $60,000 for a basic build to $350,000+ for a premium custom design with full off-grid capability.</p>
              <p className="text-stone-700 leading-relaxed">Because a THOW is legally classified as a vehicle in New Zealand (it is registered with NZTA as a heavy trailer), it falls outside the scope of standard home insurance. It also doesn&apos;t fully fit within caravan or campervan insurance, which is designed for recreational vehicles rather than residential dwellings. This is why specialist THOW insurance exists — and why it matters.</p>
            </section>

            {/* Why standard doesn't work */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Standard Insurance Doesn&apos;t Work for THOWs</h2>
              <p className="text-stone-700 leading-relaxed mb-4">When THOW owners approach mainstream home insurers — AA, State, AMI, Tower — they typically encounter one of three responses:</p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                  <div>
                    <p className="font-semibold text-stone-900">Flat refusal</p>
                    <p className="text-stone-600 text-sm mt-1">Most home insurers will not quote on a structure classified as a vehicle or on wheels. Their underwriting systems are built around rateable properties with a fixed address.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-amber-600 font-bold text-lg mt-0.5">⚠</span>
                  <div>
                    <p className="font-semibold text-stone-900">Inappropriate caravan policy</p>
                    <p className="text-stone-600 text-sm mt-1">Some providers will offer a caravan policy, which is designed for recreational use — not for a $200,000 custom residential dwelling. Maximum caravan sums insured are often capped at $80,000–$100,000, well below the replacement cost of a modern THOW.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-amber-600 font-bold text-lg mt-0.5">⚠</span>
                  <div>
                    <p className="font-semibold text-stone-900">Full exclusions for transit</p>
                    <p className="text-stone-600 text-sm mt-1">Standard home policies have no provision for transit cover — leaving your THOW completely uninsured from the moment it starts moving.</p>
                  </div>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed">Specialist THOW insurance resolves all three issues. It&apos;s underwritten specifically for residential-standard dwellings on trailer chassis, covers the full replacement cost regardless of value, and includes seamless transit cover that activates the moment your THOW moves and deactivates when it&apos;s back on site.</p>
            </section>

            {/* What THOW insurance covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What THOW Insurance Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">A comprehensive THOW insurance package typically includes several components that work together to cover your home in every situation:</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🏠', title: 'Building Cover (Stationary)', items: ['Full replacement cost for the structure', 'Fire, storm, flood, earthquake', 'Accidental damage', 'Vandalism and malicious damage', 'Burst pipes, electrical faults', 'Solar panels and fixed off-grid systems'] },
                  { icon: '🚛', title: 'Transit Cover (In Motion)', items: ['Structural damage during towing', 'Overturning or accident', 'Road impact and collision', 'Loading and unloading damage', 'Theft while in transit', 'Emergency costs after accident'] },
                  { icon: '📦', title: 'Contents Insurance', items: ['Furniture and appliances', 'Electronics and valuables', 'Clothing and personal effects', 'Bicycles and outdoor gear', 'Tools and equipment', 'Portable items both in and out of home'] },
                  { icon: '🛡️', title: 'Public Liability', items: ['Visitor injury at your site', 'Damage to neighbours\' property', 'Legal defence costs', 'Compensation payments', 'Short-stay and Airbnb guest liability', 'Campground and park liability'] },
                ].map(block => (
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

              <p className="text-stone-700 leading-relaxed text-sm">Optional add-ons with many specialist providers include loss of use cover (temporary accommodation costs if your THOW is uninhabitable during repairs) and off-grid systems cover (battery banks, inverters, rainwater infrastructure). Discuss your full requirements with a specialist adviser.</p>
            </section>

            {/* NZTA & Registration */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">THOW Registration and the Law</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Under New Zealand law, a THOW is classified as a heavy trailer if it exceeds 3,500 kg gross vehicle mass (GVM). This means it must be registered with NZTA, have a current WoF (Warrant of Fitness) or CoF (Certificate of Fitness), and meet road safety standards for trailer design and lighting.</p>
              <p className="text-stone-700 leading-relaxed mb-4">The trailer registration and the THOW structure are treated separately for insurance purposes. Your tow vehicle&apos;s third-party motor vehicle insurance covers your liability as a driver but does not cover the THOW structure itself in the event of accident damage or rollover. The THOW requires its own specialist policy.</p>
              <p className="text-stone-700 leading-relaxed mb-4">From a resource consent and land use perspective, where you park a THOW matters. Many local councils in New Zealand have specific rules about parking a THOW on rural land, residential sections, or in campgrounds as a permanent dwelling. Some councils require resource consent for permanent or semi-permanent occupation; others treat it as permitted activity. Your insurer will ask for your site address and may ask about consent status during the application process.</p>
              <p className="text-stone-700 leading-relaxed">The <Link href="/blog/nzta-rules-tiny-home-wheels-nz/" className="text-brand-700 hover:text-brand-800 font-medium underline">NZTA rules for tiny homes on wheels</Link> and the resource consent landscape are both evolving in New Zealand. Staying current with your local council&apos;s rules and keeping your insurer informed of any site changes is the best way to ensure your cover remains valid.</p>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">THOW Insurance FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related coverage links */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Key Coverage Types for THOW Owners</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { href: '/coverage/building-structure/', icon: '🏠', label: 'Building & Structure', desc: 'Core structural cover while stationary' },
                  { href: '/coverage/transit-towing-cover/', icon: '🚛', label: 'Transit & Towing', desc: 'Cover while your THOW is moving' },
                  { href: '/coverage/public-liability/', icon: '🛡️', label: 'Public Liability', desc: 'Visitor and third-party claims' },
                  { href: '/coverage/contents-insurance/', icon: '📦', label: 'Contents Insurance', desc: 'Personal belongings and valuables' },
                  { href: '/coverage/off-grid-systems/', icon: '☀️', label: 'Off-Grid Systems', desc: 'Solar, battery, and water systems' },
                  { href: '/coverage/loss-of-use/', icon: '🏕️', label: 'Loss of Use', desc: 'Temporary accommodation costs' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex flex-col gap-1.5 p-4 rounded-xl border border-stone-200 hover:border-brand-300 hover:bg-brand-50 transition group">
                    <span className="text-2xl">{l.icon}</span>
                    <span className="font-semibold text-stone-900 group-hover:text-brand-800 text-sm">{l.label}</span>
                    <span className="text-xs text-stone-500">{l.desc}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Compare CTA */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">Compare THOW insurers</p>
                <p className="text-sm text-stone-600 mt-1">See how AA, Initio, State and specialist providers compare for tiny home on wheels cover.</p>
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
                  { href: '/blog/thow-insurance-nz/', label: 'THOW Insurance: The Complete NZ Guide' },
                  { href: '/blog/nzta-rules-tiny-home-wheels-nz/', label: 'NZTA Rules for Tiny Homes on Wheels' },
                  { href: '/blog/tiny-home-insurance-nz-guide/', label: 'Tiny Home Insurance NZ: Everything You Need to Know' },
                  { href: '/blog/nz-tiny-home-communities-2026/', label: 'NZ Tiny Home Communities 2026' },
                  { href: '/blog/tiny-home-building-consent-exemption-2026/', label: 'Building Consent Rules for THOWs' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-800 text-white rounded-xl p-5 text-xs leading-relaxed">
              <p className="font-bold text-green-400 mb-1">NZ THOW Specialists</p>
              <p className="text-stone-300">We work with insurers who specifically underwrite tiny homes on wheels — not generic comparison sites. Our advisers understand NZTA registration, campground siting, and off-grid living requirements.</p>
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
