import { EProjectType } from "../enums/projectTypes";

// should tickets have ManyToOne or ManyToMany relationship with Workers?
// who should own the normalized array?

export interface IProject {
    id: number,
    name: string,
    // 1.00 is 100%
    progress: number,
    primaryBranch: EProjectType,
    secondaryBranch: EProjectType,
    detailBranch: EProjectType,
}