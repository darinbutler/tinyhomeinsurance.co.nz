import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata = {
  title: 'Tiny Home Insurer Comparison NZ | TinyHomeInsurance.co.nz',
  description: 'Compare NZ insurer positions on tiny home cover. AA, Initio, State, Tower and specialist insurers — who will actually cover your THOW, container home, or off-grid dwelling?',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/compare/' },
};

type CellVal = boolean | 'partial';

const rows: { feature: string; aa: CellVal; initio: CellVal; state: CellVal; tower: CellVal; specialist: CellVal; note?: string }[] = [
  {
    feature: 'Tiny home on wheels (not fixed to land)',
    aa: false,
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'AA requires wheels removed & home fixed to piles. Initio redirects to caravan insurance. No mainstream insurer will cover a THOW as a home.',
  },
  {
    feature: 'Off-grid systems (solar, battery, rainwater)',
    aa: false,
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'Standard policies don\'t include solar battery banks, rainwater systems, or composting toilets. Specialist endorsements are required.',
  },
  {
    feature: 'Container home / non-standard construction',
    aa: false,
    initio: 'partial',
    state: false,
    tower: false,
    specialist: true,
    note: 'Initio may consider fixed container homes with CoC. Mainstream insurers generally exclude Cor-Ten steel and non-standard construction.',
  },
  {
    feature: 'Owner-built / DIY tiny home',
    aa: false,
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'All mainstream insurers decline owner-built homes due to lack of formal compliance verification. Specialists assess on a case-by-case basis.',
  },
  {
    feature: 'Transit cover when towing',
    aa: false,
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'Building insurance typically excludes the home during transit. Specialist transit policies are required for moves.',
  },
  {
    feature: 'Campground / holiday park siting',
    aa: 'partial',
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'AA may cover a fixed tiny home parked at a campground site. Mainstream insurers generally require a fixed street address.',
  },
  {
    feature: 'No Code of Compliance (2026 consent exemption)',
    aa: false,
    initio: 'partial',
    state: false,
    tower: false,
    specialist: true,
    note: 'Under the January 2026 building consent exemption, Initio has confirmed it can consider homes under 70m² built by LBPs without a traditional CoC.',
  },
  {
    feature: 'Lifestyle block / rural off-grid siting',
    aa: 'partial',
    initio: 'partial',
    state: 'partial',
    tower: 'partial',
    specialist: true,
    note: 'Rural siting is acceptable if the home has a fixed foundation, street address, and rateable value. Remote off-grid sites without these typically require specialist placement.',
  },
  {
    feature: 'Fixed tiny home with CoC & permanent foundation',
    aa: true,
    initio: true,
    state: 'partial',
    tower: 'partial',
    specialist: true,
    note: 'A permanently sited tiny home under 50m² with full compliance documentation can typically be covered by mainstream insurers, though some may apply restrictions.',
  },
  {
    feature: 'Full replacement value (agreed value)',
    aa: false,
    initio: false,
    state: false,
    tower: false,
    specialist: true,
    note: 'Caravan and standard policies use market value or depreciated value. Specialist policies can be structured on an agreed replacement cost basis.',
  },
];

function Cell({ val }: { val: CellVal }) {
  if (val === true) return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>
  );
  if (val === 'partial') return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 text-sm font-bold">~</span>
  );
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold">✗</span>
  );
}

