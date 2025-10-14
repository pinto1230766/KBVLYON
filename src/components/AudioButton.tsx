 import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTextToSpeech, useGeminiTextToSpeech } from '../hooks/useTextToSpeech';
import { useLanguage } from '../hooks/useLanguage';

interface AudioButtonProps {
  text: string;
  language?: 'pt' | 'kea';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
  disabled?: boolean;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  language,
  size = 'md',
  variant = 'ghost',
  className = '',
  disabled = false
}) => {
  const { language: currentLanguage } = useLanguage();
  const {
    speak: speakGemini,
    stop: stopGemini,
    pause,
    isSpeaking: isSpeakingGemini
  } = useGeminiTextToSpeech();
  const {
    speak: speakFallback,
    stop: stopFallback,
    isSpeaking: isSpeakingFallback,
    isSupported
  } = useTextToSpeech();
  const [useFallback, setUseFallback] = useState(() => !isSupported);

  const audioLanguage = language || (currentLanguage === 'kea' ? 'kea' : 'pt');
  const isSpeaking = useFallback ? isSpeakingFallback : isSpeakingGemini;

  // Debug: Afficher les informations de synthèse vocale
  console.log('AudioButton state:', {
    useFallback,
    isSpeaking,
    isSpeakingFallback,
    isSpeakingGemini,
    audioLanguage,
    isSupported
  });

  const handleClick = async () => {
    if (useFallback) {
      if (isSpeakingFallback) {
        stopFallback();
        return;
      }

      try {
        await speakFallback(text, {
          language: 'pt-PT',
          rate: audioLanguage === 'kea' ? 0.7 : 0.8,
          pitch: 1,
          volume: 1
        });
      } catch (error) {
        console.error('Error playing fallback audio:', error);
      }

      return;
    }

    if (isSpeakingGemini) {
      pause();
      return;
    }

    try {
      await speakGemini(text, audioLanguage);
    } catch (error) {
      console.error('Error generating Gemini audio:', error);
      stopGemini();
      if (isSupported) {
        setUseFallback(true);
        try {
          await speakFallback(text, {
            language: 'pt-PT',
            rate: audioLanguage === 'kea' ? 0.7 : 0.8,
            pitch: 1,
            volume: 1
          });
        } catch (fallbackError) {
          console.error('Error playing fallback audio:', fallbackError);
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      if (useFallback) {
        stopFallback();
      } else {
        stopGemini();
      }
    };
  }, [stopFallback, stopGemini, useFallback]);

  if (!isSupported && useFallback) {
    return null;
  }

  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  const variantClasses = {
    default: 'bg-blue-500 hover:bg-blue-600 text-white',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400',
    outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
  };

  const iconSize = {
    sm: 14,
    md: 16,
    lg: 20
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-lg transition-colors duration-200
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      title={isSpeaking ? 'Parar áudio' : 'Reproduzir áudio'}
      aria-label={isSpeaking ? 'Parar áudio' : 'Reproduzir áudio'}
    >
      {isSpeaking ? (
        <VolumeX size={iconSize[size]} />
      ) : (
        <Volume2 size={iconSize[size]} />
      )}
    </button>
  );
};

export default AudioButton;
