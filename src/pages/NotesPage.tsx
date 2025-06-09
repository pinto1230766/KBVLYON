import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button'; // Assurez-vous que le chemin est correct
import { Input } from '@/components/ui/input'; // Importer Input
// import { Textarea } from '@/components/ui/textarea'; // Le composant Textarea n'existe pas, utilisation de textarea HTML standard
import { translations } from '../data/translations';
import { Trash2 } from 'lucide-react'; // Pour l'icône de suppression

// Interface pour les informations d'un étudiant
interface StudentInfo {
  id: string; // Pour une clé unique lors du mapping
  name: string;
  phone: string;
  email: string;
  dateAdded: string;
}

const NotesPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations;
  const [activeTab, setActiveTab] = useState<'general' | 'students'>('general');
  
  // Pour les notes générales
  const [generalNotes, setGeneralNotes] = useState('');
  const [generalNotesMessage, setGeneralNotesMessage] = useState('');

  // Pour les informations des étudiants
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [students, setStudents] = useState<StudentInfo[]>([]);
  const [studentFormMessage, setStudentFormMessage] = useState('');

  // Charger les notes générales et la liste des étudiants au montage
  useEffect(() => {
    const loadedGeneralNotes = localStorage.getItem('userGeneralNotes');
    if (loadedGeneralNotes) {
      setGeneralNotes(loadedGeneralNotes);
    }
    const loadedStudents = localStorage.getItem('studentDirectory');
    if (loadedStudents) {
      setStudents(JSON.parse(loadedStudents));
    }
  }, []);

  const handleSaveGeneralNotes = () => {
    localStorage.setItem('userGeneralNotes', generalNotes);
    setGeneralNotesMessage(language === 'pt' ? 'Notas gerais salvas!' : 'Apontamentus jeral salvu!');
    setTimeout(() => setGeneralNotesMessage(''), 3000);
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone || !studentEmail) {
      setStudentFormMessage(language === 'pt' ? 'Preencha todos os campos do aluno.' : 'Prenxi tudu kanpus di alunu.');
      setTimeout(() => setStudentFormMessage(''), 3000);
      return;
    }
    const newStudent: StudentInfo = { 
      id: Date.now().toString(), // ID unique simple
      name: studentName, 
      phone: studentPhone, 
      email: studentEmail,
      dateAdded: new Date().toISOString()
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('studentDirectory', JSON.stringify(updatedStudents));
    setStudentName('');
    setStudentPhone('');
    setStudentEmail('');
    setStudentFormMessage(language === 'pt' ? 'Aluno adicionado com sucesso!' : 'Alunu adisionadu ku susésu!');
    setTimeout(() => setStudentFormMessage(''), 3000);
  };

  const handleDeleteStudent = (studentId: string) => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
    localStorage.setItem('studentDirectory', JSON.stringify(updatedStudents));
    setStudentFormMessage(language === 'pt' ? 'Aluno removido.' : 'Alunu tiradu.');
    setTimeout(() => setStudentFormMessage(''), 3000);
  };

  const renderGeneralNotesTab = () => (
    <div>
      <textarea
        className="w-full h-96 p-3 border rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        value={generalNotes}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setGeneralNotes(e.target.value)}
        placeholder={language === 'pt' ? 'Digite suas notas gerais aqui...' : 'Skrebe bus apontamentus jeral li...'}
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSaveGeneralNotes} className="bg-primary text-primary-foreground hover:bg-primary/90">
          {t.iu.salvar[language]}
        </Button>
      </div>
      {generalNotesMessage && (
        <p className="mt-2 text-sm text-center text-green-600">{generalNotesMessage}</p>
      )}
    </div>
  );

  const renderStudentsTab = () => (
    <div>
      <form onSubmit={handleAddStudent} className="mb-6 p-4 border rounded-lg shadow-sm bg-card">
        <h3 className="text-lg font-semibold mb-3">{t.navegacao.adicionarAluno[language]}</h3>
        <div className="space-y-3">
          <Input type="text" placeholder={t.navegacao.nome[language]} value={studentName} onChange={(e) => setStudentName(e.target.value)} className="dark:bg-zinc-800 dark:border-zinc-700" />
          <Input type="tel" placeholder={t.navegacao.telefone[language]} value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)} className="dark:bg-zinc-800 dark:border-zinc-700" />
          <Input type="email" placeholder={t.navegacao.email[language]} value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} className="dark:bg-zinc-800 dark:border-zinc-700" />
        </div>
        <Button type="submit" className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90">
          {t.navegacao.adicionarAluno[language]}
        </Button>
        {studentFormMessage && (
          <p className={`mt-2 text-xs ${studentFormMessage.includes('sucesso') || studentFormMessage.includes('susésu') ? 'text-green-600' : 'text-red-600'}`}>{studentFormMessage}</p>
        )}
      </form>

      <h3 className="text-lg font-semibold mb-3">{t.navegacao.alunos[language]}</h3>
      {students.length === 0 ? (
        <p className="text-gray-500">{language === 'pt' ? 'Nenhum aluno adicionado ainda.' : 'Ninhun alunu adisionadu inda.'}</p>
      ) : (
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className="p-3 border rounded-lg shadow-sm bg-card flex justify-between items-center">
              <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm text-muted-foreground">{student.phone}</p>
                <p className="text-sm text-muted-foreground">{student.email}</p>
                <p className="text-xs text-gray-400">{language === 'pt' ? 'Adicionado em:' : 'Adisionadu na:'} {new Date(student.dateAdded).toLocaleDateString()}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDeleteStudent(student.id)} title={t.iu.remover[language]}>
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        {t.navegacao.notas[language]}
      </h1>

      <div className="mb-4 border-b border-gray-200 dark:border-zinc-700">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('general')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'general'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            {t.navegacao.notasGerais[language]}
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'students'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            {t.navegacao.alunos[language]}
          </button>
        </nav>
      </div>

      {activeTab === 'general' && renderGeneralNotesTab()}
      {activeTab === 'students' && renderStudentsTab()}
    </div>
  );
};

export default NotesPage;
