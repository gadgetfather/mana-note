import react, { createContext, useContext, useState } from "react";
import axios from "axios";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  let token;
  const [notes, setNotes] = useState([]);
  const addNote = async (noteText) => {
    token = localStorage.getItem("Mananote.Token");
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
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    token = localStorage.getItem("Mananote.Token");
    const response = await axios.delete(`/api/notes/${id}`, {
      headers: { authorization: token },
    });
  };

  const editNote = async (id, noteText) => {
    token = localStorage.getItem("Mananote.Token");

    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        { note: noteText },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        const {
          data: { notes },
        } = response;
        setNotes(notes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
