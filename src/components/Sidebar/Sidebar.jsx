import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
export function Sidebar() {
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false);
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
      <div
        className={`info-container ${showInfo ? "info-container-show" : ""} `}
      >
        <ul>
          <li>
            For Bold use <code>**word**</code>
          </li>
          <li>
            For Italic use <code>*word*</code>
          </li>
          <li>
            For bullet points use <code>- word</code>
          </li>
          <li>
            For different headings use <code> #</code> for h1, <code>##</code>
            for h2 and <code>###</code>
            for h3
          </li>
          <li>
            For more you can visit this
            <a
              className="link"
              href="https://www.markdownguide.org/basic-syntax"
            >
              {" "}
              Here
            </a>
          </li>
        </ul>
      </div>
      <div
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="info-icon"
      >
        <span class="material-icons-outlined">info</span>
      </div>
    </aside>
  );
}
