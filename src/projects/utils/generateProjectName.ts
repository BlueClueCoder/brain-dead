import { EProjectType } from "../../datatypes/enums/projectTypes";

export const projectNamePrefixes : string[] = [
    "Rust Resistant", "Lacquered", "Polished",
    "Synthetic", "Lightweight", "Augmented", "Improved",
    "Cheaper", "Efficient", "Effective", "Compostable",
    "Matte", "Glossy", "Biodegradable", "Collapsible",
    "Easy-Carry", "Quick-Drying", "Hypoallergenic",
    "Hydrophobic"
]
export const projectNameBases : string[] = [
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

// Suffix
// Project Type determines suffix
// Definitely a better data structure for this (key: enum)
export const projectNameSuffixes : string[][] = [
    [
        "Applicator", "Casting", "Blueprint", "Refactor"
    ],
];

// spray, method, research, carving, improvement, fabrication, process
// Venture, conference, showcase, report, quality report, survey, field study
// longitudinal study, pitch, client summit, presentation

// Categories of work will help brainstorm terms

// The arrays should be stored and seeded in context:
    // Tickets shouldn't have the same words in them:
        // when a ticket is created, remove prefix, base, and suffix from arrays
        // when ticket is abandoned or completed, add back into arrays

// the initial name should be generated based on the project aspect distribution
// but these should not remain interlinked, to allow for reworking a ticket
// which will change the aspect distribution but not the name
export function generateProjectName(projectType: EProjectType) : string {
    switch (projectType) {
        case EProjectType.engineering: 
            return "Wooden handle";
        case EProjectType.logistics:
            return "hi";
        case EProjectType.marketing:
            return "hello";
        case EProjectType.software:
            return "hehe";
    }
    
    
}