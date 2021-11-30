import React from 'react';
import './Todo.css';

const Todo = props => {
    const handleClick = () => {
        props.toggleTodo(props.item);
    }
    return(
        <div>
            <p onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>{props.item.task}</p>
        </div>
    );
};

export default Todo;