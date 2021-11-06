import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {BubbleSortTask} from "./algorithms/Bubblesort";

function App() {
  const a = [54,5,3,77,1];
  const [taskStoped, setTaskStopped] = useState(true);
  const task = BubbleSortTask();
  function runTask(taskStopped) {
    setTaskStopped(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<Diagramm array={a} swapElements={}/>*/}
        <button onClick={() => task.start(a, (status) => console.log(status))}>Start</button>
        <button onClick={() => task.stopOrStart()}>Stop</button>
      </header>
    </div>
  );
}

export default App;
