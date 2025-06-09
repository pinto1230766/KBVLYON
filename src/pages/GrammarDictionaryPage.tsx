import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { grammarLessons, GrammarLesson } from '../data/grammarData'; // Assurez-vous que le chemin est correct
import { translations } from '../data/translations'; // Pour les libellés de l'UI

interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example: {
    pt: string;
    cv: string;
  };
  note?: string;
}

const GrammarDictionaryPage: React.FC = () => {
  const { language } = useLanguage();
  // Assigner les bonnes sections de traduction
  const secaoGramaticaTrad = translations.gramaticaSecao;
  const dicionarioTrad = translations.dicionario;
  const comumTrad = translations.comum;
  const iuTrad = translations.iu;


  const [activeTab, setActiveTab] = useState<'grammar' | 'dictionary'>('grammar');
  console.log("Current activeTab:", activeTab); // Log pour débogage
  const [dictionaryData, setDictionaryData] = useState<DictionaryEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingDictionary, setLoadingDictionary] = useState(true);
  const [errorDictionary, setErrorDictionary] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'dictionary' && dictionaryData.length === 0 && loadingDictionary) { // Charger seulement si l'onglet dictionnaire est actif et les données pas encore chargées
      const fetchDictionaryData = async () => {
        try {
          const response = await fetch('/dictionary.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setDictionaryData(data);
        } catch (error) {
          console.error("Failed to load dictionary data:", error);
          setErrorDictionary(language === 'pt' ? 'Falha ao carregar dados do dicionário.' : 'Falha na karga dadus di disionáriu.');
        } finally {
          setLoadingDictionary(false);
        }
      };
      fetchDictionaryData();
    }
  }, [activeTab, language, dictionaryData.length, loadingDictionary]);

  const filteredDictionary = dictionaryData.filter(entry =>
    entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.translation.cv.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{secaoGramaticaTrad.titulo[language]}</h1>

      {/* Onglets */}
      <div style={{ marginBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <button
          style={{ padding: '1rem', borderBottom: activeTab === 'grammar' ? '2px solid blue' : '2px solid transparent', color: activeTab === 'grammar' ? 'blue' : 'inherit' }}
          onClick={() => { console.log("Attempting to switch to grammar tab"); setActiveTab('grammar'); }}
        >
          {secaoGramaticaTrad.tituloGramatica[language]}
        </button>
        <button
          style={{ padding: '1rem', borderBottom: activeTab === 'dictionary' ? '2px solid blue' : '2px solid transparent', color: activeTab === 'dictionary' ? 'blue' : 'inherit', marginLeft: '0.5rem' }}
          onClick={() => { console.log("Attempting to switch to dictionary tab"); setActiveTab('dictionary'); }}
        >
          {dicionarioTrad.titulo[language]}
        </button>
      </div>

      {/* Contenu des Onglets */}
      <div>
        {activeTab === 'grammar' && (
          <div id="grammar-content" role="tabpanel" aria-labelledby="grammar-tab">
            {/* Section Grammaire */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 sr-only">{secaoGramaticaTrad.tituloGramatica[language]}</h2> {/* sr-only car titre déjà dans l'onglet */}
              <p className="mb-4 text-muted-foreground">{secaoGramaticaTrad.introducaoGramatica[language]}</p>
              <div className="space-y-4"> {/* Réduction de l'espacement entre les cartes */}
                {grammarLessons.map((lesson: GrammarLesson) => (
                  <div key={lesson.id} className="p-3 border rounded-lg shadow-sm bg-card"> {/* p-4 à p-3 */}
                    <h3 className="text-lg font-semibold mb-1 text-primary">{`${secaoGramaticaTrad.licao[language]} ${lesson.id}: ${lesson.title[language]}`}</h3> {/* text-xl à text-lg, mb-2 à mb-1 */}
                    <p className="mb-2 text-xs text-muted-foreground">{lesson.content[language]}</p> {/* text-sm à text-xs, mb-3 à mb-2 */}
                    <h4 className="text-sm font-semibold mb-1">{secaoGramaticaTrad.exemplo[language]}s:</h4> {/* text-md à text-sm */}
                    <ul className="list-disc list-inside space-y-0.5 text-xs"> {/* text-sm à text-xs, space-y-1 à space-y-0.5 */}
                      {lesson.examples.map((example, index) => (
                        <li key={index}>
                          <span className="font-medium">{language === 'pt' ? 'PT:' : 'CV:'}</span> {example[language]}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'dictionary' && (
          <div id="dictionary-content" role="tabpanel" aria-labelledby="dictionary-tab">
            {/* Section Dictionnaire */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sr-only">{dicionarioTrad.titulo[language]}</h2> {/* sr-only car titre déjà dans l'onglet */}
              <div className="relative w-full mb-6">
                <input
                  type="text"
                  placeholder={dicionarioTrad.pesquisarPalavras[language]}
                  className="w-full p-2 pr-10 border rounded-lg shadow-sm focus:ring-primary focus:border-primary" // Ajout de pr-10 pour l'espace du bouton
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label={comumTrad.limparPesquisa[language]}
                  >
                    {'\u2715'} {/* Caractère X (croix) en Unicode */}
                  </button>
                )}
              </div>
              {loadingDictionary && dictionaryData.length === 0 && <p>{iuTrad.carregando[language]}</p>}
              {errorDictionary && <p className="text-red-500">{errorDictionary}</p>}
              {!loadingDictionary && !errorDictionary && (
                <div className="space-y-3"> {/* Réduction de l'espacement entre les cartes */}
                  {filteredDictionary.length > 0 ? (
                    filteredDictionary.map((entry: DictionaryEntry) => (
                      <div key={entry.id} className="p-3 border rounded-lg shadow-sm bg-card"> {/* p-4 à p-3 */}
                        <h3 className="text-lg font-semibold text-primary mb-1">{entry.word}</h3> {/* text-xl à text-lg, ajout de mb-1 */}
                        <p className="text-xs"> {/* text-sm à text-xs */}
                          <strong>PT:</strong> {entry.translation.pt}
                        </p>
                        <p className="text-xs mb-1"> {/* text-sm à text-xs, ajout de mb-1 */}
                          <strong>CV:</strong> {entry.translation.cv}
                        </p>
                        {entry.example && (
                          <div className="mt-1 text-xs text-muted-foreground"> {/* mt-2 à mt-1 */}
                            <p><strong>{comumTrad.exemplo[language]} (PT):</strong> {entry.example.pt}</p>
                            <p><strong>{comumTrad.exemplo[language]} (CV):</strong> {entry.example.cv}</p>
                          </div>
                        )}
                        {/* La ligne suivante pour afficher la note a été supprimée comme demandé */}
                        {/* {entry.note && <p className="text-xs mt-1 text-gray-500"><em>Nota: {entry.note}</em></p>} */}
                      </div>
                    ))
                  ) : (
                    <p>{secaoGramaticaTrad.semResultados[language]}</p>
                  )}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrammarDictionaryPage;
