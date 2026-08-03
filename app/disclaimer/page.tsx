import { SITE } from '../../data/site';

export const metadata = {
  title: 'Disclaimer | TinyHomeInsurance.co.nz',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Disclaimer</h1>
        <p className="text-stone-500 text-sm mb-8">Last updated: May 2025</p>
        <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-stone-900">General Information Only</h2>
            <p>The information on {SITE.domain} is provided for general informational purposes only. It does not constitute financial advice, insurance advice, or legal advice. You should not rely on this information to make decisions about insurance cover without first consulting a qualified NZ-licensed financial adviser.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">Not an Insurer or Adviser</h2>
            <p>TinyHomeInsurance.co.nz is not an insurer, insurance broker, or licensed financial adviser. We are a referral service that connects consumers with NZ-licensed insurance advisers who are regulated under the Financial Markets Conduct Act 2013.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">No Guarantee of Cover</h2>
            <p>Mentioning a coverage type or insurance product on this website does not guarantee that such cover is available for your specific situation, or that any particular insurer will accept your risk. Cover is subject to insurer underwriting and policy terms and conditions.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">Third-Party Links</h2>
            <p>This website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those websites.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">Complaints</h2>
            <p>If you have a complaint about an insurance product or the advice you received from an adviser introduced through this service, contact the adviser directly in the first instance. If unresolved, the adviser&apos;s dispute resolution scheme (typically FSCL or IFSO) can assist. For complaints about this website, contact us at <a href={`mailto:${SITE.email}`} className="text-brand-700 underline">{SITE.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
