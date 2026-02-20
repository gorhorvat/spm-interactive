import { faqs, packages, pricings, processSteps, services, values } from '@/constants';
import { translations } from '@/locales/translations';

export type Locale = 'en' | 'hr';

export interface KnowledgeDoc {
  id: string;
  text: string;
}

const CACHE: Record<Locale, KnowledgeDoc[] | null> = {
  en: null,
  hr: null,
};

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'then', 'else', 'of', 'to', 'in', 'on', 'for', 'with', 'is', 'are',
  'be', 'as', 'at', 'by', 'from', 'this', 'that', 'these', 'those', 'it', 'its', 'we', 'you', 'your', 'our',
  'i', 'me', 'my', 'can', 'do', 'does', 'how', 'what', 'when', 'where', 'who', 'why', 'about',
  'i', 'ti', 'on', 'ona', 'ono', 'mi', 'vi', 'oni', 'one', 'da', 'ne', 'ili', 'pa', 'ali', 'jer', 'ako',
  'je', 'su', 'sam', 'si', 'smo', 'ste', 'u', 'na', 'za', 'od', 'do', 'iz', 'sa', 'kod', 'o', 'po',
]);

function t(locale: Locale, key: string): string {
  return (translations as any)?.[locale]?.[key] || key;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/gu)
    .filter(Boolean)
    .filter((token) => !STOPWORDS.has(token));
}

function scoreDoc(queryTokens: Set<string>, doc: KnowledgeDoc): number {
  const docTokens = tokenize(doc.text);
  let score = 0;
  for (const token of docTokens) {
    if (queryTokens.has(token)) score += 1;
  }
  return score;
}

export function buildKnowledge(locale: Locale): KnowledgeDoc[] {
  const docs: KnowledgeDoc[] = [];

  const contactText = [
    t(locale, 'contactTitle'),
    t(locale, 'contactDescription'),
    t(locale, 'privacyContactEmail'),
    t(locale, 'privacyContactPhone'),
    t(locale, 'privacyContactAddress'),
    `${t(locale, 'emailAddress')}: info@fractalbyte.studio`,
    `${t(locale, 'phone')}: +385 99 844 6978`,
    `${t(locale, 'privacyPolicy')}: ${locale === 'hr' ? '/politika-privatnosti' : '/en/privacy-policy'}`,
    `${t(locale, 'contact')}: ${locale === 'hr' ? '/kontakt' : '/en/contact'}`,
  ].filter(Boolean).join('\n');

  docs.push({ id: 'contact', text: contactText });

  const companyText = [
    t(locale, 'companyName'),
    t(locale, 'companyAddress'),
    t(locale, 'companyCity'),
    t(locale, 'companyOIB'),
  ].filter(Boolean).join('\n');

  docs.push({ id: 'company', text: companyText });

  const socialText = [
    'Email: info@fractalbyte.studio',
    'Phone: +385 99 844 6978',
    'Instagram: https://www.instagram.com/fractalbyte.studio/',
    'Facebook: https://www.facebook.com/profile.php?id=61583592732443',
  ].join('\n');

  docs.push({ id: 'social', text: socialText });

  docs.push({
    id: 'about',
    text: [
      t(locale, 'heroTagline'),
      t(locale, 'heroDescription'),
      t(locale, 'aboutDescription'),
      t(locale, 'servicesSummary'),
    ].filter(Boolean).join('\n'),
  });

  const contactPageText = [
    t(locale, 'contactTitle'),
    t(locale, 'contactDescription'),
    t(locale, 'yourName'),
    t(locale, 'emailAddress'),
    t(locale, 'subject'),
    t(locale, 'desiredService'),
    t(locale, 'selectService'),
    t(locale, 'message'),
    t(locale, 'sendMessage'),
  ].filter(Boolean).join('\n');

  docs.push({ id: 'contactPage', text: contactPageText });

  for (const service of services) {
    const name = t(locale, service.name);
    const description = t(locale, service.description);
    const expanded = t(locale, service.expandedContent);
    const features = (service.features || []).map((key) => t(locale, key));
    const deliverables = (service.deliverables || []).map((key) => t(locale, key));

    const text = [
      `Service: ${name}`,
      description,
      expanded,
      features.length ? `Features: ${features.join(', ')}` : '',
      deliverables.length ? `Deliverables: ${deliverables.join(', ')}` : '',
    ].filter(Boolean).join('\n');

    docs.push({ id: `service:${service.slug}`, text });
  }

  for (const faq of faqs) {
    const question = t(locale, faq.question);
    const answer = t(locale, faq.answer);
    docs.push({ id: `faq:${faq.question}`, text: `Q: ${question}\nA: ${answer}` });
  }

  for (const pricing of pricings) {
    const name = t(locale, pricing.name);
    const price = t(locale, pricing.price);
    docs.push({ id: `pricing:${pricing.name}`, text: `${name} - ${price}` });
  }

  for (const pkg of packages) {
    const name = t(locale, pkg.displayNameKey);
    const description = t(locale, pkg.descriptionKey);
    const price = t(locale, pkg.priceRangeKey);
    const features = (pkg.features || []).map((key) => t(locale, key));

    const text = [
      `Package: ${name}`,
      `Price: ${price}`,
      description,
      features.length ? `Includes: ${features.join(', ')}` : '',
    ].filter(Boolean).join('\n');

    docs.push({ id: `package:${pkg.name}`, text });
  }

  const valuesText = values
    .map((value) => `${t(locale, value.title)}: ${t(locale, value.description)}`)
    .join('\n');

  docs.push({ id: 'values', text: valuesText });

  const processText = processSteps
    .map((step, index) => `${index + 1}. ${t(locale, step)}`)
    .join('\n');

  docs.push({ id: 'process', text: processText });

  return docs;
}

export function getKnowledge(locale: Locale): KnowledgeDoc[] {
  const normalized: Locale = locale === 'hr' ? 'hr' : 'en';
  if (!CACHE[normalized]) {
    CACHE[normalized] = buildKnowledge(normalized);
  }
  return CACHE[normalized] || [];
}

export function selectKnowledge(query: string, docs: KnowledgeDoc[], limit = 6): KnowledgeDoc[] {
  const queryTokens = new Set(tokenize(query));
  const scored = docs
    .map((doc) => ({ doc, score: scoreDoc(queryTokens, doc) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.doc);

  if (scored.length > 0) return scored;

  const fallback = docs.filter((doc) => ['contact', 'company', 'about'].includes(doc.id));
  return fallback.slice(0, limit);
}
