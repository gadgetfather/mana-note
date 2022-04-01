import React, { useReducer, useState } from "react";
import "./NotesPage.css";
import { AddNote, Filter, Note, OptionMenu, Sidebar } from "../../components";
import { useNote } from "../../context/note-context";
import { useFilter } from "../../context/filter-context";
export function NotesPage() {
  const [filterOpen, setFilterOpen] = useState(false);
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
          required
        />
        <span className="material-icons sort-icon-desktop">filter_list</span>
      </div>
      <div className="searchbar-container-mobile">
        <input className="note-searchbar-mobile" type="text" />
        <span
          onClick={() => setFilterOpen(!filterOpen)}
          className="material-icons sort-icon"
        >
          category
        </span>
      </div>
      {filterOpen ? <Filter /> : ""}
      <div className="content-container">
        <Sidebar />
        <div className="content-container-right">
          <h2 className="page-title">All Notes</h2>
          {addNoteEnabled ? (
            <AddNote setAddNoteEnabled={setAddNoteEnabled} />
          ) : (
            ""
          )}
          <div className="notes-list">
            {notes.map((item) => (
              <Note key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleAddNote}
        className="btn btn-floating note-floating-btn"
      >
        <span className="material-icons-outlined">add</span>
      </button>
      <OptionMenu />
    </main>
  );
}
