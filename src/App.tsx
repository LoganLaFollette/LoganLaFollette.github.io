import './App.css';
import { Player } from '@lottiefiles/react-lottie-player';
import Lottie from './assets/logan_dev.lottie.json';
import Draggable from './components/Draggable/Draggable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Player
          autoplay
          loop
          src={Lottie}
          style={{ height: '300px', width: '300px' }}
        />
        <p>
          do. something. cool.
        </p>
      </header>
      <Draggable />
    </div>
  );
}

export default App;
