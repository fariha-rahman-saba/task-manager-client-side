import React, { useEffect, useState } from 'react';
import Todo from '../Todo';
import { toast } from 'react-toastify';
import SingleTodo from '../../components/SingleTodo';

const Home = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);
    console.log(todos);

    const handleSubmit = (event) => {
        event.preventDefault();
        const todoname = event.target.todo.value;
        // const isCompleted = event.target.isCompleted.value;



        const url = 'http://localhost:4000/todos';
        var todo = { todoname, isCompleted: false };



        fetch(url, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            },

        }).then(res => res.json())
            .then(result => {
                event.target.reset();
                toast('Todo Added');
            });
    };

    return (

        <div>
            <h1>Add Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" class="input input-bordered w-full max-w-xs" name='todo' /><br />
                <button className="btn btn-active mt-6 mb-6 btn-secondary w-full max-w-xs text-white">Add</button>
                <br />
            </form>
            <h1>Todos</h1>
            {
                todos.map(todo => <SingleTodo key={todo.id} todo={todo}></SingleTodo>)
            }
            <Todo />
        </div>
    );
};

export default Home;