# Guide d'Implémentation IA pour KBVLYON

**Guide Technique Détaillé**  
**Version** : 1.0  
**Date** : 25 novembre 2025

---

## 📋 Table des Matières

1. [Architecture IA](#architecture-ia)
2. [Configuration Gemini](#configuration-gemini)
3. [Chatbot Capverdien](#chatbot-capverdien)
4. [Analyse de Prononciation](#analyse-de-prononciation)
5. [Générateur de Contenu](#générateur-de-contenu)
6. [Personnalisation](#personnalisation)
7. [Exemples de Code](#exemples-de-code)

---

## 🏗️ Architecture IA

### Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Chatbot    │  │ Pronunciation│  │   Content    │      │
│  │  Component   │  │   Analyzer   │  │  Generator   │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
└─────────┼──────────────────┼──────────────────┼──────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                    AI Services Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Gemini     │  │ Speech API   │  │  Analytics   │      │
│  │   Service    │  │   Service    │  │   Service    │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
└─────────┼──────────────────┼──────────────────┼──────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                    External APIs                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Google       │  │ Web Speech   │  │  Firebase    │      │
│  │ Gemini API   │  │     API      │  │   Storage    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Configuration Gemini

### 1. Installation des Dépendances

```bash
npm install @google/generative-ai
npm install @google-cloud/text-to-speech
npm install @google-cloud/speech
```

### 2. Configuration des Variables d'Environnement

```env
# .env.local
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GOOGLE_CLOUD_PROJECT_ID=your_project_id
VITE_GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json
```

### 3. Service Gemini de Base

```typescript
// src/services/gemini/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("VITE_GEMINI_API_KEY is not defined");
    }
    
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.initializeModel();
  }

  private initializeModel() {
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    });
  }

  async chat(message: string, context?: string): Promise<string> {
    try {
      const prompt = context 
        ? `${context}\n\nUtilisateur: ${message}\nAssistant:`
        : message;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Erreur Gemini:", error);
      throw new Error("Impossible de générer une réponse");
    }
  }

  async chatStream(
    message: string, 
    context?: string,
    onChunk?: (text: string) => void
  ): Promise<string> {
    try {
      const prompt = context 
        ? `${context}\n\nUtilisateur: ${message}\nAssistant:`
        : message;

      const result = await this.model.generateContentStream(prompt);
      let fullText = "";

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        fullText += chunkText;
        if (onChunk) {
          onChunk(chunkText);
        }
      }

      return fullText;
    } catch (error) {
      console.error("Erreur Gemini Stream:", error);
      throw new Error("Impossible de générer une réponse");
    }
  }
}

export const geminiService = new GeminiService();
```

---

## 💬 Chatbot Capverdien

### 1. Service de Chatbot

```typescript
// src/services/ai/capeverdeanTutor.ts
import { geminiService } from '../gemini/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ConversationContext {
  topic?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  ministryFocus: boolean;
  previousMessages: Message[];
}

class CapeverdeanTutorService {
  private systemPrompt = `Tu es un professeur expert de créole cap-verdien (kriolu kabuverdianu).

CONTEXTE:
- Tu aides les Témoins de Jéhovah portugais à apprendre le capverdien
- L'objectif principal est de les préparer pour la prédication
- Tu dois respecter l'orthographe ALUPEC et les normes de jw.org/kea

RÈGLES D'ORTHOGRAPHE:
- Utiliser "sta ta" ou "sata" pour le présent continu (les deux sont corrects)
- Pronoms: N (eu), Bu (tu), El (ele/ela), Nu (nós), Nhos (vocês), Es (eles/elas)
- Négation avec "ka": N ka ta fala (je ne parle pas)
- Futur avec "ta ba" ou "al": N ta ba fala / N al fala

STYLE DE RÉPONSE:
1. Réponds toujours en capverdien avec traduction portugaise
2. Corrige les erreurs gentiment et explique pourquoi
3. Donne des exemples pratiques pour la prédication
4. Utilise des situations réelles de prédication
5. Sois patient, encourageant et positif

FORMAT DE RÉPONSE:
🇨🇻 [Réponse en capverdien]
🇵🇹 [Traduction en portugais]
📝 [Notes grammaticales si nécessaire]
💡 [Conseils pour la prédication si pertinent]`;

  async chat(
    userMessage: string,
    context: ConversationContext
  ): Promise<{
    message: string;
    translation: string;
    grammarNotes: string[];
    ministryTips: string[];
  }> {
    // Construire le contexte complet
    const conversationHistory = context.previousMessages
      .map(msg => `${msg.role === 'user' ? 'Utilisateur' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const fullContext = `${this.systemPrompt}

NIVEAU DE L'UTILISATEUR: ${context.difficulty}
FOCUS PRÉDICATION: ${context.ministryFocus ? 'Oui' : 'Non'}
${context.topic ? `SUJET: ${context.topic}` : ''}

HISTORIQUE DE CONVERSATION:
${conversationHistory}

NOUVELLE QUESTION:
${userMessage}`;

    const response = await geminiService.chat(userMessage, fullContext);
    
    // Parser la réponse
    return this.parseResponse(response);
  }

  private parseResponse(response: string): {
    message: string;
    translation: string;
    grammarNotes: string[];
    ministryTips: string[];
  } {
    const lines = response.split('\n');
    let message = '';
    let translation = '';
    const grammarNotes: string[] = [];
    const ministryTips: string[] = [];

    for (const line of lines) {
      if (line.startsWith('🇨🇻')) {
        message = line.replace('🇨🇻', '').trim();
      } else if (line.startsWith('🇵🇹')) {
        translation = line.replace('🇵🇹', '').trim();
      } else if (line.startsWith('📝')) {
        grammarNotes.push(line.replace('📝', '').trim());
      } else if (line.startsWith('💡')) {
        ministryTips.push(line.replace('💡', '').trim());
      }
    }

    return { message, translation, grammarNotes, ministryTips };
  }

  async generateMinistryScenario(
    scenario: 'first_visit' | 'return_visit' | 'bible_study',
    difficulty: string
  ): Promise<string> {
    const prompts = {
      first_visit: `Crée un dialogue réaliste de première visite en prédication.
      Niveau: ${difficulty}
      Inclus: salutation, présentation, offre de publication, prise de rendez-vous.
      Format: Alternance Prédicateur/Habitant avec traduction PT.`,
      
      return_visit: `Crée un dialogue de visite de retour.
      Niveau: ${difficulty}
      Inclus: rappel visite précédente, discussion du sujet, réponse aux questions.
      Format: Alternance Prédicateur/Habitant avec traduction PT.`,
      
      bible_study: `Crée un dialogue d'étude biblique.
      Niveau: ${difficulty}
      Inclus: lecture de paragraphe, questions, application personnelle.
      Format: Alternance Enseignant/Étudiant avec traduction PT.`
    };

    return await geminiService.chat(prompts[scenario], this.systemPrompt);
  }

  async correctSentence(sentence: string): Promise<{
    isCorrect: boolean;
    corrected: string;
    explanation: string;
    alternatives: string[];
  }> {
    const prompt = `Analyse cette phrase en capverdien et corrige-la si nécessaire:
    "${sentence}"
    
    Fournis:
    1. Si la phrase est correcte (oui/non)
    2. La version corrigée si nécessaire
    3. Explication des erreurs
    4. 2-3 façons alternatives de dire la même chose`;

    const response = await geminiService.chat(prompt, this.systemPrompt);
    
    // Parser la réponse (à adapter selon le format de réponse)
    return {
      isCorrect: response.includes('correcte') || response.includes('correct'),
      corrected: sentence, // À extraire de la réponse
      explanation: response,
      alternatives: []
    };
  }
}

export const capeverdeanTutor = new CapeverdeanTutorService();
```

### 2. Composant Chatbot React

```typescript
// src/components/ai/CapeverdeanChatbot.tsx
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Volume2 } from 'lucide-react';
import { capeverdeanTutor } from '@/services/ai/capeverdeanTutor';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  translation?: string;
  grammarNotes?: string[];
  ministryTips?: string[];
  timestamp: Date;
}

export function CapeverdeanChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [ministryFocus, setMinistryFocus] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await capeverdeanTutor.chat(input, {
        difficulty,
        ministryFocus,
        previousMessages: messages
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message,
        translation: response.translation,
        grammarNotes: response.grammarNotes,
        ministryTips: response.ministryTips,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur chatbot:', error);
      // Afficher un message d'erreur à l'utilisateur
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-card rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">
          🇨🇻 Tutor de Kriolu
        </h2>
        <div className="flex gap-2 mt-2">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as any)}
            className="px-3 py-1 text-sm border border-border rounded bg-background text-foreground"
          >
            <option value="beginner">Iniciante</option>
            <option value="intermediate">Intermediário</option>
            <option value="advanced">Avançado</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={ministryFocus}
              onChange={(e) => setMinistryFocus(e.target.checked)}
              className="rounded"
            />
            Focus Pregação
          </label>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <p className="text-lg mb-2">👋 Bon dia!</p>
            <p className="text-sm">
              Comece a conversar em capverdien. Eu vou te ajudar!
            </p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
              
              {msg.translation && (
                <p className="text-sm opacity-80 mt-2 italic">
                  🇵🇹 {msg.translation}
                </p>
              )}

              {msg.grammarNotes && msg.grammarNotes.length > 0 && (
                <div className="mt-2 pt-2 border-t border-border/20">
                  <p className="text-xs font-semibold mb-1">📝 Notas:</p>
                  {msg.grammarNotes.map((note, i) => (
                    <p key={i} className="text-xs opacity-90">• {note}</p>
                  ))}
                </div>
              )}

              {msg.ministryTips && msg.ministryTips.length > 0 && (
                <div className="mt-2 pt-2 border-t border-border/20">
                  <p className="text-xs font-semibold mb-1">💡 Dicas:</p>
                  {msg.ministryTips.map((tip, i) => (
                    <p key={i} className="text-xs opacity-90">• {tip}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <button
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            title="Falar"
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Skrebe na kriolu..."
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎤 Analyse de Prononciation

### 1. Service de Reconnaissance Vocale

```typescript
// src/services/ai/speechRecognition.ts
class SpeechRecognitionService {
  private recognition: any;
  private isListening = false;

  constructor() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
      this.setupRecognition();
    } else if ('SpeechRecognition' in window) {
      this.recognition = new (window as any).SpeechRecognition();
      this.setupRecognition();
    }
  }

  private setupRecognition() {
    if (!this.recognition) return;

    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = 'pt-CV'; // Capverdien (fallback sur portugais)
  }

  async startListening(): Promise<string> {
    if (!this.recognition) {
      throw new Error('Speech recognition not supported');
    }

    return new Promise((resolve, reject) => {
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };

      this.recognition.onerror = (event: any) => {
        reject(new Error(event.error));
      };

      this.recognition.start();
      this.isListening = true;
    });
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  async analyzePronunciation(
    expectedText: string,
    spokenText: string
  ): Promise<{
    score: number;
    feedback: string[];
    suggestions: string[];
  }> {
    // Utiliser Gemini pour analyser la prononciation
    const prompt = `Compare ces deux phrases en capverdien:
    
    Attendu: "${expectedText}"
    Prononcé: "${spokenText}"
    
    Analyse:
    1. Donne un score de 0 à 100
    2. Liste les différences de prononciation
    3. Donne des conseils pour améliorer
    
    Format:
    SCORE: [nombre]
    FEEDBACK: [liste des différences]
    SUGGESTIONS: [conseils]`;

    const response = await geminiService.chat(prompt);
    
    // Parser la réponse
    const scoreMatch = response.match(/SCORE:\s*(\d+)/);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;
    
    const feedbackMatch = response.match(/FEEDBACK:\s*(.+?)(?=SUGGESTIONS:|$)/s);
    const feedback = feedbackMatch 
      ? feedbackMatch[1].split('\n').filter(line => line.trim())
      : [];
    
    const suggestionsMatch = response.match(/SUGGESTIONS:\s*(.+)$/s);
    const suggestions = suggestionsMatch
      ? suggestionsMatch[1].split('\n').filter(line => line.trim())
      : [];

    return { score, feedback, suggestions };
  }
}

export const speechRecognition = new SpeechRecognitionService();
```

### 2. Composant d'Exercice de Prononciation

```typescript
// src/components/ai/PronunciationExercise.tsx
import { useState } from 'react';
import { Mic, Volume2, CheckCircle, XCircle } from 'lucide-react';
import { speechRecognition } from '@/services/ai/speechRecognition';

interface PronunciationExerciseProps {
  sentence: {
    kea: string;
    pt: string;
  };
  onComplete?: (score: number) => void;
}

export function PronunciationExercise({ sentence, onComplete }: PronunciationExerciseProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    feedback: string[];
    suggestions: string[];
  } | null>(null);

  const handlePlayAudio = () => {
    // Utiliser Web Speech API pour lire la phrase
    const utterance = new SpeechSynthesisUtterance(sentence.kea);
    utterance.lang = 'pt-PT'; // Approximation
    speechSynthesis.speak(utterance);
  };

  const handleStartRecording = async () => {
    try {
      setIsRecording(true);
      setResult(null);
      
      const spokenText = await speechRecognition.startListening();
      
      const analysis = await speechRecognition.analyzePronunciation(
        sentence.kea,
        spokenText
      );
      
      setResult(analysis);
      
      if (onComplete) {
        onComplete(analysis.score);
      }
    } catch (error) {
      console.error('Erreur d\'enregistrement:', error);
    } finally {
      setIsRecording(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-8 h-8 text-green-500" />;
    return <XCircle className="w-8 h-8 text-red-500" />;
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold mb-4">Exercício de Pronúncia</h3>
      
      {/* Phrase à prononcer */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xl font-medium text-foreground">{sentence.kea}</p>
          <button
            onClick={handlePlayAudio}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            title="Écouter"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground italic">{sentence.pt}</p>
      </div>

      {/* Bouton d'enregistrement */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleStartRecording}
          disabled={isRecording}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isRecording
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          <Mic className="w-5 h-5" />
          {isRecording ? 'Gravando...' : 'Gravar Pronúncia'}
        </button>
      </div>

      {/* Résultats */}
      {result && (
        <div className="space-y-4">
          {/* Score */}
          <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg">
            {getScoreIcon(result.score)}
            <div>
              <p className="text-sm text-muted-foreground">Pontuação</p>
              <p className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}/100
              </p>
            </div>
          </div>

          {/* Feedback */}
          {result.feedback.length > 0 && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">📝 Feedback:</p>
              <ul className="space-y-1">
                {result.feedback.map((item, idx) => (
                  <li key={idx} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {result.suggestions.length > 0 && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">💡 Sugestões:</p>
              <ul className="space-y-1">
                {result.suggestions.map((item, idx) => (
                  <li key={idx} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

---

## 🎓 Générateur de Contenu

```typescript
// src/services/ai/contentGenerator.ts
import { geminiService } from '../gemini/geminiService';

class ContentGeneratorService {
  async generateExercises(
    topic: string,
    difficulty: string,
    count: number = 5
  ): Promise<any[]> {
    const prompt = `Crée ${count} exercices de capverdien sur le sujet "${topic}".
    Niveau: ${difficulty}
    
    Pour chaque exercice, fournis:
    1. Type (fill-in-blank, multiple-choice, ou translation)
    2. Question en portugais
    3. Réponse correcte en capverdien
    4. 3 options incorrectes (si multiple-choice)
    5. Explication de la réponse
    
    Format JSON.`;

    const response = await geminiService.chat(prompt);
    // Parser et retourner les exercices
    return JSON.parse(response);
  }

  async generateMinistryDialogue(
    scenario: string,
    difficulty: string
  ): Promise<any> {
    const prompt = `Crée un dialogue de prédication réaliste.
    Scénario: ${scenario}
    Niveau: ${difficulty}
    
    Inclus:
    - 6-8 échanges
    - Vocabulaire biblique approprié
    - Expressions naturelles
    - Traduction portugaise
    
    Format JSON avec structure:
    {
      "title": "...",
      "scenario": "...",
      "dialogue": [
        {"speaker": "Pregador", "kea": "...", "pt": "..."},
        {"speaker": "Morador", "kea": "...", "pt": "..."}
      ]
    }`;

    const response = await geminiService.chat(prompt);
    return JSON.parse(response);
  }

  async adaptContentToLevel(
    content: string,
    currentLevel: string,
    targetLevel: string
  ): Promise<string> {
    const prompt = `Adapte ce contenu en capverdien du niveau ${currentLevel} au niveau ${targetLevel}:
    
    "${content}"
    
    Règles:
    - Beginner: Phrases simples, vocabulaire de base
    - Intermediate: Phrases plus complexes, plus de vocabulaire
    - Advanced: Expressions idiomatiques, nuances culturelles`;

    return await geminiService.chat(prompt);
  }
}

export const contentGenerator = new ContentGeneratorService();
```

---

## 📊 Personnalisation et Analytics

```typescript
// src/services/ai/progressAnalyzer.ts
import { geminiService } from '../gemini/geminiService';

interface UserProgress {
  lessonsCompleted: number[];
  exerciseScores: { [key: string]: number };
  studyTime: number;
  weakAreas: string[];
  strengths: string[];
}

class ProgressAnalyzerService {
  async analyzeProgress(progress: UserProgress): Promise<{
    analysis: string;
    recommendations: string[];
    nextSteps: string[];
    estimatedTimeToGoal: number;
  }> {
    const prompt = `Analyse la progression de cet apprenant de capverdien:
    
    Leçons complétées: ${progress.lessonsCompleted.length}
    Scores moyens: ${JSON.stringify(progress.exerciseScores)}
    Temps d'étude: ${progress.studyTime} minutes
    Points faibles: ${progress.weakAreas.join(', ')}
    Points forts: ${progress.strengths.join(', ')}
    
    Fournis:
    1. Analyse générale de la progression
    2. 5 recommandations personnalisées
    3. Prochaines étapes suggérées
    4. Estimation du temps pour atteindre le niveau suivant (en semaines)`;

    const response = await geminiService.chat(prompt);
    
    // Parser la réponse
    return {
      analysis: response,
      recommendations: [],
      nextSteps: [],
      estimatedTimeToGoal: 4
    };
  }

  async getPersonalizedRecommendations(
    userId: string,
    progress: UserProgress
  ): Promise<any[]> {
    // Analyser et retourner des recommandations
    return [];
  }
}

export const progressAnalyzer = new ProgressAnalyzerService();
```

---

## 🚀 Intégration dans l'Application

### 1. Ajouter le Chatbot à une Page

```typescript
// src/pages/AIAssistantPage.tsx
import { CapeverdeanChatbot } from '@/components/ai/CapeverdeanChatbot';

export function AIAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Assistant IA Capverdien</h1>
      <CapeverdeanChatbot />
    </div>
  );
}
```

### 2. Ajouter aux Routes

```typescript
// src/App.tsx
import { AIAssistantPage } from './pages/AIAssistantPage';

// Dans les routes
<Route path="/ai-assistant" element={<AIAssistantPage />} />
```

### 3. Ajouter au Menu de Navigation

```typescript
// src/components/MainNav.tsx
{
  name: 'Assistant IA',
  path: '/ai-assistant',
  icon: '🤖'
}
```

---

## 📝 Checklist d'Implémentation

### Phase 1: Configuration (Semaine 1)
- [ ] Créer compte Google Cloud et activer Gemini API
- [ ] Obtenir les clés API
- [ ] Configurer les variables d'environnement
- [ ] Installer les dépendances npm
- [ ] Tester la connexion à l'API

### Phase 2: Chatbot de Base (Semaine 2-3)
- [ ] Créer le service Gemini
- [ ] Implémenter le service de tuteur capverdien
- [ ] Créer le composant de chatbot
- [ ] Ajouter la gestion de l'historique
- [ ] Tester avec différents scénarios

### Phase 3: Prononciation (Semaine 4-5)
- [ ] Implémenter le service de reconnaissance vocale
- [ ] Créer le composant d'exercice de prononciation
- [ ] Intégrer l'analyse IA de prononciation
- [ ] Ajouter le feedback visuel
- [ ] Tests utilisateurs

### Phase 4: Génération de Contenu (Semaine 6)
- [ ] Service de génération d'exercices
- [ ] Service de génération de dialogues
- [ ] Intégration dans les pages existantes
- [ ] Tests de qualité du contenu généré

### Phase 5: Personnalisation (Semaine 7-8)
- [ ] Service d'analyse de progression
- [ ] Recommandations personnalisées
- [ ] Dashboard de progression
- [ ] Tests et ajustements

---

## 💰 Gestion des Coûts

### Optimisations pour Réduire les Coûts

1. **Cache des Réponses**
```typescript
// Mettre en cache les réponses fréquentes
const responseCache = new Map<string, string>();

async function getCachedResponse(prompt: string): Promise<string> {
  if (responseCache.has(prompt)) {
    return responseCache.get(prompt)!;
  }
  
  const response = await geminiService.chat(prompt);
  responseCache.set(prompt, response);
  return response;
}
```

2. **Limitation du Nombre de Requêtes**
```typescript
// Rate limiting côté client
class RateLimiter {
  private requests: number[] = [];
  private maxRequests = 10; // par minute
  
  canMakeRequest(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < 60000);
    return this.requests.length < this.maxRequests;
  }
  
  recordRequest() {
    this.requests.push(Date.now());
  }
}
```

3. **Utilisation du Tier Gratuit**
- Gemini API: 60 requêtes/minute gratuites
- Commencer avec le modèle gratuit
- Upgrader seulement si nécessaire

---

## 🔒 Sécurité

### Protection des Clés API

```typescript
// Ne JAMAIS exposer les clés dans le code frontend
// Utiliser un backend proxy

// backend/api/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  // Vérifier l'authentification de l'utilisateur
  const user = await authenticateUser(req);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Utiliser la clé API côté serveur
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // ... reste du code
}
```

---

**Prochaine Étape**: Commencer par la Phase 1 de configuration et tester la connexion à Gemini API.
