import "./App.css";
import Joke from "./components/Joke";


const App = () => {

  return (
    <div className="App">
      <h1 style={{backgroundColor:'#0122', width:'70%', borderRadius: '25px',padding:'20px'}}>Chuck Norris Joke</h1>      
      <Joke />
    </div>
  );
};

export default App;
