import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <TodoItem  title='đi chợ'/>
        <TodoItem  title='đi chơi'/>
        <TodoItem  title='đi chích'/>

      </header>
    </div>
  );
}

export default App;
