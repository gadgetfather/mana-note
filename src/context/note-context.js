import react, { createContext, useContext, useState } from "react";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwNGU2MDc4ZC0yMzFhLTQ4ZWMtOGQxOC00MzFlNTM4YjAwOGYiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.j-V957JHq7BvOUWUg0FfkfZTbmaTHnlEb0DCyvYsDnA";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const addNote = async (noteText) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note: noteText },
        { headers: { authorization: token } }
      );

      const {
        data: { notes },
      } = response;
      setNotes(notes);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    const response = await axios.delete(`/api/notes/${id}`, {
      headers: { authorization: token },
    });
    const {
      data: { notes },
    } = response;
    setNotes(notes);
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
