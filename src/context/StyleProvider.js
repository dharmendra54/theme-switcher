import {useState} from "react";
import PackageContext from "./StyleContext";


const lightTheme={
    color:"black",
    backgroundColor:"white",
    border:"1px solid red"
}

const darkTheme={
    color:"white",
    backgroundColor:"black",
    border:"1px solid green"
}
const StyleProvider=(props)=>{
      const[theme,setTheme]=useState(lightTheme)
    return(
        <PackageContext.Provider value={
          {
            theme:theme,
            setTheme:setTheme,
            lightMode:()=>setTheme(lightTheme),
            darkMode:()=>setTheme(darkTheme)

          }}>
              {props.children}



          </PackageContext.Provider>
    )

}

export default StyleProvider;






//all the components are children of styleProvider.













//styleProvider.js

//It basically helps us to add value in the global object which we have created in the previous file.


//props
//it is a special keyword in react
//it stands for properties and is used for passing data from one component to another.
//unidirectional flow from parent to child.

//props.children
//the props.children allows you to create genric template which can be  modified by a parent when invoked.

//Parent component can easily pass whatever is necessary to its child.