import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNote } from "../../context/note-context";
import { useTrash } from "../../context/trash-context";

export function TrashNote(props) {
  const { text, title, date, _id, notebg, label, priority } = props;

  const { trashArr, setTrashArr } = useTrash();
  const { notes, setNotes, deleteNote } = useNote();

  const moveToNote = (id, note) => {
    setTrashArr(trashArr.filter((note) => note._id !== id));
    setNotes([...notes, note]);
  };
  const deleteForever = (id) => {
    setTrashArr(trashArr.filter((note) => note._id !== id));
  };
  const getPriorityBg = (priority) => {
    if (priority === "high") {
      return "high-priority";
    } else if (priority === "medium") {
      return "medium-priority";
    } else if (priority === "low") {
      return "low-priority";
    }
  };
  return (
    <div className={`note-container ${notebg} `}>
      <div className="note-text-area">
        <h1 className="note-title">{title}</h1>
        <ReactMarkdown className="note-text" children={text} />
      </div>
      <div className="tags-container">
        {label ? <span className="label-tag tag">{label}</span> : ""}
        <span className={`tag ${getPriorityBg(priority)}`}>{priority}</span>
      </div>
      <div className="note-footer">
        <div className="note-footer_left">
          <span>{date}</span>

          <span
            onClick={() => moveToNote(_id, props)}
            className="material-icons-outlined note-action-button"
          >
            restore
          </span>

          <span
            onClick={() => {
              deleteNote(_id);
              deleteForever(_id);
            }}
            className="material-icons-outlined note-action-button"
          >
            delete_forever
          </span>
        </div>
      </div>
    </div>
  );
}
