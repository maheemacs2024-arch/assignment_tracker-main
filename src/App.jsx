import React, { useState, useEffect } from 'react';
import DashboardSummary from './components/DashboardSummary';
import AddAssignmentForm from './components/AddAssignmentForm';
import AssignmentList from './components/AssignmentList';
import './index.css';

function App() {
  // Try to load from localStorage first
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem('assignments');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: '1', title: 'Calculus Assignment 1', subject: 'Math', dueDate: '2026-06-30', status: 'Pending' },
      { id: '2', title: 'Data Structures Lab', subject: 'Computer Science', dueDate: '2026-06-20', status: 'Late' },
      { id: '3', title: 'World History Essay', subject: 'History', dueDate: '2026-06-15', status: 'Submitted' },
    ];
  });

  const [filterSubject, setFilterSubject] = useState('All');

  // Save to localStorage whenever assignments change
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  // Derive unique subjects for the filter
  const subjects = [...new Set(assignments.map(a => a.subject))];

  const handleAddAssignment = (newAssignment) => {
    setAssignments([...assignments, newAssignment]);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setAssignments(assignments.map(a => 
      a.id === id ? { ...a, status: newStatus } : a
    ));
  };

  return (
    <div className="app-container">
      <header className="header animate-fade-in">
        <h1>College Dashboard</h1>
        <p className="text-muted">Track and manage your assignment submissions</p>
      </header>

      <DashboardSummary assignments={assignments} />

      <main className="dashboard-grid">
        <aside>
          <AddAssignmentForm onAdd={handleAddAssignment} />
        </aside>
        <section>
          <AssignmentList 
            assignments={assignments}
            onUpdateStatus={handleUpdateStatus}
            subjects={subjects}
            currentFilter={filterSubject}
            onFilterChange={setFilterSubject}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
