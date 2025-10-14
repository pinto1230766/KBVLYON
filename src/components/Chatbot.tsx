import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Upload, Brain, Sparkles, Lightbulb } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { advancedAI, ConversationContext, AIResponse } from '../services/advancedAIService';

interface Message {
  text: string;
  isUser: boolean;
  timestamp?: Date;
  context?: {
    page: string;
    action?: string;
    metadata?: Record<string, unknown>;
    aiResponse?: AIResponse;
  };
}

const Chatbot: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getInitialMessage = () => {
    if (pathname === '/dictionary') {
      return 'Olá! Posso ajudar-te com o dicionário. Faz-me perguntas sobre palavras, pronúncia ou uso.';
    } else if (pathname === '/grammar-dictionary') {
      return 'Bem-vindo à secção de gramática! Posso explicar regras gramaticais e dar exemplos.';
    } else if (pathname.startsWith('/lessons')) {
      return 'Nas lições, posso ajudar-te a entender o conteúdo e os exercícios.';
    } else {
      return 'Olá! Sou o teu assistente IA para aprender crioulo cabo-verdiano. Como posso ajudar-te hoje?';
    }
  };

  const getSuggestions = () => {
    if (pathname === '/dictionary') {
      return ['Explica-me esta palavra em crioulo', 'Como se pronuncia esta palavra?', 'Dá-me exemplos de uso'];
    } else if (pathname === '/grammar-dictionary') {
      return ['Explica-me esta regra gramatical', 'Dá-me exemplos', 'Como aplicar esta regra?'];
    } else if (pathname.startsWith('/lessons')) {
      return ['Explica-me esta lição', 'Ajuda-me com este exercício', 'Traduz esta frase'];
    } else {
      return ['Ajuda-me a aprender crioulo', 'Perguntas gerais sobre a app'];
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      text: getInitialMessage(),
      isUser: false,
      timestamp: new Date(),
      context: { page: pathname }
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const suggestions = getSuggestions();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const getExtendedLocalResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Questions générales
    if (lowerInput.includes('olá') || lowerInput.includes('oi') || lowerInput.includes('salut')) {
      return '👋 Olá! Sou o assistente da KBVLYON! Posso ajudar-te com crioulo cabo-verdiano, dicionário, gramática, lições e pregação. O que precisas?';
    }
    
    if (lowerInput.includes('obrigad') || lowerInput.includes('merci')) {
      return '😊 De nada! Fico feliz em ajudar-te a aprender crioulo cabo-verdiano. Tens mais alguma pergunta?';
    }
    
    if (lowerInput.includes('cabo verde') || lowerInput.includes('cap vert')) {
      return '🇨🇻 Cabo Verde é um arquipélago maravilhoso com uma língua crioula rica! Esta app ajuda-te a aprender o crioulo para o ministério dos Tistimunhas di Jeová.';
    }
    
    if (lowerInput.includes('témoins') || lowerInput.includes('testemunhas') || lowerInput.includes('jehovah')) {
      return '⛪ Esta app foi criada especialmente para Tistimunhas di Jeová que querem pregar em crioulo cabo-verdiano. Tem tudo o que precisas para o ministério!';
    }
    
    if (lowerInput.includes('como') && lowerInput.includes('funciona')) {
      return '🎯 A KBVLYON tem: 📚 Dicionário (4700+ palavras), 📖 Gramática completa, 🎓 18 Lições práticas, 🚪 Pregação com textos bíblicos, 📝 Notas e calendário!';
    }
    
    if (lowerInput.includes('ajuda') || lowerInput.includes('help')) {
      return '🆘 Posso ajudar-te com: ✅ Traduzir palavras ✅ Explicar gramática ✅ Guiar nas lições ✅ Preparar pregação ✅ Usar a app. Faz a tua pergunta!';
    }
    
    // Fallback intelligent pour TOUTE question
    return `🤔 Interessante pergunta sobre "${input}"! Embora eu seja especializado em crioulo cabo-verdiano e KBVLYON, vou tentar ajudar. Para respostas mais detalhadas, explora o dicionário ou as lições da app! 📚✨`;
  };

  const callAdvancedAI = async (userInput: string, file?: File): Promise<AIResponse> => {
    console.log('🤖 Chamando Advanced AI Service...');

    // Update context with current page and conversation history
    const context: Partial<ConversationContext> = {
      currentPage: pathname,
      conversationHistory: messages.slice(-10).map(msg => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text,
        timestamp: msg.timestamp || new Date(),
        context: msg.context?.metadata
      }))
    };

    try {
      // Handle multimodal input if file is provided
      if (file) {
        console.log('📎 File provided for analysis:', file.name, file.type);

        if (file.type.startsWith('image/')) {
          return await advancedAI.analyzeLearningImage(file, userInput);
        } else if (file.type.startsWith('audio/')) {
          return await advancedAI.processPronunciationAudio(file, userInput);
        } else {
          return await advancedAI.processMultimodalInput({
            text: userInput,
            context: `Arquivo: ${file.name}`
          });
        }
      }

      // Use the advanced AI service for text-only input
      return await advancedAI.generateResponse(userInput, context);
    } catch (error) {
      console.error('❌ Erro no Advanced AI Service:', error);

      // Fallback to local responses if AI service fails
      return {
        content: getExtendedLocalResponse(userInput),
        metadata: {
          confidence: 0.3,
          processingTime: 0,
          contentType: 'insight'
        }
      };
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
      context: { page: pathname }
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Petit délai pour éviter les erreurs de rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));

      const aiResponse = await callAdvancedAI(input, uploadedFile || undefined);

      const aiMessage: Message = {
        text: aiResponse.content,
        isUser: false,
        timestamp: new Date(),
        context: {
          page: pathname,
          action: 'response',
          aiResponse: aiResponse,
          metadata: {
            confidence: aiResponse.metadata?.confidence || 0,
            contentType: aiResponse.metadata?.contentType || 'general'
          }
        }
      };
      setMessages(prev => [...prev, aiMessage]);

      // Reset file after processing
      if (uploadedFile) {
        setUploadedFile(null);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage: Message = {
        text: 'Desculpe, não consegui processar sua mensagem. Tente novamente mais tarde.',
        isUser: false,
        timestamp: new Date(),
        context: { page: pathname, action: 'error' }
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] h-[95vh] overflow-y-auto" aria-labelledby="chatbot-title" aria-describedby="chatbot-description">
        <SheetHeader>
          <SheetTitle id="chatbot-title" className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Assistente IA Avançado
            <Badge variant="secondary" className="ml-auto">
              <Sparkles className="h-3 w-3 mr-1" />
              KBVLYON
            </Badge>
          </SheetTitle>
          <p id="chatbot-description" className="sr-only">
            Assistente de IA para aprender crioulo cabo-verdiano. Faça perguntas sobre gramática, vocabulário ou lições.
          </p>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[60vh]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  message.isUser ? 'justify-end' : 'justify-start'
                )}
              >
                <div className="flex flex-col max-w-[280px]">
                  <div
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm leading-relaxed',
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    {message.text}
                  </div>
                  {!message.isUser && message.context?.aiResponse && (
                    <div className="flex items-center gap-2 mt-1 px-2">
                      {message.context.aiResponse.metadata?.confidence && (
                        <Badge variant="outline" className="text-xs">
                          {Math.round(message.context.aiResponse.metadata.confidence * 100)}% confiança
                        </Badge>
                      )}
                      {message.context.aiResponse.metadata?.contentType && (
                        <Badge variant="secondary" className="text-xs">
                          {message.context.aiResponse.metadata.contentType}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-2 rounded-lg">
                  A pensar...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {!loading && suggestions.length > 0 && (
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Sugestões Inteligentes:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(suggestion)}
                    className="text-xs"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite a tua mensagem ou analyse um documento..."
                className="flex-1 min-h-[40px] max-h-32"
                disabled={loading}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                accept="image/*,audio/*,.pdf,.txt,.doc,.docx"
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                title="Anexar arquivo (imagem, áudio, documento)"
              >
                <Upload className="h-4 w-4" />
              </Button>
              <Button type="submit" disabled={loading || (!input.trim() && !uploadedFile)}>
                Enviar
              </Button>
            </div>
            {uploadedFile && (
              <div className="mt-2 text-sm text-muted-foreground">
                📎 Arquivo anexado: {uploadedFile.name}
              </div>
            )}
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;