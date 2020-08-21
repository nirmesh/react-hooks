import React,{useEffect,useRef,useState} from 'react';
import './App.css';

function App() {
  
  const [name,setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(()=>{
    renderCount.current= renderCount.current+1;
  })

  useEffect(()=>{
    prevName.current = name
  },[name]) // when u want to run this change in here when name changes that's why in bracket [name]

  function focus(){
    inputRef.current.focus();
  }
  return (
  <>
    <input ref={inputRef} type="text"  onChange={e=>setName(e.target.value)}/>
  <div>my name is {name} and it used to be {prevName.current}</div>
    <div>render count {renderCount.current}</div>
    <button onClick={focus}>focus</button>
  </>
  )
}

export default App;
