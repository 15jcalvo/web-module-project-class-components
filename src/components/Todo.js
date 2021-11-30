import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.toggleTodo(props.item);
    }
    return(
        <div>
            <p onClick={handleClick}>{props.item.task}</p>
        </div>
    );
};

export default Todo;