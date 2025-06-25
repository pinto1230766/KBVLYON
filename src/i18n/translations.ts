// Traductions pour l'application
export const translations = {
  fr: {
    notes: 'Notes',
    calendar: 'Calendrier',
    chronometer: 'Chronomètre',
    interestedPeople: 'Personnes intéressées',
    students: 'Étudiants',
    statistics: 'Statistiques',
    newNote: 'Nouvelle note',
    // Ajoutez d'autres traductions françaises ici
  },
  pt: {
    notes: 'Notas',
    calendar: 'Calendário',
    chronometer: 'Cronómetro',
    interestedPeople: 'Pessoas interessadas',
    students: 'Estudantes',
    statistics: 'Estatísticas',
    newNote: 'Nova nota',
    // Ajoutez d'autres traductions portugaises ici
  },
  kea: {
    notes: 'Notas',
    calendar: 'Kalendariu',
    chronometer: 'Kronómetru',
    interestedPeople: 'Pessuas interesadas',
    students: 'Estudantis',
    statistics: 'Estatístikas',
    newNote: 'Nota nova',
    // Ajoutez d'autres traductions en créole capverdien ici
  }
};

export type Language = 'fr' | 'pt' | 'kea';
export const defaultLanguage: Language = 'fr';

export const getText = (key: string, language: Language = defaultLanguage): string => {
  // @ts-expect-error - La vérification de type est gérée manuellement
  return translations[language]?.[key] || key;
};
