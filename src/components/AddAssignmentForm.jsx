import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function AddAssignmentForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !subject || !dueDate) return;

    onAdd({
      id: Date.now().toString(),
      title,
      subject,
      dueDate,
      status: 'Pending',
    });

    setTitle('');
    setSubject('');
    setDueDate('');
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h2 style={{ marginBottom: '1rem' }}>Add New Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Assignment Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Physics Lab Report"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Physics 101"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
          <PlusCircle size={20} />
          Add Assignment
        </button>
      </form>
    </div>
  );
}
