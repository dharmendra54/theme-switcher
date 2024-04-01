import React,{useContext, useState} from "react";
import StyleContext from "../context/StyleContext"
import "../App.css"

function Hello(){
    const[count,setCount]=useState(0);
    const {theme,setTheme,darkMode,lightMode}=useContext(StyleContext)
    // console.log(theme)
    
    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    }
return(
        <div style={theme} className="hello">
            <h1>Counter App</h1>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button><br></br><br></br>


            <button onClick={darkMode}>Dark Mode</button>
            <button onClick={lightMode}>Light Mode</button>
        </div>
    );
}

export default Hello;