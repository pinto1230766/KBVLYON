import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Plus, Trash2, Edit, Save, Tag, X, Pin, 
  Maximize2, Minimize2, FileText, Calendar,
  Clock, Users, BarChart3
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '@/hooks/useLanguage';
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode] = useState(false);
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

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
      tags: noteForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      color: noteForm.color,
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
  }, [currentNote, noteForm, notes, saveNotes]);

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
            color: updatedNotes[0].color || colorOptions[0],
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
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 notes-tabs">
        <nav className="space-x-1 justify-start md:justify-center">
          <button
            title={t('accessibility.notesTab')}
            aria-label={t('accessibility.notesTab')}
            onClick={() => setActiveTab('notes')}
            className={`tab-button rounded-md flex items-center ${activeTab === 'notes' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
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
        <div className="flex-1 notes-container overflow-hidden">
          <div className="notes-sidebar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="p-4 border-b bg-white dark:bg-gray-800">
              <button
                title={t('accessibility.newNoteButton')}
                aria-label={t('accessibility.newNoteButton')}
                onClick={createNewNote}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('paginaNotas.novaNota')}
              </button>
            </div>
            <div className="p-2">
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
                      color: note.color || colorOptions[0],
                      categoryId: note.categoryId
                    });
                    setIsEditing(false);
                  }}
                  className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                    currentNote?.id === note.id
                      ? 'bg-blue-100 dark:bg-blue-900/50 border-l-4 border-blue-500'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <h3 className="font-medium text-sm truncate flex items-center">
                    {note.isPinned && <Pin className="w-3 h-3 mr-1 text-yellow-500" />}
                    {note.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {note.content.replace(/[#*`]/g, '').substring(0, 60)}...
                  </p>
                  <span className="text-xs text-gray-400">{formatDate(note.updatedAt)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="notes-content flex flex-col">
            {currentNote ? (
              <div className={`h-full flex flex-col ${currentNote.color} transition-colors`}>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="title"
                        value={noteForm.title}
                        onChange={handleInputChange}
                        placeholder={t('paginaNotas.tituloNota')}
                        className="w-full text-2xl font-bold bg-transparent focus:outline-none dark:text-white"
                        autoFocus
                        aria-label={t('accessibility.noteTitleInput')}
                      />
                    ) : (
                      <h1 className="text-2xl font-bold dark:text-white">
                        {currentNote.title || t('paginaNotas.semTitulo')}
                      </h1>
                    )}
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(currentNote.updatedAt)}
                      </span>
                      {currentNote.isPinned && (
                        <Pin size={14} className="ml-2 text-yellow-500 fill-current" />
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!isEditing && (
                      <button
                        title={t('accessibility.pinNoteButton')}
                        aria-label={t('accessibility.pinNoteButton')}
                        onClick={() => togglePinNote(currentNote)}
                        className={`p-2 rounded-full ${currentNote.isPinned ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                      >
                        {currentNote.isPinned ? <Pin size={18} className="fill-current" /> : <Pin size={18} />}
                      </button>
                    )}
                    {isEditing ? (
                      <>
                        <button
                          title={t('accessibility.saveButton')}
                          aria-label={t('accessibility.saveButton')}
                          onClick={handleSave}
                          className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                        >
                          <Save size={18} />
                        </button>
                        <button
                          title={t('accessibility.cancelButton')}
                          aria-label={t('accessibility.cancelButton')}
                          onClick={() => setIsEditing(false)}
                          className="p-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          title={t('accessibility.editButton')}
                          aria-label={t('accessibility.editButton')}
                          onClick={() => {
                            setNoteForm({
                              title: currentNote.title,
                              content: currentNote.content,
                              isPinned: currentNote.isPinned,
                              tags: currentNote.tags.join(', '),
                              color: currentNote.color || colorOptions[0],
                              categoryId: currentNote.categoryId
                            });
                            setIsEditing(true);
                            setTimeout(() => {
                              if (editorRef.current) editorRef.current.focus();
                            }, 100);
                          }}
                          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          title={t('accessibility.deleteButton')}
                          aria-label={t('accessibility.deleteButton')}
                          onClick={() => deleteNote(currentNote.id)}
                          className="p-2 text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                    <button
                      title={t('accessibility.fullscreenButton')}
                      aria-label={t('accessibility.fullscreenButton')}
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors hidden md:block"
                    >
                      {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-6 bg-white dark:bg-gray-800">
                  {isEditing ? (
                    <div className="h-full flex flex-col">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <div className="relative">
                          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 text-sm">
                            <Tag size={14} className="mr-1 text-gray-500" />
                            <input
                              type="text"
                              name="tags"
                              value={noteForm.tags}
                              onChange={handleInputChange}
                              placeholder={t('paginaNotas.etiquetas')}
                              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-32 dark:text-white"
                              aria-label={t('accessibility.noteTagsInput')}
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {colorOptions.map((color) => (
                            <button
                              key={color}
                              type="button"
                              onClick={() => setNoteForm({ ...noteForm, color })}
                              className={`w-5 h-5 rounded-full ${color.split(' ')[0]} border-2 ${
                                noteForm.color === color ? 'ring-2 ring-offset-1 ring-blue-500' : 'border-transparent'
                              }`}
                              title={color.split('-')[1]}
                              aria-label={t('accessibility.noteColorButton')}
                            />
                          ))}
                        </div>
                      </div>
                      <textarea
                        ref={editorRef}
                        name="content"
                        value={noteForm.content}
                        onChange={handleInputChange}
                        className="flex-1 w-full p-4 font-mono text-sm border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
                        placeholder={t('paginaNotas.comecerEscrever')}
                        aria-label={t('accessibility.noteContentInput')}
                      />
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {noteForm.content.length} {t('paginaNotas.caracteres')} • {noteForm.content.split(/\s+/).filter(Boolean).length} {t('paginaNotas.palavras')}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            title={t('accessibility.cancelButton')}
                            aria-label={t('accessibility.cancelButton')}
                          >
                            {t('iu.cancelar')}
                          </button>
                          <button
                            type="button"
                            onClick={handleSave}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
                            title={t('accessibility.saveButton')}
                            aria-label={t('accessibility.saveButton')}
                          >
                            <Save size={16} className="mr-1" />
                            {t('paginaNotas.enregistrer')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code: ({ inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                              <SyntaxHighlighter
                                style={isDarkMode ? vscDarkPlus as { [key: string]: React.CSSProperties } : vs as { [key: string]: React.CSSProperties }}
                                language={match[1]}
                                PreTag="div"
                                {...props as React.HTMLAttributes<HTMLDivElement>}
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
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FileText size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('paginaNotas.nenhumaNota')}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t('paginaNotas.criarNova')}
                  </p>
                  <button
                    onClick={createNewNote}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    title={t('accessibility.newNoteButton')}
                    aria-label={t('accessibility.newNoteButton')}
                  >
                    <Plus size={16} className="mr-2" />
                    {t('paginaNotas.novaNota')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
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
      )}

      {activeTab === 'chronometer' && (
        <div className="flex-1 p-4 sm:p-6 max-w-full sm:max-w-md mx-auto">
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
        <div className="flex-1 p-6">
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
      )}

      {activeTab === 'students' && (
        <div className="flex-1 p-6">
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
      )}

      {activeTab === 'statistics' && (
        <div className="flex-1 p-6">
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
      )}
    </div>
  );
};

export default NotesPage;