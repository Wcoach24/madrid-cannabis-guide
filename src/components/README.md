# Madrid Cannabis Guide Components

Production-quality, reusable React components for madridcannabisguide.com with built-in SEO, accessibility, and design system integration.

## Components

### 1. ArticleLayout

Comprehensive wrapper for article pages with hero, breadcrumbs, TOC, sidebar, and schema markup.

**File**: `ArticleLayout.tsx`

**Usage**:

```tsx
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BlogPost() {
  return (
    <ArticleLayout
      title="Cannabis Clubs in Madrid: Your Complete Guide"
      subtitle="Everything you need to know about joining and navigating Madrid's cannabis culture"
      image="/images/madrid-clubs.jpg"
      readingTime={8}
      lastUpdated="March 9, 2024"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/guides' },
        { label: 'Cannabis Clubs', href: '/guides/clubs' },
      ]}
      tableOfContents={[
        { id: 'what-are-clubs', label: 'What are Cannabis Clubs?', level: 2 },
        { id: 'how-to-join', label: 'How to Join', level: 2 },
        { id: 'membership-costs', label: 'Membership Costs', level: 3 },
      ]}
      cta={{
        variant: 'inline',
        headline: 'Ready to Explore?',
        text: 'Get direct invitations to Madrid clubs.',
      }}
      relatedArticles={[
        {
          title: 'Cannabis Regulations in Spain',
          href: '/guides/regulations',
          excerpt: 'Understanding Spanish cannabis laws...',
          image: '/images/regulations.jpg',
        },
      ]}
      publishedAt="2024-03-01T00:00:00Z"
      modifiedAt="2024-03-09T00:00:00Z"
    >
      {/* Article content here */}
      <h2 id="what-are-clubs">What are Cannabis Clubs?</h2>
      <p>Cannabis clubs are private, member-based social spaces...</p>
    </ArticleLayout>
  );
}
```

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Article headline |
| `subtitle` | string | required | Article subheading (also used in meta) |
| `children` | ReactNode | required | Article content |
| `image` | string | - | Featured image URL |
| `readingTime` | number | - | Reading time in minutes |
| `lastUpdated` | string | - | Last update date (e.g., "March 9, 2024") |
| `breadcrumbs` | Breadcrumb[] | `[{label: 'Home', href: '/'}]` | Breadcrumb navigation |
| `tableOfContents` | TOCItem[] | - | Table of contents items |
| `cta` | CTA | - | Call-to-action section (inline or banner) |
| `relatedArticles` | RelatedArticle[] | - | Related articles sidebar |
| `publishedAt` | string | current date | ISO 8601 publish date |
| `modifiedAt` | string | current date | ISO 8601 modified date |
| `authorBio` | object | `{show: true}` | Show/customize author bio |

**Features**:
- SEO-optimized with Article + Breadcrumb schema markup
- Responsive prose styling (headings, lists, blockquotes, tables, code)
- Sticky table of contents sidebar (desktop)
- Related articles suggestions
- Author bio section
- Optional inline or banner CTAs
- Mobile-first responsive design

---

### 2. CTA

Reusable call-to-action component with two variants (inline card and full-width banner).

**File**: `CTA.tsx`

**Usage**:

```tsx
import { CTA } from '@/components/CTA';

// Inline variant
<CTA
  variant="inline"
  headline="Ready to Join?"
  text="Get your invitation today"
/>

// Banner variant (typically at page bottom)
<CTA
  variant="banner"
  headline="Ready to Explore Madrid's Cannabis Scene?"
  text="Get invited to verified clubs and discover the best social spaces."
/>
```

**Props**:

| Prop | Type | Options | Default |
|------|------|---------|---------|
| `variant` | string | `'inline'` \| `'banner'` | required |
| `headline` | string | - | `'Get Your Club Invitation'` |
| `text` | string | - | Default cannabis club copy |
| `className` | string | - | Additional CSS classes |

**Features**:
- Two distinct visual variants
- Built-in links to madridcannabisclubs.com and weedmadrid.com
- Emerald/amber color scheme
- Smooth hover states and active animations
- Fully responsive

---

### 3. FAQSection

Interactive accordion FAQ component with structured data support (FAQPage schema).

**File**: `FAQSection.tsx` (client component)

**Usage**:

```tsx
import { FAQSection } from '@/components/FAQSection';

const faqItems = [
  {
    question: 'How do I join a cannabis club in Madrid?',
    answer: 'To join a cannabis club, you typically need to be invited by a current member...',
  },
  {
    question: 'Is cannabis legal in Madrid?',
    answer: 'Cannabis consumption is decriminalized for personal use in Spain...',
  },
];

export default function FAQPage() {
  return (
    <FAQSection
      items={faqItems}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about cannabis clubs in Madrid"
      includeSchema={true}
    />
  );
}
```

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | FAQItem[] | required | Array of {question, answer} objects |
| `title` | string | - | Section heading |
| `subtitle` | string | - | Section subheading |
| `includeSchema` | boolean | `true` | Auto-generate FAQPage schema |

