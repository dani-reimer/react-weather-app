import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-city">
      <input
        type="text"
        className="form-control"
        placeholder="Enter City"
        aria-label="Enter city"
        id="search-text-input"
      />
      <div className="btn-group">
        <button
          type="submit"
          className="btn btn-primary btn-sm"
          id="search-button"
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
          id="current-location"
        >
          Find Me
        </button>
      </div>{" "}
    </form>
  );
}
