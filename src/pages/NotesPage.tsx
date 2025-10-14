import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { FileText, Users, Calendar, UserPlus, Clock, BarChart2, Trash2, Plus } from 'lucide-react';
import { useOfflineStorage } from '../hooks/useOfflineStorage';
import { useTranslation } from 'react-i18next';

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

interface StudentContact {
  id: string;
  name: string;
  phone?: string;
  progress?: string;
  lastVisit?: string;
}

interface InterestedContact {
  id: string;
  name: string;
  address?: string;
  notes?: string;
  followUpDate?: string;
}

// Configuration des onglets
const getTabs = (t: (key: string) => string) => [
  { id: 'general' as const, label: t('notes.tabs.general'), icon: FileText },
  { id: 'students' as const, label: t('notes.tabs.students'), icon: Users },
  { id: 'interessed' as const, label: t('notes.tabs.interessed'), icon: UserPlus },
  { id: 'calendar' as const, label: t('notes.tabs.calendar'), icon: Calendar },
  { id: 'timer' as const, label: t('notes.tabs.timer'), icon: Clock },
  { id: 'stats' as const, label: t('notes.tabs.stats'), icon: BarChart2 }
];

const NotesPage: React.FC = () => {
  const { t } = useTranslation();

  // États principaux
  const [activeTab, setActiveTab] = useState<TabType>('general');

  // Configuration des onglets
  const tabs = useMemo(() => getTabs(t), [t]);
  const { value: notes, setValue: setNotes } = useOfflineStorage<string>('notes', '');
  const [history] = useState<HistoryEntry[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // États pour le chronomètre
  const { value: timer, setValue: setTimer } = useOfflineStorage<TimerState>('timerState', {
    isRunning: false,
    time: 0,
    startTime: 0
  });
  const [laps, setLaps] = useState<number[]>([]);
  const timerIntervalRef = useRef<number | null>(null);
  const { value: events, setValue: setEvents } = useOfflineStorage<CalendarEvent[]>('notesEvents', []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventForm, setEventForm] = useState<{ type: CalendarEvent['type']; notes: string }>({ type: 'predication', notes: '' });
  const { value: students, setValue: setStudents } = useOfflineStorage<StudentContact[]>('notesStudents', []);
  const { value: interested, setValue: setInterested } = useOfflineStorage<InterestedContact[]>('notesInterested', []);
  const [studentForm, setStudentForm] = useState<StudentContact>({ id: '', name: '', phone: '', progress: '', lastVisit: '' });
  const [interestedForm, setInterestedForm] = useState<InterestedContact>({ id: '', name: '', address: '', notes: '', followUpDate: '' });
  
  // État pour les notifications
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);


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
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            &lt; Précédent
          </button>
          <h2 className="text-lg font-semibold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button 
            onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Suivant &gt;
          </button>
        </div>
        
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
              <button 
                key={index} 
                onClick={() => day && handleDayClick(dayOfMonth)}
                className={`relative min-h-[64px] rounded-lg border text-sm font-medium transition ${
                  day 
                    ? `bg-white dark:bg-gray-800 ${
                        isToday ? 'border-blue-500 dark:border-blue-400 shadow-sm' : 'border-gray-200 dark:border-gray-700'
                      }` 
                    : 'border-transparent'
                } ${
                  !day ? 'cursor-default' : 'cursor-pointer hover:border-blue-400 dark:hover:border-blue-300'
                }`}
              >
                {day}
                {day && getEventsForDay(dayOfMonth).length > 0 && (
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                    {getEventsForDay(dayOfMonth).map((event, idx) => (
                      <span
                        key={event.id + idx}
                        className={`h-2.5 w-2.5 rounded-full ${
                          event.type === 'predication' ? 'bg-blue-500' : 'bg-emerald-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid gap-2 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">{t('notes.eventosDoMes')}</h3>
            {events.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t('notes.nenhumEvento')}</p>
            ) : (
              <div className="space-y-2">
                {events.map((event) => (
                  <div key={event.id} className="flex flex-col gap-2 rounded-lg border border-border bg-card/50 p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {new Date(event.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${event.type === 'predication' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'}`}>
                        {event.type === 'predication' ? t('notes.formulario.predicacao') : t('notes.formulario.etude')}
                      </span>
                    </div>
                    {event.notes && <p className="text-xs text-muted-foreground">{event.notes}</p>}
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="inline-flex w-fit items-center gap-1 self-end rounded-md border border-border px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> {t('notes.botoes.suprimir')}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }} className="space-y-3 rounded-lg border border-border bg-card/40 p-4 text-sm">
            <h3 className="font-semibold text-foreground">{t('notes.adicionarEvento')}</h3>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground dark:text-gray-200">{t('notes.formulario.dataSelecionada')}</label>
              <input
                type="text"
                value={selectedDate ? selectedDate.toLocaleDateString('pt-PT') : t('notes.selecionarData')}
                readOnly
                className="w-full cursor-not-allowed rounded-md border border-border bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground dark:text-gray-200">{t('notes.formulario.tipoEvento')}</label>
              <select
                value={eventForm.type}
                onChange={(e) => setEventForm(prev => ({ ...prev, type: e.target.value as CalendarEvent['type'] }))}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="predication">{t('notes.formulario.predicacao')}</option>
                <option value="etude">{t('notes.formulario.etude')}</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.notas')}</label>
              <textarea
                value={eventForm.notes}
                onChange={(e) => setEventForm(prev => ({ ...prev, notes: e.target.value }))}
                placeholder={t('notes.formulario.notasPlaceholder')}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              {t('notes.botoes.adicionar')}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const handleDayClick = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    if (!selectedDate) {
      setToast({ message: t('notes.selecionarData'), type: 'error' });
      return;
    }

    const newEvent: CalendarEvent = {
      id: crypto.randomUUID(),
      date: selectedDate,
      type: eventForm.type,
      notes: eventForm.notes.trim()
    };

    setEvents(prev => [...prev, newEvent]);
    setEventForm({ type: 'predication', notes: '' });
    setToast({ message: t('notes.eventoAdicionado'), type: 'success' });
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
    setToast({ message: t('notes.eventoRemovido'), type: 'success' });
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.name.trim()) {
      setToast({ message: t('notes.nomeObrigatorio'), type: 'error' });
      return;
    }

    const newStudent: StudentContact = {
      ...studentForm,
      id: crypto.randomUUID(),
      lastVisit: studentForm.lastVisit || new Date().toISOString().slice(0, 10)
    };

    setStudents(prev => [newStudent, ...prev]);
    setStudentForm({ id: '', name: '', phone: '', progress: '', lastVisit: '' });
    setToast({ message: t('notes.estudanteAdicionado'), type: 'success' });
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    setToast({ message: t('notes.estudanteRemovido'), type: 'success' });
  };

  const handleInterestedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!interestedForm.name.trim()) {
      setToast({ message: t('notes.nomeObrigatorio'), type: 'error' });
      return;
    }

    const newInterested: InterestedContact = {
      ...interestedForm,
      id: crypto.randomUUID(),
      followUpDate: interestedForm.followUpDate || new Date().toISOString().slice(0, 10)
    };

    setInterested(prev => [newInterested, ...prev]);
    setInterestedForm({ id: '', name: '', address: '', notes: '', followUpDate: '' });
    setToast({ message: t('notes.pessoaInteressadaAdicionada'), type: 'success' });
  };

  const handleDeleteInterested = (id: string) => {
    setInterested(prev => prev.filter(contact => contact.id !== id));
    setToast({ message: t('notes.pessoaRemovida'), type: 'success' });
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

      return newState;
    });
  }, [setTimer]);

  const resetTimer = useCallback(() => {
    const newState = {
      isRunning: false,
      time: 0,
      startTime: 0
    };

    setTimer(newState);
    setLaps([]);
  }, [setTimer]);

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
  }, [timer.isRunning, timer.startTime, setTimer]);

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
        <h2 className="text-xl font-semibold mb-4">{t('notes.estatisticas.titulo')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">{t('notes.estatisticas.tempoTotal')}</h3>
            <p className="text-2xl font-bold">{formatTime(stats.total)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">{t('notes.estatisticas.sessoes')}</h3>
            <p className="text-2xl font-bold">{history.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">{t('notes.estatisticas.mediaPorSessao')}</h3>
            <p className="text-2xl font-bold">{formatTime(stats.avg)}</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">{t('notes.estatisticas.historicoRecente')}</h3>
          {history.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">{t('notes.estatisticas.data')}</th>
                    <th className="text-right py-2">{t('notes.estatisticas.duracao')}</th>
                    <th className="text-left py-2">{t('notes.estatisticas.notas')}</th>
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
            <p className="text-gray-500">{t('notes.estatisticas.nenhumaDados')}</p>
          )}
        </div>
      </div>
    );
  }, [calculateStats, formatTime, history, t]);


  // Rendu du contenu en fonction de l'onglet actif
  const renderTabContent = (tab: TabType): React.ReactNode => {
    if (!tab) return null;
    
    switch (tab) {
      case 'general':
        return (
          <div className="space-y-4">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('notes.placeholder.notasGerais')}
              className="w-full min-h-[200px] rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>{notes.length} caractères</span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setNotes('');
                    setToast({ message: t('notes.notasReiniciadas'), type: 'success' });
                  }}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-gray-600 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {t('notes.botoes.limpar')}
                </button>
                <button
                  onClick={() => setToast({ message: t('notes.notasSalvas'), type: 'success' })}
                  className="rounded-md bg-blue-600 px-3 py-1.5 font-medium text-white transition hover:bg-blue-700"
                >
                  {t('notes.botoes.guardar')}
                </button>
              </div>
            </div>
          </div>
        );
      case 'students':
        return (
          <div className="space-y-2">
            <form onSubmit={handleStudentSubmit} className="grid gap-3 rounded-lg border border-border bg-card/40 p-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.nomeEstudante')}</label>
                <input
                  value={studentForm.name}
                  onChange={(e) => setStudentForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex. João Silva"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.telefone')}</label>
                <input
                  value={studentForm.phone}
                  onChange={(e) => setStudentForm(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+33 6 12 34 56 78"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.progressoObservacoes')}</label>
                <input
                  value={studentForm.progress}
                  onChange={(e) => setStudentForm(prev => ({ ...prev, progress: e.target.value }))}
                  placeholder="Étude semaine 5, visite hebdo..."
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.ultimaVisita')}</label>
                <input
                  type="date"
                  value={studentForm.lastVisit}
                  onChange={(e) => setStudentForm(prev => ({ ...prev, lastVisit: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  {t('notes.botoes.adicionar')}
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {students.length === 0 ? (
                <p className="text-sm text-muted-foreground">{t('notes.mensagens.adicionarEstudantes')}</p>
              ) : (
                students.map((student) => (
                  <div key={student.id} className="flex flex-col gap-2 rounded-lg border border-border bg-card/60 p-4 text-sm md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-muted-foreground">{student.progress || t('notes.mensagens.nenhumProgresso')}</p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {student.phone && <>📞 {student.phone} · </>}
                        {t('notes.mensagens.ultimaVisita')} {student.lastVisit || '—'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="inline-flex items-center gap-1 self-start rounded-md border border-border px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> {t('notes.botoes.suprimir')}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      case 'interessed':
        return (
          <div className="space-y-2">
            <form onSubmit={handleInterestedSubmit} className="grid gap-3 rounded-lg border border-border bg-card/40 p-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.nomePessoa')}</label>
                <input
                  value={interestedForm.name}
                  onChange={(e) => setInterestedForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex. Maria Lopes"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.enderecoZona')}</label>
                <input
                  value={interestedForm.address}
                  onChange={(e) => setInterestedForm(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Quartier, étage, détails..."
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.dataRelancamento')}</label>
                <input
                  type="date"
                  value={interestedForm.followUpDate}
                  onChange={(e) => setInterestedForm(prev => ({ ...prev, followUpDate: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">{t('notes.formulario.notas')}</label>
                <textarea
                  value={interestedForm.notes}
                  onChange={(e) => setInterestedForm(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder={t('notes.formulario.impressoes')}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                  <Plus className="h-4 w-4" />
                  {t('notes.botoes.adicionar')}
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {interested.length === 0 ? (
                <p className="text-sm text-muted-foreground">{t('notes.mensagens.adicionarPessoasInteressadas')}</p>
              ) : (
                interested.map((contact) => (
                  <div key={contact.id} className="flex flex-col gap-2 rounded-lg border border-border bg-card/60 p-4 text-sm md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-medium text-foreground">{contact.name}</p>
                      <p className="text-muted-foreground">{contact.address || t('notes.mensagens.enderecoNaoInformado')}</p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {t('notes.mensagens.proximaVisita')} {contact.followUpDate || '—'}
                      </p>
                      {contact.notes && (
                        <p className="mt-2 text-xs text-muted-foreground/80">{contact.notes}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteInterested(contact.id)}
                      className="inline-flex items-center gap-1 self-start rounded-md border border-border px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> {t('notes.botoes.suprimir')}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      case 'calendar':
        return renderCalendarTab();
      case 'timer':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">{t('notes.cronometro.titulo')}</h2>
            <div className="text-center">
              <div className="text-5xl font-mono mb-2">
                {formatTime(timer.time)}
              </div>
              <div className="flex justify-center gap-4 mb-2">
                <button
                  onClick={toggleTimer}
                  className={`px-3 py-2 rounded-lg ${
                    timer.isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
                >
                  {timer.isRunning ? t('notes.cronometro.parar') : t('notes.cronometro.arrancar')}
                </button>
                <button
                  onClick={resetTimer}
                  className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                >
                  {t('notes.cronometro.reinicializar')}
                </button>
                <button
                  onClick={addLap}
                  disabled={!timer.isRunning}
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  {t('notes.cronometro.tour')}
                </button>
              </div>
              
              {laps.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-lg font-medium mb-2">{t('notes.cronometro.tours')}</h3>
                  <div className="max-h-48 overflow-y-auto border rounded">
                    {laps.map((lap, index) => (
                      <div key={index} className="p-2 border-b flex justify-between">
                        <span>{t('notes.cronometro.tour')} {index + 1}</span>
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
      <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        {t('notes.titulo')}
      </h1>
      
      <div className="mb-2">
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
              <tab.icon className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow">
        {renderTabContent(activeTab)}
      </div>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 rounded-lg border px-4 py-3 text-sm shadow-lg ${toast.type === 'success' ? 'border-green-300 bg-green-50 text-green-700 dark:border-green-700 dark:bg-green-900/40 dark:text-green-200' : 'border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-900/40 dark:text-red-200'}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
