import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { 
  Plus, Trash2, Edit, Save, X, Pin, 
  FileText, Calendar,
  Clock, Users, BarChart3
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from "../hooks/useLanguage";
import '../styles/NotesPage.css';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  color: string;
  isPinned: boolean;
  categoryId?: string;
  isArchived: boolean;
  wordCount: number;
  characterCount: number;
}

interface NoteFormData {
  title: string;
  content: string;
  isPinned: boolean;
  tags?: string;
  color?: string;
  categoryId?: string;
}

const colorOptions = [
  'bg-blue-100 border-blue-300 dark:bg-blue-900/50 dark:border-blue-700',
  'bg-green-100 border-green-300 dark:bg-green-900/50 dark:border-green-700',
  'bg-yellow-100 border-yellow-300 dark:bg-yellow-900/50 dark:border-yellow-700',
  'bg-pink-100 border-pink-300 dark:bg-pink-900/50 dark:border-pink-700',
  'bg-purple-100 border-purple-300 dark:bg-purple-900/50 dark:border-purple-700',
];

const NotesPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('notes');
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode] = useState(false);
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [people, setPeople] = useState<Array<{id: string, name: string, email: string, phone: string, territory: string, dateAdded: string}>>([]);
  const [personForm, setPersonForm] = useState({name: '', email: '', phone: '', territory: ''});

  const [students, setStudents] = useState<Array<{id: string, name: string, email: string, phone: string, startDate: string, progress: string}>>([]);
  const [studentForm, setStudentForm] = useState({name: '', email: '', phone: '', progress: ''});

  const [calendarEvents, setCalendarEvents] = useState<Array<{id: string, title: string, date: string, type: 'predication' | 'etude', hours: number}>>([]);
  const [eventForm, setEventForm] = useState({title: '', date: '', type: 'predication' as 'predication' | 'etude', hours: 1});
  const [showEventForm, setShowEventForm] = useState(false);
  
  const [noteForm, setNoteForm] = useState<NoteFormData>({
    title: '',
    content: '',
    isPinned: false,
    tags: '',
    color: colorOptions[0],
    categoryId: undefined
  });
  
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('modern-notes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      setNotes(parsedNotes);
      if (parsedNotes.length > 0) {
        setCurrentNote(parsedNotes[0]);
      }
    }
    const savedPeople = localStorage.getItem('interested-people');
    if (savedPeople) {
      setPeople(JSON.parse(savedPeople));
    }
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
    const savedEvents = localStorage.getItem('calendar-events');
    if (savedEvents) {
      setCalendarEvents(JSON.parse(savedEvents));
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const saveNotes = useCallback((updatedNotes: Note[]) => {
    const sortedNotes = [...updatedNotes].sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return a.isPinned ? -1 : 1;
      }
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    
    setNotes(sortedNotes);
    localStorage.setItem('modern-notes', JSON.stringify(sortedNotes));
  }, []);
  
  const createNewNote = useCallback(() => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: t('paginaNotas.novaNota'),
      content: `## ${t('paginaNotas.comecerEscrever')}\n\n${t('paginaNotas.comecerEscrever')}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [],
      color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
      isPinned: false,
      isArchived: false,
      wordCount: 0,
      characterCount: 0
    };
    
    const updatedNotes = [newNote, ...notes];
    saveNotes(updatedNotes);
    setCurrentNote(newNote);
    setNoteForm({
      title: newNote.title,
      content: newNote.content,
      isPinned: newNote.isPinned,
      tags: '',
      color: newNote.color,
      categoryId: undefined
    });
    setIsEditing(true);
    
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    }, 100);
  }, [notes, saveNotes]);

  const handleSave = useCallback(() => {
    if (!currentNote) return;
    
    const updatedNote: Note = {
      ...currentNote,
      title: noteForm.title || 'Sans titre',
      content: noteForm.content,
      updatedAt: new Date().toISOString(),
      tags: (noteForm.tags || '').split(',').map(tag => tag.trim()).filter(tag => tag),
      color: noteForm.color || '',
      isPinned: noteForm.isPinned,
      categoryId: noteForm.categoryId,
      wordCount: noteForm.content.trim() === '' ? 0 : noteForm.content.trim().split(/\s+/).length,
      characterCount: noteForm.content.length
    };
    
    const updatedNotes = notes.map(note => 
      note.id === currentNote.id ? updatedNote : note
    );
    
    saveNotes(updatedNotes);
    setCurrentNote(updatedNote);
    setIsEditing(false);
  }, [currentNote, noteForm, notes, saveNotes]); // t supprimé car utilisé via le contexte

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const togglePinNote = useCallback((note: Note) => {
    const updatedNote = { ...note, isPinned: !note.isPinned, updatedAt: new Date().toISOString() };
    const updatedNotes = notes.map(n => n.id === note.id ? updatedNote : n);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    
    if (currentNote?.id === note.id) {
      setCurrentNote(updatedNote);
      setNoteForm(prev => ({
        ...prev,
        isPinned: updatedNote.isPinned
      }));
    }
  }, [currentNote, notes, saveNotes]);

  const deleteNote = (id: string) => {
    if (window.confirm(t('paginaNotas.confirmerSuppression'))) {
      const updatedNotes = notes.filter(note => note.id !== id);
      saveNotes(updatedNotes);
      
      if (currentNote?.id === id) {
        setCurrentNote(updatedNotes[0] || null);
        if (updatedNotes[0]) {
          setNoteForm({
            title: updatedNotes[0].title,
            content: updatedNotes[0].content,
            isPinned: updatedNotes[0].isPinned,
            tags: updatedNotes[0].tags.join(', '),
            color: updatedNotes[0].color || '',
            categoryId: updatedNotes[0].categoryId
          });
        }
      }
      setNotes(updatedNotes);
    }
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const addPerson = () => {
    if (!personForm.name || !personForm.email) return;
    const newPerson = {
      id: Date.now().toString(),
      ...personForm,
      dateAdded: new Date().toISOString()
    };
    const updatedPeople = [...people, newPerson];
    setPeople(updatedPeople);
    localStorage.setItem('interested-people', JSON.stringify(updatedPeople));
    setPersonForm({name: '', email: '', phone: '', territory: ''});
  };

  const deletePerson = (id: string) => {
    const updatedPeople = people.filter(p => p.id !== id);
    setPeople(updatedPeople);
    localStorage.setItem('interested-people', JSON.stringify(updatedPeople));
  };

  const addStudent = () => {
    if (!studentForm.name || !studentForm.email) return;
    const newStudent = {
      id: Date.now().toString(),
      ...studentForm,
      startDate: new Date().toISOString()
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudentForm({name: '', email: '', phone: '', progress: ''});
  };

  const deleteStudent = (id: string) => {
    const updatedStudents = students.filter(s => s.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const addEvent = () => {
    if (!eventForm.title || !eventForm.date) return;
    const newEvent = {
      id: Date.now().toString(),
      ...eventForm
    };
    const updatedEvents = [...calendarEvents, newEvent];
    setCalendarEvents(updatedEvents);
    localStorage.setItem('calendar-events', JSON.stringify(updatedEvents));
    setEventForm({title: '', date: '', type: 'predication', hours: 1});
    setShowEventForm(false);
  };

  const deleteEvent = (id: string) => {
    const updatedEvents = calendarEvents.filter(e => e.id !== id);
    setCalendarEvents(updatedEvents);
    localStorage.setItem('calendar-events', JSON.stringify(updatedEvents));
  };

  const totalPredicationHours = calendarEvents.filter(e => e.type === 'predication').reduce((sum, e) => sum + e.hours, 0);
  const totalStudyHours = calendarEvents.filter(e => e.type === 'etude').reduce((sum, e) => sum + e.hours, 0);

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 notes-tabs">
        <nav className="space-x-1 justify-start md:justify-center">
          <button
            title={t('accessibility.notesTab')}
            aria-label={t('accessibility.notesTab')}
            onClick={() => setActiveTab('notes')}
            className={`tab-button rounded-md flex items-center btn-animated ${activeTab === 'notes' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <FileText className="w-4 h-4 mr-2" />
            {t('navegacao.notas')}
          </button>
          <button
            title={t('accessibility.calendarTab')}
            aria-label={t('accessibility.calendarTab')}
            onClick={() => setActiveTab('calendar')}
            className={`py-2 px-4 rounded-md flex items-center ${activeTab === 'calendar' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            {t('navegacao.calendario')}
          </button>
          <button
            title={t('accessibility.chronometerTab')}
            aria-label={t('accessibility.chronometerTab')}
            onClick={() => setActiveTab('chronometer')}
            className={`py-2 px-4 rounded-md flex items-center ${activeTab === 'chronometer' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <Clock className="w-4 h-4 mr-2" />
            {t('navegacao.cronometro')}
          </button>
          <button
            title={t('accessibility.interestedPeopleTab')}
            aria-label={t('accessibility.interestedPeopleTab')}
            onClick={() => setActiveTab('interestedPeople')}
            className={`py-2 px-4 rounded-md flex items-center ${activeTab === 'interestedPeople' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <Users className="w-4 h-4 mr-2" />
            {t('navegacao.pessoasInteressadas')}
          </button>
          <button
            title={t('accessibility.studentsTab')}
            aria-label={t('accessibility.studentsTab')}
            onClick={() => setActiveTab('students')}
            className={`py-2 px-4 rounded-md flex items-center ${activeTab === 'students' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <Users className="w-4 h-4 mr-2" />
            {t('navegacao.estudantes')}
          </button>
          <button
            title={t('accessibility.statisticsTab')}
            aria-label={t('accessibility.statisticsTab')}
            onClick={() => setActiveTab('statistics')}
            className={`py-2 px-4 rounded-md flex items-center ${activeTab === 'statistics' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            {t('navegacao.estatisticas')}
          </button>
        </nav>
      </div>

      {activeTab === 'notes' && (
        <div className="flex flex-col md:flex-row flex-1 min-h-0">
          {/* Sidebar */}
          <aside className="w-full md:w-[160px] flex-shrink-0 bg-white dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col p-1">
            <button
              title={t('accessibility.newNoteButton')}
              aria-label={t('accessibility.newNoteButton')}
              onClick={createNewNote}
              className="w-full flex items-center justify-center px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded mb-1 text-xs btn-animated"
            >
              <Plus className="w-3 h-3 mr-1" />
              {t('paginaNotas.novaNota')}
            </button>
            <div className="flex-1 overflow-auto space-y-1">
              {notes.map(note => (
                <div
                  key={note.id}
                  onClick={() => {
                    setCurrentNote(note);
                    setNoteForm({
                      title: note.title,
                      content: note.content,
                      isPinned: note.isPinned,
                      tags: note.tags.join(', '),
                      color: note.color || '',
                      categoryId: note.categoryId
                    });
                    setIsEditing(false);
                  }}
                  className={`p-1 rounded cursor-pointer text-xs ${currentNote?.id === note.id ? 'bg-blue-100 dark:bg-blue-900/50 border-l-4 border-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <div className="flex items-center font-medium truncate">
                    {note.isPinned && <Pin className="w-3 h-3 mr-1 text-yellow-500" />}
                    {note.title}
                  </div>
                  <div className="text-[10px] text-gray-500 truncate">
                    {note.content.replace(/[#*`]/g, '').substring(0, 30)}...
                  </div>
                </div>
              ))}
            </div>
          </aside>
          {/* Contenu principal */}
          <section className="flex-1 flex flex-col min-h-0 p-2 md:p-4">
            {currentNote ? (
              <>
                {/* En-tête note */}
                <div className="flex items-center justify-between border-b pb-1 mb-1">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="title"
                        value={noteForm.title}
                        onChange={handleInputChange}
                        placeholder={t('paginaNotas.tituloNota')}
                        className="text-lg font-bold bg-transparent focus:outline-none dark:text-white w-full"
                        autoFocus
                        aria-label={t('accessibility.noteTitleInput')}
                      />
                    ) : (
                      <h1 className="text-lg font-bold dark:text-white truncate">
                        {currentNote.title || t('paginaNotas.semTitulo')}
                      </h1>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                      <span>{formatDate(currentNote.updatedAt)}</span>
                      {currentNote.isPinned && <Pin size={12} className="text-yellow-500" />}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!isEditing && (
                      <button title={t('accessibility.pinNoteButton')} aria-label={t('accessibility.pinNoteButton')} onClick={() => togglePinNote(currentNote)} className="p-1 rounded text-yellow-500 hover:bg-gray-100 btn-animated">
                        <Pin size={14} />
                      </button>
                    )}
                    {isEditing ? (
                      <>
                        <button title={t('accessibility.saveButton')} aria-label={t('accessibility.saveButton')} onClick={handleSave} className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600 btn-animated">
                          <Save size={14} />
                        </button>
                        <button title={t('accessibility.cancelButton')} aria-label={t('accessibility.cancelButton')} onClick={() => setIsEditing(false)} className="p-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 btn-animated">
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button title={t('accessibility.editButton')} aria-label={t('accessibility.editButton')} onClick={() => { setNoteForm({ title: currentNote.title, content: currentNote.content, isPinned: currentNote.isPinned, tags: currentNote.tags.join(', '), color: currentNote.color || '', categoryId: currentNote.categoryId }); setIsEditing(true); setTimeout(() => { if (editorRef.current) editorRef.current.focus(); }, 100); }} className="p-1 text-gray-600 hover:bg-gray-100 rounded btn-animated">
                          <Edit size={14} />
                        </button>
                        <button title={t('accessibility.deleteButton')} aria-label={t('accessibility.deleteButton')} onClick={() => deleteNote(currentNote.id)} className="p-1 text-red-500 hover:bg-red-100 rounded btn-animated">
                          <Trash2 size={14} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                {/* Contenu note */}
                <div className="flex-1 overflow-auto text-sm">
                  {isEditing ? (
                    <textarea
                      ref={editorRef}
                      name="content"
                      value={noteForm.content}
                      onChange={handleInputChange}
                      className="w-full h-full min-h-[120px] max-h-[400px] p-2 border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
                      placeholder={t('paginaNotas.comecerEscrever')}
                      aria-label={t('accessibility.noteContentInput')}
                    />
                  ) : (
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code: ({ className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return match ? (
                              <SyntaxHighlighter
                                style={isDarkMode ? vscDarkPlus : vs}
                                language={match[1]}
                                PreTag="div"
                                {...props as React.ComponentProps<typeof SyntaxHighlighter>}
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            );
                          },
                        }}
                      >
                        {currentNote.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-xs text-gray-500">
                <FileText size={24} className="mb-2 text-blue-400" />
                <div>{t('paginaNotas.nenhumaNota')}</div>
                <button onClick={createNewNote} className="mt-2 px-2 py-1 bg-blue-500 text-white rounded text-xs btn-animated">{t('paginaNotas.novaNota')}</button>
              </div>
            )}
          </section>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-1">
          <div className="flex-shrink-0 flex justify-between items-center mb-1">
            <h2 className="text-2xl font-bold">{t('navegacao.calendario')}</h2>
            <button
              onClick={() => setShowEventForm(true)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center"
              title={t('accessibility.addEventButton')}
              aria-label={t('accessibility.addEventButton')}
            >
              <Plus className="w-4 h-4 mr-2" />
              {t('paginaNotas.adicionarAtividade')}
            </button>
          </div>

          {showEventForm && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <h3 className="text-lg font-semibold mb-4">{t('paginaNotas.novaAtividade')}</h3>
              <div className="responsive-grid">
                <input
                  type="text"
                  placeholder={t('paginaNotas.titulo')}
                  value={eventForm.title}
                  onChange={(e) => setEventForm(prev => ({...prev, title: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.eventTitleInput')}
                />
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm(prev => ({...prev, date: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.eventDateInput')}
                />
                <select
                  value={eventForm.type}
                  onChange={(e) => setEventForm(prev => ({...prev, type: e.target.value as 'predication' | 'etude'}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.eventTypeSelect')}
                >
                  <option value="predication">{t('paginaNotas.predicacao')}</option>
                  <option value="etude">{t('paginaNotas.estudo')}</option>
                </select>
                <input
                  type="number"
                  placeholder={t('paginaNotas.horas')}
                  min="0.5"
                  step="0.5"
                  value={eventForm.hours}
                  onChange={(e) => setEventForm(prev => ({...prev, hours: parseFloat(e.target.value) || 1}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.eventHoursInput')}
                />
              </div>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={addEvent}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  title={t('accessibility.addEventButton')}
                  aria-label={t('accessibility.addEventButton')}
                >
                  {t('paginaNotas.adicionar')}
                </button>
                <button
                  onClick={() => setShowEventForm(false)}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  title={t('accessibility.cancelButton')}
                  aria-label={t('accessibility.cancelButton')}
                >
                  {t('iu.cancelar')}
                </button>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-auto min-h-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">{t('paginaNotas.atividadesProgramadas')}</h3>
              {calendarEvents.length === 0 ? (
                <p className="text-gray-500 text-center py-8">{t('paginaNotas.nenhumaAtividade')}</p>
              ) : (
                <div className="space-y-3">
                  {calendarEvents.map(event => (
                    <div key={event.id} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(event.date).toLocaleDateString()} - {event.hours}h - 
                          <span className={`ml-1 px-2 py-1 rounded text-xs ${
                            event.type === 'predication' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {event.type === 'predication' ? t('paginaNotas.predicacao') : t('paginaNotas.estudo')}
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                        title={t('accessibility.deleteButton')}
                        aria-label={t('accessibility.deleteButton')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'chronometer' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden items-center justify-center p-1">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('navegacao.cronometro')}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl font-mono text-center mb-6 text-gray-800 dark:text-gray-200">
              {formatTime(time)}
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <button
                onClick={isRunning ? stopTimer : startTimer}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isRunning
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
                title={isRunning ? t('accessibility.stopButton') : t('accessibility.startButton')}
                aria-label={isRunning ? t('accessibility.stopButton') : t('accessibility.startButton')}
              >
                {isRunning ? t('paginaNotas.parar') : t('paginaNotas.iniciar')}
              </button>
              <button
                onClick={resetTimer}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                title={t('accessibility.resetButton')}
                aria-label={t('accessibility.resetButton')}
              >
                {t('paginaNotas.reinicializar')}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'interestedPeople' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-1">
          <div className="flex-shrink-0 mb-1">
            <h2 className="text-2xl font-bold mb-6">{t('navegacao.pessoasInteressadas')}</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <h3 className="text-lg font-semibold mb-4">{t('paginaNotas.adicionarPessoa')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder={t('paginaNotas.nome')}
                  value={personForm.name}
                  onChange={(e) => setPersonForm(prev => ({...prev, name: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.personNameInput')}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={personForm.email}
                  onChange={(e) => setPersonForm(prev => ({...prev, email: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.personEmailInput')}
                />
                <input
                  type="tel"
                  placeholder={t('paginaNotas.telefone')}
                  value={personForm.phone}
                  onChange={(e) => setPersonForm(prev => ({...prev, phone: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.personPhoneInput')}
                />
                <input
                  type="text"
                  placeholder="Territoire"
                  value={personForm.territory}
                  onChange={(e) => setPersonForm(prev => ({...prev, territory: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.personTerritoryInput')}
                />
              </div>
              <button
                onClick={addPerson}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                title={t('accessibility.addPersonButton')}
                aria-label={t('accessibility.addPersonButton')}
              >
                {t('paginaNotas.adicionar')}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto min-h-0">
            <div className="space-y-3">
              {people.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Aucune personne ajoutée</p>
              ) : (
                people.map(person => (
                  <div key={person.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{person.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{person.email}</p>
                      {person.phone && <p className="text-sm text-gray-600 dark:text-gray-400">{person.phone}</p>}
                      {person.territory && <p className="text-sm text-gray-600 dark:text-gray-400">Territoire: {person.territory}</p>}
                      <p className="text-xs text-gray-400">Ajouté le {new Date(person.dateAdded).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => deletePerson(person.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title={t('accessibility.deleteButton')}
                      aria-label={t('accessibility.deleteButton')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-1">
          <div className="flex-shrink-0 mb-1">
            <h2 className="text-2xl font-bold mb-6">{t('navegacao.estudantes')}</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <h3 className="text-lg font-semibold mb-4">{t('paginaNotas.adicionarEstudante')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder={t('paginaNotas.nome')}
                  value={studentForm.name}
                  onChange={(e) => setStudentForm(prev => ({...prev, name: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.studentNameInput')}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm(prev => ({...prev, email: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.studentEmailInput')}
                />
                <input
                  type="tel"
                  placeholder={t('paginaNotas.telefone')}
                  value={studentForm.phone}
                  onChange={(e) => setStudentForm(prev => ({...prev, phone: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.studentPhoneInput')}
                />
                <input
                  type="text"
                  placeholder={t('paginaNotas.progresso')}
                  value={studentForm.progress}
                  onChange={(e) => setStudentForm(prev => ({...prev, progress: e.target.value}))}
                  className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  aria-label={t('accessibility.studentProgressInput')}
                />
              </div>
              <button
                onClick={addStudent}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                title={t('accessibility.addStudentButton')}
                aria-label={t('accessibility.addStudentButton')}
              >
                {t('paginaNotas.adicionar')}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto min-h-0">
            <div className="space-y-3">
              {students.length === 0 ? (
                <p className="text-gray-500 text-center py-8">{t('paginaNotas.nenhumEstudante')}</p>
              ) : (
                students.map(student => (
                  <div key={student.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{student.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{student.email}</p>
                      {student.phone && <p className="text-sm text-gray-600 dark:text-gray-400">{student.phone}</p>}
                      {student.progress && <p className="text-sm text-gray-600 dark:text-gray-400">{t('paginaNotas.progresso')}: {student.progress}</p>}
                      <p className="text-xs text-gray-400">{t('paginaNotas.comecouEm')} {new Date(student.startDate).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title={t('accessibility.deleteButton')}
                      aria-label={t('accessibility.deleteButton')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'statistics' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-1 text-[10px]">
          <div className="flex-1 overflow-auto min-h-0">
            <h2 className="text-2xl font-bold mb-6">{t('navegacao.estatisticas')}</h2>
            <div className="responsive-grid">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('navegacao.notas')}</h3>
                <p className="text-3xl font-bold text-blue-500">{notes.length}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('navegacao.pessoasInteressadas')}</h3>
                <p className="text-3xl font-bold text-green-500">{people.length}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('navegacao.estudantes')}</h3>
                <p className="text-3xl font-bold text-purple-500">{students.length}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('paginaNotas.tempoCronometro')}</h3>
                <p className="text-3xl font-bold text-orange-500">{formatTime(time)}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('paginaNotas.horasPredicacao')}</h3>
                <p className="text-3xl font-bold text-green-600">{totalPredicationHours}h</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{t('paginaNotas.horasEstudo')}</h3>
                <p className="text-3xl font-bold text-blue-600">{totalStudyHours}h</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NotesPageMemo = memo(NotesPage);

export default NotesPageMemo;