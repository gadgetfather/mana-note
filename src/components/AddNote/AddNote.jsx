import axios from "axios";
import React, { useState } from "react";
import { useNote } from "../../context/note-context";
import "./AddNote.css";

export function AddNote(props) {
  const { setAddNoteEnabled } = props;
  const { notes, addNote, deleteNote } = useNote();
  const [value, setValue] = useState({
    title: "",
    text: "",
    date: "",
    notebg: "default-note-bg",
    label: "",
    priority: "",
  });
  const [showPicker, setShowPicker] = useState(false);
  const handlesubmit = (e, value) => {
    e.preventDefault();
    addNote(value);
    setValue({ title: "", text: "", date: "", color: "" });
    setAddNoteEnabled(false);
  };
  console.log(value);
  return (
    <form
      onSubmit={(e) => handlesubmit(e, value)}
      className={`note-container add-note ${value.notebg}`}
    >
      <div className="note-text-area">
        <textarea
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={value.title}
          className=" note-text note-title"
          placeholder="Note title"
        ></textarea>
        <textarea
          onChange={(e) => setValue({ ...value, text: e.target.value })}
          value={value.text}
          className="note-text text-area"
          placeholder="Note"
          required
        ></textarea>
      </div>
      <div className="label-container">
        <label htmlFor="note-label">Label:</label>
        <select
          onChange={(e) => setValue({ ...value, label: e.target.value })}
          className="select-menu"
          name="note-label"
          id="note-label"
        >
          <option value="">Label</option>
          <option value="work">work</option>
          <option value="home">home</option>
          <option value="hobby">hobby</option>
          <option value="sports">sports</option>
        </select>
        <label htmlFor="note-label">Priority:</label>
        <select
          onChange={(e) => setValue({ ...value, priority: e.target.value })}
          className="select-menu"
          name="note-label"
          id="note-label"
        >
          <option value="">Priority</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="note-footer">
        <div className="addnote-footer_actions">
          <span
            onClick={() => setAddNoteEnabled(false)}
            className="material-icons-outlined note-action-button"
          >
            delete
          </span>
          <span
            onClick={() => setShowPicker(!showPicker)}
            className={`picker`}
          ></span>
          <div className={`color-container ${showPicker ? "show" : ""}`}>
            <span
              onClick={() => setValue({ ...value, notebg: "red" })}
              className="colors red"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "green" })}
              className="colors green"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "blue" })}
              className="colors blue"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "yellow" })}
              className="colors yellow"
            ></span>
          </div>
        </div>

        <button className="btn-submit">
          <span className="material-icons-outlined btn-note-submit">done</span>
        </button>
      </div>
    </form>
  );
}
