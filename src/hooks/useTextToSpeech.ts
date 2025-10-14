type TextToSpeechOptions = {
  language?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
};

type UseTextToSpeechReturn = {
  speak: (text: string, options?: TextToSpeechOptions) => Promise<void>;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  isSpeaking: boolean;
  isPaused: boolean;
  isSupported: boolean;
};

export const useTextToSpeech = (): UseTextToSpeechReturn => {
  const noopAsync = async () => {};
  const noop = () => {};

  return {
    speak: noopAsync,
    stop: noop,
    pause: noop,
    resume: noop,
    isSpeaking: false,
    isPaused: false,
    isSupported: false,
  };
};

type UseGeminiTextToSpeechReturn = {
  speak: (text: string, language?: 'pt' | 'kea') => Promise<void>;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  isLoading: boolean;
  isSpeaking: boolean;
  isSupported: boolean;
};

export const useGeminiTextToSpeech = (): UseGeminiTextToSpeechReturn => {
  const noopAsync = async () => {};
  const noop = () => {};

  return {
    speak: noopAsync,
    stop: noop,
    pause: noop,
    resume: noop,
    isLoading: false,
    isSpeaking: false,
    isSupported: false,
  };
};
