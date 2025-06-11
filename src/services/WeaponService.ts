import { one_hand_weapons } from "../data/one-hand_weapons";
import { Weapon } from "../models/Weapon";

export function getWeaponByName(name: string): Weapon | undefined {
    return one_hand_weapons.find(m => m.name === name);
}