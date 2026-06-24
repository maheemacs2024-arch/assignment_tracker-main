import React from 'react';
import { BookOpen, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function DashboardSummary({ assignments }) {
  const total = assignments.length;
  const submitted = assignments.filter(a => a.status === 'Submitted').length;
  const pending = assignments.filter(a => a.status === 'Pending').length;
  const late = assignments.filter(a => a.status === 'Late').length;

  return (
    <div className="summary-container">
      <div className="summary-card glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <BookOpen size={32} color="var(--accent-primary)" />
        <div className="summary-value">{total}</div>
        <div className="text-muted">Total Assignments</div>
      </div>
      <div className="summary-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <CheckCircle size={32} color="var(--status-submitted)" />
        <div className="summary-value" style={{ color: 'var(--status-submitted)' }}>{submitted}</div>
        <div className="text-muted">Submitted</div>
      </div>
      <div className="summary-card glass-panel animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Clock size={32} color="var(--status-pending)" />
        <div className="summary-value" style={{ color: 'var(--status-pending)' }}>{pending}</div>
        <div className="text-muted">Pending</div>
      </div>
      <div className="summary-card glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <AlertCircle size={32} color="var(--status-late)" />
        <div className="summary-value" style={{ color: 'var(--status-late)' }}>{late}</div>
        <div className="text-muted">Late</div>
      </div>
    </div>
  );
}
