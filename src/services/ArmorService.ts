import { armors } from "../data/armors";
import { Armor } from "../models/Armor";

export function getHeadByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "head");
}

export function getAllHead(): Armor[] | undefined {
    return [...armors.filter(i => i.type === "head")];
}

export function getBodyByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "body");
}

export function getAllBody(): Armor[] | undefined {
    return [...armors.filter(i => i.type === "body")];
}

export function getLegsByName(name: string): Armor | undefined {
    return armors.find(m => m.name === name && m.type === "legs");
}

export function getAllLeg(): Armor[] | undefined {
    return [...armors.filter(i => i.type === "legs")];
}

export function getAll(): Armor[] | undefined {
    return [...armors];
}
