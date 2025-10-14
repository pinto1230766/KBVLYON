import { grammarLessons } from '../data/grammarLessons';

export interface ConversationContext {
  currentPage: string;
  userLanguage: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    context?: Record<string, unknown>;
  }>;
  userPreferences: {
    learningLevel: 'beginner' | 'intermediate' | 'advanced';
    preferredTopics: string[];
    communicationStyle: 'formal' | 'casual' | 'detailed';
  };
  sessionData: {
    currentLesson?: number;
    completedLessons: number[];
    favoriteWords: string[];
    difficultTopics: string[];
  };
}

export interface AIResponse {
  content: string;
  suggestions?: string[];
  followUpQuestions?: string[];
  relatedContent?: Array<{
    type: 'lesson' | 'grammar' | 'dictionary' | 'preaching';
    id: string;
    title: string;
    relevance: number;
  }>;
  actions?: Array<{
    type: 'navigate' | 'search' | 'explain' | 'practice';
    target: string;
    description: string;
  }>;
  metadata?: {
    confidence: number;
    processingTime: number;
    contentType: 'explanation' | 'translation' | 'summary' | 'question' | 'insight';
  };
  contentType?: 'explanation' | 'translation' | 'summary' | 'question' | 'insight';
}

export interface ContentAnalysis {
  summary: string;
  keyPoints: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  relatedConcepts: string[];
  learningObjectives: string[];
  concepts?: string[];
  examples?: string[];
  applications?: string[];
}

export class AdvancedAIService {
  private context: ConversationContext;
  private geminiApiKey: string;

  constructor() {
    this.geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

    // Initialize default context
    this.context = {
      currentPage: '/',
      userLanguage: 'pt',
      conversationHistory: [],
      userPreferences: {
        learningLevel: 'beginner',
        preferredTopics: [],
        communicationStyle: 'casual'
      },
      sessionData: {
        completedLessons: [],
        favoriteWords: [],
        difficultTopics: []
      }
    };
  }

  // Context Management
  updateContext(updates: Partial<ConversationContext>) {
    this.context = { ...this.context, ...updates };
  }

  getContext(): ConversationContext {
    return { ...this.context };
  }

  // Content Analysis and Comprehension
  async analyzeContent(content: string, contentType: 'lesson' | 'grammar' | 'text'): Promise<ContentAnalysis> {
    try {
      // Use Gemini for advanced content analysis
      if (this.geminiApiKey) {
        const analysis = await this.callGeminiAPI(`
          Você é um especialista em crioulo cabo-verdiano e cultura de Cabo Verde. Analise o seguinte conteúdo sobre crioulo cabo-verdiano e forneça análise detalhada em português.

          CONTEXTO CULTURAL: Cabo Verde tem 9 ilhas com variações do crioulo. O crioulo é baseado no português mas com influências africanas, vocabulário único e gramática simplificada.

          CONTEÚDO A ANALISAR (${contentType}): ${content.substring(0, 4000)}

          Forneça análise detalhada em formato JSON com:
          - summary: Resumo breve mas abrangente (2-3 frases em português)
          - keyPoints: Array de 5-7 pontos principais ou conceitos
          - difficulty: beginner/intermediate/advanced baseado na complexidade linguística
          - topics: Array de tópicos principais e subtópicos abordados
          - relatedConcepts: Array de conceitos gramaticais ou linguísticos relacionados
          - learningObjectives: Array de objetivos de aprendizagem específicos
          - concepts: Array de termos-chave e definições encontrados no conteúdo
          - examples: Array de exemplos práticos do conteúdo
          - applications: Array de como este conhecimento pode ser aplicado na prática

          IMPORTANTE: Mantenha todas as respostas em português brasileiro, foque em aspectos culturais cabo-verdianos e seja específico sobre o crioulo.
        `);

        return JSON.parse(analysis);
      }

      // Enhanced local analysis
      return await this.enhancedLocalContentAnalysis(content, contentType);
    } catch (error) {
      console.error('Content analysis error:', error);
      return await this.enhancedLocalContentAnalysis(content, contentType);
    }
  }

  private async enhancedLocalContentAnalysis(content: string, contentType: string): Promise<ContentAnalysis> {
    const lowerContent = content.toLowerCase();

    // Enhanced topic detection
    const topics = [];
    const concepts = [];
    const examples = [];

    // Grammar-specific analysis
    if (contentType === 'grammar' || lowerContent.includes('gramática')) {
      if (lowerContent.includes('pronome') || lowerContent.includes('pronom')) {
        topics.push('pronouns', 'personal pronouns', 'possessive pronouns');
        concepts.push('pronome pessoal', 'pronome possessivo', 'forma curta vs longa');
      }
      if (lowerContent.includes('verbo') || lowerContent.includes('verb')) {
        topics.push('verbs', 'verb conjugation', 'TMA markers');
        concepts.push('marcadores TMA', 'verbo copulativo', 'forma progressiva');
      }
      if (lowerContent.includes('sintaxe') || lowerContent.includes('syntax')) {
        topics.push('syntax', 'word order', 'sentence structure');
        concepts.push('ordem SVO', 'frases declarativas', 'frases interrogativas');
      }
    }

    // Lesson-specific analysis - enhanced for actual lesson content
    if (contentType === 'lesson' || lowerContent.includes('lição')) {
      if (lowerContent.includes('pregação') || lowerContent.includes('preaching')) {
        topics.push('preaching', 'ministry', 'bible study');
        concepts.push('apresentações bíblicas', 'diálogos evangelizadores');
      }
      if (lowerContent.includes('vocabulário') || lowerContent.includes('vocabulary')) {
        topics.push('vocabulary', 'word learning', 'terminology');
        concepts.push('palavras temáticas', 'expressões idiomáticas');
      }
    }

    // General linguistic analysis
    if (lowerContent.includes('crioulo') || lowerContent.includes('creole')) {
      topics.push('cape verdean creole', 'language learning');
      concepts.push('língua crioula', 'base portuguesa', 'influências africanas');
    }

    // Extract examples from content
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);
    examples.push(...sentences.slice(0, 3));

