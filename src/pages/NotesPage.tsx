import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, Users, Calendar, UserPlus, Clock, BarChart2 } from 'lucide-react';

// Composants
import EventModal from '@/components/modals/EventModal';

// Types
type TabType = 'general' | 'students' | 'interessed' | 'calendar' | 'timer' | 'stats';

interface CalendarEvent {
  id: string;
  date: Date;
  type: 'predication' | 'etude';
  notes: string;
}

interface TimerState {
  isRunning: boolean;
  time: number;
  startTime: number;
}

interface HistoryEntry {
  id: string;
  date: string;
  duration: number;
  notes?: string;
}

// Configuration des onglets
const tabs = [
  { id: 'general' as const, label: 'Général', icon: FileText },
  { id: 'students' as const, label: 'Étudiants', icon: Users },
  { id: 'interessed' as const, label: 'Personnes Intéressées', icon: UserPlus },
  { id: 'calendar' as const, label: 'Calendrier', icon: Calendar },
  { id: 'timer' as const, label: 'Chronomètre', icon: Clock },
  { id: 'stats' as const, label: 'Statistiques', icon: BarChart2 }
];

const NotesPage: React.FC = () => {
  // États principaux
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [notes, setNotes] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  // États pour le chronomètre
  const [timer, setTimer] = useState<TimerState>({
    isRunning: false,
    time: 0,
    startTime: 0
  });
  const [laps, setLaps] = useState<number[]>([]);
  const timerIntervalRef = useRef<number | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]); // Ajout de l'état pour les événements
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Ajout de l'état pour la date sélectionnée
  
  // État pour les notifications
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Charger les données depuis le localStorage
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('notes');
      const savedHistory = localStorage.getItem('history');
      const savedEvents = localStorage.getItem('events'); // Ajout de la récupération des événements
      
      if (savedNotes) setNotes(savedNotes);
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      if (savedEvents) setEvents(JSON.parse(savedEvents)); // Ajout de la mise à jour des événements
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
  }, []);
  
  // Sauvegarder les données dans le localStorage
  useEffect(() => {
    try {
      localStorage.setItem('notes', notes);
      localStorage.setItem('history', JSON.stringify(history));
      localStorage.setItem('events', JSON.stringify(events)); // Ajout de la sauvegarde des événements
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données:', error);
    }
  }, [notes, history, events]); // Ajout de la dépendance sur les événements

  // Fonction pour afficher le calendrier
  const renderCalendarTab = () => {
    // Calcul des jours du mois
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    // Dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);
    
    // Nombre de jours dans le mois
    const daysInMonth = lastDay.getDate();
    
    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, ...)
    const firstDayOfWeek = firstDay.getDay();
    
    // Création d'un tableau pour les jours du mois
    const days = [];
    
    // Ajouter des cases vides pour les jours avant le premier jour du mois
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Ajouter les jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    const today = new Date();
    const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            &lt; Précédent
          </button>
          <h2 className="text-lg font-semibold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button 
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            Suivant &gt;
          </button>
        </div>
        
        {/* Grille des jours */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {/* En-têtes des jours de la semaine */}
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
            <div key={index} className="font-semibold">{day}</div>
          ))}
          
          {/* Cases des jours */}
          {days.map((day, index) => {
            const dayOfMonth = day !== null ? new Date(year, month, day) : null;
            const isToday = isCurrentMonth && dayOfMonth && dayOfMonth.getDate() === today.getDate();
            return (
              <div 
                key={index} 
                onClick={() => setSelectedDate(dayOfMonth)}
                className={`p-2 rounded ${
                  day 
                    ? `bg-white dark:bg-gray-800 border ${
                        isToday ? 'border-blue-500 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'
                      }` 
                    : ''
                } ${
                  isToday ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                }`}
              >
                {day}
                {selectedDate && (
                  <EventModal 
                    date={selectedDate}
                    onClose={() => setSelectedDate(null)}
                    onSave={(event: CalendarEvent) => {
                      setEvents(prev => [...prev, event]);
                      setSelectedDate(null);
                    }}
                  />
                )}
                {getEventsForDay(dayOfMonth).length > 0 && (
                  <div className="absolute bottom-1 right-1 flex space-x-1">
                    {events.some(e => e.type === 'predication') && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                    {events.some(e => e.type === 'etude') && (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Fonction pour obtenir les événements d'un jour
  const getEventsForDay = (date: Date | null) => {
    if (!date) return [];
    return events.filter(e => {
      const eventDate = new Date(e.date);
      return eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear();
    });
  };

  // Formatage du temps pour le chronomètre
  const formatTime = useCallback((milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  }, []);

  // Gestion du chronomètre
  const toggleTimer = useCallback(() => {
    setTimer(prevTimer => {
      const newState = {
        isRunning: !prevTimer.isRunning,
        time: prevTimer.time,
        startTime: Date.now() - (prevTimer.isRunning ? prevTimer.time : 0)
      };
      
      // Sauvegarder l'état dans le localStorage
      localStorage.setItem('timerState', JSON.stringify(newState));
      return newState;
    });
  }, []);

  const resetTimer = useCallback(() => {
    const newState = {
      isRunning: false,
      time: 0,
      startTime: 0
    };
    
    setTimer(newState);
    setLaps([]);
    localStorage.setItem('timerState', JSON.stringify(newState));
  }, []);

  const addLap = useCallback(() => {
    setLaps(prevLaps => [...prevLaps, timer.time]);
  }, [timer.time]);

  // Effet pour gérer l'intervalle du chronomètre
  useEffect(() => {
    if (timer.isRunning) {
      timerIntervalRef.current = window.setInterval(() => {
        setTimer(prevTimer => ({
          ...prevTimer,
          time: Date.now() - prevTimer.startTime
        }));
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [timer.isRunning, timer.startTime]);

  // Fonction pour calculer les statistiques
  const calculateStats = useCallback(() => {
    const total = history.reduce((sum, entry) => sum + entry.duration, 0);
    const avg = history.length > 0 ? total / history.length : 0;
    return { total, avg };
  }, [history]);

  // Fonction pour afficher les statistiques
  const renderStatsTab = useCallback(() => {
    const stats = calculateStats();
    
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Temps total</h3>
            <p className="text-2xl font-bold">{formatTime(stats.total)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Sessions</h3>
            <p className="text-2xl font-bold">{history.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Moyenne par session</h3>
            <p className="text-2xl font-bold">{formatTime(stats.avg)}</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Historique récent</h3>
          {history.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Date</th>
                    <th className="text-right py-2">Durée</th>
                    <th className="text-left py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(0, 10).map((entry) => (
                    <tr key={entry.id} className="border-b">
                      <td className="py-2">{entry.date}</td>
                      <td className="text-right py-2">{formatTime(entry.duration)}</td>
                      <td className="py-2">{entry.notes || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">Aucune donnée d'historique disponible</p>
          )}
        </div>
      </div>
    );
  }, [calculateStats, formatTime, history]);

  // Charger l'état du chronomètre au démarrage
  useEffect(() => {
    const savedTimer = localStorage.getItem('timerState');
    if (savedTimer) {
      setTimer(JSON.parse(savedTimer));
    }
    
    const savedHistory = localStorage.getItem('timerHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Rendu du contenu en fonction de l'onglet actif
  const renderTabContent = (tab: TabType): React.ReactNode => {
    if (!tab) return null;
    
    switch (tab) {
      case 'general':
        return (
          <div>
            {/* Contenu de l'onglet Général */}
          </div>
        );
      case 'students':
        return (
          <div>
            {/* Contenu de l'onglet Étudiants */}
          </div>
        );
      case 'interessed':
        return (
          <div>
            {/* Contenu de l'onglet Personnes Intéressées */}
          </div>
        );
      case 'calendar':
        return renderCalendarTab();
      case 'timer':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chronomètre</h2>
            <div className="text-center">
              <div className="text-5xl font-mono mb-8">
                {formatTime(timer.time)}
              </div>
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={toggleTimer}
                  className={`px-6 py-2 rounded-lg ${
                    timer.isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
                >
                  {timer.isRunning ? 'Arrêter' : 'Démarrer'}
                </button>
                <button
                  onClick={resetTimer}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                >
                  Réinitialiser
                </button>
                <button
                  onClick={addLap}
                  disabled={!timer.isRunning}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  Tour
                </button>
              </div>
              
              {laps.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-2">Tours</h3>
                  <div className="max-h-48 overflow-y-auto border rounded">
                    {laps.map((lap, index) => (
                      <div key={index} className="p-2 border-b flex justify-between">
                        <span>Tour {index + 1}</span>
                        <span>{formatTime(lap)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 'stats':
        return renderStatsTab();
      default:
        return null;
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Tableau de Bord
      </h1>
      
      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label={tab.label}
            >
              <tab.icon className="h-4 w-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default NotesPage;
