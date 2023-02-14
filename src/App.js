import './App.css';
function clickMe(){
  
  console.log("Hello ")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://rm-core-production.s3.amazonaws.com/logos/9763/large_Taylor_Bros.PNG" className="App-logo" alt="logo" />
        <p>
        
        Invertory App <span className="heart">By</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div><button onClick={clickMe}>Push</button></div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
