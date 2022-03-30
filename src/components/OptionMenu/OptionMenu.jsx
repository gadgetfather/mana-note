import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./OptionMenu.css";
export function OptionMenu() {
  const location = useLocation();

  return (
    <div className="option-menu">
      <Link to={"/notes"}>
        <span
          className={
            location.pathname == "/notes"
              ? "material-icons-outlined icon link active"
              : "material-icons-outlined link "
          }
        >
          notes
        </span>
      </Link>
      <span
        className={
          location.pathname == "/trash"
            ? "material-icons-outlined icon active"
            : "material-icons-outlined icon "
        }
      >
        delete
      </span>

      <Link className="link" to={"/archived"}>
        <span
          className={
            location.pathname == "/archived"
              ? "material-icons-outlined icon link active"
              : "material-icons-outlined icon "
          }
        >
          archive
        </span>
      </Link>

      <span
        className={
          location.pathname == "/label"
            ? "material-icons-outlined icon active"
            : "material-icons-outlined  icon"
        }
      >
        label
      </span>
    </div>
  );
}