import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              class="links"
              href="https://chae-rich.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chae
            </a>{" "}
            and{" "}
            <a
              class="links"
              href="https://github.com/BIONIChae/react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
