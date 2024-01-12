import { useState } from 'react'
import BoxForm from './components/BoxForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Box Generator Master</h1>
      <BoxForm />
    </>
  )
}

export default App
