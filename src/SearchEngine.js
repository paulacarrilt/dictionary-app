import React from "react";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input
          type="search"
          placeholder="Search a word here.."
          autoFocus="on"
          autoComplete="off"
        />
        <input
          type="submit"
          placeholder="Search a word here.."
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}
