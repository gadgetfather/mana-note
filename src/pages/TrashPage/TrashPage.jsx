import React from "react";
import { Note, OptionMenu, Sidebar, TrashNote } from "../../components";
import { useTrash } from "../../context/trash-context";
import "./TrashPage.css";
export function TrashPage() {
  const { trashArr, setTrashArr } = useTrash();

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
        <span className="material-icons sort-icon">category</span>
      </div>
      <div className="content-container">
        <Sidebar />
        <div className="content-container-right">
          <h2 className="page-title">Trash</h2>

          <div className="notes-list">
            {trashArr.map((item) => (
              <TrashNote key={item._id} {...item} />
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
