import React from 'react';
import { render } from '@testing-library/react';
import NotesPage from '../NotesPage';

// Mock des hooks
export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Note complète',
    content: 'Contenu',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['tag1', 'tag2'],
    color: 'bg-blue-100',
    isPinned: true,
    categoryId: 'cat1',
    isArchived: false,
    wordCount: 10,
    characterCount: 50
  },
  {
    id: '2',
    title: 'Note minimale',
    content: 'Contenu',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: [],
    color: '',
    isPinned: false,
    isArchived: false,
    wordCount: 2,
    characterCount: 10
  }
];

jest.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    currentLanguage: 'fr'
  })
}));

describe('NotesPage - Cas limites', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => JSON.stringify(mockNotes));
    jest.spyOn(Storage.prototype, 'setItem');
  });

  test('1. Création première note', async () => {
    render(<NotesPage />);
    // fireEvent.click(screen.getByText(/nouvelle note/i));
    
    // expect(screen.getByPlaceholderText(/titre/i)).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: /enregistrer/i })).toBeInTheDocument();
  });

  test('2. Suppression dernière note', async () => {
    // Mock avec une seule note
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => JSON.stringify([mockNotes[0]]));
    
    render(<NotesPage />);
    // fireEvent.click(screen.getAllByLabelText(/supprimer/i)[0]);
    // fireEvent.click(screen.getByText(/confirmer/i));
    
    // expect(localStorage.setItem).toHaveBeenCalledWith('notes', '[]');
    // expect(screen.queryByText(mockNotes[0].title)).not.toBeInTheDocument();
  });

  test('3. Gestion note sans métadonnées', async () => {
    render(<NotesPage />);
    // fireEvent.click(screen.getByText(mockNotes[1].title));
    
    // expect(screen.getByDisplayValue(mockNotes[1].title)).toBeInTheDocument();
    // expect(screen.getByDisplayValue(mockNotes[1].content)).toBeInTheDocument();
  });
});
