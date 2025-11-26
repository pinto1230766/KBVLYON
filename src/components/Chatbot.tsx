import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Upload, Brain, Sparkles, Lightbulb } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from './ui/sheet';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { GeminiService } from '../services/ai/gemini';
import { ChatMessage } from '../services/ai/types';

interface Message {
  text: string;
  isUser: boolean;
  timestamp?: Date;
  context?: {
    page: string;
    action?: string;
    metadata?: Record<string, unknown>;
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
      // Convertir l'historique pour Gemini
      const history: ChatMessage[] = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        content: msg.text
      }));

      const response = await GeminiService.chat(history, input);

      const aiMessage: Message = {
        text: response.text || "Desculpe, ocorreu um erro ao processar a resposta.",
        isUser: false,
        timestamp: new Date(),
        context: {
          page: pathname,
          action: 'response',
          metadata: {
            confidence: 1,
            contentType: 'text'
          }
        }
      };
      setMessages(prev => [...prev, aiMessage]);

      if (uploadedFile) {
        setUploadedFile(null);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage: Message = {
        text: 'Desculpe, não consegui processar sua mensagem. Verifique sua conexão ou tente novamente.',
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
      <SheetContent side="right" className="w-full sm:w-[400px] h-[95vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Assistente IA Avançado
            <Badge variant="secondary" className="ml-auto">
              <Sparkles className="h-3 w-3 mr-1" />
              KBVLYON
            </Badge>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Assistente de IA para aprender crioulo cabo-verdiano. Faça perguntas sobre gramática, vocabulário ou lições.
          </SheetDescription>
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
                placeholder="Digite a tua mensagem..."
                className="flex-1 min-h-[40px] max-h-32"
                disabled={loading}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                accept="image/*,.pdf,.txt,.doc,.docx"
                className="hidden"
                aria-label="Anexar arquivo (imagem, documento)"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                title="Anexar arquivo (imagem, documento)"
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