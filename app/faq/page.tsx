import { faqs } from '../../data/faqs';
import { SITE } from '../../data/site';
import FAQContent from '../../components/FAQContent';

export const metadata = {
  title: 'Tiny Home Insurance FAQs | TinyHomeInsurance.co.nz',
  description: 'Answers to the most common questions about insuring tiny homes, THOWs, container homes, and off-grid dwellings in New Zealand. NZ specialist adviser Q&A.',
  alternates: { canonical: 'https://www.tinyhomeinsurance.co.nz/faq/' },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 20).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${SITE.domain}/faq/` },
    ],
  };

  return (
    <>
      <FAQContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
