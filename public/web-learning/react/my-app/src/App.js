import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoItem  title='đi chợ'/>
        <TodoItem  title='đi chơi'/>
        <TodoItem  title='đi chích'/>
        <p>
          Edit <code>src/App.js</code> and save to reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
