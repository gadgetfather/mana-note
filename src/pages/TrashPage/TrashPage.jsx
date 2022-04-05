import React from "react";
import { Note, OptionMenu, Sidebar, TrashNote } from "../../components";
import { useTrash } from "../../context/trash-context";
export function TrashPage() {
  const { trashArr, setTrashArr } = useTrash();

  return (
    <main className="main-content_notes">
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

      <OptionMenu />
    </main>
  );
}
