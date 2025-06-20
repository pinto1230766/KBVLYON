import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';

export interface TimerProps {
  onSave: (duration: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ onSave }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<number | null>(null);

  const formatTime = useCallback((milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const pad = (num: number) => num.toString().padStart(2, '0');
    
    if (hours > 0) {
      return `${hours}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${minutes}:${pad(seconds)}`;
  }, []);

  const toggleTimer = useCallback(() => {
    if (isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      setStartTime(prevStartTime => {
        const now = Date.now();
        return now - (time - (prevStartTime || now));
      });
      
      timerRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
    }
    
    setIsRunning(prev => !prev);
  }, [isRunning, startTime, time]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTime(0);
    setStartTime(0);
    setLaps([]);
    setIsRunning(false);
  }, []);

  const addLap = useCallback(() => {
    setLaps(prev => [...prev, time]);
  }, [time]);

  const handleSave = useCallback(() => {
    onSave(time);
    resetTimer();
  }, [onSave, resetTimer, time]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-5xl font-mono mb-6">
          {formatTime(time)}
        </div>
        
        <div className="flex justify-center space-x-3">
          <Button 
            onClick={toggleTimer}
            className="w-24"
          >
            {isRunning ? 'Pausar' : 'Iniciar'}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetTimer}
            className="w-24"
          >
            Zerar
          </Button>
          
          <Button 
            variant="outline" 
            onClick={addLap}
            disabled={!isRunning}
            className="w-24"
          >
            Volta
          </Button>
          
          <Button 
            onClick={handleSave}
            disabled={time === 0}
            className="w-24"
          >
            Salvar
          </Button>
        </div>
      </div>

      {laps.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Voltas</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {laps.map((lap, index) => (
                <li key={index} className="px-4 py-3 flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Volta {index + 1}
                  </span>
                  <span className="font-mono">
                    {formatTime(lap)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
