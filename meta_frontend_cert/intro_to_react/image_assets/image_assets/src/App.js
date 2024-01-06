
import './App.css';
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Importing image asset from asset folder.</h1>
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
