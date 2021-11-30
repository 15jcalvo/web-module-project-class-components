import React from 'react';

const TodoForm = () => {
    return(
        <div>
            <div>
                <input
                type='text'
                name='todo'
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>

        </div>
    )
}

export default TodoForm;