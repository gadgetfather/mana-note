import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/note-context";
import { AuthProvider } from "./context/auth-context";
import { ArchiveProvider } from "./context/archive-context";
import { TrashProvider } from "./context/trash-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <NoteProvider>
            <TrashProvider>
              <ArchiveProvider>
                <App />
              </ArchiveProvider>
            </TrashProvider>
          </NoteProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
