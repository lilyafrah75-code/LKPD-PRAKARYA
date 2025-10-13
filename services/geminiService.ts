
import { GoogleGenAI, Type } from "@google/genai";
import type { GeminiResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProductIdeas = async (productChoice: string): Promise<GeminiResponse> => {
  const prompt = `
    You are a creative product branding expert for young students. Based on the following product idea, generate a complete branding concept.

    Product Idea: "${productChoice}"

    Provide your response in a structured JSON format. The JSON object must contain the following keys:
    - "productName": A catchy and cool name for the product.
    - "targetMarket": The best target market, choose ONE from: "Anak-anak", "Remaja", "Dewasa".
    - "keywords": An array of three exciting keywords that describe the product.
    - "primaryColor": A hex code for a suitable primary color (e.g., "#4A90E2").
    - "colorReason": A short, simple explanation for why you chose that color.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
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
