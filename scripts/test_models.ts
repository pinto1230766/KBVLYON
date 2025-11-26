
import { AI_CONFIG } from '../src/config/ai_config';

interface Model {
  name: string;
  supportedGenerationMethods: string[];
}

async function listModels() {
  const apiKey = AI_CONFIG.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  console.log(`Querying: ${url.replace(apiKey, 'HIDDEN_KEY')}`);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      console.log("SUCCESS: API is reachable.");
      if (data.models) {
        console.log("Available Models:");
        data.models.forEach((m: Model) => {
          if (m.supportedGenerationMethods.includes('generateContent')) {
            console.log(m.name);
          }
        });
      } else {
        console.log("No models returned in the response.");
        console.log(JSON.stringify(data, null, 2));
      }
    } else {
      console.log(`FAILED: HTTP ${response.status}`);
      console.log("Error details:", JSON.stringify(data, null, 2));
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Network Error:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
}

listModels();
