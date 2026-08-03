import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Garden Pod & Studio Pod Insurance | TinyHomeInsurance.co.nz',
  description: 'Specialist insurance for garden pods, studio pods, granny flats, and prefab sleepouts. Cover for secondary dwellings, home offices, Airbnb pods, and artist studios.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/garden-pod-insurance/' },
};

const faqs = [
  {
    q: 'Is my garden pod covered under my existing home insurance policy?',
    a: 'This depends heavily on your specific policy wording. Many home insurance policies include some limited cover for outbuildings — typically garages, sheds, or fences — but the coverage limit is usually far too low to replace a quality garden pod, and the cover may be conditional on the structure being used for storage rather than habitation or commercial use. If your pod is used as a sleepout, rental unit, home office with client visits, or Airbnb accommodation, it is very likely that your existing home policy either does not cover it at all or will not cover claims arising from those uses. A separate specialist policy is almost always the safer choice.',
  },
  {
    q: 'Does the 2026 building consent exemption for sub-70m² pods affect my ability to insure the pod?',
    a: 'The consent exemption removes the administrative requirement to obtain building consent for smaller pods in eligible zones — it does not change the standards the pod must meet or affect insurability directly. Insurers are primarily interested in construction quality, not consent status. A pod built without consent but to good standards with quality materials can still be insured. However, a pod built to substandard quality that happens to be exempt from consent will face the same underwriting scrutiny as any other non-consented structure. If your pod was built by a reputable manufacturer and is structurally sound, the consent exemption should not be a barrier to insurance.',
  },
  {
    q: 'Can I insure a garden pod that I am renting out on Airbnb?',
    a: 'Yes, but you need to be transparent with your insurer about the Airbnb use. Short-term rental use creates different liability risks compared with a pod used purely for personal purposes — guests come and go, there is a higher frequency of use, and liability exposure increases. Most specialist policies can accommodate short-term rental, but the public liability component of your policy becomes particularly important. Confirm that your policy covers injury to guests inside the pod, damage caused by guests, and any loss of rental income if the pod is damaged and unavailable for bookings.',
  },
  {
    q: 'Should the contents of my garden pod be covered separately from my house contents?',
    a: 'Yes, in most cases separate contents cover for the pod makes sense. Your main home contents policy may have a limit on how much it covers at outbuildings, and that limit is often too low for a pod fitted with quality furniture, electronics, or specialist equipment such as musical instruments, art supplies, or professional computing equipment. Specifying the pod contents separately ensures the right sum insured applies and avoids disputes about whether the insurer\'s outbuilding limit was adequate. If you are using the pod as a short-term rental, keeping contents coverage separate also makes the rental use clearer for underwriting purposes.',
  },
  {
    q: 'Can I insure a garden pod that is still under construction or has just been delivered but not yet finished?',
    a: 'Cover during the construction or completion phase is available but needs to be arranged proactively — your standard building or contents policy may not automatically respond while the structure is unfinished or during the installation process. Construction phase cover (sometimes called contract works insurance) protects against damage, theft of materials, and liability incidents during the build. Once the pod is complete and handed over, it transitions to a standard building policy. If your pod is factory-built and delivered as a completed unit, the key risk period is transit and installation — make sure the supplier\'s transit insurance is adequate and that you have coverage in place from the moment the pod is on your property.',
  },
];

