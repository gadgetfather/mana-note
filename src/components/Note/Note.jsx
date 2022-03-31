import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useArchive } from "../../context/archive-context";
import { useNote } from "../../context/note-context";
import "./Note.css";

export function Note(props) {
  const { text, title, date, _id, notebg } = props;
  const { deleteNote } = useNote();
  const { addToArchive, archivesArr, restoreFromArchive, deleteFromArchive } =
    useArchive();
  return (
    <div className={`note-container ${notebg} `}>
      <div className="note-text-area">
        <h1 className="note-title">{title}</h1>
        <ReactMarkdown className="note-text" children={text} />
      </div>
      <div className="note-footer">
        <div className="note-footer_left">
          <span>{date}</span>
          {archivesArr.some((note) => note._id === _id) ? (
            <span
              onClick={() => deleteFromArchive(_id)}
              className="material-icons-outlined note-action-button"
            >
              delete
            </span>
          ) : (
            <span
              onClick={() => deleteNote(_id)}
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
