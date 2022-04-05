import { act } from "@testing-library/react";
import React, { useReducer, useState } from "react";
import { Note, OptionMenu, Sidebar } from "../../components";

import { useNote } from "../../context/note-context";
import "./LabelPage.css";

export function LabelPage() {
  const { notes } = useNote();
  const onlyLabelled = notes.filter((item) => item.label);
  const [label, setLabel] = useState();
  const labelReducer = (state, action) => {
    switch (action.type) {
      case "ALL":
        return {
          ...state,
          labelledArr: notes.filter((item) => item.label),
        };
      case "HOME":
        return {
          ...state,
          labelledArr: notes.filter((item) => item.label === "home"),
        };
      case "WORK":
        return {
          ...state,
          labelledArr: notes.filter((item) => item.label === "work"),
        };
      case "HOBBY":
        return {
          ...state,
          labelledArr: notes.filter((item) => item.label === "hobby"),
        };
      case "SPORTS":
        return {
          ...state,
          labelledArr: notes.filter((item) => item.label === "sports"),
        };

      default:
        break;
    }
  };
  const [labelFilter, labelFilterDispatch] = useReducer(labelReducer, {
    labelledArr: onlyLabelled,
  });
  const { labelledArr } = labelFilter;

  return (
    <main className="main-content_notes">
      <div className="content-container">
        <Sidebar />
        <div className="content-container-right">
          <h2 className="page-title">Label</h2>
          <div className="label-menu">
            <ul>
              <li
                onClick={() => {
                  setLabel("all");
                  labelFilterDispatch({ type: "ALL" });
                }}
                className={`tag label-tag ${label == "all" ? "active" : ""}`}
              >
                All
              </li>
              <li
                onClick={() => {
                  setLabel("home");
                  labelFilterDispatch({ type: "HOME" });
                }}
                className={`tag label-tag ${label == "home" ? "active" : ""}`}
              >
                Home
              </li>
              <li
                onClick={() => {
                  setLabel("work");

                  labelFilterDispatch({ type: "WORK" });
                }}
                className={`tag label-tag ${label == "work" ? "active" : ""} `}
              >
                Work
              </li>
              <li
                onClick={() => {
                  setLabel("sports");

                  labelFilterDispatch({ type: "SPORTS" });
                }}
                className={`tag label-tag ${label == "sports" ? "active" : ""}`}
              >
                Sports
              </li>
              <li
                onClick={() => {
                  setLabel("hobby");

                  labelFilterDispatch({ type: "HOBBY" });
                }}
                className={`tag label-tag ${label == "hobby" ? "active" : ""}`}
              >
                Hobby
              </li>
            </ul>
          </div>
          <div className="notes-list">
            {labelledArr.map((item) => (
              <Note key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <OptionMenu />
    </main>
  );
}
