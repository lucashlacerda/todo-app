import { useState } from "react";
import { AppContext } from "./AppContext";
import "../css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [nightMode, setNightMode] = useState(false);

  function handleLightMode() {
    setNightMode(!nightMode);
  }

  return (
    <AppContext.Provider value={nightMode}>
      <div className={`App ${nightMode && "dark"}`}>
        <Header handleLightMode={handleLightMode}></Header>
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
