'use client';

import { ReactNode, useState } from 'react';
import { FAQSchema } from './SchemaMarkup';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  includeSchema?: boolean;
}

/**
 * FAQ Section Component
 * Renders an accessible FAQ accordion with structured data support
 * - Interactive expand/collapse with smooth animations
 * - ARIA attributes for accessibility
 * - Optional automatic JSON-LD schema generation
 */
export function FAQSection({
  items,
  title,
  subtitle,
  includeSchema = true,
}: FAQSectionProps): ReactNode {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      {/* Schema markup */}
      {includeSchema && <FAQSchema items={items} />}

      {/* Section header */}
      {title && (
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-emerald-100 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-emerald-100/70">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item, index) => (
          <FAQItem
            key={`${index}-${item.question}`}
            question={item.question}
            answer={item.answer}
            isExpanded={expandedIndex === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Individual FAQ Item with accordion functionality
 */
interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function FAQItem({
  question,
  answer,
  isExpanded,
  onToggle,
}: FAQItemProps): ReactNode {
  return (
    <div className="rounded-lg border border-emerald-900/30 bg-slate-950/40 overflow-hidden transition-all hover:border-emerald-800/50">
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between gap-4 hover:bg-emerald-950/20 transition-colors text-left"
        aria-label={`${question} ${isExpanded ? '(expanded)' : '(collapsed)'}`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-emerald-100 flex-1">
          {question}
        </h3>

        {/* Chevron icon */}
        <svg
          className={`h-6 w-6 flex-shrink-0 text-amber-400 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 sm:max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="border-t border-emerald-900/20 px-6 py-4 sm:px-8 sm:py-6 bg-emerald-950/10">
          <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
