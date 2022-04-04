import React, { useReducer, useState } from "react";
import "./NotesPage.css";
import {
  AddNote,
  DesktopFilter,
  EditNote,
  Filter,
  Note,
  OptionMenu,
  Sidebar,
} from "../../components";
import { useNote } from "../../context/note-context";
import { useFilter } from "../../context/filter-context";
const priorites = { low: 0, medium: 1, high: 2 };
export function NotesPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [desktopfilterOpen, setDesktopFilterOpen] = useState(false);
  const { notes } = useNote();
  const [addNoteEnabled, setAddNoteEnabled] = useState(false);
  const [editNoteEnable, setEditNoteEnable] = useState(false);
  const {
    filter: { SortPriority, SortTime },
  } = useFilter();
  const [userData, setUserData] = useState({});
  const sortedArr = (data, SortPriority, prioritesArr) => {
    if (SortPriority === "LOW_TO_HIGH") {
      return data.sort(
        (a, b) => prioritesArr[a.priority] - prioritesArr[b.priority]
      );
    }
    if (SortPriority === "HIGH_TO_LOW") {
      return data.sort(
        (a, b) => prioritesArr[b.priority] - prioritesArr[a.priority]
      );
    }
    return data;
  };
  const sortedByTime = (data, SortTime) => {
    const tempData = [...data];
    if (SortTime === "NEW_TO_OLD") {
      return tempData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }
    if (SortTime === "OLD_TO_NEW") {
      return tempData.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }
    return tempData;
  };

  const getSortedDataTime = sortedByTime(notes, SortTime);
  const getSortedData = sortedArr(getSortedDataTime, SortPriority, priorites);
  return (
    <main className="main-content_notes">
      <div className="searchbar-container-desktop">
        <input
          placeholder="Search for a note..."
          className="note-searchbar-desktop"
          type="text"
          required
        />
        <span
          onClick={() => setDesktopFilterOpen(!desktopfilterOpen)}
          className="material-icons sort-icon-desktop"
        >
          filter_list
        </span>
      </div>
      {desktopfilterOpen ? <DesktopFilter /> : ""}
      <div className="searchbar-container-mobile">
        <input
          placeholder="Search for a note..."
          className="note-searchbar-mobile"
          type="text"
        />
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
          {editNoteEnable ? (
            <EditNote setEditNoteEnable={setEditNoteEnable} {...userData} />
          ) : (
            ""
          )}
          {addNoteEnabled ? (
            <AddNote setAddNoteEnabled={setAddNoteEnabled} />
          ) : (
            ""
          )}
          <div className="notes-list">
            {getSortedData.map((item) => (
              <Note
                userData={userData}
                setUserData={setUserData}
                setEditNoteEnable={setEditNoteEnable}
                setAddNoteEnabled={setAddNoteEnabled}
                key={item._id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setAddNoteEnabled(true);
          setEditNoteEnable(false);
        }}
        className="btn btn-floating note-floating-btn"
      >
        <span className="material-icons-outlined">add</span>
      </button>
      <OptionMenu />
    </main>
  );
}
