import { useState } from 'react'
import laurels from './assets/laurels.jpeg'
import './App.css'
import NavCol from './components/NavCol.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavCol />
      <div className='App'>
        <img src={laurels} alt="laurels img" height="700 px"/>
      </div>
    </>
  )
}

export default App
