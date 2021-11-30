import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <div>
                <input
                type='text'
                name='todo'
                onChange={props.onChange}
                />
                <button onClick={props.addTodo}>Add Todo</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>

        </div>
    )
}

export default TodoForm;