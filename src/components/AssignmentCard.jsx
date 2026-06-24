import React from 'react';
import { Book, Calendar } from 'lucide-react';

export default function AssignmentCard({ assignment, onUpdateStatus }) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Submitted': return 'status-submitted';
      case 'Pending': return 'status-pending';
      case 'Late': return 'status-late';
      default: return '';
    }
  };

  return (
    <div className="assignment-card">
      <div className="assignment-info">
        <div className="assignment-title">{assignment.title}</div>
        <div className="assignment-meta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Book size={14} /> {assignment.subject}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Calendar size={14} /> {new Date(assignment.dueDate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="assignment-actions">
        <span className={`status-badge ${getStatusClass(assignment.status)}`}>
          {assignment.status}
        </span>
        <select
          className="status-select"
          value={assignment.status}
          onChange={(e) => onUpdateStatus(assignment.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Submitted">Submitted</option>
          <option value="Late">Late</option>
        </select>
      </div>
    </div>
  );
}
