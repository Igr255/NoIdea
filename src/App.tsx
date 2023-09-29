import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CodeInput from "./CodeInput";

function App() {
  return (
    <div id="user-code-input">
      <CodeInput length={3} />
    </div>
  );
}

export default App;
