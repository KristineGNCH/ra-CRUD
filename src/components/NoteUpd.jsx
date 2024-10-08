import PropTypes from "prop-types";

function NotesUpd({ onUpdate }) {
  return (
    <div className="update__container">
      <h1 className="title">Заметки</h1>
      <button className="upd__button button" onClick={onUpdate}>
        
      </button>
    </div>
  );
}

NotesUpd.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default NotesUpd;
