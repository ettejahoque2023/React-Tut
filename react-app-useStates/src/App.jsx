import { useEffect} from 'react'
import './App.css'
import Navber from '../../react-app-useEffect/src/Navber'

function App() {
  const [count, setCount]=useState(0)
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>Update count</button>
    </>
  )
}

export default App
