import React, { Component } from "react";
import './TodoItem.css'
class TodoItem extends Component {
    render() {
        const {item} = this.props;
        let className = 'todolist';
        if (item.IsComplete){
            className += ' IsCompleted'
        }
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        )
    }
}
export default TodoItem;