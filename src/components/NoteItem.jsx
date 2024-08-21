import React from 'react';
import { marked } from 'marked';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <div
        className="note-content"
        dangerouslySetInnerHTML={{ __html: marked(note) }}
      />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;
