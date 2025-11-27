import { openai } from "@ai-sdk/openai";
import { fireworks } from "@ai-sdk/fireworks";
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

export const MODEL = openai('gpt-4.1-mini');

// If you want to use a Fireworks model, uncomment the following code and set the FIREWORKS_API_KEY in Vercel
// NOTE: Use middleware when the reasoning tag is different than think. (Use ChatGPT to help you understand the middleware)
// export const MODEL = wrapLanguageModel({
//     model: fireworks('fireworks/deepseek-r1-0528'),
//     middleware: extractReasoningMiddleware({ tagName: 'think' }), // Use this only when using Deepseek
// });


function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "ECHO";
export const OWNER_NAME = "KK & Armaan";

export const WELCOME_MESSAGE = `Hello! I'm ${AI_NAME}, an AI assistant to help you choose the right courses`

export const CLEAR_CHAT_TEXT = "New";

export const MODERATION_DENIAL_MESSAGE_SEXUAL = "I can't discuss explicit sexual content. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS = "I can't discuss content involving minors in a sexual context. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_HARASSMENT = "I can't engage with harassing content. Please be respectful.";
export const MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING = "I can't engage with threatening or harassing content. Please be respectful.";
export const MODERATION_DENIAL_MESSAGE_HATE = "I can't engage with hateful content. Please be respectful.";
export const MODERATION_DENIAL_MESSAGE_HATE_THREATENING = "I can't engage with threatening hate speech. Please be respectful.";
export const MODERATION_DENIAL_MESSAGE_ILLICIT = "I can't discuss illegal activities. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT = "I can't discuss violent illegal activities. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM = "I can't discuss self-harm. If you're struggling, please reach out to a mental health professional or crisis helpline.";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT = "I can't discuss self-harm intentions. If you're struggling, please reach out to a mental health professional or crisis helpline.";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS = "I can't provide instructions related to self-harm. If you're struggling, please reach out to a mental health professional or crisis helpline.";
export const MODERATION_DENIAL_MESSAGE_VIOLENCE = "I can't discuss violent content. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC = "I can't discuss graphic violent content. Please ask something else.";
export const MODERATION_DENIAL_MESSAGE_DEFAULT = "Your message violates our guidelines. I can't answer that.";
export const MODERATION_DENIAL_MESSAGE_GRADE_MANIPULATION = "I can't help with manipulating grades, bypassing requirements, or exploiting course policies.";
export const MODERATION_DENIAL_MESSAGE_ASSIGNMENT_HELP = "I can't solve graded assignments, quizzes, or exams for you. I can help you understand the concepts instead.";
export const MODERATION_DENIAL_MESSAGE_PLAGIARISM_ACADEMIC = "I can't create work intended for academic submission. I can help you think through the topic so you can write your own answer.";
export const MODERATION_DENIAL_MESSAGE_SYSTEM_ABUSE = "I can't help you bypass course registration rules, system limits, or academic policies.";
export const MODERATION_DENIAL_MESSAGE_CAREER_CERTAINTY = "I can't guarantee job outcomes. I can help you understand how electives align with different career paths.";

export const MODERATION_DENIAL_MESSAGE_MENTAL_HEALTH =
  "I'm not a mental health professional. For emotional support, please talk to someone you trust or a qualified professional.";


export const PINECONE_TOP_K = 40;
export const PINECONE_INDEX_NAME = "my-ai";
