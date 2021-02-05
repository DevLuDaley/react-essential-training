import logo from './logo.svg';
import './App.css';

const SecretComponent = () => {
  return <h1> Logged-in... Welcome authorized user</h1>
}
const RegularComponent = () => {
  return <h1> Not logged in... Everyone can see this component</h1>
  
}

function App({authorized}) {
  return (
    <div className="App">
{    authorized == true ? <SecretComponent/> : <RegularComponent/>}
      {/* Components will eventually conditionally render here */}
    </div>
  );
}

export default App;
