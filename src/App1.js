import React from 'react';
import './App.css';
import beautiful from './beautiful.jpg'

  const Header = (props) => {
    console.log(props)
    return(
      <header>
        <h1> {props.name}'s Kitchen</h1>
      </header>
    )
  }

  const Main = (props) => {
  return(
    <section>
       <p> We serve the best most {props.adjective} food around </p>
      {/* <img src={ 'https://github.com/ludaley.png'} height={200}> */}
      <img src={ beautiful } height={200} alt="indoor seating with view of the city skyline">
      </img>

       <ul style={{textAlign: "center"}}>
         {props.dishes.map((dish, i) => 
         <li key={dish.id}> {dish.title} </li>
         )}
       </ul>
    </section>

  )
}
const Footer = (props) => {
  return(
    <footer> 
      <p> Copyright {props.year} </p>
    </footer>
  )
}

const dishes =  [
  "mac n Cheese",
  "turkey",
  "burgers"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
console.log('🚀 ~ file: App.js ~ line 41 ~ dishObjects', dishObjects);

function App() {
  return ( 
    
    <div className="App">
      <Header name="cindy"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={ new Date().getFullYear()}/>
    </div>
  );
}

export default App;
