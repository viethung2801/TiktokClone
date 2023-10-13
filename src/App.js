import { useRef } from 'react';
import './App.css';
import DemoUseImperativeHandle from './demo_useImperativeHandle/DemoUseImperativeHandle';
// import Context from './demo_context/Context';

function App() {

  const videoRef = useRef()
  
  return (
    <>
    <DemoUseImperativeHandle></DemoUseImperativeHandle>
    <button>Play</button>
    <button>Pause</button>
    </>
  )
}

export default App;
