import React,{useEffect,useRef,useState} from 'react';
import './App.css';

function App() {
  
  const [name,setName] = useState('');
  const renderCount = useRef(0);
  useEffect(()=>{
    renderCount.current= renderCount.current+1;
  })
  return (
  <>
    <input type="text"  onChange={e=>setName(e.target.value)}/>
    <div>my name is {name}</div>
    <div>render count {renderCount.current}</div>
  </>
  )
}

export default App;
