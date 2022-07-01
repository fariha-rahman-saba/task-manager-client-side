import React from 'react';

const SingleTodo = ({ todo }) => {
    const { todoname } = todo;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{todoname}</h2>

            </div>
        </div>
    );
};

export default SingleTodo;