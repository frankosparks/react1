import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


/*
function App() {
  const [count, setCount] = (() => {
    return 4;
  })

function decrementCount(){
  setCount(prevCount => prevCount - 1);
}
function incrementCount(){
  setCount(prevCount => prevCount + 1);
}

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </>
  );
}
*/

/*
function App() {
  const [state, setState] = ({
    count: 4,
    theme: 'blue'
  });
  const count = state.count
  const theme = state.theme

function decrementCount(){
  setState(prevState =>{
    return { ...prevState, count: prevState -1 }
  })
}
function incrementCount(){
  setState(prevState => {
    return{ ...prevState, count: prevState -1 }
  })
}

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </>
  );
}

//multiple state,, prevents clashing
function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

function decrementCount(){
  setCount(prevCount => prevCount -1 )
}
function incrementCount(){
  setCount(prevCount =>  prevCount -1 )
}

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </>
  );
} 

//UseEffect
/*
const [resourceType, setResourceType] = useState('posts');
const [items, setItems] = useState([])

useEffect(() => {
  fetchData('https://jsonplaceholder.typicode.com/${resourceType}')
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType])//whenever array it changes do sth

return(
  <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
      return <pre> {JSON.sringify(items)}</pre>
    })}
  </>
)
*/

/*
const [windowWidth,setwindowWidth] = useState(window.innerWidth);

const handleResize = () => {
  setwindowWidth(window.innerWidth)
}

 useEffect(() => {
  window.addEventListener('resize',handleResize)

  return () => {
    window.removeEventListener('resize', handleResize);
  }

 },[])

return (
  <>
    <div>
        {windowWidth}
    </div>
  </>
)

export default App;
*/