import './App.css';

let numClicks = 0

function greet(name){
  return "hello, " + name
}

function App() {
  
  numClicks++

  const welcome = {
    greeting: 'hey',
    title: 'react'
  }
  
  const titile = "you clicked it " + numClicks + " times"
  return (
    <div>
      <h1>{welcome.greeting}, {greet(welcome.title)}</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='number'/>
    </div>
  );
}

export default App;
