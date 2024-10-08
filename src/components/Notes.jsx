/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import Note from "./Note";
import "./Style.css"

function Notes({ notes, onDelete }) {
  return (
    <ul className="notes">
      {notes.map((note) => (
        <li className="note__wrap">
          <Note note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Notes;
