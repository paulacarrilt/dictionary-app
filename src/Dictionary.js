import React, { useState } from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001ed8a368576da41df83b10cc4cf7ddc37";
    let pexelsHeader = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
      .get(pexelsApiUrl, { headers: pexelsHeader })
      .then(handlePexelsResponse);
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search a word here.."
            autoComplete="off"
            className="searchBar"
            onChange={handleWord}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
