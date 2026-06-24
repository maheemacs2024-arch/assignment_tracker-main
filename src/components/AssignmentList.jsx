import React from 'react';
import AssignmentCard from './AssignmentCard';
import FilterBar from './FilterBar';
import { Inbox } from 'lucide-react';

export default function AssignmentList({ 
  assignments, 
  onUpdateStatus, 
  subjects, 
  currentFilter, 
  onFilterChange 
}) {
  const filteredAssignments = currentFilter === 'All' 
    ? assignments 
    : assignments.filter(a => a.subject === currentFilter);

  return (
    <div className="glass-panel animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="list-header">
        <h2>Your Assignments</h2>
        <FilterBar 
          subjects={subjects} 
          currentFilter={currentFilter} 
          onFilterChange={onFilterChange} 
        />
      </div>
      
      <div className="assignment-list">
        {filteredAssignments.length === 0 ? (
          <div className="empty-state">
            <Inbox size={48} />
            <p>No assignments found. You're all caught up!</p>
          </div>
        ) : (
          filteredAssignments.map(assignment => (
            <AssignmentCard 
              key={assignment.id} 
              assignment={assignment} 
              onUpdateStatus={onUpdateStatus} 
            />
          ))
        )}
      </div>
    </div>
  );
}
