import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { getKnowledge, selectKnowledge } from '@/lib/chatbotKnowledge';

const systemPrompt = `You are a helpful AI assistant for Fractalbyte, a web development and digital solutions company.

CRITICAL RULES - MUST ALWAYS FOLLOW:
1. ONLY use information from the provided CONTEXT. NEVER make up services, features, pricing, or capabilities.
2. NEVER add extra features or benefits that aren't explicitly listed in the CONTEXT.
3. NEVER invent pricing information. Only mention prices found in the CONTEXT.
4. If something is not mentioned in the CONTEXT, you MUST say "I don't have that information" and suggest contacting the team.
5. Only these 6 services are offered: Web Development, Hosting, Performance Optimization, Security & Compliance, AI Integration, and B2B Consulting.
6. When describing services, features, or deliverables, use ONLY what is explicitly provided in the CONTEXT.
7. **PRICING IS INFORMATIONAL ONLY** - All prices mentioned are starting points/estimates. They vary based on project complexity, requirements, timeline, customization level, etc. **ALWAYS** emphasize that customers must contact Fractalbyte directly for an actual quote/offer. Never suggest a price is final or definitive.

Be conversational and friendly. Use the user's preferred language (Croatian or English).
Format responses with simple Markdown when helpful (short headings, bullet lists, and emphasis).

When a user has selected a specific service, focus on explaining that service and its benefits using ONLY information from the CONTEXT.
Ask clarifying questions to understand their specific needs within that service category.
Suggest relevant next steps like contacting directly for a personalized quote, viewing pricing information, or scheduling a consultation.`;

export async function POST(req: Request) {
  try {
    const { messages, language, selectedService } = await req.json();

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the language from header or body (defaults to English)
    const userLanguage = language || 'en';
    const languageSuffix = userLanguage === 'hr' ? ' Odgovori na hrvatskom jeziku.' : '';

    // Check for API key
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const knowledge = getKnowledge(userLanguage === 'hr' ? 'hr' : 'en');
    const lastUserMessage = [...messages].reverse().find((msg: any) => msg.role === 'user');
    const query = lastUserMessage?.content || '';
    
    // Check if query is about pricing or contact
    const pricingKeywords = ['pric', 'cost', 'price', 'how much', 'fee', 'fee', 'cijena', 'koliko', 'trošak', 'paket', 'package'];
    const contactKeywords = ['contact', 'email', 'phone', 'address', 'reach', 'kontakt', 'broj', 'telefonski', 'adresa'];
    const isPricingQuery = pricingKeywords.some(kw => query.toLowerCase().includes(kw));
    const isContactQuery = contactKeywords.some(kw => query.toLowerCase().includes(kw));
    
    // If a specific service is selected, prioritize that service's knowledge
    let contextDocs = selectKnowledge(query, knowledge, 6);
    
    // Ensure pricing summary is included if asking about pricing
    if (isPricingQuery) {
      const pricingSummaryDoc = knowledge.find((doc) => doc.id === 'pricing:summary');
      if (pricingSummaryDoc && !contextDocs.find(doc => doc.id === 'pricing:summary')) {
        contextDocs = [pricingSummaryDoc, ...contextDocs.slice(0, 5)];
      }
    }
    
    // Ensure contact info is included if asking about contact
    if (isContactQuery) {
      const contactDoc = knowledge.find((doc) => doc.id === 'contact');
      if (contactDoc && !contextDocs.find(doc => doc.id === 'contact')) {
        contextDocs = [contactDoc, ...contextDocs.slice(0, 5)];
      }
    }
    
    if (selectedService) {
      const serviceDoc = knowledge.find((doc) => doc.id === `service:${selectedService}`);
      if (serviceDoc && !contextDocs.find(doc => doc.id === `service:${selectedService}`)) {
        // Put service doc first
        contextDocs = [serviceDoc, ...contextDocs.filter((doc) => doc.id !== `service:${selectedService}`)];
      }
    }
    
    const contextText = contextDocs.map((doc) => doc.text).join('\n\n---\n\n');

    // Use Groq (free API with excellent speed)
    const result = await streamText({
      model: groq('openai/gpt-oss-safeguard-20b'),
      system: `${systemPrompt}\n\nCONTEXT:\n${contextText}` + languageSuffix,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
