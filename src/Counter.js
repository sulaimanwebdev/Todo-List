import React, { useState } from 'react'
import ToDoList from './ToDoList';
const Counter = () => {
    
const [inputVal, setinputVal] = useState();
const [todo, settodo] = useState([]);
function inputEvent(e){
    setinputVal(e.target.value);
}


function addTodo(){
    settodo((oldItems) =>{
        return [...oldItems, inputVal];
       

    })

    setinputVal('');

}

function submit(ee){
    ee.preventDefault();
  
}

    return (
        <>
        
<div className="todo">
    <div className="bar"><h1>Todo List</h1></div>

   
  <form className="inputCont" onSubmit={submit}>
  <input type="text" placeholder="Enter Your Todo" autoFocus onChange={inputEvent} value={inputVal}/>
   <button onClick={addTodo}>+</button>
  </form>
   


      <ul>

         { todo.map((newTodo, index) =>{
return <ToDoList key={index} text={newTodo}/>
          })
        }
      </ul>


     


</div>
        


        </>
    )
}

export default Counter
