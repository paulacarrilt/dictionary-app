import "./App.css";
import "./Dictionary.js";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">Paula's Dictionary</div>
      <Dictionary />
      <footer>
        <small>
          Coded by{" "}
          <a href="https://github.com/paulacarrilt">Paula Carril Torrens</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
