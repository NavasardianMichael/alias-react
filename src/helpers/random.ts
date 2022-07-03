import { T_Word } from "./types";

export const getRandomUpToMax = (max: number): number => Math.round(Math.random()*max)

export const getShuffledArr = (arr: string[]): T_Word[][] => {
    const shuffled = arr.slice()
    for (let i = shuffled.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
    }

    const shuffledWithProps: T_Word[] = shuffled.map(word => ({
        selected: false,
        value: word
    }))
    
    const result = []
    while(shuffledWithProps.length) {
        result.push(shuffledWithProps.splice(0, 5))
    }

    return result
};
