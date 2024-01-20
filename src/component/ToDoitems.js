import React from 'react';
import "./todoitems.css"

const ToDoitems = (props) => {
  return (
    <div className="list">
        <li>{props.text}<button onClick={()=> props.deleteItem(props.id)}>Delete</button></li>
    </div>
  )
}

export default ToDoitems