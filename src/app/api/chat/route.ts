import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { getKnowledge, selectKnowledge } from '@/lib/chatbotKnowledge';

const systemPrompt = `You are a helpful AI assistant for Fractalbyte, a web development and digital solutions company.

Always be helpful, professional, and concise in your responses.
Use the provided CONTEXT to answer questions about the company, services, pricing, or contact info.
If the answer is not in the CONTEXT, say you are not sure and suggest contacting the team.

Be conversational and friendly. Use the user's preferred language (Croatian or English).
Format responses with simple Markdown when helpful (short headings, bullet lists, and emphasis).`;

export async function POST(req: Request) {
  try {
    const { messages, language } = await req.json();

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
    const contextDocs = selectKnowledge(query, knowledge, 6);
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
