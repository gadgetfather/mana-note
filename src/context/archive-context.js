import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNote } from "./note-context";
const encodedToken = localStorage.getItem("Mananote.Token");
const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const [archivesArr, setArchivesArr] = useState([]);
  const { setNotes } = useNote();

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
        data: { archives, notes },
      } = response;
      setNotes(notes);
      setArchivesArr(archives);
    } catch (error) {
      console.log(error);
    }
  };

  const restoreFromArchive = async (noteid) => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${noteid}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      const {
        data: { archives, notes },
      } = response;
      setNotes(notes);
      setArchivesArr(archives);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ArchiveContext.Provider
      value={{ addToArchive, archivesArr, restoreFromArchive }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};
const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
