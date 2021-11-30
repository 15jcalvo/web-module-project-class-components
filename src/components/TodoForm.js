import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <div>
                <input
                type='text'
                name='todo'
                />
                <button onClick={props.addTodo}>Add Todo</button>
                <button>Clear Completed</button>
            </div>

        </div>
    )
}

export default TodoForm;