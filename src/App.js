import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite em <code>src/App.js</code> salve e recarregue
        </p>
        <a
          className="App-link"
          href="https://unijuazeiro.edu.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça a Unijuazeiro
        </a>
      </header>
    </div>
  );
}

export default App;
