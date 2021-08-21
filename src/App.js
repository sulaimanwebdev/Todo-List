import React, {useState} from 'react';
import Index from './Index.css';
function App(){
const [name, changeName] = useState('Muhammad Sulaiman')

function ok(){
  changeName('Muhammad Sulaiman The Best Programmer')
}

    return(
      <div className="pa">
         <div className="ch">
         <span>{name}</span>
           <button onClick={ok}>Click Me</button>
         </div>
       </div>
      
    )
}

export default App;