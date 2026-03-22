import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStudyMaterials(notes: string): Promise<AIResponse> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze these study notes and generate a summary, key points, and a 3-question multiple choice quiz. 
    Notes: ${notes}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the notes" },
          keyPoints: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "A list of the most important points"
          },
          quiz: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctAnswer: { type: Type.INTEGER, description: "Index of the correct answer (0-3)" }
              },
              required: ["question", "options", "correctAnswer"]
            }
          }
        },
        required: ["summary", "keyPoints", "quiz"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}") as AIResponse;
  } catch (e) {
    console.error("Failed to parse AI response", e);
    throw new Error("Invalid response from AI");
  }
}
