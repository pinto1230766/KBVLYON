import React from 'react'

export default function Calendar({ month, year }: { month: number; year: number }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  
  return (
    <div>
      <h2>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <button>></button>
      <div data-testid="calendar-grid">
        {Array.from({ length: daysInMonth }).map((_, i) => (
          <div key={i} data-testid="calendar-day" className={i + 1 === new Date().getDate() ? 'today' : ''}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
