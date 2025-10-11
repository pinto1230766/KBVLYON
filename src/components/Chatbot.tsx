import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const { t } = useTranslation();
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
      role: 'assistant',
      content: getInitialMessage(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const suggestions = getSuggestions();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur serveur');
      }

      const data = await response.json();
      const assistantResponse = data.response;

      if (!assistantResponse) {
        throw new Error('Réponse vide');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantResponse,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Desculpa, ocorreu um erro. Tenta novamente.',
      }]);
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
      <SheetContent side="right" className="w-full sm:w-96">
        <SheetHeader>
          <SheetTitle>Assistente IA</SheetTitle>
          <SheetDescription>
            Faz as tuas perguntas sobre a aplicação ou a língua cabo-verdiana.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-xs px-4 py-2 rounded-lg',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  {message.content}
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
              <p className="text-sm text-muted-foreground mb-2">Sugestões :</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(suggestion)}
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
                placeholder={t('chatbot.digiteMensagem')}
                className="flex-1 min-h-[40px] max-h-32"
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !input.trim()}>
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;