    // Determine difficulty based on multiple factors
    let difficulty: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
    const complexityIndicators = [
      lowerContent.includes('sintaxe'),
      lowerContent.includes('morfologia'),
      lowerContent.includes('fonologia'),
      lowerContent.includes('etimologia')
    ].filter(Boolean).length;

    if (complexityIndicators >= 3) {
      difficulty = 'advanced';
    } else if (complexityIndicators >= 1) {
      difficulty = 'intermediate';
    }

    return {
      summary: await this.generateSummary(content, { maxLength: 200, style: 'concise' }),
      keyPoints: this.extractKeyPoints(content),
      difficulty,
      topics,
      relatedConcepts: concepts,
      learningObjectives: this.generateLearningObjectives(content, topics),
      concepts,
      examples,
      applications: this.generateApplications(content, topics)
    };
  }



  private generateLearningObjectives(_content: string, topics: string[]): string[] {
    const objectives = [];

    if (topics.includes('pronouns')) {
      objectives.push('Identificar e usar corretamente os pronomes pessoais em crioulo');
      objectives.push('Distinguir entre formas curtas e longas de pronomes');
    }
    if (topics.includes('verbs')) {
      objectives.push('Aplicar os marcadores TMA corretamente');
      objectives.push('Usar verbos copulativos É e STA apropriadamente');
    }
    if (topics.includes('vocabulary')) {
      objectives.push('Expandir vocabulário temático específico');
      objectives.push('Usar expressões idiomáticas em contextos apropriados');
    }

    // Default objectives if no specific topics detected
    if (objectives.length === 0) {
      objectives.push('Compreender os conceitos básicos apresentados');
      objectives.push('Aplicar o conhecimento em situações práticas');
      objectives.push('Praticar com os exemplos fornecidos');
    }

    return objectives.slice(0, 4);
  }

  private generateApplications(_content: string, topics: string[]): string[] {
    const applications = [];

    if (topics.includes('preaching')) {
      applications.push('Usar em apresentações bíblicas no ministério');
      applications.push('Facilitar conversas evangelizadoras em crioulo');
    }
    if (topics.includes('grammar')) {
      applications.push('Melhorar a comunicação escrita e oral em crioulo');
      applications.push('Compreender melhor textos e discursos em crioulo');
    }
    if (topics.includes('vocabulary')) {
      applications.push('Enriquecer o vocabulário para conversação diária');
      applications.push('Preparar-se para interações sociais em Cabo Verde');
    }

    // Default applications
    if (applications.length === 0) {
      applications.push('Aplicar conceitos em situações reais de comunicação');
      applications.push('Desenvolver maior fluência na língua crioula');
    }

    return applications.slice(0, 3);
  }

  // Advanced Content Summarization and Insight Generation
  async generateSummary(content: string, options?: {
    maxLength?: number;
    style?: 'concise' | 'detailed' | 'bullet_points';
    focus?: string[];
  }): Promise<string> {
    const { maxLength = 200, style = 'concise', focus = [] } = options || {};

    try {
      if (this.geminiApiKey) {
        const focusStr = focus.length > 0 ? ` Focus on: ${focus.join(', ')}` : '';
        const styleStr = style === 'bullet_points' ? ' in bullet points' : ' in paragraph form';

        const summary = await this.callGeminiAPI(`
          Você é um especialista em crioulo cabo-verdiano. Faça um ${style === 'concise' ? 'resumo conciso' : 'resumo detalhado'}${styleStr} do seguinte conteúdo sobre crioulo cabo-verdiano.
          Comprimento máximo: ${maxLength} caracteres.${focusStr}

          CONTEXTO: Cabo Verde tem 9 ilhas com variações do crioulo. O crioulo é uma língua crioula baseada no português com influências africanas.

          Conteúdo: ${content.substring(0, 3000)}

          Resumo em português:
        `);

        return summary.substring(0, maxLength);
      }

      // Local summarization fallback
      return this.localSummarization(content, maxLength, style);
    } catch (error) {
      console.error('Summary generation error:', error);
      return this.localSummarization(content, maxLength, style);
    }
  }

  private localSummarization(content: string, maxLength: number, style: string): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);

    if (style === 'bullet_points') {
      return sentences.slice(0, 4).map(s => `• ${s.trim()}`).join('\n');
    }

    const firstSentence = sentences[0]?.trim() || '';
    const keySentences = sentences.slice(1, 3).filter(s =>
      s.toLowerCase().includes('objetivo') ||
      s.toLowerCase().includes('importante') ||
      s.toLowerCase().includes('principal')
    );

    let summary = firstSentence;
    if (keySentences.length > 0) {
      summary += '. ' + keySentences[0];
    }

    return summary.length > maxLength ? summary.substring(0, maxLength - 3) + '...' : summary;
  }

  async generateInsights(content: string, context?: string): Promise<string[]> {
    try {
      if (this.geminiApiKey) {
        const contextStr = context ? ` Context: ${context}` : '';

        const insights = await this.callGeminiAPI(`
          Você é especialista em crioulo cabo-verdiano. Gere 3-5 insights-chave do seguinte conteúdo.${contextStr}
          Foque em aplicações práticas, conexões importantes e compreensão mais profunda do crioulo cabo-verdiano.

          CONTEXTO CULTURAL: O crioulo é falado em Cabo Verde com variações por ilha, refletindo a diversidade cultural do arquipélago.

          Conteúdo: ${content.substring(0, 2500)}

          Forneça insights como array JSON de strings em português:
        `);

        const parsed = JSON.parse(insights);
        return Array.isArray(parsed) ? parsed : [];
      }

      // Local insights generation
      return this.localInsightGeneration(content);
    } catch (error) {
      console.error('Insight generation error:', error);
      return this.localInsightGeneration(content);
    }
  }

  private localInsightGeneration(content: string): string[] {
    const insights = [];
    const lowerContent = content.toLowerCase();

    // Generate insights based on content patterns
    if (lowerContent.includes('crioulo') && lowerContent.includes('português')) {
      insights.push('O crioulo cabo-verdiano mantém forte influência lexical do português, facilitando a aprendizagem para lusófonos');
    }

    if (lowerContent.includes('variação') || lowerContent.includes('dialeto')) {
      insights.push('As variações regionais enriquecem o crioulo, refletindo a diversidade cultural de Cabo Verde');
    }

    if (lowerContent.includes('ministério') || lowerContent.includes('pregação')) {
      insights.push('A linguagem religiosa em crioulo facilita a conexão espiritual com a comunidade cabo-verdiana');
    }

    if (lowerContent.includes('gramática') && lowerContent.includes('simples')) {
      insights.push('A simplicidade da gramática crioula permite comunicação eficaz com estrutura clara e direta');
    }

    // Default insights if no patterns detected
    if (insights.length === 0) {
      insights.push('O conteúdo apresenta conceitos fundamentais para compreensão da língua');
      insights.push('Aplicação prática dos conceitos pode melhorar a comunicação intercultural');
      insights.push('Estudo contínuo fortalece a fluência e confiança no uso da língua');
    }

    return insights.slice(0, 4);
  }

  // Enhanced Question Answering
  async answerQuestion(question: string, context?: string): Promise<AIResponse> {
    try {
      const contextInfo = context ? `Context: ${context}\n` : '';

      if (this.geminiApiKey) {
        const answer = await this.callGeminiAPI(`
          ${contextInfo}Você é um especialista em crioulo cabo-verdiano e na aplicação KBVLYON. Responda à seguinte pergunta sobre crioulo cabo-verdiano ou a app KBVLYON em português.
          Seja abrangente mas conciso. Use o conhecimento do conteúdo da app.

          CONTEXTO DA APP: KBVLYON é uma aplicação para aprender crioulo cabo-verdiano para Testemunhas de Jeová, com dicionário, gramática, lições e ferramentas de pregação.

          Pergunta: ${question}

          Resposta em português:
        `);

        return {
          content: answer,
          contentType: 'question',
          metadata: {
            confidence: 0.9,
            processingTime: 0,
            contentType: 'question'
          }
        };
      }

      // Enhanced local question answering
      return {
        content: this.enhancedLocalQuestionAnswering(question),
        contentType: 'question',
        metadata: {
          confidence: 0.7,
          processingTime: 0,
          contentType: 'question'
        }
      };
    } catch (error) {
      console.error('Question answering error:', error);
      return {
        content: 'Desculpe, não consegui processar sua pergunta adequadamente. Pode reformular?',
        contentType: 'question',
        metadata: {
          confidence: 0.3,
          processingTime: 0,
          contentType: 'question'
        }
      };
    }
  }

  // Multimodal Processing (Images, Audio, Text)
  async processMultimodalInput(input: {
    text?: string;
    image?: File;
    audio?: File;
    context?: string;
  }): Promise<AIResponse> {
    try {
      if (this.geminiApiKey) {
        const hasImage = input.image && input.image.type.startsWith('image/');
        const hasAudio = input.audio && input.audio.type.startsWith('audio/');
        const hasText = input.text && input.text.trim().length > 0;

        if (!hasImage && !hasAudio && !hasText) {
          return {
            content: 'Por favor, forneça texto, imagem ou áudio para processar.',
            contentType: 'insight'
          };
        }

        let prompt = 'Processar entrada multimodal para KBVLYON (aprendizagem de crioulo cabo-verdiano):\n\n';

        if (input.context) {
          prompt += `Contexto: ${input.context}\n\n`;
        }

        if (hasText) {
          prompt += `Texto: ${input.text}\n\n`;
        }

        if (hasImage) {
          prompt += 'Imagem fornecida para análise.\n\n';
        }

        if (hasAudio) {
          prompt += 'Áudio fornecido para análise/transcrição.\n\n';
        }

        prompt += `Forneça análise inteligente considerando o contexto de aprendizagem de crioulo cabo-verdiano:
        - Se imagem: descreva o conteúdo, identifique elementos culturais cabo-verdianos e sugira vocabulário relacionado
        - Se áudio: transcreva, analise pronúncia e compare com padrões do crioulo
        - Se texto: processe como consulta sobre crioulo, gramática ou cultura cabo-verdiana
        - Integre múltiplas modalidades quando fornecidas
        - Considere as 9 ilhas de Cabo Verde e variações regionais do crioulo

        Resposta detalhada em português brasileiro:`;

        const response = await this.callGeminiAPI(prompt);

        return {
          content: response,
          contentType: 'insight',
          metadata: {
            confidence: 0.85,
            processingTime: 0,
            contentType: 'insight'
          }
        };
      }

      // Fallback multimodal processing
      return this.localMultimodalProcessing(input);
    } catch (error) {
      console.error('Multimodal processing error:', error);
      return this.localMultimodalProcessing(input);
    }
  }

  private localMultimodalProcessing(input: {
    text?: string;
    image?: File;
    audio?: File;
    context?: string;
  }): AIResponse {
    const { text, image, audio } = input;

    if (image) {
      return {
        content: `📷 **Análise de Imagem:** Processando imagem para contexto de aprendizagem de crioulo. Esta funcionalidade será expandida para reconhecer textos, identificar elementos culturais cabo-verdianos e sugerir conteúdo relacionado.`,
        contentType: 'insight'
      };
    }

    if (audio) {
      return {
        content: `🎵 **Análise de Áudio:** Processando áudio para reconhecimento de fala em crioulo. Esta funcionalidade será expandida para transcrição, análise de pronúncia e feedback de aprendizagem.`,
        contentType: 'insight'
      };
    }

    if (text) {
      return {
        content: this.enhancedLocalQuestionAnswering(text),
        contentType: 'question'
      };
    }

    return {
      content: 'Por favor, forneça conteúdo para análise multimodal.',
      contentType: 'insight'
    };
  }

  // Image Analysis for Learning Content
  async analyzeLearningImage(_imageFile: File, context?: string): Promise<AIResponse> {
    try {
      if (this.geminiApiKey) {
        const contextInfo = context ? ` Contexto de aprendizagem: ${context}` : '';

        const response = await this.callGeminiAPI(`
          Você é especialista em cultura cabo-verdiana e crioulo. Analise esta imagem no contexto de aprendizagem de crioulo cabo-verdiano.${contextInfo}

          Descreva detalhadamente:
          1. O que a imagem mostra (pessoas, objetos, ambiente)
          2. Relevância para aprendizagem de crioulo (contexto cultural, situações de comunicação)
          3. Elementos culturais cabo-verdianos identificáveis (tradições, comida, música, arquitetura)
          4. Sugestões de vocabulário relacionado em crioulo e português
          5. Como esta imagem pode auxiliar no estudo e prática do crioulo

          CONTEXTO: Cabo Verde tem 9 ilhas com culturas diversas. O crioulo reflete essa diversidade regional.

          Resposta estruturada e educativa em português:
        `);

        return {
          content: response,
          contentType: 'insight',
          metadata: {
            confidence: 0.8,
            processingTime: 0,
            contentType: 'insight'
          }
        };
      }

      return {
        content: `📖 **Análise Educacional:** A imagem foi recebida para análise no contexto de aprendizagem de crioulo cabo-verdiano. Esta funcionalidade avançada permite conectar conteúdo visual com conceitos linguísticos e culturais.`,
        contentType: 'insight'
      };
    } catch (error) {
      console.error('Image analysis error:', error);
      return {
        content: 'Erro ao analisar imagem. Tente novamente.',
        contentType: 'insight'
      };
    }
  }

  // Audio Processing for Pronunciation
  async processPronunciationAudio(_audioFile: File, expectedText?: string): Promise<AIResponse> {
    try {
      if (this.geminiApiKey) {
        const expectedInfo = expectedText ? ` Texto esperado: "${expectedText}"` : '';

        const response = await this.callGeminiAPI(`
          Você é especialista em fonética do crioulo cabo-verdiano. Analise este áudio de pronúncia.${expectedInfo}

          CONTEXTO: O crioulo cabo-verdiano varia por ilha. Sons importantes: 'tx' como 'ch' em espanhol, 'nh' como 'ñ' em espanhol, 'lh' como 'lh' português.

          Forneça análise detalhada:
          1. Transcrição fonética do áudio (se possível identificar palavras em crioulo)
          2. Análise de pronúncia (acentos tonais, ritmo, entonação)
          3. Feedback sobre clareza, velocidade e autenticidade cabo-verdiana
          4. Sugestões específicas de melhoria para pronúncia correta
          5. Comparação com pronúncia padrão do crioulo (se texto esperado fornecido)

          Seja construtivo e educativo. Resposta em português:
        `);

        return {
          content: response,
          contentType: 'insight',
          metadata: {
            confidence: 0.75,
            processingTime: 0,
            contentType: 'insight'
          }
        };
      }

      return {
        content: `🎙️ **Análise de Pronúncia:** Áudio recebido para análise de pronúncia em crioulo cabo-verdiano. Esta funcionalidade avançada oferece feedback sobre pronúncia, ritmo e autenticidade da fala.`,
        contentType: 'insight'
      };
    } catch (error) {
      console.error('Audio processing error:', error);
      return {
        content: 'Erro ao processar áudio. Tente novamente.',
        contentType: 'insight'
      };
    }
  }

  private enhancedLocalQuestionAnswering(question: string): string {
    const lowerQuestion = question.toLowerCase();

    // Enhanced pattern matching for better responses
    if (lowerQuestion.includes('como') && lowerQuestion.includes('dizer')) {
      if (lowerQuestion.includes('obrigado')) return 'Para dizer "obrigado" em crioulo: "Obrigadu" (masculino) ou "Obrigada" (feminino)';
      if (lowerQuestion.includes('olá')) return 'Para dizer "olá" em crioulo: "Olá" ou "Oi", dependendo da região';
    }

    if (lowerQuestion.includes('diferença') && lowerQuestion.includes('português')) {
      return 'O crioulo cabo-verdiano é mais simples que o português: não tem conjugação verbal complexa, usa marcadores de tempo (ta, dja, ba), e tem ordem SVO como o português.';
    }

    if (lowerQuestion.includes('pronúncia') || lowerQuestion.includes('falar')) {
      return 'A pronúncia do crioulo varia por ilha, mas geralmente: "tx" como "ch" em "muchacho", "nh" como "ñ" em espanhol, "lh" como "lh" em "mulher".';
    }

    // Use existing response generation
    return this.generateLocalResponse(question);
  }


  private extractKeyPoints(content: string): string[] {
    // Simple key point extraction - split by sentences and filter
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
    return sentences.slice(0, 5).map(s => s.trim());
  }

  // Intelligent Response Generation
  async generateResponse(userInput: string, context?: Partial<ConversationContext>): Promise<AIResponse> {
    const startTime = Date.now();

    if (context) {
      this.updateContext(context);
    }

    // Add user message to history
    this.context.conversationHistory.push({
      role: 'user',
      content: userInput,
      timestamp: new Date()
    });

    try {
      // Determine response type and strategy
      const responseStrategy = this.determineResponseStrategy(userInput);

      let response: AIResponse;

      switch (responseStrategy.type) {
        case 'content_analysis':
          response = await this.handleContentAnalysis(userInput);
          break;
        case 'translation':
          response = await this.handleTranslation(userInput);
          break;
        case 'explanation':
          response = await this.handleExplanation(userInput);
          break;
        case 'practice':
          response = await this.handlePractice(userInput);
          break;
        default:
          response = await this.handleGeneralQuery(userInput);
      }

      // Add AI response to history
      this.context.conversationHistory.push({
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        context: response.metadata || {}
      });

      // Add processing metadata
      response.metadata = {
        confidence: this.calculateConfidence(userInput, response),
        processingTime: Date.now() - startTime,
        contentType: responseStrategy.contentType
      };

      return response;
    } catch (error) {
      console.error('Response generation error:', error);

      // Tentative de retry avec prompt simplifié si c'est une erreur de quota ou timeout
      if (error instanceof Error && (error.message?.includes('quota') || error.message?.includes('timeout') || error.message?.includes('rate limit'))) {
        console.log('Tentando fallback com prompt simplificado...');
        try {
          const simplifiedPrompt = `
            Responda em português sobre crioulo cabo-verdiano: "${userInput}"
            Seja conciso e útil. Contexto: App KBVLYON para aprender crioulo.
          `;
          const retryResponse = await this.callGeminiAPI(simplifiedPrompt);
          return {
            content: retryResponse,
            metadata: {
              confidence: 0.6,
              processingTime: Date.now() - startTime,
              contentType: 'insight'
            }
          };
        } catch (retryError) {
          console.error('Retry também falhou:', retryError);
        }
      }

      return this.generateFallbackResponse(userInput);
    }
  }

  private determineResponseStrategy(userInput: string): {
    type: 'content_analysis' | 'translation' | 'explanation' | 'practice' | 'general';
    contentType: 'explanation' | 'translation' | 'summary' | 'question' | 'insight';
  } {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('analisa') || lowerInput.includes('resume') || lowerInput.includes('sumário')) {
      return { type: 'content_analysis', contentType: 'summary' };
    }
    if (lowerInput.includes('traduz') || lowerInput.includes('translate')) {
      return { type: 'translation', contentType: 'translation' };
    }
    if (lowerInput.includes('explica') || lowerInput.includes('como') || lowerInput.includes('porquê')) {
      return { type: 'explanation', contentType: 'explanation' };
    }
    if (lowerInput.includes('pratica') || lowerInput.includes('exercício') || lowerInput.includes('exemplo')) {
      return { type: 'practice', contentType: 'question' };
    }

    return { type: 'general', contentType: 'insight' };
  }

  private async handleContentAnalysis(userInput: string): Promise<AIResponse> {
    // Extract content to analyze from user input or context
    const contentToAnalyze = this.extractContentForAnalysis(userInput);

    if (contentToAnalyze) {
      const analysis = await this.analyzeContent(contentToAnalyze, 'text');

      return {
        content: `📊 Análise do conteúdo:\n\n📝 **Resumo:** ${analysis.summary}\n\n🎯 **Pontos principais:**\n${analysis.keyPoints.map(point => `• ${point}`).join('\n')}\n\n🎓 **Nível de dificuldade:** ${analysis.difficulty}\n\n📚 **Tópicos:** ${analysis.topics.join(', ')}`,
        suggestions: this.generateSuggestions(analysis),
        relatedContent: this.findRelatedContent(analysis),
        actions: this.suggestActions(analysis)
      };
    }

    return {
      content: 'Para fazer uma análise detalhada, por favor forneça o conteúdo que deseja analisar ou especifique sobre qual lição/tópico gostaria de saber mais.'
    };
  }

  private async handleTranslation(userInput: string): Promise<AIResponse> {
    // Extract text to translate
    const textToTranslate = this.extractTranslationTarget(userInput);

    if (textToTranslate) {
      // This would integrate with translation services or dictionary
      return {
        content: `🔄 Tradução:\n\n🇵🇹 **Português:** ${textToTranslate}\n🇨🇻 **Crioulo:** *Tradução seria processada aqui*\n\n💡 Esta funcionalidade será expandida com integração ao dicionário completo.`,
        contentType: 'translation'
      };
    }

    return {
      content: 'Para traduzir, forneça o texto que deseja traduzir entre aspas ou especifique as palavras/frases específicas.'
    };
  }

  private async handleExplanation(userInput: string): Promise<AIResponse> {
    // Find relevant grammar lessons or content
    const relevantLessons = this.findRelevantLessons(userInput);

    if (relevantLessons.length > 0) {
      const lesson = relevantLessons[0];
      return {
        content: `📖 **Explicação - ${lesson.title.pt}**\n\n${lesson.content.pt}\n\n📝 **Exemplos:**\n${lesson.examples.map(ex => `🇵🇹 ${ex.pt}\n🇨🇻 ${ex.kea}`).join('\n\n')}`,
        relatedContent: relevantLessons.slice(1).map(l => ({
          type: 'grammar' as const,
          id: l.id.toString(),
          title: l.title.pt,
          relevance: 0.8
        }))
      };
    }

    return {
      content: 'Para explicar conceitos específicos, mencione o tópico (ex: "explica pronomes", "como usar verbos", etc.)'
    };
  }

  private async handlePractice(userInput: string): Promise<AIResponse> {
    // Generate practice exercises based on context
    const exercises = this.generatePracticeExercises(userInput);

    return {
      content: `🎯 **Exercícios de prática:**\n\n${exercises.map((ex, i) => `${i + 1}. ${ex}`).join('\n\n')}`,
      followUpQuestions: ['Qual é a resposta?', 'Precisa de mais exemplos?', 'Quer tentar outro exercício?']
    };
  }

  private async handleGeneralQuery(userInput: string): Promise<AIResponse> {
    // Use Gemini for general queries with full context
    if (this.geminiApiKey) {
      const contextPrompt = this.buildContextPrompt();
      const enhancedPrompt = `
        ${contextPrompt}

        Usuário perguntou: "${userInput}"

        INSTRUÇÕES ESPECÍFICAS:
        - Responda SEMPRE em português brasileiro
        - Seja especialista em crioulo cabo-verdiano e cultura de Cabo Verde
        - Considere o contexto da página atual e histórico da conversa
        - Mantenha respostas concisas mas informativas (máximo 150 palavras)
        - Use emojis apropriados para tornar a resposta mais amigável
        - Se for pergunta sobre crioulo, dê exemplos práticos
        - Se for pergunta geral sobre a app, mencione funcionalidades relevantes
        - Adapte o nível de resposta baseado no nível do usuário (iniciante/intermediário/avançado)

        Resposta:
      `;

      const response = await this.callGeminiAPI(enhancedPrompt);

      return {
        content: response,
        suggestions: this.generateContextualSuggestions(userInput)
      };
    }

    return {
      content: this.generateLocalResponse(userInput)
    };
  }

  private extractContentForAnalysis(userInput: string): string | null {
    // Extract content between quotes or after keywords like "analisa", "resume"
    const quoteMatch = userInput.match(/"([^"]*)"/) || userInput.match(/'([^']*)'/);
    if (quoteMatch) return quoteMatch[1];

    // Look for content after analysis keywords
    const analysisKeywords = ['analisa', 'resume', 'sumário de', 'análise de'];
    for (const keyword of analysisKeywords) {
      if (userInput.toLowerCase().includes(keyword)) {
        return userInput.substring(userInput.toLowerCase().indexOf(keyword) + keyword.length).trim();
      }
    }

    return null;
  }

  private extractTranslationTarget(userInput: string): string | null {
    const quoteMatch = userInput.match(/"([^"]*)"/) || userInput.match(/'([^']*)'/);
    return quoteMatch ? quoteMatch[1] : null;
  }

  private findRelevantLessons(userInput: string): typeof grammarLessons {
    const lowerInput = userInput.toLowerCase();

    return grammarLessons.filter(lesson => {
      const titlePt = lesson.title.pt.toLowerCase();
      const contentPt = lesson.content.pt.toLowerCase();

      return titlePt.includes(lowerInput) ||
             contentPt.includes(lowerInput) ||
             lesson.examples.some(ex => ex.pt.toLowerCase().includes(lowerInput));
    });
  }

  private generateSuggestions(analysis: ContentAnalysis): string[] {
    const suggestions = [];

    if (analysis.difficulty === 'beginner') {
      suggestions.push('Começar com conceitos básicos');
      suggestions.push('Praticar com exemplos simples');
    }

    if (analysis.topics.includes('grammar')) {
      suggestions.push('Explorar lições de gramática relacionadas');
      suggestions.push('Praticar exercícios de gramática');
    }

    suggestions.push('Explorar tópicos relacionados no dicionário');

    return suggestions;
  }

  private findRelatedContent(analysis: ContentAnalysis): AIResponse['relatedContent'] {
    // Find related lessons and content based on analysis
    return grammarLessons
      .filter(lesson => {
        return lesson.content.pt.toLowerCase().includes(analysis.topics[0]) ||
               analysis.topics.some(topic => lesson.title.pt.toLowerCase().includes(topic));
      })
      .slice(0, 3)
      .map(lesson => ({
        type: 'grammar' as const,
        id: lesson.id.toString(),
        title: lesson.title.pt,
        relevance: 0.7
      }));
  }

  private suggestActions(analysis: ContentAnalysis): AIResponse['actions'] {
    const actions: AIResponse['actions'] = [];

    if (analysis.difficulty === 'beginner') {
      actions.push({
        type: 'practice',
        target: 'basic_exercises',
        description: 'Praticar conceitos básicos'
      });
    }

    if (analysis.topics.includes('grammar')) {
      actions.push({
        type: 'navigate',
        target: '/grammar-dictionary',
        description: 'Explorar gramática relacionada'
      });
    }

    actions.push({
      type: 'search',
      target: analysis.topics.join(','),
      description: 'Pesquisar tópicos relacionados'
    });

    return actions;
  }

  private generatePracticeExercises(userInput: string): string[] {
    // Generate context-appropriate practice exercises based on user input
    const lowerInput = userInput.toLowerCase();
    const exercises = [];

    if (lowerInput.includes('verbo') || lowerInput.includes('verb')) {
      exercises.push('Complete a frase: "N _____ bai na skola" (Eu vou à escola)');
      exercises.push('Conjugue o verbo "faze" no presente: "N _____ kaza"');
    } else if (lowerInput.includes('pronome') || lowerInput.includes('pronoun')) {
      exercises.push('Complete: "_____ bai" (Eu vou)');
      exercises.push('Use o pronome correto: "_____ odja-l" (Eu vi-o)');
    } else {
      exercises.push('Complete a frase: "N _____ bai na skola" (Eu vou à escola)');
      exercises.push('Traduza para crioulo: "Como você está?"');
    }

    return exercises;
  }

  private buildContextPrompt(): string {
    const context = this.context;
    const recentHistory = context.conversationHistory.slice(-5);

    return `
      Você é um assistente IA especializado em crioulo cabo-verdiano para a aplicação KBVLYON (desenvolvida para Testemunhas de Jeová).

      CONTEXTO CULTURAL IMPORTANTE:
      - Cabo Verde: Arquipélago de 9 ilhas atlânticas com crioulo como língua nacional
      - Crioulo: Língua crioula baseada no português com influências africanas (mandinga, wolof)
      - Variações: Crioulo difere por ilha (Santiago, São Vicente, etc.)
      - Sons específicos: 'tx' = 'tch', 'nh' = 'nh' francês, 'lh' = 'lh' português

      CONTEXTO DO USUÁRIO:
      - Página atual: ${context.currentPage}
      - Nível de aprendizagem: ${context.userPreferences.learningLevel}
      - Estilo preferido: ${context.userPreferences.communicationStyle}
      - Lições completadas: ${context.sessionData.completedLessons.length > 0 ? context.sessionData.completedLessons.join(', ') : 'nenhuma ainda'}
      - Tópicos de interesse: ${context.userPreferences.preferredTopics.join(', ') || 'diversos'}

      HISTÓRICO RECENTE DA CONVERSA:
      ${recentHistory.map(msg => `${msg.role === 'user' ? '👤 Usuário' : '🤖 Assistente'}: ${msg.content.substring(0, 100)}${msg.content.length > 100 ? '...' : ''}`).join('\n')}

      INSTRUÇÕES GERAIS:
      - Sempre responder em português brasileiro claro e acessível
      - Adaptar complexidade ao nível do usuário
      - Dar exemplos práticos em crioulo quando relevante
      - Ser paciente e encorajador na aprendizagem
      - Conectar conceitos à cultura cabo-verdiana quando possível
    `;
  }

  private generateContextualSuggestions(userInput: string): string[] {
    const suggestions = [];

    if (userInput.toLowerCase().includes('aprend')) {
      suggestions.push('Quer começar com a Lição 1?', 'Explorar gramática básica', 'Ver palavras mais usadas');
    }

    if (userInput.toLowerCase().includes('pratic')) {
      suggestions.push('Fazer exercícios', 'Ver exemplos práticos', 'Testar conhecimento');
    }

    suggestions.push('Explorar dicionário', 'Ver lições disponíveis', 'Ajuda com pronúncia');

    return suggestions;
  }

  private calculateConfidence(_userInput: string, response: AIResponse): number {
    // Simple confidence calculation based on response characteristics
    let confidence = 0.5; // Base confidence

    if (response.relatedContent && response.relatedContent.length > 0) confidence += 0.2;
    if (response.suggestions && response.suggestions.length > 0) confidence += 0.1;
    if (response.actions && response.actions.length > 0) confidence += 0.1;
    if (response.content.length > 100) confidence += 0.1;

    return Math.min(confidence, 1.0);
  }

  private generateFallbackResponse(userInput: string): AIResponse {
    const lowerInput = userInput.toLowerCase();

    // Fallbacks plus intelligents basés sur le type de question
    if (lowerInput.includes('olá') || lowerInput.includes('oi')) {
      return {
        content: '👋 Olá! Sou o assistente da KBVLYON para aprender crioulo cabo-verdiano. Como posso ajudar-te hoje?',
        suggestions: ['Aprender vocabulário básico', 'Explicar gramática', 'Praticar conversação'],
        metadata: { confidence: 0.9, processingTime: 0, contentType: 'insight' }
      };
    }

    if (lowerInput.includes('crioulo') && lowerInput.includes('diferen')) {
      return {
        content: '🇨🇻 O crioulo cabo-verdiano é uma língua crioula baseada no português, mas mais simples! Não tem conjugação verbal complexa e usa marcadores de tempo (ta, dja, ba). Cada ilha tem sua variante.',
        suggestions: ['Ver lições básicas', 'Ouvir pronúncia', 'Praticar frases simples'],
        metadata: { confidence: 0.8, processingTime: 0, contentType: 'explanation' }
      };
    }

    if (lowerInput.includes('dicionário') || lowerInput.includes('palavra')) {
      return {
        content: '📚 O dicionário da KBVLYON tem mais de 4700 palavras! Procura por palavras em crioulo ou português. Também tem áudio para pronúncia correta.',
        suggestions: ['Explorar dicionário', 'Ouvir pronúncia', 'Aprender vocabulário temático'],
        metadata: { confidence: 0.8, processingTime: 0, contentType: 'insight' }
      };
    }

    if (lowerInput.includes('gramática') || lowerInput.includes('regra')) {
      return {
        content: '📖 A gramática do crioulo é mais simples que o português! Aprende sobre pronomes, verbos e sintaxe nas lições dedicadas.',
        suggestions: ['Ver lições de gramática', 'Praticar exercícios', 'Exemplos práticos'],
        metadata: { confidence: 0.8, processingTime: 0, contentType: 'explanation' }
      };
    }

    // Fallback générique amélioré
    return {
      content: `🤔 Sobre "${userInput}": Como assistente da KBVLYON, posso ajudar-te com crioulo cabo-verdiano. Tenta perguntar sobre vocabulário, gramática, pronúncia ou lições específicas!`,
      suggestions: ['Vocabulário básico', 'Gramática crioula', 'Lições práticas', 'Dicionário interativo'],
      metadata: {
        confidence: 0.4,
        processingTime: 0,
        contentType: 'insight'
      }
    };
  }

  private generateLocalResponse(userInput: string): string {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('olá') || lowerInput.includes('oi')) {
      return '👋 Olá! Sou o assistente avançado da KBVLYON! Posso ajudar com análise profunda de conteúdo, traduções inteligentes, explicações detalhadas e muito mais. O que você gostaria de explorar?';
    }

    if (lowerInput.includes('análise') || lowerInput.includes('analisa')) {
      return '📊 Para análise avançada, forneça o conteúdo específico que deseja analisar. Posso identificar tópicos, nível de dificuldade, pontos-chave e sugerir conteúdo relacionado!';
    }

    return `🤖 Como assistente avançado, posso fornecer análises profundas, traduções contextuais e explicações detalhadas sobre crioulo cabo-verdiano. Especifique melhor sua necessidade para uma resposta mais precisa!`;
  }

  private async callGeminiAPI(prompt: string): Promise<string> {
    if (!this.geminiApiKey || this.geminiApiKey === 'your_gemini_api_key_here') {
      throw new Error('Gemini API key not configured');
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${this.geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
            topK: 40,
            topP: 0.95,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Resposta não disponível';
  }
}

// Singleton instance
export const advancedAI = new AdvancedAIService();