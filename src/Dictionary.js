import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }
  function handleWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word here.."
          autoFocus="on"
          autoComplete="off"
          className="searchBar"
          onChange={handleWord}
        />
        <input type="submit" placeholder="Search a word here.." />
      </form>
    </div>
  );
}
