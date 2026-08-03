import { SITE } from '../../data/site';

export const metadata = {
  title: 'Terms of Use | TinyHomeInsurance.co.nz',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/terms/' },
};

export default function TermsPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Terms of Use</h1>
        <p className="text-stone-500 text-sm mb-8">Last updated: May 2025</p>
        <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-stone-900">1. Acceptance of Terms</h2>
            <p>By accessing or using {SITE.domain}, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">2. Nature of the Service</h2>
            <p>TinyHomeInsurance.co.nz is a referral service. We connect consumers with NZ-licensed insurance advisers. We do not provide insurance quotes, underwrite insurance, or provide financial advice. Any quote you receive will come from a separately licensed adviser or insurer.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">3. Information Accuracy</h2>
            <p>We endeavour to keep the information on this website accurate and up to date, but make no warranties or representations about its completeness, accuracy, or suitability for any purpose. Insurance products, providers, and regulations change regularly.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">4. No Financial Advice</h2>
            <p>Nothing on this website constitutes financial advice within the meaning of the Financial Markets Conduct Act 2013. The information provided is general in nature. You should obtain advice from a licensed financial adviser before making any insurance decision.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, TinyHomeInsurance.co.nz and its operators accept no liability for any loss or damage arising from your use of this website or reliance on information provided on it.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">6. Governing Law</h2>
            <p>These terms are governed by the laws of New Zealand. Any disputes will be subject to the jurisdiction of the New Zealand courts.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href={`mailto:${SITE.email}`} className="text-brand-700 underline">{SITE.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
