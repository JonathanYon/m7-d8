import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavTop from "./components/NavTop";

function App() {
  const [query, setQuery] = useState<string>("");
  return (
    <div className="App">
      <NavTop />
      <Home />
    </div>
  );
}

export default App;
