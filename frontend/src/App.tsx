import './App.css';
import { IFrameLoader } from './components/IFrameLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Embedded Superset Frame
        </h1>
        <IFrameLoader></IFrameLoader>
      </header>
    </div>
  );
}

export default App;
