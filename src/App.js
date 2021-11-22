import "./App.css";
import "./Dictionary.js";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">Dictionary</div>
      <Dictionary />
      <br />
      <footer>
        <small>
          Coded by{" "}
          <a
            href="https://github.com/paulacarrilt"
            target="_blank"
            rel="noreferrer"
          >
            Paula Carril Torrens
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
