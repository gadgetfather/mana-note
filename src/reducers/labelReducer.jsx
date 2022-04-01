import { useNote } from "../context/note-context";
export const labelReducer = (state, action) => {
  const { notes } = useNote();
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        labelledArr: notes.filter((item) => item.label),
      };
    case "HOME":
      return {
        ...state,
        labelledArr: notes.filter((item) => item.label === "home"),
      };
    case "WORK":
      return {
        ...state,
        labelledArr: notes.filter((item) => item.label === "work"),
      };
    case "HOBBY":
      return {
        ...state,
        labelledArr: notes.filter((item) => item.label === "hobby"),
      };
    case "SPORTS":
      return {
        ...state,
        labelledArr: notes.filter((item) => item.label === "sports"),
      };

    default:
      break;
  }
};
