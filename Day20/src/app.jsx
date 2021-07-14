import { number } from 'prop-types';
import React from 'react'
import {useState} from 'react'
const Todo=({todo, todos, setTodos, index}) =>{
    return (
        <div class = "list"  onClick={()=>{
       
            const newt= todos.filter((to,i)=> i!= index);
            setTodos(newt);}}> 
            
            <h2 className="h2">{todo}</h2>
           
        </div>
    );
};
function name(params) {
    
}
var j = 0
function App(props) {
    const [value ,setValue] = useState("");
    const [todos , setTodos ] = useState(["HI","fff"]);
   
    return (
        <div className="main">
        <input type = "text" onChange = {(e)=> {setValue(e.target.value);} } value = {value}  />
        <button  className = "Add"  onClick = {() => {setTodos( [...todos,value])}}  >ADD</button>
        {todos.map((todol, index) => (
            <Todo key = {index}  todo= {todol} todos = {todos} setTodos = {setTodos} index ={index}/>
        ))}
        </div>
    
   ); 
}



export default App