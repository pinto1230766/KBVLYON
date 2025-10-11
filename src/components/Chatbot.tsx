import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const pathname = location.pathname;

  const getInitialMessage = () => {
    if (pathname === '/dictionary') {
      return 'Salut ! Je peux vous aider avec le dictionnaire. Posez-moi des questions sur les mots, leur prononciation ou leur usage.';
    } else if (pathname === '/grammar-dictionary') {
      return 'Bienvenue dans la section grammaire ! Je peux expliquer les règles grammaticales et donner des exemples.';
    } else if (pathname.startsWith('/lessons')) {
      return 'Dans les leçons, je peux vous aider à comprendre le contenu et les exercices.';
    } else {
      return 'Salut ! Je suis votre assistant IA pour apprendre le créole capverdien. Comment puis-je vous aider aujourd\'hui ?';
    }
  };

  const getSuggestions = () => {
    if (pathname === '/dictionary') {
      return ['Explique-moi ce mot en créole', 'Comment prononcer ce mot ?', 'Donne-moi des exemples d\'usage'];
    } else if (pathname === '/grammar-dictionary') {
      return ['Explique-moi cette règle grammaticale', 'Donne-moi des exemples', 'Comment appliquer cette règle ?'];
    } else if (pathname.startsWith('/lessons')) {
      return ['Explique-moi cette leçon', 'Aide-moi avec cet exercice', 'Traduis cette phrase'];
    } else {
      return ['Aide-moi à apprendre le créole', 'Questions générales sur l\'app'];
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
        content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
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
          <SheetTitle>Assistant IA</SheetTitle>
          <SheetDescription>
            Posez vos questions sur l'application ou la langue capverdienne.
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
                  En train de réfléchir...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {!loading && suggestions.length > 0 && (
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Suggestions :</p>
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
                placeholder="Tapez votre message..."
                className="flex-1 min-h-[40px] max-h-32"
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !input.trim()}>
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;