import React, { useEffect, useState } from 'react';
import Todo from '../Todo';
import { toast } from 'react-toastify';
import SingleTodo from '../../components/SingleTodo';

const Home = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-bastion-20335.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);
    console.log(todos);

    const handleSubmit = (event) => {
        event.preventDefault();
        const todoname = event.target.todo.value;
        // const isCompleted = event.target.isCompleted.value;



        const url = 'https://aqueous-bastion-20335.herokuapp.com/todos';
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
            <h1 className='text-3xl mt-6'>Add Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" class="input input-bordered w-full max-w-xs" name='todo' />
                <button className="btn btn-active mt-6 mb-6 ml-4 btn-secondary w-50 max-w-xs text-white">Add</button>
                <br />
            </form>
            <h1 className='text-3xl mt-6'>Todos</h1>
            {
                todos.map(todo => <SingleTodo key={todo.id} todo={todo}></SingleTodo>)
            }

        </div>
    );
};

export default Home;