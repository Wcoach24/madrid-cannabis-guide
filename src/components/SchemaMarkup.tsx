import { ReactNode } from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  author?: string;
  url?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

interface FAQSchemaProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Article Schema Markup (JSON-LD)
 * Generates structured data for search engines about article content
 */
export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  image,
  author = 'Madrid Cannabis Guide Team',
  url = 'https://madridcannabisguide.com',
}: ArticleSchemaProps): ReactNode {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || 'https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/madrid-cannabis-guide/hero-madrid-gran-via',
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Madrid Cannabis Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://madridcannabisguide.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Breadcrumb Schema Markup (JSON-LD)
 * Generates structured data for breadcrumb navigation
 */
export function BreadcrumbSchema({
  items,
  baseUrl = 'https://madridcannabisguide.com',
}: BreadcrumbSchemaProps): ReactNode {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.url}`,
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Schema Markup (JSON-LD)
 * Generates structured data for FAQ sections
 */
export function FAQSchema({
  items,
}: FAQSchemaProps): ReactNode {
  const mainEntity = items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
