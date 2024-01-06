import logo from './logo.svg';
import './App.css';
import MyVideo from './MyVideo';
import music2 from './assets/project.mp3'

const music1 = new Audio(music2);

function toggleMusic() {
  if (music1.paused) {
    music1.play();
  } else {
      music1.pause();
  }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleMusic}>Click to Play Music</button>
        
        <MyVideo />

      </header>
    </div>
  );
}

export default App;
