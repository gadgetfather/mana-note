import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNote } from "./note-context";
const encodedToken = localStorage.getItem("Mananote.Token");
const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const [archivesArr, setArchivesArr] = useState([]);
  const { setNotes, notes } = useNote();
  const addToArchive = async (noteid, note) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${noteid}`,
        {
          note,
        },
        { headers: { authorization: encodedToken } }
      );
      const {
        data: { notes, archives },
      } = response;
      setNotes(notes);

      setArchivesArr(archives);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromArchive = async (noteid, note) => {
    try {
      const response = await axios.delete(`/api/archives/delete/${noteid}`, {
        headers: { authorization: encodedToken },
      });
      console.log("response ", response);
      const {
        data: { archives },
      } = response;
      setNotes([...notes, note]);
      setArchivesArr(archives);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ArchiveContext.Provider
      value={{ addToArchive, archivesArr, deleteFromArchive }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};
const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
