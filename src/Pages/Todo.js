import React, { useEffect, useState } from 'react';
import SingleTodo from '../components/SingleTodo';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-bastion-20335.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);
    console.log(todos);
    return (
        <div>
            <h1 className='text-3xl mt-6'>Todos</h1>
            {
                todos.map(todo => <SingleTodo key={todo.id} todo={todo}></SingleTodo>)
            }
        </div>
    );
};

export default Todo;