import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, Users, Clock, Calendar, UserPlus, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import './NotesPage.css';

// Types pour les traductions
type TranslationValue = { pt: string; cv: string };
type TranslationRecord = Record<string, TranslationValue>;
type TranslationKeys = {
  notas: TranslationValue;
  notasGerais: TranslationValue;
  alunos: TranslationValue;
  pessoasInteressadas: TranslationValue;
  timer: TranslationValue;
  calendar: TranslationValue;
  inicio: TranslationRecord;
  navegacao: TranslationRecord;
  iu: TranslationRecord;
  [key: string]: TranslationValue | TranslationRecord;
};

type TabType = 'general' | 'students' | 'interessedPersons' | 'timer' | 'calendar' | 'stats';

interface Activity {
  date: string;
  preachingHours: number;
  studyHours: number;
  notes: string;
}

interface HistoryEntry {
  id: string;
  date: string;
  duration: number;
  notes?: string;
}

const NotesPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [notes, setNotes] = useState('');
  const [timer, setTimer] = useState<{
    isRunning: boolean;
    time: number;
    startTime: number;
  }>({
    isRunning: false,
    time: 0,
    startTime: 0,
  });
  const [laps, setLaps] = useState<number[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem('timerHistory');
      return saved ? JSON.parse(saved) as HistoryEntry[] : [];
    } catch (error) {
      console.error('Error parsing timer history:', error);
      return [];
    }
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [activities, setActivities] = useState<Activity[]>(() => {
    try {
      const saved = localStorage.getItem('activities');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error parsing activities:', error);
      return [];
    }
  });
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  // État pour gérer l'affichage de la modale d'activité
  const [showActivityModal, setShowActivityModal] = useState(false);

  // États pour la gestion des étudiants
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [students, setStudents] = useState<Array<{
    id: string;
    name: string;
    phone: string;
    email: string;
    nextStudy: string;
    notes: string;
  }>>(() => {
    try {
      const saved = localStorage.getItem('students');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error parsing students:', error);
      return [];
    }
  });
  
  // États pour la gestion des personnes intéressées
  const [interestedPersonName, setInterestedPersonName] = useState('');
  const [interestedPersonPhone, setInterestedPersonPhone] = useState('');
  const [interestedPersonEmail, setInterestedPersonEmail] = useState('');
  const [interestedPersonTerritory, setInterestedPersonTerritory] = useState('');
  const [interestedPersons, setInterestedPersons] = useState<Array<{
    id: string;
    name: string;
    phone: string;
    email: string;
    territory: string;
    dateAdded: string;
  }>>(() => {
    try {
      const saved = localStorage.getItem('interestedPersons') || localStorage.getItem('interessedPersons') || '[]';
      return JSON.parse(saved);
    } catch (error) {
      console.error('Error parsing interested persons:', error);
      return [];
    }
  });
  
  // Alias pour la rétrocompatibilité
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const interessedPersons = interestedPersons;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setInteressedPersons = setInterestedPersons;

  // Réinitialisation des formulaires
  const resetStudentForm = useCallback(() => {
    setStudentName('');
    setStudentPhone('');
    setStudentEmail('');
  }, []);
  
  const resetInterestedPersonForm = useCallback(() => {
    setInterestedPersonName('');
    setInterestedPersonPhone('');
    setInterestedPersonEmail('');
    setInterestedPersonTerritory('');
  }, []);
  
  // Gestion de la soumission des formulaires
  const handleAddStudent = useCallback(() => {
    if (!studentName.trim()) return;
    
    const newStudent = {
      id: Math.random().toString(),
      name: studentName.trim(),
      phone: studentPhone.trim(),
      email: studentEmail.trim(),
      nextStudy: '',
      notes: ''
    };
    
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    resetStudentForm();
  }, [studentName, studentPhone, studentEmail, students, resetStudentForm]);

  const handleAddInterestedPerson = useCallback(() => {
    if (!interestedPersonName.trim() || !interestedPersonPhone.trim() || !interestedPersonEmail.trim() || !interestedPersonTerritory.trim()) {
      // Afficher un message d'erreur ou une notification
      return;
    }
    
    const newInterestedPerson = {
      id: Math.random().toString(),
      name: interestedPersonName.trim(),
      phone: interestedPersonPhone.trim(),
      email: interestedPersonEmail.trim(),
      territory: interestedPersonTerritory.trim(),
      dateAdded: new Date().toISOString()
    };
    
    const updatedInterestedPersons = [...interestedPersons, newInterestedPerson];
    setInterestedPersons(updatedInterestedPersons);
    localStorage.setItem('interestedPersons', JSON.stringify(updatedInterestedPersons));
    resetInterestedPersonForm();
  }, [interestedPersonName, interestedPersonPhone, interestedPersonEmail, interestedPersonTerritory, interestedPersons, resetInterestedPersonForm]);

  useEffect(() => {
    const saved = localStorage.getItem('activities');
    if (saved) setActivities(JSON.parse(saved));
  }, []);

  // Traductions de navigation avec valeurs par défaut
  const navTranslations = useMemo(() => ({
    ...translations.navegacao,
    notasGerais: translations.navegacao.notasGerais || { pt: 'Geral', cv: 'Jeral' },
    alunos: translations.navegacao.alunos || { pt: 'Alunos', cv: 'Alunus' },
    pessoasInteressadas: translations.navegacao.pessoasInteressadas || { pt: 'Interessados', cv: 'Interesadu' },
    timer: translations.navegacao.timer || { pt: 'Cronômetro', cv: 'Kronometru' },
    calendar: translations.navegacao.calendar || { pt: 'Calendário', cv: 'Kalendariu' },
    estatisticas: { pt: 'Estatísticas', cv: 'Estatistika' }, // Valeur par défaut
  }), []);

  // Onglets de navigation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'general', label: translations.notasGerais[language], icon: <FileText className="h-4 w-4" /> },
    { id: 'students', label: translations.alunos[language], icon: <Users className="h-4 w-4" /> },
    { id: 'interessedPersons', label: translations.pessoasInteressadas[language], icon: <UserPlus className="h-4 w-4" /> },
    { id: 'timer', label: translations.timer[language], icon: <Clock className="h-4 w-4" /> },
    { id: 'calendar', label: translations.calendar[language], icon: <Calendar className="h-4 w-4" /> },
    { id: 'stats', label: navTranslations.estatisticas[language], icon: <BarChart2 className="h-4 w-4" /> },
  ];

  // Mapping des onglets vers leurs traductions
  const tabMapping = {
    general: 'notasGerais' as const,
    students: 'alunos' as const,
    interessedPersons: 'pessoasInteressadas' as const,
    timer: 'timer' as const,
    calendar: 'calendar' as const,
    stats: 'estatisticas' as const,
  } satisfies Record<TabType, keyof typeof navTranslations>;

  // Fonction pour formater le temps en format HH:MM:SS
  const formatTime = useCallback((ms: number = 0): string => {
    const timeInMs = ms || 0;
    const totalSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');
  }, []);

  // Fonction utilitaire pour obtenir une traduction en toute sécurité
  const t = useCallback((key: keyof typeof translations, lang: string = language) => {
    const translation = translations[key]?.[lang as keyof typeof translations[typeof key]];
    return typeof translation === 'string' ? translation : '';
  }, [language]);

  // Suppression de l'avertissement de variable non utilisée
  void t;

  // Fonction pour sauvegarder l'état du timer dans le localStorage
  const saveTimerState = useCallback((state: { isRunning: boolean; time: number; startTime: number }) => {
    try {
      localStorage.setItem('timerState', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving timer state:', error);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('timerState');
    if (saved) setTimer(JSON.parse(saved));
  }, []);

  const handleTimer = useCallback(() => {
    setTimer((prevTimer) => {
      const newState = {
        isRunning: !prevTimer.isRunning,
        startTime: Date.now() - prevTimer.time,
        time: prevTimer.time,
      };
      saveTimerState(newState);
      return newState;
    });
  }, [saveTimerState]);

  const resetTimer = useCallback(() => {
    const newState = {
      isRunning: false,
      time: 0,
      startTime: 0,
    };
    setTimer(newState);
    setLaps([]);
    // Appel direct à saveTimerState sans dépendance circulaire
    try {
      localStorage.setItem('timerState', JSON.stringify(newState));
    } catch (error) {
      console.error('Error saving timer state:', error);
    }
  }, []); // Pas de dépendance à saveTimerState pour éviter les boucles

  const addLap = useCallback(() => {
    setLaps([...laps, timer.time]);
  }, [laps, timer.time]);

  const timerIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (timer.isRunning) {
      // Nettoyer l'intervalle existant s'il y en a un
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }

      // Créer un nouvel intervalle
      timerIntervalRef.current = window.setInterval(() => {
        setTimer((prevTimer) => {
          if (!prevTimer.isRunning) return prevTimer;
          return {
            ...prevTimer,
            time: Date.now() - prevTimer.startTime,
          };
        });
      }, 10);
    }

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => {
      if (timerIntervalRef.current !== null) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [timer.isRunning, timer.startTime]);

  const saveSession = useCallback(() => {
    const newEntry: HistoryEntry = {
      id: Math.random().toString(),
      date: new Date().toISOString(),
      duration: timer.time,
      notes: '',
    };
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem('timerHistory', JSON.stringify(updatedHistory));
  }, [history, timer.time]);

  // Chargement de l'historique au montage du composant
  useEffect(() => {
    const savedHistory = localStorage.getItem('timerHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory) as HistoryEntry[]);
    }
  }, [setHistory]);

  const bestTimes = useMemo(() => {
    if (!history || history.length === 0) {
      return {
        shortest: 0,
        longest: 0,
        average: 0,
      };
    }

    const durations = history.map((h) => h.duration || 0);
    const total = durations.reduce((sum, d) => sum + d, 0);

    return {
      shortest: Math.min(...durations),
      longest: Math.max(...durations),
      average: Math.round(total / history.length),
    };
  }, [history]);

  interface StatCardProps {
    title: string;
    value: string;
  }

  const StatCard = ({ title, value, className = '' }: StatCardProps & { className?: string }) => (
    <div className={`p-1 rounded shadow ${className} flex flex-col items-center justify-center text-center w-full`}>
      <div className="text-[10px] text-gray-500 dark:text-gray-300 truncate w-full leading-tight">{title}</div>
      <div className="text-xs font-semibold text-gray-800 dark:text-white leading-tight">{value}</div>
    </div>
  );

  const HistoryTable = React.memo(({ history, formatTime }: { history: HistoryEntry[]; formatTime: (ms: number) => string }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Duração
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {history.map((entry, index) => (
            <tr key={`${entry.id}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(entry.date).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTime(entry.duration)}
              </td>
              {entry.notes && (
                <td className="px-6 py-4 whitespace-nowrap">
                  {entry.notes}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));

  const handleDateClick = useCallback((date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    const dateStr = date.toISOString().split('T')[0];
    const existing = activities.find((a: Activity) => a.date === dateStr);
    setSelectedActivity(existing || {
      date: dateStr,
      preachingHours: 0,
      studyHours: 0,
      notes: '',
    });
    setShowActivityModal(true);
  }, [activities]);

  const saveActivity = useCallback(() => {
    if (!selectedActivity) return;

    setActivities((prev) => {
      const existingIndex = prev.findIndex((a: Activity) => a.date === selectedActivity.date);
      const newActivities = [...prev];

      if (existingIndex >= 0) {
        newActivities[existingIndex] = selectedActivity;
      } else {
        newActivities.push(selectedActivity);
      }

      try {
        localStorage.setItem('activities', JSON.stringify(newActivities));
        console.log('Activité sauvegardée:', selectedActivity);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des activités:', error);
      }

      return newActivities;
    });

    setShowActivityModal(false);
    setSelectedActivity(null);
  }, [selectedActivity]);

  // Sauvegarder les étudiants dans localStorage
  useEffect(() => {
    try {
      localStorage.setItem('students', JSON.stringify(students));
      console.log('Étudiants sauvegardés:', students);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des étudiants:', error);
    }
  }, [students]);

  // Sauvegarder les personnes intéressées dans localStorage
  useEffect(() => {
    try {
      localStorage.setItem('interestedPersons', JSON.stringify(interestedPersons));
      console.log('Personnes intéressées sauvegardées:', interestedPersons);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des personnes intéressées:', error);
    }
  }, [interestedPersons]);

  // Afficher les activités actuelles dans la console pour le débogage
  useEffect(() => {
    console.log('Current activities:', activities);
  }, [activities]);

  useEffect(() => {
    const savedActivities = localStorage.getItem('activities');
    if (savedActivities) setActivities(JSON.parse(savedActivities) as Activity[]);
  }, []);

  interface ActivityModalProps {
    show: boolean;
    activity: Activity | null;
    language: 'pt' | 'cv';
    onClose: () => void;
    onSave: () => void;
    onActivityChange: (activity: Activity) => void;
  }

  const ActivityModal: React.FC<ActivityModalProps> = ({
    show,
    activity,
    language,
    onClose,
    onSave,
    onActivityChange,
  }) => {
    // Utilisation directe de l'activité passée en props
    if (!show || !activity) return null;

    const handleChange = (field: keyof Activity, value: string | number) => {
      onActivityChange({
        ...activity,
        [field]: field === 'notes' ? value : Number(value),
      });
    };

    // Fonction pour gérer les changements de nombre
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'preachingHours' | 'studyHours') => {
      const value = parseFloat(e.target.value) || 0;
      handleChange(field, value);
    };

    return (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold mb-4">
            {translations.iu.addHours[language]} - {new Date(activity.date).toLocaleDateString()}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block mb-1">{translations.iu.preachingHours[language]}</label>
              <Input
                type="number"
                step="0.1"
                min="0"
                value={activity.preachingHours || 0}
                onChange={(e) => handleNumberChange(e, 'preachingHours')}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => e.stopPropagation()}
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">{translations.iu.studyHours[language]}</label>
              <Input
                type="number"
                step="0.1"
                min="0"
                value={activity.studyHours || 0}
                onChange={(e) => handleNumberChange(e, 'studyHours')}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => e.stopPropagation()}
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">{translations.iu.notes[language]}</label>
              <Textarea
                aria-label={translations.iu.notes[language]}
                placeholder={translations.iu.notes[language]}
                value={activity.notes || ''}
                onChange={(e) => handleChange('notes', e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                className="w-full border rounded p-2 min-h-[100px] dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={onClose}>
              {translations.iu.cancel[language]}
            </Button>
            <Button variant="default" onClick={() => {
              onSave();
              onClose();
            }}>
              {translations.iu.save[language]}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderDayContents = (day: number, date: Date | null) => {
    if (!date) return <div className="w-full h-full flex items-center justify-center">{day}</div>;

    const dateStr = date.toISOString().split('T')[0];
    const activity = activities.find((a) => a.date === dateStr);
    const hasActivity = activity && (activity.preachingHours > 0 || activity.studyHours > 0);

    return (
      <div className="w-full h-full flex flex-col items-center justify-start p-1">
        <span className={`text-sm font-medium ${date.getMonth() !== selectedDate?.getMonth() ? 'opacity-40' : ''}`}>
          {day}
        </span>

        {hasActivity && (
          <div className="day-stats w-full mt-1 space-y-0.5">
            {activity.preachingHours > 0 && (
              <div className="day-stat bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-100 px-1 rounded text-center truncate">
                {activity.preachingHours.toFixed(1)}h
              </div>
            )}
            {activity.studyHours > 0 && (
              <div className="day-stat bg-green-100 text-green-800 dark:bg-green-900/70 dark:text-green-100 px-1 rounded text-center truncate">
                {activity.studyHours.toFixed(1)}h
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const getMonthStats = useCallback((date: Date) => {
    try {
      const month = date.getMonth();
      const year = date.getFullYear();

      const monthActivities = activities.filter((activity) => {
        try {
          const activityDate = new Date(activity.date);
          return activityDate.getMonth() === month && activityDate.getFullYear() === year;
        } catch (error) {
          console.error('Erreur lors du traitement de la date d\'activité:', activity.date, error);
          return false;
        }
      });

      const preaching = monthActivities.reduce((sum, activity) => sum + (Number(activity.preachingHours) || 0), 0);
      const study = monthActivities.reduce((sum, activity) => sum + (Number(activity.studyHours) || 0), 0);
      const total = parseFloat((preaching + study).toFixed(1));

      return {
        preaching: parseFloat(preaching.toFixed(1)),
        study: parseFloat(study.toFixed(1)),
        total,
        days: monthActivities.length,
      };
    } catch (error) {
      console.error('Erreur dans getMonthStats:', error);
      return { preaching: 0, study: 0, total: 0, days: 0 };
    }
  }, [activities]);

  // Composant pour afficher les statistiques
  const renderStatsTab = useCallback(() => {
    const stats = getMonthStats(selectedDate || new Date());
    
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Statistiques du Mois</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-300">Heures de Prédication</p>
              <p className="text-2xl font-bold">{stats.preaching.toFixed(1)}h</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-300">Heures d'Étude</p>
              <p className="text-2xl font-bold">{stats.study.toFixed(1)}h</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="text-sm text-purple-600 dark:text-purple-300">Total des Heures</p>
              <p className="text-2xl font-bold">{stats.total.toFixed(1)}h</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-3">Activités Récentes</h4>
            <div className="space-y-3">
              {activities.length > 0 ? (
                activities
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 5)
                  .map((activity, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          {new Date(activity.date).toLocaleDateString(language === 'pt' ? 'pt-PT' : 'pt-CV')}
                        </span>
                        <div className="flex space-x-3 text-sm">
                          {activity.preachingHours > 0 && (
                            <span className="text-blue-600 dark:text-blue-400">
                              {activity.preachingHours}h prédication
                            </span>
                          )}
                          {activity.studyHours > 0 && (
                            <span className="text-green-600 dark:text-green-400">
                              {activity.studyHours}h étude
                            </span>
                          )}
                        </div>
                      </div>
                      {activity.notes && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {activity.notes.length > 50 
                            ? `${activity.notes.substring(0, 50)}...` 
                            : activity.notes}
                        </p>
                      )}
                    </div>
                  ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">Aucune activité enregistrée ce mois-ci</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }, [activities, getMonthStats, language, selectedDate]);
    const stats = getMonthStats(selectedDate || new Date());
    
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Statistiques du Mois</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-300">Heures de Prédication</p>
              <p className="text-2xl font-bold">{stats.preaching.toFixed(1)}h</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-300">Heures d'Étude</p>
              <p className="text-2xl font-bold">{stats.study.toFixed(1)}h</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="text-sm text-purple-600 dark:text-purple-300">Total des Heures</p>
              <p className="text-2xl font-bold">{stats.total.toFixed(1)}h</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-3">Activités Récentes</h4>
            <div className="space-y-3">
              {activities.length > 0 ? (
                activities
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 5)
                  .map((activity, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          {new Date(activity.date).toLocaleDateString(language === 'pt' ? 'pt-PT' : 'pt-CV')}
                        </span>
                        <div className="flex space-x-3 text-sm">
                          {activity.preachingHours > 0 && (
                            <span className="text-blue-600 dark:text-blue-400">
                              {activity.preachingHours}h prédication
                            </span>
                          )}
                          {activity.studyHours > 0 && (
                            <span className="text-green-600 dark:text-green-400">
                              {activity.studyHours}h étude
                            </span>
                          )}
                        </div>
                      </div>
                      {activity.notes && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {activity.notes.length > 50 
                            ? `${activity.notes.substring(0, 50)}...` 
                            : activity.notes}
                        </p>
                      )}
                    </div>
                  ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">Aucune activité enregistrée ce mois-ci</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{navTranslations.notas[language]}</h1>
      
      <div className="tabs-container">
        <div className="tabs-scroll">
          {(Object.keys(tabMapping) as TabType[]).map((tab) => (
            <Button
              key={tab}
              data-active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className="tab-button"
            >
              {navTranslations[tabMapping[tab]][language]}
            </Button>
          ))}
        </div>
      </div>

      {activeTab === 'general' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <textarea
            aria-label={translations.iu.notes[language]}
            placeholder={translations.iu.notes[language]}
            value={notes}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
            className="w-full h-48 sm:h-64 p-3 border dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            rows={8}
          />
          <div className="flex justify-end mt-3">
            <Button className="w-full sm:w-auto">
              {translations.iu.salvar[language]}
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <Input 
              placeholder={language === 'pt' ? 'Nome' : 'Nomi'}
              className="w-full"
              value={studentName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)}
            />
            <Input 
              placeholder={language === 'pt' ? 'Telefone' : 'Telefonu'}
              className="w-full"
              type="tel"
              value={studentPhone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentPhone(e.target.value)}
            />
            <Input 
              placeholder="Email" 
              className="w-full sm:col-span-2 lg:col-span-1"
              type="email"
              value={studentEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button 
              className="w-full sm:w-auto"
              onClick={handleAddStudent}
            >
              {translations.iu.adicionar[language]}
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'interessedPersons' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <Input 
              placeholder={language === 'pt' ? 'Nome' : 'Nomi'}
              className="w-full"
              value={interestedPersonName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestedPersonName(e.target.value)}
            />
            <Input 
              placeholder={language === 'pt' ? 'Telefone' : 'Telefonu'}
              className="w-full"
              type="tel"
              value={interestedPersonPhone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestedPersonPhone(e.target.value)}
            />
            <Input 
              placeholder="Email"
              className="w-full"
              type="email"
              value={interestedPersonEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestedPersonEmail(e.target.value)}
            />
            <Input 
              placeholder={language === 'pt' ? 'Território' : 'Teritoriu'}
              className="w-full"
              value={interestedPersonTerritory}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestedPersonTerritory(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button 
              className="w-full sm:w-auto"
              onClick={handleAddInterestedPerson}
            >
              {translations.iu.adicionar[language]}
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'timer' && (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-3 sm:p-6 rounded-xl shadow-lg max-w-md mx-auto">
          <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 text-center mb-4 sm:mb-6">
            {formatTime(timer.time)}
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
            <Button 
              className="flex-1 sm:flex-none sm:w-24 text-sm sm:text-base" 
              onClick={handleTimer}
            >
              {timer.isRunning ? translations.iu.pause[language] : translations.iu.start[language]}
            </Button>
            <Button 
              className="flex-1 sm:flex-none sm:w-24 text-sm sm:text-base" 
              onClick={resetTimer} 
              variant="destructive"
            >
              {translations.iu.reset[language]}
            </Button>
            {timer.isRunning && (
              <Button 
                className="flex-1 sm:flex-none sm:w-24 text-sm sm:text-base" 
                onClick={addLap} 
                variant="outline"
              >
                {translations.iu.lap[language]}
              </Button>
            )}
          </div>
          
          {laps.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">{translations.iu.laps[language]}</h3>
              <ul className="divide-y">
                {laps.map((lap, i) => (
                  <li key={i} className="py-2 flex justify-between">
                    <span>Lap {i + 1}:</span>
                    <span>{formatTime(lap)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="px-2 sm:px-0">
            <Button 
              onClick={saveSession}
              variant="outline"
              className="w-full mt-4"
              disabled={timer.time === 0}
            >
              {translations.iu.saveSession[language]}
            </Button>
          </div>
          {history.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">{translations.iu.history[language]}</h3>
              <div className="grid grid-cols-3 gap-1 mb-3 -mx-0.5 px-1 w-full">
                <StatCard 
                  title={translations.iu.bestShort[language]}
                  value={formatTime(bestTimes.shortest)}
                />
                <StatCard
                  title={translations.iu.bestLong[language]}
                  value={formatTime(bestTimes.longest)}
                />
                <StatCard
                  title={translations.iu.average[language]}
                  value={formatTime(bestTimes.average)}
                />
              </div>
              <HistoryTable history={history} formatTime={formatTime} />
            </div>
          )}
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="mt-2 sm:mt-4 w-full">
          <div className="overflow-x-auto w-full">
            <div className="min-w-[320px] w-full max-w-2xl mx-auto">
              <div className="calendar-container">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateClick}
                  inline
                  className="w-full"
                  renderDayContents={renderDayContents as (day: number, date: Date | null) => React.ReactNode}
                  calendarClassName="w-full border-0 shadow-none"
                  dayClassName={(date) => {
                    const baseClass = "flex flex-col items-center justify-center p-1 h-16 sm:h-20";
                    const today = new Date();
                    const isToday = date.getDate() === today.getDate() && 
                                  date.getMonth() === today.getMonth() && 
                                  date.getFullYear() === today.getFullYear();
                    return isToday ? `${baseClass} bg-blue-50 dark:bg-blue-900/30` : baseClass;
                  }}
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }: {
                    date: Date;
                    decreaseMonth: () => void;
                    increaseMonth: () => void;
                    prevMonthButtonDisabled: boolean;
                    nextMonthButtonDisabled: boolean;
                  }) => (
                    <div className="flex items-center justify-between px-2 py-2">
                      <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      type="button"
                      aria-label={language === 'pt' ? 'Mês anterior' : 'Mês anterior'}
                      title={language === 'pt' ? 'Mês anterior' : 'Mês anterior'}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <div className="text-lg font-semibold">
                        {new Intl.DateTimeFormat(language === 'pt' ? 'pt-PT' : 'pt-CV', {
                          month: 'long',
                          year: 'numeric',
                        }).format(date)}
                      </div>
                      <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      type="button"
                      aria-label={language === 'pt' ? 'Próximo mês' : 'Próximo mês'}
                      title={language === 'pt' ? 'Próximo mês' : 'Próximo mês'}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow w-full max-w-2xl mx-auto">
            <h3 className="font-bold text-sm mb-1.5">{translations.iu.monthStats[language]}</h3>
            <div className="grid grid-cols-3 gap-1 w-full">
              <StatCard 
                title={translations.iu.preaching[language]} 
                value={`${getMonthStats(selectedDate || new Date()).preaching.toFixed(1)}h`} 
                className="bg-blue-50 dark:bg-gray-700"
              />
              <StatCard 
                title={translations.iu.study[language]} 
                value={`${getMonthStats(selectedDate || new Date()).study.toFixed(1)}h`} 
                className="bg-green-50 dark:bg-gray-700"
              />
              <StatCard 
                title={translations.iu.totalHours[language]} 
                value={`${getMonthStats(selectedDate || new Date()).total.toFixed(1)}h`} 
                className="bg-purple-50 dark:bg-gray-700"
              />
            </div>
          </div>
          
          {showActivityModal && selectedActivity && (
            <ActivityModal 
              show={showActivityModal}
              activity={selectedActivity}
              language={language}
              onClose={() => {
                setShowActivityModal(false);
                setSelectedActivity(null);
              }}
              onSave={() => {
                if (selectedActivity) {
                  saveActivity();
                }
              }}
              onActivityChange={(updatedActivity) => setSelectedActivity(updatedActivity)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
