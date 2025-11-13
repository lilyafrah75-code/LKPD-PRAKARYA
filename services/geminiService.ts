
import { GoogleGenAI, Type } from "@google/genai";
import type { GeminiResponse } from '../types';

if (!import.meta.env.VITE_API_KEY) {
  throw new Error("VITE_API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const generateProductIdeas = async (productChoice: string): Promise<GeminiResponse> => {
const prompt = `
You are an expert branding consultant with a flair for creating vibrant, exciting brands that resonate with younger audiences. Your task is to develop a complete branding concept for a new product designed by a student.

Student's Product Idea: "${productChoice}"

Please generate a branding concept that is creative, memorable, and perfectly suited for the product idea.

Your response must be a valid JSON object, enclosed in triple backticks ('''json ... '''), with the following structure and constraints:
- "productName": A catchy and cool name for the product. It should be easy to remember and pronounce.
- "targetMarket": The most suitable target market. Choose ONE of the following options: "Anak-anak", "Remaja", "Dewasa".
- "keywords": An array of exactly three exciting and descriptive keywords for the product. These keywords should capture the essence of the product.
- "primaryColor": A hex code for a primary color that fits the brand's identity (e.g., "#FF5733").
- "colorReason": A brief, compelling explanation for why the chosen color is a great fit for the product and its target market.
`;

try {
const response = await ai.models.generateContent({
model: "gemini-1.5-flash",
contents: prompt,
config: {
responseMimeType: "application/json",
responseSchema: {
type: Type.OBJECT,
properties: {
productName: {
type: Type.STRING,
description: "A catchy and cool name for the product."
},
targetMarket: {
type: Type.STRING,
description: "The best target market, chosen from 'Anak-anak', 'Remaja', or 'Dewasa'."
},
keywords: {
type: Type.ARRAY,
description: "An array of three exciting keywords that describe the product.",
items: { type: Type.STRING }
},
primaryColor: {
type: Type.STRING,
description: "A hex code for a suitable primary color."
},
colorReason: {
type: Type.STRING,
description: "A short, simple explanation for the color choice."
}
},
required: ["productName", "targetMarket", "keywords", "primaryColor", "colorReason"]
},
},
});

const jsonText = response.text.trim();
const parsedData: GeminiResponse = JSON.parse(jsonText);

// Ensure keywords array has exactly 3 elements
if (!parsedData.keywords || parsedData.keywords.length !== 3) {
throw new Error("AI response for 'keywords' is not an array of 3 strings.");
}

return parsedData;
} catch (error) {
console.error("Error calling Gemini API:", error);
throw new Error("Failed to generate ideas from AI. Please try again.");
}
};
