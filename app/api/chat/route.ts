import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
export async function POST(req: Request) {
    const openrouter = createOpenRouter({
        apiKey: process.env.OPENROUTER_API_KEY,
    });
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: openrouter("meta-llama/llama-3.2-3b-instruct:free"),
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}