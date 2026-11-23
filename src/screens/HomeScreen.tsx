import { useContext, useState } from "react";
import { scrambleMessage } from "../messages/utils/scrambleMessage";
import { ProjectContext } from "../contexts/ProjectContext";
import { EInfectionLevel } from "../datatypes/enums/EInfectionLevels";
import { generateProjectName } from "../projects/utils/generateProjectName";
import { EProjectType } from "../datatypes/enums/projectTypes";
import "../App.css";
import { ProjectCard } from "../projects/components/ProjectCard";
import type { IProject } from "../datatypes/interfaces/IProject";

const placeholderProject : IProject = {
    id: 0,
    name: "Fillibuster",
    progress: 0.4,
    primaryBranch: EProjectType.management,
    secondaryBranch: EProjectType.software,
    detailBranch: EProjectType.engineering,
}


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
            <ProjectCard
                project={placeholderProject}
            />
        </section>
    )

    function createProjectLabel() {
        const newName = generateProjectName(EProjectType.engineering);
        setProjectName(newName);
    }
}