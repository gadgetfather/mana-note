import axios from "axios";
import React, { useState } from "react";
import { useNote } from "../../context/note-context";
import "./AddNote.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwNGU2MDc4ZC0yMzFhLTQ4ZWMtOGQxOC00MzFlNTM4YjAwOGYiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.j-V957JHq7BvOUWUg0FfkfZTbmaTHnlEb0DCyvYsDnA";
export function AddNote(props) {
  const { setAddNoteEnabled } = props;
  const { notes, addNote, deleteNote } = useNote();
  const [value, setValue] = useState({ title: "", text: "", date: "" });
  const handlesubmit = (e, value) => {
    e.preventDefault();
    addNote(value);
    setValue({ title: "", text: "", date: "" });
    setAddNoteEnabled(false);
  };
  console.log(value);
  return (
    <form
      onSubmit={(e) => handlesubmit(e, value)}
      className="note-container add-note"
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
          <span>
            <input
              onChange={(e) => setValue({ ...value, date: e.target.value })}
              type="date"
              name="date"
              id="date"
            />
          </span>
          <span
            onClick={() => setAddNoteEnabled(false)}
            className="material-icons-outlined note-action-button"
          >
            delete
          </span>
        </div>
        <button className="btn-submit">
          <span
            // onClick={() => }
            className="material-icons-outlined btn-note-submit"
          >
            done
          </span>
        </button>
      </div>
    </form>
  );
}
