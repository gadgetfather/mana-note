import React from "react";
import { Note, OptionMenu, Sidebar } from "../../components";
import { useArchive } from "../../context/archive-context";

export function ArchivePage() {
  const { archivesArr } = useArchive();
  return (
    <main className="main-content_notes">
      <div className="content-container">
        <Sidebar />
        <div className="content-container-right">
          <h2 className="page-title">Archive</h2>
          {archivesArr.length > 0 ? (
            ""
          ) : (
            <h3 className="page-title">Nothing in archive...</h3>
          )}
          <div className="notes-list">
            {archivesArr.map((item) => (
              <Note key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <OptionMenu />
    </main>
  );
}