const insurers = [
  {
    name: 'AA Insurance',
    logo: '🔵',
    stance: 'Fixed homes only',
    stanceColour: 'text-amber-700 bg-amber-50 border-amber-200',
    summary: 'AA Insurance will consider tiny homes that are permanently fixed — wheels removed, bolted to piles, connected to services, with a Code of Compliance and a rateable value. Any tiny home that can be moved, including one that is merely sited on a block and never actually towed, is declined outright.',
    verdict: 'If your tiny home ticks every mainstream box — fixed, compliant, valued — AA is worth approaching. If it\'s on wheels, look elsewhere.',
    points: [
      'Requires wheels removed and home bolted to piles',
      'Must have Code of Compliance and rateable value',
      'Fixed street address required',
      'Explicitly declines tiny homes on wheels (THOWs)',
      'No transit cover available',
      'Does not cover off-grid systems',
    ],
  },
  {
    name: 'Initio',
    logo: '🟢',
    stance: 'Fixed homes + 2026 exemption',
    stanceColour: 'text-green-700 bg-green-50 border-green-200',
    summary: 'Initio is one of the more progressive mainstream insurers for tiny homes. They will consider fixed tiny homes, and have publicly confirmed they can work with homes built under the January 2026 building consent exemption (sub-70m², built by LBPs). However, they explicitly direct tiny home on wheels owners to caravan insurance, which is inadequate for a full-time dwelling.',
    verdict: 'The most flexible mainstream option for fixed or consent-exempt tiny homes. Not suitable for tiny homes on wheels, off-grid systems, or DIY builds.',
    points: [
      'Will consider fixed tiny homes with or without traditional CoC (if 2026 exemption conditions met)',
      'Publicly confirmed cover for 2026 consent exemption builds',
      'Redirects tiny home on wheels owners to caravan insurance',
      'Caravan insurance has low sum-insured limits — inadequate for a custom THOW',
      'Does not cover off-grid systems as standard',
      'May consider some non-standard construction case-by-case',
    ],
  },
  {
    name: 'State Insurance',
    logo: '🟡',
    stance: 'Standard homes only',
    stanceColour: 'text-stone-700 bg-stone-50 border-stone-200',
    summary: 'State Insurance applies standard residential underwriting criteria. Tiny homes that meet those criteria — fixed foundation, council rates, Code of Compliance, conventional construction — may be insurable. Non-standard tiny homes, including all tiny homes on wheels, container homes, and off-grid dwellings, fall outside their appetite.',
    verdict: 'A conventional insurer with conventional requirements. Not a practical option for most tiny home owners.',
    points: [
      'Standard residential criteria apply',
      'Conventional construction required',
      'Fixed foundation and council address required',
      'Tiny homes on wheels are excluded',
      'No specialist tiny home products',
      'Off-grid systems not covered',
    ],
  },
  {
    name: 'Tower Insurance',
    logo: '🟠',
    stance: 'Standard homes only',
    stanceColour: 'text-stone-700 bg-stone-50 border-stone-200',
    summary: 'Tower Insurance takes a similar position to State. Standard residential policies are available for conventional fixed dwellings. Tiny homes on wheels, container conversions, and off-grid properties are generally outside their appetite. Tower does not have a specialist tiny home product.',
    verdict: 'Not a realistic option for tiny homes on wheels, container homes, or off-grid dwellings. May consider very conventional fixed tiny homes.',
    points: [
      'Standard residential policy only',
      'Fixed foundation, rateable value required',
      'Non-standard construction generally excluded',
      'Tiny homes on wheels declined',
      'No off-grid systems cover',
      'No transit cover',
    ],
  },
  {
    name: 'Specialist (via our advisers)',
    logo: '✅',
    stance: 'All tiny home types',
    stanceColour: 'text-green-800 bg-green-50 border-green-300',
    summary: 'Specialist insurers accessed through our adviser network are specifically built for the tiny home market. They understand the difference between a THOW and a caravan, the replacement value of a custom-built dwelling, and the infrastructure requirements of off-grid living. They can structure policies that cover your home exactly as it is — on wheels, in a container, or off-grid — at full agreed replacement value.',
    verdict: 'The right solution for any tiny home that doesn\'t fit the mainstream mould — and for most NZ tiny home owners, that\'s nearly everyone.',
    points: [
      'Tiny homes on wheels covered as dwellings (not caravans)',
      'Transit cover available for towing',
      'Off-grid systems covered (solar, battery, rainwater, composting)',
      'Container homes and non-standard construction accepted',
      'Owner-built homes considered with appropriate documentation',
      'Agreed replacement value policies available',
      'Campground, lifestyle block, and rural siting accepted',
      'NZ-licensed advisers — response within one business day',
    ],
  },
];

