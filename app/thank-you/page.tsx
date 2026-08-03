import Link from 'next/link';

export const metadata = {
  title: 'Thank You — Quote Request Received | TinyHomeInsurance.co.nz',
  description: 'Your tiny home insurance quote request has been received. A NZ-licensed adviser will be in touch within one business day.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/thank-you/' },
};

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.80) 0%, rgba(10,55,25,0.72) 60%, rgba(0,25,8,0.85) 100%), url('/images/tinyhome_insurance_2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '150px',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <div className="text-7xl mb-6">🏡</div>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-5">
          🌿 Specialist Tiny Home Insurance · New Zealand
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">Quote Request Received!</h1>
        <p className="text-xl text-stone-200 mb-8 leading-relaxed">
          A NZ-licensed insurance adviser will review your tiny home details and be in touch within <strong className="text-white">one business day</strong> with options and a quote.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 mb-8 text-left">
          <h2 className="font-bold text-white mb-4">What to expect:</h2>
          <ul className="space-y-3 text-stone-200">
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-bold mt-0.5">✓</span>
              An adviser will contact you by phone or email within one business day
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-bold mt-0.5">✓</span>
              They may ask a few additional questions about your tiny home
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-bold mt-0.5">✓</span>
              You&apos;ll receive one or more quotes tailored to your specific situation
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-bold mt-0.5">✓</span>
              No obligation — you choose whether to proceed
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">
            Back to Home
          </Link>
          <Link href="/blog/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-xl transition">
            Read Our Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
