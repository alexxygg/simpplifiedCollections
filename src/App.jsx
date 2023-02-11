import { useState } from 'react'
import './App.css'
import TestAccount from './TestAccount'
import Header from './Header'
import Header2 from './Header2'
import Header3 from './Header3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Header3/>
      <TestAccount/>
    </div>
  )
}

export default App