export default function ComparePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,35,12,0.68) 0%, rgba(8,45,18,0.58) 60%, rgba(0,18,5,0.76) 100%), url('/images/tinyhome_insurance_3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-6">
            🌿 NZ Insurer Comparison · Tiny Home Insurance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Which Insurer Will Actually<br /><span className="text-green-300">Cover Your Tiny Home?</span>
          </h1>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed mb-8">
            We've researched how AA Insurance, Initio, State, Tower, and specialist insurers approach tiny home cover in New Zealand — so you don't have to make a dozen calls to find out who will say yes.
          </p>
          <Link href="/contact/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-900/40 text-lg">
            Get Specialist Cover →
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── QUICK SUMMARY ────────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">The Short Answer</h2>
            <p className="text-stone-600 leading-relaxed">
              If your tiny home is permanently fixed to the land, has a Code of Compliance, and looks like a very small conventional house — mainstream insurers may cover you. If it's on wheels, off-grid, owner-built, or in a container, you'll almost certainly need a specialist.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { insurer: 'AA Insurance', verdict: 'Fixed & compliant only', icon: '🔵', ok: false },
              { insurer: 'Initio', verdict: 'Fixed + 2026 exemption', icon: '🟢', ok: false },
              { insurer: 'State / Tower', verdict: 'Standard homes only', icon: '🟡', ok: false },
              { insurer: 'Specialist', verdict: 'All tiny home types', icon: '✅', ok: true },
            ].map(s => (
              <div key={s.insurer} className={`rounded-xl border-2 p-5 text-center ${s.ok ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-stone-50'}`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-bold text-stone-900 mb-1">{s.insurer}</div>
                <div className={`text-sm font-medium ${s.ok ? 'text-green-700' : 'text-stone-500'}`}>{s.verdict}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED COMPARISON TABLE ─────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Feature by Feature</span>
            <h2 className="text-3xl font-extrabold text-stone-900 mt-2 mb-3">Detailed Cover Comparison</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              What each insurer covers (or doesn't) for different tiny home types and situations in New Zealand.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200">
            <table className="w-full min-w-[780px]">
              <thead>
                <tr className="bg-stone-900 text-white text-sm">
                  <th className="text-left py-4 px-5 font-semibold w-[30%]">Cover Feature</th>
                  <th className="text-center py-4 px-3 font-semibold">AA Insurance</th>
                  <th className="text-center py-4 px-3 font-semibold">Initio</th>
                  <th className="text-center py-4 px-3 font-semibold">State</th>
                  <th className="text-center py-4 px-3 font-semibold">Tower</th>
                  <th className="text-center py-4 px-3 font-semibold bg-green-800">Specialist<br /><span className="font-normal text-green-200 text-xs">via our advisers</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="py-4 px-5">
                      <div className="text-sm font-semibold text-stone-800">{row.feature}</div>
                      {row.note && (
                        <div className="text-xs text-stone-400 mt-1 leading-relaxed">{row.note}</div>
                      )}
                    </td>
                    <td className="py-4 px-3 text-center"><Cell val={row.aa} /></td>
                    <td className="py-4 px-3 text-center"><Cell val={row.initio} /></td>
                    <td className="py-4 px-3 text-center"><Cell val={row.state} /></td>
                    <td className="py-4 px-3 text-center"><Cell val={row.tower} /></td>
                    <td className="py-4 px-3 text-center bg-green-50"><Cell val={row.specialist} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
              Generally available
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold">~</span>
              Conditional / case by case
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold">✗</span>
              Generally not available
            </div>
          </div>

          {/* Disclaimer directly under table */}
          <div className="mt-5 bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-600 block mb-1.5">Important: This comparison is general information only</strong>
            This table is based on publicly available policy wordings, underwriting guidelines, and published insurer statements as at May 2026. It is indicative only and does not constitute financial advice or a guarantee of coverage. Insurer positions on non-standard risks change regularly, and individual circumstances are assessed on a case-by-case basis. Always confirm current coverage terms directly with the insurer or a licensed financial adviser before making any insurance decision. TinyHomeInsurance.co.nz is a referral service operating under the Financial Markets Conduct Act 2013 — we do not underwrite insurance or provide personalised financial advice.
          </div>
        </div>
      </section>

      {/* ── PER-INSURER PROFILES ──────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Insurer Profiles</span>
            <h2 className="text-3xl font-extrabold text-stone-900 mt-2 mb-3">What Each Insurer Actually Says</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Based on publicly available policy wordings, underwriting guidelines, and published insurer statements.
            </p>
          </div>

          <div className="space-y-8">
            {insurers.map(ins => (
              <div key={ins.name} className={`rounded-2xl border-2 p-8 ${ins.name.includes('Specialist') ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-white'}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{ins.logo}</span>
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-900">{ins.name}</h3>
                      <span className={`inline-block mt-1 text-xs font-bold px-3 py-1 rounded-full border ${ins.stanceColour}`}>
                        {ins.stance}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed mb-5 text-sm">{ins.summary}</p>

                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                  {ins.points.map(p => (
                    <div key={p} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 flex-shrink-0 font-bold ${ins.name.includes('Specialist') ? 'text-green-600' : 'text-stone-400'}`}>
                        {ins.name.includes('Specialist') ? '✓' : '•'}
                      </span>
                      <span className="text-stone-700">{p}</span>
                    </div>
                  ))}
                </div>

                <div className={`rounded-xl p-4 text-sm font-medium ${ins.name.includes('Specialist') ? 'bg-green-100 text-green-800' : 'bg-stone-100 text-stone-700'}`}>
                  <strong>Our verdict:</strong> {ins.verdict}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOT CARAVAN INSURANCE ─────────────────────────────── */}
      <section
        className="relative py-16 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,46,22,0.97) 0%, rgba(10,60,30,0.96) 100%), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Why Caravan Insurance Isn't the Answer</h2>
            <p className="text-stone-300 leading-relaxed">
              When mainstream insurers decline a tiny home on wheels, they typically suggest caravan insurance. Here's why that's not an adequate solution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Sum insured limits are too low',
                desc: 'Caravan policies are designed for manufactured caravans that typically cost $30,000–$80,000. A custom-built tiny home on wheels commonly costs $100,000–$250,000. The standard caravan limits leave you severely underinsured.',
              },
              {
                title: 'Depreciation clauses reduce your payout',
                desc: 'Most caravan policies pay market value, not replacement cost — and they depreciate the value over time. If your tiny home is destroyed, you may receive a fraction of what it would cost to rebuild.',
              },
              {
                title: 'Full-time occupancy restrictions',
                desc: 'Caravan insurance is designed for recreational use, not full-time living. Many policies have restrictions on continuous occupation that can void cover if you live in your home full-time.',
              },
              {
                title: 'Off-grid systems are excluded',
                desc: 'Caravan policies don\'t cover solar panels, battery banks, rainwater systems, or the other infrastructure that makes a tiny home genuinely liveable. These are simply outside the scope of caravan insurance.',
              },
            ].map(pt => (
              <div key={pt.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-red-400 font-bold text-sm mb-2">✗ {pt.title}</div>
                <p className="text-stone-300 text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-stone-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Can I just ring AA or Initio directly?',
                a: 'You can, but be prepared for a likely decline if your tiny home is on wheels, off-grid, or owner-built. Mainstream insurers have strict underwriting rules. A specialist adviser saves you the runaround and goes directly to markets that will actually cover you.',
              },
              {
                q: 'What if my tiny home is fixed but still custom-built?',
                a: 'A fixed foundation tiny home with a Code of Compliance and rateable value has a reasonable chance with mainstream insurers like AA or Initio. However, if it uses non-standard construction materials or off-grid systems, you may still hit exclusions — and a specialist can often offer better terms even for compliant fixed homes.',
              },
              {
                q: 'Does the 2026 consent exemption help with mainstream insurers?',
                a: 'Initio has confirmed they can consider homes built under the January 2026 consent exemption (sub-70m², built by Licensed Building Practitioners). This is a positive development, but doesn\'t help if your home is on wheels or uses off-grid systems.',
              },
              {
                q: 'What does "specialist" actually mean?',
                a: 'Specialist insurers are underwriters who have specifically developed products for non-standard property including tiny homes, container homes, and off-grid dwellings. They understand the risk profile, can set appropriate sums insured, and have policy wordings designed for the way tiny home owners actually live. Our advisers place your home directly with these underwriters.',
              },
            ].map(faq => (
              <div key={faq.q} className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────── */}
      <section className="bg-white border-t border-stone-200 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-700 block mb-2">Comparison Disclaimer</strong>
            This comparison is based on publicly available policy wordings, underwriting guidelines, and published insurer statements as at May 2026. Insurer positions on non-standard risks evolve regularly — an insurer listed as declining a risk here may change their appetite, and vice versa. Individual circumstances vary significantly; some risks may be accepted or declined on a case-by-case basis regardless of the general position shown. This table and the insurer profiles on this page are general in nature and do not constitute personalised financial advice. Always confirm current coverage terms directly with the insurer or a NZ-licensed financial adviser before making any insurance decision. TinyHomeInsurance.co.nz is a referral service regulated under the Financial Markets Conduct Act 2013; we do not underwrite insurance or provide financial advice directly.
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-700 font-semibold text-sm tracking-widest uppercase">Skip the Runaround</span>
              <h2 className="text-3xl font-extrabold text-stone-900 mt-2 mb-4">
                We Know Who Will Say Yes
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Instead of calling five insurers and getting five declines, tell us about your tiny home once. Our NZ-licensed advisers go directly to the specialist market and come back with options that actually work for your situation.
              </p>
              <ul className="space-y-3 text-sm text-stone-600 mb-6">
                {[
                  'Tiny homes on wheels, containers, and off-grid — all covered',
                  'Agreed replacement value — not market value or depreciated cost',
                  'Transit cover for when you tow',
                  'Off-grid systems explicitly included',
                  'NZ-licensed advisers · Response within 1 business day',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/contact/"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg shadow-green-900/20 text-lg">
                Get My Specialist Quote →
              </Link>
            </div>
            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
