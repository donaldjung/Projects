
import './App.css';
import logo from "./assets/logo.png"

const imgurl = "https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Importing image asset from asset folder and image URL.</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img 
          src={require("./assets/logo.png")} alt="logo" />
        <img
          src={imgurl} alt="logo" />

       
      </header>
    </div>
  );
}

export default App;
