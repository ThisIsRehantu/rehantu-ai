import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  throw new Error("GEMINI_API_KEY is required");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 0.7,
  candidateCount: 1,
  topP: 0.9,
  maxOutputTokens: 512,
};

async function run(prompt) {
  try {
    const response = await model.generate({
      prompt: { text: prompt },
      generationConfig,
    });
    const candidates = response?.candidates || [];
    if (candidates.length === 0) {
      console.error("No response from Gemini");
      return "";
    }
    return candidates[0].content.parts.map((p) => p.text || "").join("");
  } catch (error) {
    console.error("Error in API call:", error);
    return "";
  }
}

export default run;
