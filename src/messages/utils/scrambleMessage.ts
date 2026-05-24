export enum EInfectionLevel {
    None,
    Mild,
    Moderate,
    High,
    Lethal,
}

enum EMessageScrambleSeverity {
    None = 0,
    Mild = 1,
    Moderate = 2,
    High = 3,
    Lethal = 4
}

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function _mapInfectionToMessageScramble(infectionLevel : EInfectionLevel) : EMessageScrambleSeverity {
    switch (infectionLevel) {
        case EInfectionLevel.None :
            return EMessageScrambleSeverity.None;
        case EInfectionLevel.Mild : 
            return EMessageScrambleSeverity.Mild;
        case EInfectionLevel.Moderate :
            return EMessageScrambleSeverity.Moderate;
        case EInfectionLevel.High :
            return EMessageScrambleSeverity.High;
        case EInfectionLevel.Lethal :
            return EMessageScrambleSeverity.Lethal;
    }
}

interface IScrambleMessageProps {
    originalString: string;
    infectionLevel: EInfectionLevel;
}

export function scrambleMessage({originalString, infectionLevel} : IScrambleMessageProps) : string {
    // string to be manipulated
    let messagePlaceholder : string = originalString;
    
    // calculate intermediate number of swaps, add or subtract some random amount
    const numOfTypos : number = _mapInfectionToMessageScramble(infectionLevel) + Math.floor(Math.random() * 5 - 2);

    for (let i = 0; i < numOfTypos; i++) {
        const typeo = Math.floor(Math.random() * 3 + 1);
        
        // perform either
        if (typeo === 1) {
            // character removal
            const target : number = Math.floor(Math.random() * messagePlaceholder.length);
            messagePlaceholder = messagePlaceholder.substring(0, target) + messagePlaceholder.substring(target + 1, messagePlaceholder.length); 

        } else if (typeo === 2) {
            // adjacent character swaps
            const target : number = Math.floor(Math.random() * (messagePlaceholder.length - 1));
            messagePlaceholder = messagePlaceholder.substring(0, target) + messagePlaceholder.charAt(target + 1) + messagePlaceholder.charAt(target) + messagePlaceholder.substring(target + 2, messagePlaceholder.length);

        } else if (typeo === 3) {
            // character typo
            const target : number = Math.floor(Math.random() * messagePlaceholder.length);
            messagePlaceholder = messagePlaceholder.substring(0, target) + ALPHABET.charAt(Math.floor(Math.random() * 26)) + messagePlaceholder.substring(target + 1, messagePlaceholder.length);
        }
    }

    return messagePlaceholder;
}