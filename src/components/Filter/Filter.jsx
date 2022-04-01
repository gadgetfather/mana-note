import React from "react";
import { useFilter } from "../../context/filter-context";
import "./Filter.css";
export function Filter() {
  const { sort, sortDispatch } = useFilter();
  return (
    <div className="filter-container">
      <div className="filter-title-container">
        <h1>Sort</h1>
        <button className="btn btn-secondary btn-clear">clear all</button>
      </div>

      <h2>By Time:</h2>
      <div className="sort-container">
        <span>
          <input name="byTime" id="newToOld" type="radio" />
          <label htmlFor="newToOld">New to old</label>
        </span>
        <span>
          <input name="byTime" id="oldToNew" type="radio" />
          <label htmlFor="oldToNew">Old to New</label>
        </span>
      </div>
      <h2>By priority:</h2>
      <div className="sort-container">
        <span>
          <input name="byPriority" id="highToLow" type="radio" />
          <label htmlFor="highToLow">High to low</label>
        </span>
        <span>
          <input name="byPriority" id="lowToHigh" type="radio" />
          <label htmlFor="lowToHigh">Low to High</label>
        </span>
      </div>
    </div>
  );
}
