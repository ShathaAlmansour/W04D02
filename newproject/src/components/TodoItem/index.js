import React, { useState , useEffect } from "react";

const TodoItem= (props) => {
   
    
        return (
   
    <div className='todolistDiv'>
        <li className='todoList'>
            <h3 className='todoName'> {props.todo.name} </h3>
            <h3 className='todoClose' onClick={ ()=> props.handleDelete (props.todo.id)}>X</h3>
            <button onClick ={() => props.handlUpdate(props.todo.id)}>Update</button>
        </li>
    </div>
        )
}

export default TodoItem;