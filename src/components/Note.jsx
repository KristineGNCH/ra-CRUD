import PropTypes from "prop-types";
import "./Style.css";

function Note({ note, onDelete }) {
  return (
    <>
    <div className="note">
      {note.content}
    </div>
    <button
    onClick={() => onDelete(note.id)}
    className="delete__note button"
  ></button>
  </>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
