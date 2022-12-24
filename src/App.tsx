import { useState } from 'react';
import { AppContext } from './AppContext';
import './App.css'
import Header from './components/Header';

function App() {
  const [nightMode, setNightMode] = useState(false);
  
  function handleLightMode(){
    setNightMode(!nightMode);
  }

  return (
    <AppContext.Provider value={nightMode}>
      <div className="App">
        <Header handleLightMode={handleLightMode}></Header>
      </div>
    </AppContext.Provider>
  )
}

export default App
