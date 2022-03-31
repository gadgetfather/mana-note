import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/note-context";
import { AuthProvider } from "./context/auth-context";
import { ArchiveProvider } from "./context/archive-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <ArchiveProvider>
            <App />
          </ArchiveProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
