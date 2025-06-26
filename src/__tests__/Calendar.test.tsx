import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Calendar from './../components/Calendar'

describe('Calendrier', () => {
  it('Affiche les jours du mois', () => {
    render(<Calendar month={1} year={2023} />)
    const days = screen.getAllByTestId('calendar-day')
    expect(days.length).toBe(31)
  })

  it('Met en évidence le jour actuel', () => {
    const today = new Date().getDate()
    render(<Calendar month={new Date().getMonth()} year={new Date().getFullYear()} />)
    expect(screen.getByText(today)).toHaveClass('today')
  })

  it('Change de mois correctement', async () => {
    render(<Calendar month={1} year={2023} />)
    fireEvent.click(screen.getByText('>'))
    
    expect(screen.getByText('Février 2023')).toBeInTheDocument();
    const days = screen.getAllByTestId('calendar-day');
    expect(days.length).toBe(28);
  });

  it('Ajoute un événement au calendrier', () => {
    render(<Calendar month={1} year={2023} />);
    fireEvent.click(screen.getAllByTestId('calendar-day')[0]);
    fireEvent.change(screen.getByPlaceholderText('Nom événement'), { 
      target: { value: 'Réunion' } 
    });
    fireEvent.click(screen.getByText('Valider'));
    
    expect(screen.getByText('Réunion')).toBeInTheDocument();
  });
})
