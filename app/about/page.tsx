import Link from 'next/link';

export const metadata = {
  title: 'About TinyHomeInsurance.co.nz | NZ Tiny Home Insurance Advisers',
  description: 'TinyHomeInsurance.co.nz connects tiny home owners with NZ-licensed insurance advisers who specialise in THOWs, container homes, and off-grid dwellings.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/about/' },
};

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4">About TinyHomeInsurance.co.nz</h1>
          <p className="text-xl text-brand-100">
            Connecting tiny home owners with specialist insurance advisers across New Zealand.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="bg-white rounded-xl border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why We Exist</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Tiny home living is growing rapidly across New Zealand — but the insurance industry hasn't always kept pace. Tiny home owners routinely discover that standard house insurance policies weren't written with their homes in mind. Policies get declined because the home is on wheels, or because it uses non-standard materials, or because it's located off-grid without a conventional street address.
          </p>
          <p className="text-stone-700 leading-relaxed">
            TinyHomeInsurance.co.nz was created to solve this problem. We connect tiny home owners with NZ-licensed insurance advisers who understand the tiny home market — advisers who know which insurers will actually cover your specific build, and who can arrange comprehensive cover without the usual runaround.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">How It Works</h2>
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>We are a referral service. When you complete a quote request on this website, we pass your enquiry to NZ-licensed financial advisers who specialise in property and specialty insurance. These advisers are regulated under the Financial Markets Conduct Act 2013 and operate under the Full Licence or Transitional Licence regime.</p>
            <p>Our advisers aren't tied to a single insurer — they have access to the broking market and will source options from multiple underwriters to find the best fit for your tiny home and situation.</p>
            <p>There is no direct cost to you for using this service. Advisers earn commission from the insurer when a policy is placed. You're under no obligation to proceed with any quote you receive.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">What We Cover</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              '🚛 Tiny houses on wheels (THOW)',
              '🏠 Fixed-foundation tiny homes',
              '📦 Container homes',
              '☀️ Off-grid dwellings and cabins',
              '🏕️ Park homes and relocatable homes',
              '🔑 Tiny home rental and Airbnb',
              '⚡ Off-grid systems (solar, battery)',
              '🛡️ Public liability for tiny home owners',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-stone-700">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Financial Advice Disclosure</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            TinyHomeInsurance.co.nz is a lead generation and referral service. We are not a licensed financial adviser, insurer, or insurance broker. The information on this website is general in nature and does not constitute financial advice.
          </p>
          <p className="text-stone-700 leading-relaxed">
            The advisers we refer enquiries to are NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. Before proceeding with any insurance product, you will receive a disclosure statement from your adviser outlining their licensing, commissions, and any conflicts of interest.
          </p>
        </div>

        <div className="bg-brand-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-brand-100 mb-6">Submit a quote request and a NZ-licensed adviser will be in touch within one business day.</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition">
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
