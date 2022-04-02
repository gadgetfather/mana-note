import React, { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRIORITY":
      return { ...state, SortPriority: action.payload };
    case "SORT_BY_TIME":
      return { ...state, SortTime: action.payload };

    case "RESET":
      return { SortTime: "", SortPriority: "" };
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
