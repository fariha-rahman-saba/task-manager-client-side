import React from 'react';
import { toast } from 'react-toastify';

const SingleTodo = ({ todo }) => {
    var { todoname, isCompleted } = todo;

    const setCompleted = () => {
        isCompleted = true; handleEdit();
    };

    const handleEdit = () => {
        const updatedTodo = { todoname, isCompleted: true };
        const url = "https://aqueous-bastion-20335.herokuapp.com/todos/:id";

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

        // <div className="card w-80 bg-base-100 shadow-xl justify-center">
        // <div className="card-body items-center text-center">
        <div className="form-check mt-3 flex w-100 justify-center">
            <input className='mt-2 me-2' onClick={() => setCompleted()} type="checkbox" name="completed" />
            <h2 className="card-title ml-4">{todoname}</h2>
            <button className="btn btn-active mt-6 mb-6 ml-4 btn-secondary w-50 max-w-xs text-white" onClick={handleEdit}>Edit</button>
        </div>
        // </div>
        // </div>
    );
};

export default SingleTodo;