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

  // CRITICAL CONTACT INFO - hardcoded to ensure accuracy
  const contactText = [
    t(locale, 'contactTitle'),
    t(locale, 'contactDescription'),
    'CONTACT INFORMATION:',
    'Email: info@spm-interactive.com',
    'Phone: +385 99 844 6978',
    'Address: Korenići 28B, Korenići, Croatia',
    'Instagram: https://www.instagram.com/spm.interactive/',
    'Facebook: https://www.facebook.com/profile.php?id=61583592732443',
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
    'Email: info@spm-interactive.com',
    'Phone: +385 99 844 6978',
    'Instagram: https://www.instagram.com/spm.interactive/',
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

  // COMPREHENSIVE PRICING SUMMARY - dynamically generated from translations
  const pricingSummaryItems = [
    { name: t(locale, 'pricingItem1Name'), price: t(locale, 'pricingItem1Price') },
    { name: t(locale, 'pricingItem2Name'), price: t(locale, 'pricingItem2Price') },
    { name: t(locale, 'pricingItem3Name'), price: t(locale, 'pricingItem3Price') },
    { name: t(locale, 'pricingItem4Name'), price: t(locale, 'pricingItem4Price') },
    { name: t(locale, 'pricingItem5Name'), price: t(locale, 'pricingItem5Price') },
    { name: t(locale, 'pricingItem6Name'), price: t(locale, 'pricingItem6Price') },
    { name: t(locale, 'pricingItem7Name'), price: t(locale, 'pricingItem7Price') },
    { name: t(locale, 'pricingItem8Name'), price: t(locale, 'pricingItem8Price') },
    { name: t(locale, 'pricingItem9Name'), price: t(locale, 'pricingItem9Price') },
    { name: t(locale, 'pricingItem10Name'), price: t(locale, 'pricingItem10Price') },
    { name: t(locale, 'pricingItem11Name'), price: t(locale, 'pricingItem11Price') },
    { name: t(locale, 'pricingItem12Name'), price: t(locale, 'pricingItem12Price') },
    { name: t(locale, 'pricingItem13Name'), price: t(locale, 'pricingItem13Price') },
    { name: t(locale, 'pricingItem14Name'), price: t(locale, 'pricingItem14Price') },
  ];

  const pricingSummaryText = locale === 'hr'
    ? `SVE CIJENE - INFORMATIVNI PREGLED (SAMO OKVIRNE CIJENE)\n\n${pricingSummaryItems.map(item => `${item.name}: ${item.price}`).join('\n')}\n\n⚠️ VAŽNO: Sve cijene su samo informativne i okvirne. Stvarna cijena projekta ovisi o:\n- Složenosti projekta\n- Specifičnim zahtjevima\n- Vremenskoj liniji\n- Razini prilagodbe\n- Dodatnim uslugama\n\nZA TOČNU PONUDU KONTAKTIRAJTE NAS DIREKTNO:\nEmail: info@spm-interactive.com\nTelefon: +385 99 844 6978`
    : `ALL PRICING - INFORMATIONAL OVERVIEW (ESTIMATED PRICES ONLY)\n\n${pricingSummaryItems.map(item => `${item.name}: ${item.price}`).join('\n')}\n\n⚠️ IMPORTANT: All prices are informational and estimated. Actual project costs depend on:\n- Project complexity\n- Specific requirements\n- Timeline\n- Level of customization\n- Additional services\n\nFOR AN ACCURATE QUOTE CONTACT US DIRECTLY:\nEmail: info@spm-interactive.com\nPhone: +385 99 844 6978`;

  docs.push({ id: 'pricing:summary', text: pricingSummaryText });

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
