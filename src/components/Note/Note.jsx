import React, { useState } from "react";
import { useNote } from "../../context/note-context";
import "./Note.css";

export function Note(props) {
  const { text, title, date, _id } = props;
  const { deleteNote } = useNote();
  const [temp, setTemp] = useState(false);
  return (
    <div className="note-container">
      <div className="note-text-area">
        <h1 className="note-title">{title}</h1>
        <p className="note-text">{text}</p>
      </div>
      <div className="note-footer">
        <div className="note-footer_left">
          <span>{date}</span>
          <span
            onClick={() => deleteNote(_id)}
            className="material-icons-outlined note-action-button"
          >
            delete
          </span>
          <span className="material-icons-outlined note-action-button">
            archive
          </span>
          <span className="material-icons-outlined note-action-button">
            edit
          </span>
        </div>
      </div>
    </div>
  );
}
