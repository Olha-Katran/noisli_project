import React from 'react';
import './App.css';
import {Header} from "./Components/header/Header";
import {Main} from "./Components/main/main";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
