import React, { useState, useEffect } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes array changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>QuickNote</h1>
      <NoteEditor onSave={handleSaveNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
