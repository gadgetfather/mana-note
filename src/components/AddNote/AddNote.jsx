import axios from "axios";
import React, { useState } from "react";
import { useNote } from "../../context/note-context";
import "./AddNote.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwNGU2MDc4ZC0yMzFhLTQ4ZWMtOGQxOC00MzFlNTM4YjAwOGYiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.j-V957JHq7BvOUWUg0FfkfZTbmaTHnlEb0DCyvYsDnA";
export function AddNote(props) {
  const { setAddNoteEnabled } = props;
  const { notes, addNote, deleteNote } = useNote();
  const [value, setValue] = useState({
    title: "",
    text: "",
    date: "",
    notebg: "default-note-bg",
  });
  const [showPicker, setShowPicker] = useState(false);
  const handlesubmit = (e, value) => {
    e.preventDefault();
    addNote(value);
    setValue({ title: "", text: "", date: "", color: "" });
    setAddNoteEnabled(false);
  };

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
      <div className="note-footer">
        <div className="note-footer_left">
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
          <span
            onClick={() => setAddNoteEnabled(false)}
            className="material-icons-outlined note-action-button"
          >
            delete
          </span>
        </div>
        <button className="btn-submit">
          <span className="material-icons-outlined btn-note-submit">done</span>
        </button>
      </div>
    </form>
  );
}
