import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
export function Sidebar() {
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <aside className="sidebar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "link sidebar-item sidebar-active" : "link sidebar-item "
        }
        to="/notes"
      >
        <span className="material-icons-outlined">notes</span>
        <span>Notes</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link sidebar-item sidebar-active" : "link sidebar-item "
        }
        to="/label"
      >
        <span className="material-icons-outlined">label</span>
        <span>Label</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link sidebar-item sidebar-active" : "link sidebar-item "
        }
        to="/trash"
      >
        <span className="material-icons-outlined">delete</span>
        <span>Trash</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link sidebar-item sidebar-active" : "link sidebar-item "
        }
        to="/archived"
      >
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <div
        className={`info-container  ${showInfo ? "info-container-show" : ""} `}
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
        className="info-icon icons"
      >
        <span class="material-icons-outlined">info</span>
      </div>
    </aside>
  );
}
