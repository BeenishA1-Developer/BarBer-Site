
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Lead Master Barber at "LUXE BARBER", a premium, high-end men's salon. Your goal is to provide expert, sophisticated grooming advice. 
        - Keep your responses concise (max 3-4 sentences).
        - Recommend specific hairstyles or beard shapes based on what the user describes (face shape, lifestyle, or hair type).
        - Suggest one of our signature services if applicable (Executive Haircut, Luxury Beard Grooming, Signature Hot Shave, Revitalizing Facial).
        - Use professional yet welcoming language.
        - Format with high-end luxury vibes.`,
        temperature: 0.7,
      },
    });
    return response.text || "I couldn't generate advice at this moment. Please visit us for a personal consultation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI stylist is currently sharpening its tools. Please try again later.";
  }
};
