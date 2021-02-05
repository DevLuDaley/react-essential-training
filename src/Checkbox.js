import React, { useReducer } from 'react';

export const Checkbox = () => {
let [checked, toggle] = useReducer(
      (checked) => !checked, false);

  return (
    <>
    <div className="App">
    <label htmlFor="checkbox" >{checked ? "checked" : "not checked"}</label>
        <input  
               id="checkbox" 
               type="checkbox" 
               value={checked}
               onChange={toggle}
            // onChange={()=> setChecked(checked => !checked)}
            
        />
    </div>
    </>
    );
}