import { EProjectType } from "../../datatypes/enums/projectTypes";

export const projectPrefixes : string[] = [
    "Rust Resistant", "Lacquered", "Polished",
    "Synthetic", "Lightweight", "Augmented", "Improved",
    "Cheaper", "Efficient", "Effective", "Compostable",
    "Matte", "Glossy", "Biodegradable", "Collapsible",
    "Easy-Carry", "Quick-Drying", "Hypoallergenic",
    "Hydrophobic", "Self-Replicating", "Intuitive"
]
export const projectBases : string[] = [
    "Pillow Box", "Pillow Fold", "Pillow Top",
    "Hinge Cover", "Hinge Piece", "Rolls",
    "Fold", "Interior Panel", "Cap Panel",
    "Latch Pin", "Rim", "Lid", "Ogee Flange",
    "Bridge", "Overlay Skirt", "Foot Panel",
    "Crown", "Pie", "Fish Tail", "Top Frame",
    "Ogee", "Top Body Molding", "End Panel",
    "Base Molding", "Side Panel", "Handle",
    "Arm", "Tip", "Lug", "Ear", "Escuteon",
    "Corner", "Bottom"
];

// Management
const managementProjectSuffixes : string[] = [
    "Safety Protocol", "Training", "HR Module", "Internship",
    "Career Fair", "Meeting", "Legal Debrief", "NDA Renewal",
    "Quality Report",

];

// Engineering
const engineeringProjectSuffixes : string[] = [
    "Applicator", "Casting", "Blueprint", "Spray", "Method",
    "Carving", "Fabrication", "Process", "Refinement"

];

// Marketing
const marketingProjectSuffixes : string[] = [
    "Venture", "Showcase", "Pitch", "Conference",
    "Client Summit", "Presentation", "Customer Survey",
    "Feedback", "Networking Event", "Business Dinner"

];

// Software
const softwareProjectSuffixes : string[] = [
    "Refactor", "Grooming", "Algorithm", "Research",
    "Longitudinal Study", "Field Study", "Computation",
    "Budget Revision", "Neural Network", "Multithreading",
    ""
];

// Suffix
export const projectSuffixes : Record<EProjectType, string[]> = {
    [EProjectType.management]: managementProjectSuffixes,
    [EProjectType.engineering]: engineeringProjectSuffixes,
    [EProjectType.marketing]: marketingProjectSuffixes,
    [EProjectType.software]: softwareProjectSuffixes,
};

// The arrays should be stored and seeded in context:
    // Tickets shouldn't have the same words in them:
        // when a ticket is created, remove prefix, base, and suffix from arrays
        // when ticket is abandoned or completed, add back into arrays

// the initial name should be generated based on the project aspect distribution
// but these should not remain interlinked, to allow for reworking a ticket
// which will change the aspect distribution but not the name
export function generateProjectName(projectType: EProjectType) : string {
    let nameDraft = "";
    nameDraft += projectPrefixes[Math.floor(Math.random() * projectPrefixes.length)] + " ";
    nameDraft += projectBases[Math.floor(Math.random() * projectBases.length)] + " ";
    switch (projectType) {
        case EProjectType.engineering: 
            nameDraft += engineeringProjectSuffixes[Math.floor(Math.random() * engineeringProjectSuffixes.length)];
            break;
        case EProjectType.management:
            nameDraft += managementProjectSuffixes[Math.floor(Math.random() * managementProjectSuffixes.length)];
            break;
        case EProjectType.marketing:
            nameDraft += marketingProjectSuffixes[Math.floor(Math.random() * marketingProjectSuffixes.length)];
            break;
        case EProjectType.software:
            nameDraft += softwareProjectSuffixes[Math.floor(Math.random() * softwareProjectSuffixes.length)];
            break;
        }
        return nameDraft;
}