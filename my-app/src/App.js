import scarecrow from '../src/scarecrow.png';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <h1>404 not found</h1>
      </header>

      <main className="App-main">
        <img src={scarecrow} className="scarecrow-image" alt="Scarecrow" />
        <div className="content-container">
            <h1 id="title">I have bad news for you</h1>
            <p id="sub-title">The page you are looking for might be removed or is temporarily unavailable</p>
            <button type="button">back to homepage</button>
        </div>
        
      </main>
        
      <footer className="App-footer">
        <p>created by <strong>Aishling13</strong> - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
