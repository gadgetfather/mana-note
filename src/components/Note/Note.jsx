import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useArchive } from "../../context/archive-context";
import { useNote } from "../../context/note-context";
import { useTrash } from "../../context/trash-context";
import "./Note.css";

export function Note(props) {
  const { text, title, time, _id, notebg, date, label, priority } = props;
  const { deleteNote } = useNote();
  const { trashArr, setTrashArr } = useTrash();
  const { addToArchive, archivesArr, restoreFromArchive, deleteFromArchive } =
    useArchive();
  const { notes, setNotes } = useNote();

  const moveToTrash = (id, props) => {
    setTrashArr([props]);
    setNotes(notes.filter((note) => note._id !== id));
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
          {/* <span>{date}</span> */}
          <span>{time}</span>
          {archivesArr.some((note) => note._id === _id) ? (
            <span
              onClick={() => deleteFromArchive(_id)}
              className="material-icons-outlined note-action-button"
            >
              delete
            </span>
          ) : (
            <span
              onClick={() => moveToTrash(_id, props)}
              className="material-icons-outlined note-action-button"
            >
              delete
            </span>
          )}

          {archivesArr.some((note) => note._id === _id) ? (
            <span
              onClick={() => restoreFromArchive(_id)}
              className="material-icons note-action-button"
            >
              unarchive
            </span>
          ) : (
            <span
              onClick={() => addToArchive(_id, props)}
              className="material-icons-outlined note-action-button"
            >
              archive
            </span>
          )}
          <span className="material-icons-outlined note-action-button">
            edit
          </span>
        </div>
      </div>
    </div>
  );
}
