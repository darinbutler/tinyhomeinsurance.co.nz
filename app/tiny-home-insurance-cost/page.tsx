import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata = {
  title: 'Tiny Home Insurance Cost NZ 2026 | TinyHomeInsurance.co.nz',
  description: 'How much does tiny home insurance cost in New Zealand? Indicative premium ranges, what affects your price, and how to get the right cover without overpaying.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/tiny-home-insurance-cost/' },
};

const costFactors = [
  {
    title: 'Sum Insured (Rebuild Cost)',
    icon: '💰',
    desc: 'The single biggest driver of your premium. A $100,000 THOW costs less to insure than a $300,000 custom off-grid build. Getting an accurate sum insured is critical — underinsuring saves on premium but leaves you exposed at claim time.',
  },
  {
    title: 'Construction Type',
    icon: '🏗️',
    desc: 'Standard timber-frame tiny homes typically attract the lowest premiums. Container conversions and non-standard materials (recycled timber, polystyrene panels, rammed earth) may attract a loading. THOWs on trailers are a specialist category with their own rating.',
  },
  {
    title: 'Location and Site',
    icon: '📍',
    desc: 'High-risk locations (flood plains, steep terrain, bushfire-prone land, high-wind coastal sites) attract premium loadings. Rural or remote properties may attract a loading for emergency response times. Secure, well-maintained sites can reduce premiums.',
  },
  {
    title: 'Claims History',
    icon: '📋',
    desc: 'A claims-free history typically earns a discount. Multiple claims in the past five years will increase your premium. Be honest when disclosing your history — non-disclosure can void your policy.',
  },
  {
    title: 'Security Features',
    icon: '🔒',
    desc: 'Deadbolts, alarm systems, security lighting, and secure perimeter fencing can all reduce your premium. For THOWs, wheel clamps and hitch locks reduce theft risk and may reduce transit and building premiums.',
  },
  {
    title: 'Coverage Selected',
    icon: '📄',
    desc: 'Building-only cover is cheaper than a comprehensive package (building + contents + liability + off-grid + loss of use). Select cover appropriate to your needs and budget — a specialist adviser can help you prioritise.',
  },
  {
    title: 'Excess (Deductible)',
    icon: '⚖️',
    desc: 'Choosing a higher voluntary excess reduces your premium. A standard $500 excess is typical; choosing $2,000 or $5,000 can materially reduce your annual cost. Only choose a higher excess if you could comfortably self-fund that amount.',
  },
  {
    title: 'Off-Grid Systems',
    icon: '☀️',
    desc: 'Adding off-grid systems cover (solar panels, battery banks, rainwater systems) increases your premium, but may be significantly less expensive than insuring these items separately. The more detailed the inventory, the more accurate the premium.',
  },
];

const faqs = [
  {
    q: 'How much does tiny home insurance typically cost in New Zealand?',
    a: 'Indicative premiums for a standard tiny home building and contents policy in New Zealand range from approximately $800–$1,800 per year, depending on the factors described above. A $150,000 THOW with contents and liability on a secure rural site might cost around $1,200–$1,500 annually. A $300,000 custom off-grid build with full systems cover could be $2,000–$3,500+. These are indicative figures only — your actual premium depends on your specific circumstances.',
  },
  {
    q: 'Is tiny home insurance cheaper than regular house insurance?',
    a: 'Not necessarily. While the sum insured may be lower, specialist underwriting for non-standard builds (THOWs, container homes, off-grid) often means premiums are comparable to or slightly higher than standard home insurance for the same sum insured. The key is getting cover that actually responds — a cheap standard policy that excludes your dwelling type provides no value.',
  },
  {
    q: 'Can I reduce my premium by increasing my excess?',
    a: 'Yes. Choosing a higher voluntary excess (e.g., $2,000 instead of $500) typically reduces your annual premium by 10–20%. However, this is only worth doing if you have the financial buffer to cover the higher excess in the event of a claim. Discuss excess options with your adviser.',
  },
  {
    q: 'Does adding off-grid cover significantly increase the premium?',
    a: 'Off-grid systems cover adds to your premium, but typically less than insuring the items separately. Adding $80,000 worth of solar and battery infrastructure to your policy might increase your annual premium by $200–$600, depending on the system type, value, and location. A specialist adviser can give you a more precise indication.',
  },
  {
    q: 'Do I have to pay more because my tiny home doesn\'t have building consent?',
    a: 'Not necessarily, but full disclosure is required. Homes built without consent (or with partial consent) need to be accurately described to your insurer. Some insurers will accept non-consented homes with appropriate disclosures; others won\'t. Non-disclosure of consent status is a serious risk — it can void your policy at claim time. A specialist adviser can help you navigate this.',
  },
  {
    q: 'Can I pay my tiny home insurance premium monthly?',
    a: 'Most NZ insurers offer monthly payment options, though paying annually typically saves 5–10% compared to the total of 12 monthly payments. Check with your insurer whether there are administration or interest fees on monthly payments.',
  },
];

