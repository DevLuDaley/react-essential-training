import React, { useState, useReducer} from 'react';
import './App.css';

function App() {
    // let [checked, checked] = useState(false);
    //! toggle below is a reducer
    // const toggle = () => {
    //   setChecked(checked => !checked)
    // }

    let [checked, toggle] = useReducer(
      (checked) => !checked, false);


  return (
<>
      <div className="App">
        <input type="checkbox" value={checked} 
        // onChange={()=> setChecked(checked => !checked)} 
        onChange={toggle} 
          
        />
        <p> {checked ? "checked" : "not checked"} </p>
      </div>
</>
  );
}

export default App;
