// React Imports
import React, { createContext, useState } from "react";

// outline interface of states
interface IProjectContext {
    projectPrefixes: string[];
    changeProjectPrefixes: (arg: string[]) => void,
    projectBases: string[];
    changeProjectBases: (arg: string[]) => void,
    projectSuffixes: string[];
    changeProjectSuffixes: (arg: string[]) => void,
}

export const ProjectContext = createContext<IProjectContext>(
    {} as IProjectContext
);

// Parent Provider Component
export default function ProjectContextProvider({ children } : React.PropsWithChildren) {

    // establishing states
    const [projectPrefixes, setProjectPrefixes] = useState<string[]>([]);
    const [projectBases, setProjectBases] = useState<string[]>([]);
    const [projectSuffixes, setProjectSuffixes] = useState<string[]>([]);

    function changeProjectPrefixes(arg: string[]) {
        setProjectPrefixes(arg);
    }

    function changeProjectBases(arg: string[]) {
        setProjectBases(arg);
    }

    function changeProjectSuffixes(arg: string[]) {
        setProjectSuffixes(arg);
    }

    // exporting all states
    return(
        <ProjectContext.Provider value={
                {
                    projectPrefixes,
                    changeProjectPrefixes,
                    projectBases,
                    changeProjectBases,
                    projectSuffixes,
                    changeProjectSuffixes,
                }
            }
        >
            {children}
        </ProjectContext.Provider>
    )

}

