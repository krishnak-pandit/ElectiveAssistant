# ElectiveAssistant

A customizable AI chatbot assistant built with Next.js, featuring web search capabilities, vector database integration, and content moderation.

## Overview

ElectiveAssistant is an AI-powered chatbot that can:

- Answer questions using advanced language models (GPT-4.1-mini)
- Search a vector database (Pinecone) for stored knowledge
- Moderate content to ensure safe interactions
- Provide citations and sources for its responses

This application is deployed on Vercel.

## Project Structure

```text
ElectiveAssistant/
├── app/                          # Next.js application files
│   ├── api/chat/                 # Chat API endpoint
│   │   ├── route.ts              # Main chat handler
│   │   └── tools/                 # AI tools (web search, vector search)
│   ├── page.tsx                  # Main chat interface (UI)
│   ├── parts/                    # UI components
│   └── terms/                    # Terms of Use page
├── components/                    # React components
│   ├── ai-elements/              # AI-specific UI components
│   ├── messages/                 # Message display components
│   └── ui/                       # Reusable UI components
├── lib/                          # Utility libraries
│   ├── moderation.ts             # Content moderation logic
│   ├── pinecone.ts               # Vector database integration
│   ├── sources.ts                # Source/citation handling
│   └── utils.ts                  # General utilities
├── types/                        # TypeScript type definitions
├── config.ts                     # ⭐ MAIN CONFIGURATION FILE
├── prompts.ts                    # ⭐ AI BEHAVIOR CONFIGURATION
└── package.json                  # Dependencies and scripts
```

## Important Files Explained

### Core Application Files

- **`app/api/chat/route.ts`**: The main API endpoint that handles chat requests. It processes messages, checks moderation, and calls the AI model with tools.

- **`app/page.tsx`**: The main user interface. This is what users see and interact with. It handles the chat interface, message display, and user input.

- **`app/api/chat/tools/web-search.ts`**: Enables the AI to search the web using Exa API. You can modify search parameters here (currently returns 3 results).

- **`app/api/chat/tools/search-vector-database.ts`**: Enables the AI to search your Pinecone vector database for stored knowledge.

### UI Components

- **`components/messages/message-wall.tsx`**: Displays the conversation history
- **`components/messages/assistant-message.tsx`**: Renders AI responses, including tool calls and reasoning
- **`components/messages/tool-call.tsx`**: Shows when the AI is using tools (searching web, etc.)
- **`components/ai-elements/response.tsx`**: Formats and displays AI text responses with markdown support

### Library Files

- **`lib/moderation.ts`**: Handles content moderation using OpenAI's moderation API. Checks user messages for inappropriate content before processing.

- **`lib/pinecone.ts`**: Manages connections to Pinecone vector database. Handles searching your knowledge base.

- **`lib/sources.ts`**: Processes search results and formats them for the AI, including citation handling.

### Configuration Files

- **`env.template`**: Template for environment variables. These need to be configured in your Vercel project settings.

- **`app/terms/page.tsx`**: Terms of Use page. Uses `OWNER_NAME` from `config.ts`. Update this file if you need to modify legal terms.

## Environment Setup (Vercel)

Configure environment variables in your Vercel project settings (Settings → Environment Variables). Add the following:

- `OPENAI_API_KEY` - Required for AI model and moderation
- `EXA_API_KEY` - Optional, for web search functionality
- `PINECONE_API_KEY` - Optional, for vector database search

**Where to get API keys:**

- **OpenAI**: <https://platform.openai.com/api-keys> (required)
- **Exa**: <https://dashboard.exa.ai/> (optional)
- **Pinecone**: <https://app.pinecone.io/> (optional)

**Note**: Only `OPENAI_API_KEY` is strictly required. The others enable additional features.

## Architecture Overview

The application follows a simple request-response flow:

1. **User sends message** → `app/page.tsx` (UI)
2. **Message sent to API** → `app/api/chat/route.ts`
3. **Content moderation check** → `lib/moderation.ts`
4. **AI processes with tools** → Model uses web search and/or vector search as needed
5. **Response streamed back** → UI displays response in real-time

The AI can autonomously decide to:

- Answer directly
- Search your vector database for stored knowledge
- Combine multiple sources

All responses include citations when sources are used.

## Troubleshooting

### AI not responding

- Verify `OPENAI_API_KEY` is set correctly in Vercel environment variables
- Check browser console for error messages
- Ensure the API key has sufficient credits/quota
- Check Vercel deployment logs for errors

### Web search not working

- Verify `EXA_API_KEY` is set in Vercel environment variables
- Check Exa API dashboard for usage limits
- Tool will gracefully fail if API key is missing

### Vector search not working

- Verify `PINECONE_API_KEY` is set in Vercel environment variables
- Check that `PINECONE_INDEX_NAME` in `config.ts` matches your Pinecone index
- Ensure your Pinecone index exists and has data

### Deployment issues

- Check Vercel deployment logs for build errors
- Verify all environment variables are set in Vercel project settings
- Ensure your Vercel project is connected to the correct Git repository

## Support

For technical questions about tool integration, see `AGENTS.md`.

For deployment issues, check the Vercel deployment logs and browser console for error messages.

