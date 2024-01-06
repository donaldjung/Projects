import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player";
import MyVideo from './MyVideo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <MyVideo />

      </header>
    </div>
  );
}

export default App;
