import React from "react";
import { useFilter } from "../../context/filter-context";

import "./DesktopFilter.css";
export function DesktopFilter() {
  const {
    filterDispatch,
    filter: { SortPriority, SortTime },
  } = useFilter();
  return (
    <div className="desktop-filter">
      <div className="filter-title-container">
        <h1>Sort</h1>
        <button className="btn btn-secondary btn-clear">clear all</button>
      </div>

      <h2>By Time:</h2>
      <div className="sort-container">
        <span>
          <input
            checked={SortTime && SortTime === "NEW_TO_OLD"}
            onChange={() =>
              filterDispatch({ type: "NEW_TO_OLD", payload: "NEW_TO_OLD" })
            }
            name="byTime"
            id="newToOld"
            type="radio"
          />
          <label htmlFor="newToOld">New to old</label>
        </span>
        <span>
          <input
            checked={SortTime && SortTime === "OLD_TO_NEW"}
            onChange={() =>
              filterDispatch({ type: "OLD_TO_NEW", payload: "OLD_TO_NEW" })
            }
            name="byTime"
            id="oldToNew"
            type="radio"
          />
          <label htmlFor="oldToNew">Old to New</label>
        </span>
      </div>
      <h2>By priority:</h2>
      <div className="sort-container">
        <span>
          <input
            checked={SortPriority && SortPriority === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
            }
            name="byPriority"
            id="highToLow"
            type="radio"
          />
          <label htmlFor="highToLow">High to low</label>
        </span>
        <span>
          <input
            checked={SortPriority && SortPriority == "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
            }
            name="byPriority"
            id="lowToHigh"
            type="radio"
          />
          <label htmlFor="lowToHigh">Low to High</label>
        </span>
      </div>
    </div>
  );
}
