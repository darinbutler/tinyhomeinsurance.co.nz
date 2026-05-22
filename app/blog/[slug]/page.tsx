import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import { coverageTypes } from '../../../data/coverage-types';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://www.tinyhomeinsurance.co.nz/blog/${post.slug}/`,
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : [],
      publishedTime: post.date,
      authors: ['TinyHomeInsurance.co.nz Editorial Team'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-stone-900 mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-stone-800 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<p key={i} className="font-semibold text-stone-900 mt-4 mb-1">{line.slice(2, -2)}</p>);
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(<p key={i} className="text-stone-700 leading-relaxed mb-4">{line}</p>);
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  // Determine related coverage types based on category keywords
  const relatedCoverage = coverageTypes.slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image || `${SITE.domain}/images/tinyhome_insurance_2.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: `${SITE.name} Editorial Team`,
      url: SITE.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.domain}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.domain}/blog/${post.slug}/`,
    },
    articleSection: post.category,
    keywords: `tiny home insurance, ${post.category.toLowerCase()}, New Zealand`,
    about: {
      '@type': 'Thing',
      name: 'Tiny Home Insurance New Zealand',
    },
    inLanguage: 'en-NZ',
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.domain}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.domain}/blog/${post.slug}/` },
    ],
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(5,40,15,0.72) 0%, rgba(10,55,25,0.62) 50%, rgba(0,25,8,0.80) 100%), url('/images/tinyhome_insurance_2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs text-stone-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/blog/" className="hover:text-white">Guides</Link></li>
              <li><span>/</span></li>
              <li className="text-white">{post.title}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide text-green-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{post.category}</span>
            <span className="text-stone-300 text-sm">{post.readTime}</span>
            {post.date && <span className="text-stone-400 text-sm">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 bg-white rounded-xl border border-stone-200 p-8">
            {/* Author bar */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
              <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">TH</div>
              <div>
                <p className="text-sm font-semibold text-stone-900">TinyHomeInsurance.co.nz Editorial Team</p>
                <p className="text-xs text-stone-500">NZ specialist tiny home insurance guides</p>
              </div>
              {post.date && (
                <time dateTime={post.date} className="ml-auto text-xs text-stone-400 flex-shrink-0">
                  {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
              )}
            </div>

            <p className="text-xl text-stone-600 mb-8 pb-8 border-b border-stone-100 leading-relaxed font-medium">{post.excerpt}</p>
            <div>{renderContent(post.content)}</div>

            {/* Related coverage links */}
            <div className="mt-10 pt-8 border-t border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">Related Coverage Types</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {relatedCoverage.map(ct => (
                  <Link
                    key={ct.slug}
                    href={`/coverage/${ct.slug}/`}
                    className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 hover:border-brand-300 hover:bg-brand-50 transition text-sm font-medium text-stone-800 hover:text-brand-800"
                  >
                    <span>{ct.icon}</span>{ct.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 bg-brand-50 rounded-xl p-6 border border-brand-200 text-center">
              <p className="font-bold text-stone-900 mb-1">Ready to get covered?</p>
              <p className="text-sm text-stone-600 mb-4">Talk to a NZ specialist adviser about insuring your tiny home.</p>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-bold rounded-lg hover:bg-brand-800 transition">
                Get Insurance Advice →
              </Link>
            </div>
          </article>

          <aside className="space-y-6">
            <QuoteForm variant="compact" />
            {related.length > 0 && (
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
                <ul className="space-y-3">
                  {related.map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}/`} className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick links */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <h3 className="font-bold text-stone-900 mb-3">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/compare/" className="text-brand-700 hover:text-brand-800 font-medium">→ Compare Insurers</Link></li>
                <li><Link href="/coverage/" className="text-brand-700 hover:text-brand-800 font-medium">→ Coverage Types</Link></li>
                <li><Link href="/faq/" className="text-brand-700 hover:text-brand-800 font-medium">→ FAQs</Link></li>
                <li><Link href="/tiny-home-on-wheels/" className="text-brand-700 hover:text-brand-800 font-medium">→ THOW Insurance</Link></li>
                <li><Link href="/off-grid-home-insurance/" className="text-brand-700 hover:text-brand-800 font-medium">→ Off-Grid Insurance</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
