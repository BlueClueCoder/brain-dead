import { EProjectType } from "../../datatypes/enums/projectTypes";
import type { IProject } from "../../datatypes/interfaces/IProject";
import React from "react";
import { EColor } from "../../datatypes/enums/Colors";

interface IProjectCardProps {
    project: IProject;
}

const cardStyle: React.CSSProperties = {
    display: 'flex',
    backgroundColor: EColor.lightGray,
    padding: "10px"
};

export const ProjectCard = ({
    project,
}: IProjectCardProps) => {
    
    const primaryColor: EColor = _getProjectTypeColor(project.primaryBranch);
    const secondaryColor: EColor = _getProjectTypeColor(project.secondaryBranch);
    const detailColor: EColor = _getProjectTypeColor(project.detailBranch);
    
    return (
        <div
            style={cardStyle}
        >
            <text>{project.name}</text>
            <text>{"%" + (project.progress * 100)}</text>
            <div
                style={{
                    backgroundColor: primaryColor,
                    width: "50px"
                }}
            />
            <div
                style={{
                    backgroundColor: secondaryColor,
                    width: "30px"
                }}
            />
            <div
                style={{
                    backgroundColor: detailColor,
                    width: "10px"
                }}
            />
        </div>

    )
}

function _getProjectTypeColor(projectType: EProjectType): EColor {
    switch (projectType) {
        case EProjectType.engineering:
            return EColor.engineering;
        case EProjectType.management:
            return EColor.management;
        case EProjectType.marketing:
            return EColor.marketing;
        case EProjectType.software:
            return EColor.software;
    }
}