export default function TinyHomeInsuranceCostPage() {
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
            <span className="text-green-300 text-sm font-semibold">💰 NZ Premium Guide — Updated 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
            How Much Does Tiny Home Insurance Cost?
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed mb-8">
            Premiums vary significantly based on your home type, location, and coverage selected. Here&apos;s a clear guide to what you can expect — and how to get the best value for your specific situation.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition shadow-lg text-lg">
            Get a Premium Estimate →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Indicative cost table */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Indicative Tiny Home Insurance Costs (2026)</h2>
              <p className="text-stone-600 mb-6 text-sm">The following are indicative premium ranges only. Your actual premium will depend on your specific home, location, coverage selected, and insurer. Always get a personalised quote from a specialist adviser.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200">
                      <th className="text-left p-3 font-bold text-stone-800">Scenario</th>
                      <th className="text-left p-3 font-bold text-stone-800">Sum Insured</th>
                      <th className="text-left p-3 font-bold text-stone-800">Cover</th>
                      <th className="text-left p-3 font-bold text-stone-800">Indicative Annual Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { scenario: 'Basic THOW, rural site', sum: '$100,000', cover: 'Building only', premium: '$700 – $1,100' },
                      { scenario: 'Standard THOW, campground', sum: '$150,000', cover: 'Building + contents + liability', premium: '$1,200 – $1,700' },
                      { scenario: 'Custom THOW, lifestyle block', sum: '$250,000', cover: 'Full incl. transit + off-grid', premium: '$1,800 – $2,600' },
                      { scenario: 'Container home, fixed site', sum: '$200,000', cover: 'Building + contents + liability', premium: '$1,400 – $2,000' },
                      { scenario: 'Off-grid tiny home, remote', sum: '$180,000', cover: 'Building + off-grid systems + contents', premium: '$1,600 – $2,400' },
                      { scenario: 'Premium custom off-grid build', sum: '$350,000+', cover: 'Comprehensive package', premium: '$2,800 – $4,500+' },
                      { scenario: 'Tiny home rental (landlord)', sum: '$150,000', cover: 'Landlord package + liability', premium: '$1,500 – $2,200' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-stone-100 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}>
                        <td className="p-3 font-medium text-stone-900">{row.scenario}</td>
                        <td className="p-3 text-stone-700">{row.sum}</td>
                        <td className="p-3 text-stone-700">{row.cover}</td>
                        <td className="p-3 font-semibold text-brand-700">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-4">These ranges are indicative only and based on 2026 market conditions. Premiums may vary materially from these figures depending on individual underwriting factors.</p>
            </section>

            {/* What affects cost */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">What Affects Your Tiny Home Insurance Premium?</h2>
              <p className="text-stone-700 leading-relaxed mb-6">Eight key factors determine your premium. Understanding these helps you make informed decisions about the cover you select and how to present your risk to an insurer:</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {costFactors.map(factor => (
                  <div key={factor.title} className="bg-stone-50 rounded-xl p-5 border border-stone-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{factor.icon}</span>
                      <h3 className="font-bold text-stone-900 text-sm">{factor.title}</h3>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{factor.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to reduce costs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">How to Reduce Your Tiny Home Insurance Premium</h2>
              <p className="text-stone-700 leading-relaxed mb-5">While you shouldn&apos;t compromise on cover quality, these steps can legitimately reduce your premium:</p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Get the sum insured exactly right — not too high, not too low',
                    desc: 'Overinsuring (setting a sum insured higher than the rebuild cost) wastes money on premium. Underinsuring (setting it too low) creates a shortfall at claim time. Get an accurate rebuild estimate from a builder or adviser.',
                  },
                  {
                    title: 'Choose a higher excess strategically',
                    desc: 'A $2,000 or $3,000 excess instead of $500 can save 10–20% on premium. Only do this if you have the savings to cover the excess without stress.',
                  },
                  {
                    title: 'Install security features',
                    desc: 'Deadbolts, alarm systems, security lighting, wheel clamps (for THOWs), and hitch locks all reduce theft risk and may earn a premium discount. Tell your insurer what you have.',
                  },
                  {
                    title: 'Bundle building and contents with the same insurer',
                    desc: 'Most insurers offer a discount for holding multiple policies. Building + contents + liability with the same specialist provider typically saves 5–15% compared to placing cover separately.',
                  },
                  {
                    title: 'Maintain a claims-free history',
                    desc: 'Avoid making small claims that you can absorb yourself — frequent small claims increase your premium more than they return in payouts over time.',
                  },
                  {
                    title: 'Pay annually',
                    desc: 'Annual payment typically saves 5–10% over the total cost of monthly payments, which usually include administration fees or interest charges.',
                  },
                  {
                    title: 'Use a specialist adviser',
                    desc: 'A specialist tiny home insurance adviser will have access to multiple underwriters and know which ones offer the best terms for your specific home type. Going directly to a single insurer means you may miss better cover at a lower premium from an alternative provider.',
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-100 text-brand-700 font-bold text-xs rounded-full flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{tip.title}</p>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What to avoid */}
            <section className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">Common Insurance Mistakes That Cost Tiny Home Owners</h2>
              <div className="space-y-4">
                {[
                  { mistake: 'Underinsuring your home', detail: 'Setting the sum insured at purchase price rather than rebuild cost. If you bought your THOW for $130,000 but it would cost $190,000 to rebuild at today\'s prices, you need $190,000 in cover.' },
                  { mistake: 'Using a caravan or campervan policy for a THOW', detail: 'Caravan policies have maximum sums insured (often $80,000–$100,000), limited transit cover, and no provisions for residential-standard dwellings. They\'re the wrong product.' },
                  { mistake: 'Not declaring a change of site', detail: 'Moving your THOW to a new location without telling your insurer can void your cover. Always notify your insurer before relocating, even within the same campground.' },
                  { mistake: 'Assuming your contents are covered by building insurance', detail: 'Building insurance covers the structure; contents are separate. If you haven\'t specifically arranged contents cover, your furniture, electronics, and belongings are not insured.' },
                  { mistake: 'Not disclosing off-grid systems', detail: 'If you add solar panels or a battery bank after taking out your policy, they\'re not automatically insured. Contact your insurer to add them to the policy.' },
                  { mistake: 'Leaving the home unoccupied without declaring it', detail: 'Most policies have an unoccupancy clause (typically 60–90 days). If your home sits empty beyond this period without notifying your insurer, cover may be suspended.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-lg mt-0.5">⚠</span>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{item.mistake}</p>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Tiny Home Insurance Cost: FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                    <p className="text-stone-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal CTA */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">Compare what NZ insurers include at each price point</p>
                <p className="text-sm text-stone-600 mt-1">See how AA, Initio, State, and specialist providers compare on cover, not just price.</p>
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
                  { href: '/blog/tiny-home-insurance-cost-nz/', label: 'Tiny Home Insurance Cost Guide 2026' },
                  { href: '/blog/tiny-home-insurance-nz-guide/', label: 'Complete NZ Tiny Home Insurance Guide' },
                  { href: '/blog/thow-insurance-nz/', label: 'THOW Insurance: The Complete Guide' },
                  { href: '/blog/diy-tiny-home-insurance-nz/', label: 'DIY Tiny Home Insurance Considerations' },
                  { href: '/coverage/building-structure/', label: 'Building & Structure Cover' },
                  { href: '/faq/', label: 'Common Insurance FAQs' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-800 text-white rounded-xl p-5 text-xs leading-relaxed">
              <p className="font-bold text-green-400 mb-1">Disclaimer</p>
              <p className="text-stone-300">Premium ranges shown are indicative only and do not constitute an offer or quotation. Actual premiums are determined by individual insurers based on your specific circumstances. Speak to a specialist adviser for accurate pricing.</p>
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
