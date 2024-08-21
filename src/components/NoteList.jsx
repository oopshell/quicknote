import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <NoteItem key={index} note={note} onDelete={() => onDelete(index)} />
        ))
      ) : (
        <p>No notes available. Start by adding one!</p>
      )}
    </div>
  );
};

export default NoteList;
