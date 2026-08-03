import { SITE } from '../../data/site';

export const metadata = {
  title: 'Privacy Policy | TinyHomeInsurance.co.nz',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
        <p className="text-stone-500 text-sm mb-8">Last updated: May 2025</p>
        <div className="bg-white rounded-xl border border-stone-200 p-8 prose prose-stone max-w-none space-y-6 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-stone-900">1. Who We Are</h2>
            <p>TinyHomeInsurance.co.nz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a New Zealand–based insurance referral service. We operate at <a href={SITE.domain} className="text-brand-700 underline">{SITE.domain}</a> and can be contacted at <a href={`mailto:${SITE.email}`} className="text-brand-700 underline">{SITE.email}</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">2. What Information We Collect</h2>
            <p>When you submit a quote request, we collect: your name, email address, phone number, tiny home type, and cover requirements. We may also collect technical data (IP address, browser type, pages visited) for analytics and security purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">3. How We Use Your Information</h2>
            <p>We use your information to: match you with a suitable NZ-licensed insurance adviser; respond to your enquiry; improve our website and services; and comply with legal obligations. We do not sell your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">4. Sharing Your Information</h2>
            <p>We share your quote request details with NZ-licensed insurance advisers for the purpose of providing you with insurance quotes. These advisers are bound by their own privacy obligations under the Financial Markets Conduct Act 2013 and the Privacy Act 2020.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">5. Your Rights</h2>
            <p>Under the Privacy Act 2020, you have the right to access your personal information, request corrections, and in some circumstances, request deletion. To exercise these rights, contact us at <a href={`mailto:${SITE.email}`} className="text-brand-700 underline">{SITE.email}</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">6. Security</h2>
            <p>We take reasonable steps to protect your personal information from loss, misuse, and unauthorised access. Our website uses 256-bit SSL encryption for all data transmission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-stone-900">7. Contact</h2>
            <p>For privacy-related enquiries, contact us at <a href={`mailto:${SITE.email}`} className="text-brand-700 underline">{SITE.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
