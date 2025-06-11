export interface Weapon {
    name: string;
    Attack: number | string;
    durability: number | string;
    description: string;
    type: "oneHand" | "twoHand" | "spear";
}