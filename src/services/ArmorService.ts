import { armors } from "../data/Armors";
import { Armor } from "../models/Armor";

export function getHeadByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "head");
}

export function getBodyByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "body");
}

export function getLegsByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "legs");
}