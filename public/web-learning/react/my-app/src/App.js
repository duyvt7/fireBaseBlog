import { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems';

class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      {title:'go Shopping', IsComplete:true},
      {title:'go camping'},
      {title:'go fishing'},
    ]
  }
  render(){
    return (
      <div>
        {
          this.TodoItem.map((item, index )=> <TodoItem key={index} item={item}/>)
        }
        {/* <TodoItem  title='đi chợ'/>
        <TodoItem  title='đi chợ'/>
        <TodoItem  title='đi chợ'/> */}
      </div>
    )
  
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <TodoItem  title='đi chợ'/>
//         <TodoItem  title='đi chơi'/>
//         <TodoItem  title='đi chích'/>

//       </header>
//     </div>
//   );
// }

export default App;
