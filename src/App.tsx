import { useState, useContext } from 'react'
import { EInfectionLevel, scrambleMessage } from './messages/utils/scrambleMessage'
import './App.css'
import { ProjectContext } from './contexts/ProjectContext'
import { EProjectType } from './datatypes/enums/projectTypes'
import { generateProjectName } from './projects/utils/generateProjectName'

function App() {
  const { projectBases } = useContext(ProjectContext);
  
  const [label, setLabel] = useState<string>("Nothing Yet");
  const [projectName, setProjectName] = useState<string>("Nothing Yet");

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
        <button
          type="button"
          className="counter"
          onClick={() => createProjectLabel()}
        >
          {projectName}
        </button>
      </section>
    </>
  )

  function createProjectLabel() {
    const newName = generateProjectName(EProjectType.engineering);
    setProjectName(newName);
  }

}

export default App
