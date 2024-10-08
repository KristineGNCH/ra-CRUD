import { useState } from "react";
import PropTypes from "prop-types";
import "./Style.css"

function NotesAdd({ addNotes }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    addNotes(value);
    setValue("");
  };

  return (
    <div className="add__note">
    <form onSubmit={onSubmit} className="add__note-form form">
     
      <textarea
        className="note__textarea"
        value={value}
        onChange={onChange}
        name="text"
        required
      />
    </form>
    <button className="add-note-btn button"></button>

    </div>
  );
}

NotesAdd.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesAdd;
