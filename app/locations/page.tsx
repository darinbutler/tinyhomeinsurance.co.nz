import Link from 'next/link';
import { locations } from '../../data/locations';

export const metadata = {
  title: 'Tiny Home Insurance by Location NZ | TinyHomeInsurance.co.nz',
  description: 'Find specialist tiny home insurance information for your region — from rural Coromandel to urban Auckland, Wellington, and Christchurch.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/locations/' },
};

export default function LocationsPage() {
  const rural = locations.filter(l => l.type === 'rural');
  const urban = locations.filter(l => l.type === 'urban');
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero — dark green gradient, same as other pages */}
      <section className="relative py-20 text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.75) 0%, rgba(10,55,25,0.65) 50%, rgba(0,25,8,0.82) 100%), url('/images/tinyhome_insurance_2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-300 text-sm font-semibold">📍 Location-Specific Cover</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Tiny Home Insurance by Location</h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">Insurance risk varies enormously by location — from Cyclone Gabrielle&apos;s impact on Northland to Kaikōura&apos;s seismic history. Find information specific to your region.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Rural section */}
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Rural &amp; Regional Locations</h2>
        <p className="text-stone-600 mb-8">Rural and regional locations come with unique insurance challenges — remote access, off-grid properties, and elevated natural hazard risks.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {rural.map(loc => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`}
              className="bg-white rounded-xl p-6 border border-stone-200 hover:border-brand-400 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 rounded-full px-3 py-1">{loc.region}</span>
                <span className="text-xs text-stone-400 bg-stone-100 rounded-full px-2 py-0.5">Rural</span>
              </div>
              <h3 className="font-bold text-stone-900 text-lg group-hover:text-brand-700 transition mb-2">{loc.name}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{loc.tagline}</p>
              <div className="mt-4 text-brand-700 text-sm font-semibold">View cover options →</div>
            </Link>
          ))}
        </div>

        {/* Urban section */}
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Urban Locations</h2>
        <p className="text-stone-600 mb-8">Urban tiny homes face different challenges — zoning rules, council compliance, and Airbnb regulation — alongside local hazards like Auckland flooding and Wellington earthquake risk.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {urban.map(loc => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`}
              className="bg-white rounded-xl p-6 border border-stone-200 hover:border-brand-400 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 rounded-full px-3 py-1">{loc.region}</span>
                <span className="text-xs text-stone-400 bg-stone-100 rounded-full px-2 py-0.5">Urban</span>
              </div>
              <h3 className="font-bold text-stone-900 text-lg group-hover:text-brand-700 transition mb-2">{loc.name}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{loc.tagline}</p>
              <div className="mt-4 text-brand-700 text-sm font-semibold">View cover options →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
