import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPTS } from './prompts';
import { AIResponse, ChatMessage, GeneratedQuiz } from './types';
import { AI_CONFIG } from '../../config/ai_config';

// Utilisation de la configuration directe
const API_KEY = AI_CONFIG.GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
}

export const GeminiService = {
  /**
   * Vérifie si le service est configuré
   */
  isConfigured: (): boolean => {
    return !!API_KEY;
  },

  /**
   * Envoie un message au chatbot tuteur
   */
  chat: async (history: ChatMessage[], message: string): Promise<AIResponse> => {
    if (!genAI) {
      console.error("Gemini Chat Error: genAI instance is null. API Key might be missing or invalid.");
      return { text: '', error: 'API Key missing or service not initialized' };
    }

    try {
      // Utilisation du modèle disponible détecté (gemini-2.0-flash)
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: SYSTEM_PROMPTS.TUTOR }],
          },
          {
            role: "model",
            parts: [{ text: "Entendido. Sou o KrioluGPT, o teu professor de Crioulo de Cabo Verde (variante de Santiago). Como posso ajudar-te hoje?" }],
          },
          ...history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.content }]
          }))
        ],
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      return { text };
    } catch (error: unknown) {
      const err = error as Error;
      console.error("Gemini Chat Error Detailed:", err);
      return { text: '', error: `Failed to get response: ${err.message}` };
    }
  },

  /**
   * Génère un quiz sur un sujet donné
   */
  generateQuiz: async (topic: string, level: string): Promise<GeneratedQuiz | null> => {
    if (!genAI) return null;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const prompt = `${SYSTEM_PROMPTS.QUIZ_GENERATOR}\n\nTopic: ${topic}\nLevel: ${level}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Nettoyage du JSON si nécessaire (parfois Gemini ajoute des backticks)
      const jsonStr = text.replace(/```json\n?|\n?```/g, '').trim();
      
      return JSON.parse(jsonStr) as GeneratedQuiz;
    } catch (error) {
      console.error("Gemini Quiz Error:", error);
      return null;
    }
  },

  /**
   * Explique le contexte grammatical et culturel d'un texte
   */
  explainText: async (text: string): Promise<string | null> => {
    if (!genAI) return null;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `${SYSTEM_PROMPTS.CONTEXT_EXPLAINER}\n\nText to analyze: "${text}"`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini Explain Error:", error);
      return null;
    }
  }
};
