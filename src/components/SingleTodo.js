import React from 'react';
import { toast } from 'react-toastify';

const SingleTodo = ({ todo }) => {
    var { todoname, isCompleted } = todo;

    const setCompleted = () => {
        isCompleted = true;
    };

    const handleEdit = () => {
        const updatedTodo = { todoname, isCompleted };
        const url = "http://localhost:4000/todos/:id";

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                toast('Todo Updated');

            });

    };

    return (

        <div className="card w-96 bg-base-100 shadow-xl justify-center">
            <div className="card-body items-center text-center">
                <div className="form-check mt-3 d-flex ">
                    <input className='mt-2 me-2' onClick={() => setCompleted()} type="checkbox" name="completed" />
                    <h2 className="card-title">{todoname}</h2>
                </div>

                <button className="btn btn-active mt-6 mb-6 btn-secondary w-full max-w-xs text-white" onClick={handleEdit}>Edit</button>
            </div>
            <br />
        </div>
    );
};

export default SingleTodo;