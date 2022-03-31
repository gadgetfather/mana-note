import React from "react";
import { Note, OptionMenu, Sidebar } from "../../components";
import { useArchive } from "../../context/archive-context";

export function ArchivePage() {
  const { archivesArr } = useArchive();
  return (
    <main className="main-content_notes">
      <div className="searchbar-container-desktop">
        <input
          placeholder="Search for a note..."
          className="note-searchbar-desktop"
          type="text"
        />
        <span className="material-icons sort-icon-desktop">filter_list</span>
      </div>
      <div className="searchbar-container-mobile">
        <input className="note-searchbar-mobile" type="text" />
        <span className="material-icons sort-icon">category</span>
      </div>
      <div className="content-container">
        <Sidebar />
        <div className="content-container-right">
          <h2 className="page-title">Archive</h2>
          <div className="notes-list">
            {archivesArr.map((item) => (
              <Note key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <button
        // onClick={handleAddNote}
        className="btn btn-floating note-floating-btn"
      >
        <span className="material-icons-outlined">add</span>
      </button>
      <OptionMenu />
    </main>
  );
}
