import React, { useEffect, useRef, useState, useReducer } from 'react';
import './App.css';
import sample from './sample.mp3';
import userInput from './hooks/UserInput';


// function reducer(state,action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1 }
//     default:
//       return state;
//   }
// }


function App() {


  //const [firstName,setFirstName] = useState()
  //const [lastName,setLastName] = useState()
  const [firstName,bindFirstName,resetFirstName] = userInput();
  const [lastName,bindLastName,resetLastName] = userInput();

  const  submitHandler=(e)=>{
    e.preventDefault();
    alert("hello "+firstName+" "+lastName)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          {/* FirstName <input type="text" value={firstName}  onChange={e=>setFirstName(e.target.value)}/> */}
      First Name <input type="text" {...bindFirstName} />  
        </div>
        <div>
        Last Name<input type="text" {...bindLastName}/>
        </div>
        <button>submit</button>
      </form>

    </div>

  )
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  // function incrementCount() {
  //   dispatch({ type: 'increment' })
  // }

  // function decrementCount() {
  //   dispatch({ type: 'decrement' })
  // }
//=======
  // const [count,setCount] = useState(5);
  // const incrementCount = ()=>{
  //   //previouscount = previouscount+1;
  //   setCount(xy=>xy+1);
  // }
  // const decrementCount = ()=>{
  //   //previouscount = previouscount-1;
  //   setCount(previouscount=>previouscount-1);
  // }

  // return (
  //   <>
  //   <button onClick={incrementCount}>+</button> {state.count}<button onClick={decrementCount}>-</button>
  //   </>
  // )
  //=====

  // const audioRef = useRef(null);
  // useEffect(()=>{
  //   audioRef.current.play();
  // },[ ])

  // const handleClick = ()=>{
  //   audioRef.current.pause();
  // }

  // return (
  //   <>

  //   <audio src={sample} ref={audioRef} />
  //   <button onClick={handleClick}>Stop</button>
  //   </>
  // )
  //===========
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
