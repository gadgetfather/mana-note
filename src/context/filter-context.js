import React, { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, SortPriority: action.payload };
    case "HIGH_TO_LOW":
      return { ...state, SortPriority: action.payload };
    case "NEW_TO_OLD":
      return { ...state, SortTime: action.payload };
    case "OLD_TO_NEW":
      return { ...state, SortTime: action.payload };
    default:
      break;
  }
};
const FilterProvider = ({ children }) => {
  const [filter, filterDispatch] = useReducer(filterReducer, {
    SortTime: "",
    SortPriority: "",
  });
  return (
    <FilterContext.Provider value={{ filter, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
