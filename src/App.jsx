import { useState } from 'react'
import BoxForm from './components/BoxForm'
import Boxes from './components/Boxes'
import TestBox from './components/TestBox'
import './App.css'

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([])
  const stateUpdater = (newValue) => {
    // New method not working as shown in video, but this one does
    setCurrentBoxes([...currentBoxes, newValue])
  }

  return (
    <div className='app'>
    <h1>Box Generator Master</h1>
      <BoxForm stateUpdater={stateUpdater}/>
      <Boxes currentBoxes={currentBoxes} setCurrentBoxes={setCurrentBoxes} />
      {/* <TestBox /> */}
    </div>
  )
}

export default App
