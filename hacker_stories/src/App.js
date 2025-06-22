import './App.css';

let numClicks = 0

function App() {
  
  numClicks++
  
  const titile = "you clicked it " + numClicks + " times"
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>{titile}</h2>
    </div>
  );
}

export default App;
