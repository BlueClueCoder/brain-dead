import { useContext, useState } from "react";
import { scrambleMessage } from "../messages/utils/scrambleMessage";
import { ProjectContext } from "../contexts/ProjectContext";
import { EInfectionLevel } from "../messages/utils/scrambleMessage";
import { generateProjectName } from "../projects/utils/generateProjectName";
import { EProjectType } from "../datatypes/enums/projectTypes";
import "../App.css";

export function HomeScreen() {
    const { projectBases } = useContext(ProjectContext);
  
    const [label, setLabel] = useState<string>("Nothing Yet");
    const [projectName, setProjectName] = useState<string>("Nothing Yet");

    return (
        <section id="center">
            <button
                type="button"
                onClick={() => setLabel(scrambleMessage("This is a test message.", EInfectionLevel.Lethal))}
            >
                {label}
            </button>
            <button
                type="button"
                onClick={() => createProjectLabel()}
            >
                {projectName}
            </button>
        </section>
    )

    function createProjectLabel() {
        const newName = generateProjectName(EProjectType.engineering);
        setProjectName(newName);
    }
}