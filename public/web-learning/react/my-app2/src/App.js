
import { Component } from 'react';
import './App.css';
import TodoItem from './component/TodoItem';

class App  extends Component{
  constructor(){
    super()
    this.todoItem= [{title:'go shoping',isComplete:true},
    {title:'go fishing'},
    {title:'go camping'},
    ]
  }
  render(){
    return(
      <div className='App'>
        {this.todoItem.map((item, index) => <TodoItem key={index} item={item}/>)}
      </div>
    )
  }
}

export default App;
