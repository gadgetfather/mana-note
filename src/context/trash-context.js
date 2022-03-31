import React, { createContext, useContext, useState } from "react";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashArr, setTrashArr] = useState([]);
  return (
    <TrashContext.Provider value={{ trashArr, setTrashArr }}>
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
