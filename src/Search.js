import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-city">
      <input
        type="text"
        className="form-control w-100"
        placeholder="Enter City"
        autoFocus="on"
        
      />
      <div className="btn-group">
        <button
          type="submit"
          className="btn btn-primary btn-sm"
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
        >
          Locate Me
        </button>
      </div>{" "}
    </form>
  );
}