export default function GardenPodInsurancePage() {
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
            <span className="text-green-300 text-sm font-semibold">🌿 Garden Pod Specialist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            Garden Pod &amp; Studio Pod Insurance
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Specialist cover for garden pods, studio pods, granny flat sleepouts, and prefab secondary dwellings — whether you use your pod as a home office, Airbnb rental, or self-contained granny flat.
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

            {/* What Is Garden Pod Insurance? */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Is Garden Pod Insurance?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Garden pod insurance is specialist cover for prefabricated or purpose-built secondary structures placed in a residential garden or section — including studio pods, granny flat sleepouts, home office pods, artist studios, and self-contained accommodation units. These structures are distinct from simple garden sheds or garages: they are habitable spaces with insulation, lining, electrical connections, and often plumbing — yet they frequently fall into the gap between a standard home insurance outbuilding limit and a full residential building policy.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The garden pod market has grown substantially in recent years, driven by demand for affordable secondary dwellings, the growing gig economy use of garden spaces as home offices, and the popularity of Airbnb-style short-term accommodation in residential properties. Quality garden pods from leading manufacturers now represent significant capital investments — a well-specified studio pod with bathroom, kitchenette, and good insulation can easily cost $60,000–$120,000 or more to supply and install. That level of investment deserves dedicated insurance coverage, not an afterthought in an outbuilding limit.
              </p>
              <p className="text-stone-700 leading-relaxed">
                The challenge is that mainstream insurers design their home policies around a single primary dwelling on a residential section. A secondary structure that is used as accommodation, generates rental income, or receives regular third-party visits presents a materially different risk profile — one that standard home insurance is often not structured to address adequately. A specialist garden pod policy recognises how you actually use the structure and provides cover that matches.
              </p>
            </section>

            {/* Why Mainstream Insurers Often Say No */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Why Mainstream Insurers Often Say No</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                Mainstream home policies were written with a standard house as the primary dwelling in mind. Garden pods and secondary structures create underwriting questions that most standard policies are simply not equipped to answer well.
              </p>
              <ul className="space-y-3">
                {[
                  'Outbuilding classification: standard policies treat secondary structures as minor outbuildings (garages, sheds), not habitable dwellings — and apply coverage limits that reflect this, often $10,000–$20,000 maximum.',
                  'Unclear use: underwriters may not know how to categorise a structure that is sometimes a home office, sometimes rented on Airbnb, and sometimes used by family — the changing use creates uncertainty about which risks apply.',
                  'Non-standard construction: prefab and modular construction methods may be unfamiliar to mainstream insurers, making it difficult to assess rebuild value accurately.',
                  'Rental income exposure: any income-generating use from the pod may void or limit standard home insurance coverage, as most home policies exclude commercial activities.',
                  'Consent and compliance: pods without building consent — even those legitimately exempt — may trigger questions from mainstream insurers who use consent as a proxy for construction quality.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What Garden Pod Insurance Typically Covers */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Garden Pod Insurance Typically Covers</h2>
              <p className="text-stone-700 leading-relaxed mb-6">
                A comprehensive garden pod policy is structured around four key components, each addressing a distinct aspect of your pod's risk exposure.
              </p>
              {[
                {
                  title: 'Building Structure (The Pod)',
                  icon: '🏠',
                  items: [
                    'Structural frame, walls, and roof',
                    'Windows, doors, and glazing',
                    'Cladding and exterior finishes',
                    'Internal linings and insulation',
                    'Fixed kitchen and bathroom fittings',
                    'Electrical systems and wiring',
                    'Plumbing and hot water systems',
                    'Decks, steps, and ramps',
                  ],
                },
                {
                  title: 'Contents',
                  icon: '📦',
                  items: [
                    'Furniture and furnishings',
                    'Electronics and computers',
                    'Specialist equipment (art, music, office)',
                    'Appliances and white goods',
                    'Linen and soft furnishings',
                    'Tools and outdoor equipment',
                  ],
                },
                {
                  title: 'Public Liability (Guests & Visitors)',
                  icon: '🛡️',
                  items: [
                    'Injury to Airbnb guests or tenants',
                    'Injury to clients visiting home office',
                    'Property damage caused to adjoining areas',
                    'Legal defence costs',
                    'Medical expenses for third-party injury',
                  ],
                },
                {
                  title: 'Off-Grid Systems (Optional)',
                  icon: '☀️',
                  items: [
                    'Solar panels and mounting systems',
                    'Battery storage systems',
                    'Rainwater collection and filtration',
                    'Composting toilet systems',
                    'Charge controllers and inverters',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Garden Pods and the Planning Landscape</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The regulatory environment for garden pods has evolved significantly. The 2026 building consent exemption rules extended the Schedule 1 exemptions under the Building Act 2004 to include certain smaller habitable structures — specifically, relocatable buildings under 70m² meeting defined engineering and safety standards. This has made the path to a lawfully sited garden pod simpler for many homeowners, removing the cost and time of a full consent process for qualifying structures.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The Auckland Unitary Plan has been a significant enabler for secondary dwellings in New Zealand's largest city, permitting secondary units on most residential sites in Mixed Housing Suburban and Mixed Housing Urban zones. Similar provisions exist in Wellington, Christchurch, and other councils with progressive infill housing policies. Where a garden pod meets the definition of a secondary dwelling under the relevant district plan, it may be subject to additional requirements around maximum floor area, setbacks, and connections to services.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                If you rent your pod out on a longer-term basis (more than 90 days or as someone's primary residence), the Residential Tenancies Act 1986 applies — and this has important implications for both your obligations as a landlord and for insurance. Landlord insurance (which covers things like loss of rent, intentional damage by tenants, and tenant liability) becomes relevant once the pod is tenanted under an RTA-regulated arrangement.
              </p>
              <p className="text-stone-700 leading-relaxed">
                For Airbnb-style short-term rentals, you are operating outside the RTA framework, but public liability exposure increases significantly. Every guest who enters your pod is a third party who could be injured on your property. Ensuring your policy explicitly covers short-term rental guests — not just family and friends — is essential before you accept your first booking.
              </p>
            </section>

            {/* Sum Insured Guidance */}
            <section className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Getting Your Sum Insured Right</h2>
              <p className="text-stone-700 leading-relaxed mb-5">
                The biggest mistake garden pod owners make is relying on their main home insurance policy's outbuilding limit — which is almost always far too low. Your sum insured for the pod should reflect the actual cost of demolishing and rebuilding or replacing the structure from scratch, including all connections and site work.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Supply cost of an equivalent quality pod from the manufacturer',
                  'Delivery and crane or installation costs',
                  'Foundation or pad preparation',
                  'Electrical connection from main house or meter',
                  'Plumbing and wastewater connections',
                  'Decking, pathways, and landscaping disturbed during installation',
                  'Consenting or engineering costs if required for the replacement',
                  'Temporary accommodation if you lose rental income during repair',
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
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Garden Pod Insurance FAQs</h2>
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
