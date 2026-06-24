import React from 'react';
import { Filter } from 'lucide-react';

export default function FilterBar({ subjects, currentFilter, onFilterChange }) {
  return (
    <div className="filter-container">
      <Filter size={20} className="text-muted" />
      <select 
        className="form-select" 
        style={{ width: 'auto', padding: '0.5rem 1rem' }}
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All Subjects</option>
        {subjects.map(sub => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
    </div>
  );
}
