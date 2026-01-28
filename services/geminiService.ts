
import { GoogleGenAI } from "@google/genai";

export async function analyzeSystemDynamics(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Perform a Field Analysis of Kinetic Engagement for the following system or scenario: "${prompt}". 
      Maintain a calm, authoritative, and analytical tone. 
      Focus on visibility thresholds, momentum patterns, and attention structures. 
      Do not use marketing language. 
      Response should be in Markdown.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Analysis failed:", error);
    return "Failed to establish a signal. Please retry the observation.";
  }
}
