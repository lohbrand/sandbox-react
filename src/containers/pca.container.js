import React from "react";
import { DataProvider } from "../context/data.context";
import "../styles/page-setup.style";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </DataProvider>
  );
}

export default App;
