import React, { useState } from 'react';
import { marked } from 'marked';

const NoteEditor = ({ onSave }) => {
  const [note, setNote] = useState('');

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    onSave(note);
    setNote(''); // Clear the editor after saving
  };

  return (
    <div className="note-editor">
      <textarea
        value={note}
        onChange={handleInputChange}
        placeholder="Write your note in Markdown..."
      />
      <button onClick={handleSave}>Save Note</button>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(note) }}
      />
    </div>
  );
};

export default NoteEditor;
