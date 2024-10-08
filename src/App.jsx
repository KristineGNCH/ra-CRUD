import { useEffect, useState } from 'react';
import NotesUpd from './components/NoteUpd';
import NotesList from './components/Notes';
import NotesAdd from './components/NoteAdd';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        onUpdate();
    };
    fetchData();
  }, []);

  const onUpdate = async () => {
    const request = await fetch('http://localhost:7070/notes/', {
      method: 'GET'
    });
    const response = await request.json();
    setNotes([...response])
  }

  const addNotes = async (content) => {
    await fetch(`http://localhost:7070/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    onUpdate();
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE'
    });
    onUpdate();
  }

  return (
    <>
      <NotesUpd onUpdate={onUpdate} />
      <NotesList notes={notes} onDelete={onDelete} />
      <NotesAdd addNotes={addNotes} />
    </>
  );
}

export default App