**Features**:
- Smooth expand/collapse animations
- ARIA attributes for accessibility (`aria-expanded`, etc.)
- Automatic FAQPage JSON-LD schema generation for SEO
- Chevron icon rotation on expand
- Responsive design

---

### 4. SchemaMarkup

Server component that generates JSON-LD structured data for search engines.

**File**: `SchemaMarkup.tsx` (server component)

**Usage**:

```tsx
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

// Article schema
<ArticleSchema
  title="Cannabis Clubs in Madrid"
  description="Your guide to cannabis clubs..."
  datePublished="2024-03-01T00:00:00Z"
  dateModified="2024-03-09T00:00:00Z"
  image="/images/clubs.jpg"
  author="Madrid Cannabis Guide Team"
  url="https://madridcannabisguide.com/clubs"
/>

// Breadcrumb schema
<BreadcrumbSchema
  items={[
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'Clubs', url: '/guides/clubs' },
  ]}
  baseUrl="https://madridcannabisguide.com"
/>

// FAQ schema
<FAQSchema
  items={[
    { question: 'How do I join?', answer: 'To join...' },
  ]}
/>
```

**Component Functions**:

#### `ArticleSchema`
| Prop | Type | Default |
|------|------|---------|
| `title` | string | required |
| `description` | string | required |
| `datePublished` | string | required |
| `dateModified` | string | required |
| `image` | string | og-image.jpg |
| `author` | string | "Madrid Cannabis Guide Team" |
| `url` | string | madridcannabisguide.com |

#### `BreadcrumbSchema`
| Prop | Type | Default |
|------|------|---------|
| `items` | BreadcrumbItem[] | required |
| `baseUrl` | string | madridcannabisguide.com |

#### `FAQSchema`
| Prop | Type | Default |
|------|------|---------|
| `items` | FAQItem[] | required |

**Features**:
- Zero dependencies (pure React)
- Server-side rendered for SEO
- Multiple schema types (Article, Breadcrumb, FAQ)
- Automatic JSON stringify with proper escaping
- Integrates directly with ArticleLayout

---

## Design System

All components use the Madrid Cannabis Guide design system:

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Emerald Green | #10b981 (medium), #065f46 (dark), #34d399 (light) |
| Accent | Warm Amber | #f59e0b |
| Background | Dark Green-Black | #0a0f0d |
| Surface | Darker Surface | #111916 |
| Text | Warm White | #e8ece9 |
| Border | Dark Border | #1a2420 |

All components are built with Tailwind 4 and use semantic color classes.

---

## Integration Examples

### Complete Article Page

```tsx
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQSection } from '@/components/FAQSection';
import { CTA } from '@/components/CTA';

export default function ClubsGuide() {
  const faqItems = [
    {
      question: 'How much does membership cost?',
      answer: '$50-200 depending on the club...',
    },
  ];

  return (
    <ArticleLayout
      title="Cannabis Clubs in Madrid"
      subtitle="Everything about joining and navigating..."
      readingTime={10}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/guides' },
      ]}
      tableOfContents={[
        { id: 'intro', label: 'Introduction', level: 2 },
        { id: 'joining', label: 'How to Join', level: 2 },
      ]}
      cta={{ variant: 'inline' }}
      relatedArticles={[
        { title: 'Spanish Cannabis Laws', href: '/laws' },
      ]}
    >
      <h2 id="intro">Introduction</h2>
      <p>Cannabis clubs...</p>

      <h2 id="joining">How to Join</h2>
      <p>Membership is straightforward...</p>

      <FAQSection
        items={faqItems}
        title="Club FAQs"
        includeSchema={false} // ArticleLayout already includes schema
      />
    </ArticleLayout>
  );
}
```

---

## TypeScript Types

All components export their prop types for strict typing:

```tsx
import type { ArticleLayoutProps } from '@/components/ArticleLayout';
import type { CTAProps } from '@/components/CTA';
import type { FAQSectionProps } from '@/components/FAQSection';
```

---

## Performance Notes

- **Server Components**: ArticleLayout and SchemaMarkup are server components (no "use client")
- **Client Components**: FAQSection uses "use client" for interactivity only
- **Zero External Dependencies**: No external UI libraries needed
- **Tailwind 4**: Uses Tailwind utility classes for styling
- **SEO Optimized**: Built-in schema markup, semantic HTML, meta tags

---

## Accessibility

- ✓ ARIA labels on interactive elements
- ✓ Semantic HTML (article, nav, aside, section)
- ✓ Focus-visible styles on all buttons/links
- ✓ Color contrast meets WCAG 2.1 AA standards
- ✓ Keyboard navigation support
- ✓ Mobile touch targets (44px minimum)

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Next.js 16+
- React 19+
- No IE11 support

---

## Future Enhancements

- Auto-generate TOC from heading IDs
- Comments/discussion section
- Share buttons (social media)
- Email subscription in CTA
- Video embeds in prose
- Print-friendly styles
