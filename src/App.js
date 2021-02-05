import React, { useState, useEffect} from 'react';
import './App.css';
import {Checkbox} from './Checkbox';
import {Routes, Route} from 'react-router-dom';
import {Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location} from './pages';

//? https://api.github.com/users/devludaley
// var login = 'devludaley'

function App({login}) {
  
      return(
      <div>
      {/* <h1> Hello React Testing Library</h1> */}
      {/* <Checkbox/> */}
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />} >
          <Route path='services' element={ <Services />} />
          <Route path='history' element={ <CompanyHistory />} />
          <Route path='location' element={ <Location />} />
        </Route>
        <Route path='/events' element={ <Events />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='*' element={ <Whoops404 />}/>
      </Routes>
      </div>
      )
    // }
    // return <div> No User Available </div> 
      // data ?  <div>{JSON.stringify(data)}</div> :
      // <div> Please create an Account</div> 
//   return (
// <>
//       <div className="App">

//       </div>
// </>
  // );
}

export default App;
