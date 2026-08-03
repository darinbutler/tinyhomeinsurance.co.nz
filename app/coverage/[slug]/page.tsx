import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '../../../data/coverage-types';
import { coverageContent } from '../../../data/coverage-content';
import { blogPosts } from '../../../data/blog-posts';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return coverageTypes.map(ct => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) return {};
  // Shorten "Loss of Use / Alternative Accommodation" which is too long for title tag
  const displayTitle = slug === 'loss-of-use'
    ? 'Loss of Use Cover for Tiny Homes NZ | TinyHomeInsurance.co.nz'
    : `${ct.name} NZ | TinyHomeInsurance.co.nz`;
  return {
    title: displayTitle,
    description: ct.shortDesc,
    alternates: { canonical: `https://www.tinyhomeinsurance.co.nz/coverage/${slug}/` },
  };
}

function renderDescription(text: string) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return paragraphs.map((para, i) => (
    <p key={i} className="text-stone-700 leading-relaxed mb-4">{para.trim()}</p>
  ));
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) notFound();

  const content = coverageContent.find(c => c.slug === slug);

  // Related coverage types
  const relatedCoverage = content
    ? coverageTypes.filter(c => content.relatedSlugs.includes(c.slug))
    : coverageTypes.filter(c => c.slug !== ct.slug).slice(0, 3);

  // Related blog posts
  const relatedBlogs = content
    ? blogPosts.filter(p => content.relatedBlogSlugs.includes(p.slug)).slice(0, 4)
    : blogPosts.slice(0, 3);

  // Other coverage types for sidebar (excluding current)
  const otherCoverage = coverageTypes.filter(c => c.slug !== ct.slug);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.72) 0%, rgba(10,55,25,0.62) 50%, rgba(0,25,8,0.80) 100%), url('/images/tinyhome_insurance_1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/coverage/" className="text-green-300 hover:text-white text-sm font-semibold mb-5 inline-block">
            ← All Coverage Types
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{ct.icon}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold">{ct.name}</h1>
          </div>
          <p className="text-xl text-stone-200 max-w-2xl leading-relaxed">{ct.shortDesc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Intro */}
            {content && (
              <div className="bg-white rounded-xl p-8 border border-stone-200">
                <p className="text-xl text-stone-700 leading-relaxed font-medium">{content.intro}</p>
              </div>
            )}

            {/* About / Full Description */}
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-5">About {ct.name}</h2>
              {content
                ? renderDescription(content.fullDescription)
                : <p className="text-stone-700 leading-relaxed">{ct.description}</p>
              }
            </div>

            {/* Who Needs / What Covers */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4 text-lg">Who Needs This Cover</h3>
                <ul className="space-y-2">
                  {ct.whoNeeds.map(item => (
                    <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4 text-lg">What It Covers</h3>
                <ul className="space-y-2">
                  {ct.whatCovers.map(item => (
                    <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What's Not Covered */}
            {content && content.notCovered.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-5">What&apos;s Typically Not Covered</h2>
                <p className="text-stone-600 text-sm mb-4">Every policy is different — always read your policy wording. These are common exclusions across most standard policies:</p>
                <ul className="space-y-2">
                  {content.notCovered.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="text-amber-600 font-bold mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* NZ Context */}
            {content && (
              <div className="bg-white rounded-xl p-8 border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-5">The New Zealand Context</h2>
                {renderDescription(content.nzContext)}
              </div>
            )}

            {/* How to Choose */}
            {content && (
              <div className="bg-brand-50 rounded-xl p-8 border border-brand-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-5">How to Choose the Right Cover</h2>
                {renderDescription(content.howToChoose)}
                <div className="mt-6">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-bold rounded-lg hover:bg-brand-800 transition shadow-sm"
                  >
                    Speak to a Specialist →
                  </Link>
                </div>
              </div>
            )}

            {/* FAQs */}
            {content && content.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {content.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="font-bold text-stone-900 mb-2 leading-snug">{faq.q}</h3>
                      <p className="text-stone-700 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Coverage Types */}
            {relatedCoverage.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Related Coverage Types</h2>
                <p className="text-stone-600 mb-6 text-sm">Most tiny home owners combine {ct.name.toLowerCase()} with one or more of the following:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedCoverage.map(rc => (
                    <Link
                      key={rc.slug}
                      href={`/coverage/${rc.slug}/`}
                      className="flex flex-col gap-2 p-4 rounded-xl border border-stone-200 hover:border-brand-300 hover:bg-brand-50 transition group"
                    >
                      <span className="text-2xl">{rc.icon}</span>
                      <span className="font-semibold text-stone-900 group-hover:text-brand-800 text-sm leading-snug">{rc.name}</span>
                      <span className="text-xs text-stone-500">{rc.shortDesc.slice(0, 70)}…</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Blog Posts */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Further Reading</h2>
                <p className="text-stone-600 mb-6 text-sm">Learn more about tiny home insurance in New Zealand from our specialist guides:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedBlogs.map(post => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="flex flex-col gap-2 p-4 rounded-xl border border-stone-200 hover:border-brand-300 hover:bg-brand-50 transition group"
                    >
                      <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{post.category}</span>
                      <span className="font-semibold text-stone-900 group-hover:text-brand-800 text-sm leading-snug">{post.title}</span>
                      <span className="text-xs text-stone-500">{post.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Internal links to compare and FAQ */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="font-semibold text-stone-900">Compare insurers for {ct.name.toLowerCase()}</p>
                <p className="text-sm text-stone-600 mt-1">See how AA, Initio, State and specialist providers compare on cover and price.</p>
              </div>
              <Link href="/compare/" className="flex-shrink-0 px-5 py-2.5 bg-stone-800 text-white text-sm font-bold rounded-lg hover:bg-stone-900 transition">
                Compare Now →
              </Link>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            {/* Other Coverage Types */}
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
              <h3 className="font-bold text-brand-900 mb-3">All Coverage Types</h3>
              <ul className="space-y-2">
                {otherCoverage.map(c => (
                  <li key={c.slug}>
                    <Link href={`/coverage/${c.slug}/`} className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand-600 font-medium transition">
                      <span>{c.icon}</span>{c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-3">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/compare/" className="text-brand-700 hover:text-brand-800 font-medium flex items-center gap-1">
                    → Compare Insurers
                  </Link>
                </li>
                <li>
                  <Link href="/faq/" className="text-brand-700 hover:text-brand-800 font-medium flex items-center gap-1">
                    → Common FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog/" className="text-brand-700 hover:text-brand-800 font-medium flex items-center gap-1">
                    → Insurance Guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="text-brand-700 hover:text-brand-800 font-medium flex items-center gap-1">
                    → Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trust notice */}
            <div className="bg-stone-800 text-white rounded-xl p-5 text-xs leading-relaxed">
              <p className="font-bold text-green-400 mb-1">Specialist NZ Advisers</p>
              <p className="text-stone-300">We work exclusively with New Zealand&apos;s specialist tiny home insurance providers — not generic comparison sites. Our advisers understand THOWs, off-grid homes, and container conversions.</p>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${ct.name} — ${SITE.name}`,
        description: ct.description,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: 'NZ',
      })}} />
    </div>
  );
}
