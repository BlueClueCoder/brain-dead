import { useState, useContext } from 'react'
import { EInfectionLevel, scrambleMessage } from './messages/utils/scrambleMessage'
import './App.css'
import { ProjectContext } from './contexts/ProjectContext'

function App() {
  const { projectBases } = useContext(ProjectContext);
  
  const [label, setLabel] = useState<string>("Nothing Yet");

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setLabel(scrambleMessage("This is a test message.", EInfectionLevel.Lethal))}
        >
          {label}
        </button>
      </section>
    </>
  )
}

export default App
