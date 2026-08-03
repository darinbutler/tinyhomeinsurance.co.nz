import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export const metadata = {
  title: 'Tiny Home Insurance Blog & Guides | TinyHomeInsurance.co.nz',
  description: 'Expert guides on tiny home insurance in NZ — covering tiny houses on wheels, off-grid living, container homes, and more.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/blog/' },
};

const categoryColours: Record<string, string> = {
  Guides: 'bg-blue-100 text-blue-800',
  THOW: 'bg-amber-100 text-amber-800',
  'Off-Grid': 'bg-green-100 text-green-800',
  Landlord: 'bg-purple-100 text-purple-800',
  'Container Homes': 'bg-slate-100 text-slate-800',
  Liability: 'bg-red-100 text-red-800',
};

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.70) 0%, rgba(10,55,25,0.60) 50%, rgba(0,25,8,0.78) 100%), url('/images/tinyhome_insurance_3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-green-200 text-sm font-semibold mb-6">
            🌿 Tiny Home Insurance · Expert Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            NZ Tiny Home Insurance<br /><span className="text-green-300">Guides &amp; Resources</span>
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Expert articles on tiny home insurance in New Zealand — from tiny houses on wheels to off-grid systems and everything in between.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ── POSTS GRID ───────────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map(post => {
              const catColour = categoryColours[post.category] || 'bg-stone-100 text-stone-700';
              return (
                <Link key={post.slug} href={`/blog/${post.slug}/`}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
                  {/* Post image */}
                  <div
                    className="h-48 w-full flex-shrink-0 overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%), url('${post.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${catColour}`}>{post.category}</span>
                      <span className="text-xs text-stone-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-stone-900 text-lg mb-2 group-hover:text-green-700 transition leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="mt-auto flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:text-green-600 transition">
                      Read guide <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
