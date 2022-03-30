import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
export function Sidebar() {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <Link
        className={
          location.pathname == "/notes"
            ? "link sidebar-item sidebar-active"
            : "link sidebar-item "
        }
        to="/notes"
      >
        <span className="material-icons-outlined">notes</span>
        <span>Notes</span>
      </Link>
      <Link className="link sidebar-item" to="/label">
        <span className="material-icons-outlined">label</span>
        <span>Label</span>
      </Link>
      <Link className="link sidebar-item" to="/trash">
        <span className="material-icons-outlined">delete</span>
        <span>Trash</span>
      </Link>
      <Link
        className={
          location.pathname == "/archived"
            ? "link sidebar-item sidebar-active"
            : "link sidebar-item "
        }
        to="/archived"
      >
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </Link>
    </aside>
  );
}
