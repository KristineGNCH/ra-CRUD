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

    <form onSubmit={onSubmit} className="add__note-form form">
      <div className="new-note__wrap">
     <h1 className="add-form__title">Новая заметка</h1>
      <textarea
        className="note__textarea"
        value={value}
        onChange={onChange}
        name="text"
        required
      />
</div>
    <button className="add-note-btn button"></button>
    </form>

  );
}

NotesAdd.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesAdd;
