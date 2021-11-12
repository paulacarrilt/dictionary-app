import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="wordSearched">{props.results.word}</h2>
        <div className="phonetic">{props.results.phonetic}</div>
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
