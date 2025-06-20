import React from 'react';

type EventType = 'predication' | 'etude';

export interface CalendarEvent {
  id: string;
  date: Date;
  type: EventType;
  hours: number;
  notes: string;
}

interface EventModalProps {
  date: Date;
  onClose: () => void;
  onSave: (event: CalendarEvent) => void;
}

const EventModal: React.FC<EventModalProps> = ({ date, onClose, onSave }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSave({
      id: Date.now().toString(),
      date,
      type: formData.get('type') as EventType,
      hours: Number(formData.get('hours')),
      notes: formData.get('notes') as string
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Ajouter événement pour le {date.toLocaleDateString()}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="event-type" className="block text-sm font-medium mb-1">Type</label>
            <select id="event-type" name="type" className="w-full p-2 border rounded" required>
              <option value="predication">Prédication</option>
              <option value="etude">Étude</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="event-hours" className="block text-sm font-medium mb-1">Heures</label>
            <input 
              id="event-hours"
              type="number" 
              name="hours" 
              className="w-full p-2 border rounded"
              min="0.1"
              step="0.1"
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="event-notes" className="block text-sm font-medium mb-1">Notes</label>
            <textarea 
              id="event-notes"
              name="notes" 
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Annuler</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
