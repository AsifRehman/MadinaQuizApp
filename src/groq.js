import Groq from "groq-sdk";

// IMPORTANT: Replace with your actual Groq API key from https://console.groq.com/
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "YOUR_GROQ_API_KEY";

const groq = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage, though not recommended for production
});

export const getGroqResponse = async (prompt) => {
  try {
    if (!GROQ_API_KEY || GROQ_API_KEY === "YOUR_GROQ_API_KEY") {
      return "Please provide a valid Groq API Key in src/groq.js to see AI responses.";
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices[0]?.message?.content || "No response from Groq.";
  } catch (error) {
    console.error("Groq API Error:", error);
    return "Error: " + (error.message || "Something went wrong while fetching AI response.");
  }
};
