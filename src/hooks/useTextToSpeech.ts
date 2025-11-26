import { useState, useEffect, useCallback } from 'react';

interface TextToSpeechHook {
  speak: (text: string) => void;
  cancel: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

export const useTextToSpeech = (): TextToSpeechHook => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Chercher une voix portugaise (PT-PT préféré, sinon PT-BR)
        const ptVoice = voices.find(v => v.lang.includes('pt-PT')) || 
                        voices.find(v => v.lang.includes('pt-BR')) ||
                        voices.find(v => v.lang.includes('pt'));
        
        if (ptVoice) {
          setVoice(ptVoice);
        }
      };

      loadVoices();
      
      // Chrome charge les voix de manière asynchrone
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported) return;

    // Annuler toute lecture en cours
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (voice) {
      utterance.voice = voice;
    }
    
    // Fallback langue si la voix n'est pas définie
    utterance.lang = 'pt-PT';
    utterance.rate = 0.75; // Plus lent pour mieux articuler le Kriolu
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [isSupported, voice]);

  const cancel = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  return { speak, cancel, isSpeaking, isSupported };
};
