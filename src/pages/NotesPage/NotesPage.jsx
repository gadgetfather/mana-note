import React, { useState } from "react";
import "./NotesPage.css";
import { AddNote, Note } from "../../components";
import { useNote } from "../../context/note-context";
export function NotesPage() {
  const { notes } = useNote();

  const [addNoteEnabled, setAddNoteEnabled] = useState(false);
  const handleAddNote = () => {
    setAddNoteEnabled(true);
  };
  return (
    <main className="main-content_notes">
      <div className="searchbar-container-desktop">
        <input
          placeholder="Search for a note..."
          className="note-searchbar-desktop"
          type="text"
        />
        <span class="material-icons sort-icon-desktop">filter_list</span>
      </div>
      <div className="searchbar-container-mobile">
        <input className="note-searchbar-mobile" type="text" />
        <span class="material-icons sort-icon">category</span>
      </div>
      {addNoteEnabled ? <AddNote setAddNoteEnabled={setAddNoteEnabled} /> : ""}
      <div className="notes-list">
        {notes.map((item) => (
          <Note key={item._id} {...item} />
        ))}
      </div>

      <button
        onClick={handleAddNote}
        className="btn btn-floating note-floating-btn"
      >
        <span className="material-icons-outlined">add</span>
      </button>
    </main>
  );
}
