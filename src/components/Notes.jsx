import { useEffect, useState } from "react";

export const Notes = () => {
  const [notesData, setnotesData] = useState([]);
  const [newNote, setnewNote] = useState("");

  const getNotes = () => {
    fetch("http://localhost:7070/notes")
      .then((res) => res.json())
      .then((data) => setnotesData(data));
  };

  const addNote = () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ id: notesData.length, content: newNote }),
    };
    fetch("http://localhost:7070/notes", options).then(() => {
      getNotes(), setnewNote("");
    });
  };

  const deleteNote = (id) => {
    fetch(`http://localhost:7070/notes/${id}`, { method: "DELETE" }).then(
      () => {
        getNotes();
      }
    );
  };

  useEffect(() => {
    getNotes();
  }, []);

  const renderNotes = notesData.map((note) => {
    return (
      <div key={note.id}>
        <textarea value={note.content} readOnly></textarea>
        <button type="button" onClick={() => deleteNote(note.id)}>
          Удалить
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="update">
        <h3>Notes</h3>
        <button type="button" onClick={getNotes}>
          Обновить
        </button>
      </div>
      <div className="notes__wrapper">{renderNotes}</div>
      <div className="add__note">
        <textarea
          placeholder="Введите текст"
          value={newNote}
          onChange={(e) => setnewNote(e.target.value)}
        ></textarea>
        <button type="button" onClick={addNote} disabled={newNote == ""}>
          Добавить
        </button>
      </div>
    </div>
  );
};
