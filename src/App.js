import React,{useEffect,useRef,useState} from 'react';
import './App.css';
import sample from './sample.mp3'

function App() {

  const audioRef = useRef(null);
  useEffect(()=>{
    audioRef.current.play();
  },[ ])

  const handleClick = ()=>{
    audioRef.current.pause();
  }

  return (
    <>
    
    <audio src={sample} ref={audioRef} />
    <button onClick={handleClick}>Stop</button>
    </>
  )

// const [resourceType,setResourceType]=useState('posts');
// const [windowWidth,setWindowWidth]=useState(window.innerWidth);

// const [items,setItems]=useState([]);

// const handleResize = ()=>{
//   setWindowWidth(window.innerWidth);
// }

// useEffect(()=>{
//   window.addEventListener('resize',handleResize)
//   return ()=>{
//     window.removeEventListener('resize',handleResize); // use it for cleaner place
//   }
// },[])

// useEffect(()=>{
//   console.log("resource type changed");
//   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   .then(response => response.json())
//   .then(json => setItems(json))
// },[resourceType])// if we pass only empty array then it will execute only on mount


// return (
//   <>

// <div>{windowWidth}</div>
//   <div>
//     <button onClick={()=>setResourceType('posts')}>Posts</button>
//     <button onClick={()=>setResourceType('users')}>Users</button>
//     <button onClick={()=>setResourceType('comments')}>Comments</button>

//   </div>
//   <h1>{resourceType}</h1>
//   {items.map(item=>{
//     return (<div>{JSON.stringify(item)}</div>)
//   })}
//   </>
// )
  /*
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
  )*/
}

export default App;
