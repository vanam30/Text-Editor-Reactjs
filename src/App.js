import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from "react";

function App() {
  
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Texteditor" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Textarea heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
