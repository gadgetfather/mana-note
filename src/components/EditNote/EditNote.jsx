import React, { useState } from "react";
import { useNote } from "../../context/note-context";

export function EditNote(props) {
  const { text, title, time, _id, notebg, label, priority, setEditNoteEnable } =
    props;
  const [value, setValue] = useState({
    title: title,
    text: text,
    date: time,
    notebg: notebg,
    label: label,
    priority: priority,
  });
  const [showPicker, setShowPicker] = useState(false);
  const { editNote } = useNote();

  const handlesubmit = (e, id, noteText) => {
    e.preventDefault();
    editNote(id, noteText);
    setEditNoteEnable(false);
  };

  return (
    <form
      onSubmit={(e) => handlesubmit(e, _id, value)}
      className={`note-container add-note ${value.notebg}`}
    >
      <div className="note-text-area">
        <textarea
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={value.title}
          className=" note-text note-title"
          placeholder="Note title"
        ></textarea>
        <textarea
          onChange={(e) => setValue({ ...value, text: e.target.value })}
          value={value.text}
          className="note-text text-area"
          placeholder="Note"
          required
        ></textarea>
      </div>
      <div className="label-container">
        <label htmlFor="note-label">Label:</label>
        <select
          value={value.label}
          onChange={(e) => setValue({ ...value, label: e.target.value })}
          className="select-menu"
          name="note-label"
          id="note-label"
        >
          <option value="">Label</option>
          <option value="work">work</option>
          <option value="home">home</option>
          <option value="hobby">hobby</option>
          <option value="sports">sports</option>
        </select>
        <label htmlFor="note-label">Priority:</label>
        <select
          value={value.priority}
          onChange={(e) => setValue({ ...value, priority: e.target.value })}
          className="select-menu"
          name="note-label"
          id="note-label"
        >
          <option value="">Priority</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="note-footer">
        <div className="note-footer_left">
          <span
            onClick={() => setShowPicker(!showPicker)}
            className={`picker`}
          ></span>
          <div className={`color-container ${showPicker ? "show" : ""}`}>
            <span
              onClick={() => setValue({ ...value, notebg: "red" })}
              className="colors red"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "green" })}
              className="colors green"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "blue" })}
              className="colors blue"
            ></span>
            <span
              onClick={() => setValue({ ...value, notebg: "yellow" })}
              className="colors yellow"
            ></span>
          </div>
        </div>

        <button className="btn-submit">
          <span className="material-icons-outlined btn-note-submit">done</span>
        </button>
      </div>
    </form>
  );
}
