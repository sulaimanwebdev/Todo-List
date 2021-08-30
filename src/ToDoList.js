import React from 'react'

const ToDoList = (props) => {

    
    function deleteItem(e){
        e.target.parentNode.remove();
    }



    function minimize(e){
        e.target.classList.toggle('lineth');
    }

    return (
        <>
            
           
    <div className="todo1">
<i className="fas fa-trash" onClick={deleteItem}></i> 
        <li onClick={minimize}>{props.text}</li>
    </div>



             
        </>
    )
}

export default ToDoList
